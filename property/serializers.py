from django.contrib.auth import get_user_model
from django.db.models import Max

from rest_framework import serializers

from .models import Property
from bids.models import PropertyBid

User = get_user_model()


class PropertySerializer(serializers.ModelSerializer):
    winning_bid = serializers.SerializerMethodField()
    last_bid = serializers.SerializerMethodField()

    class Meta:
        model = Property
        fields = "__all__"

    def get_winning_bid(self, obj):
        return (
            obj.bids.filter(is_active=True)
            .aggregate(Max("current_bid"))
            .get("current_bid__max")
        )

    def get_last_bid(self, obj):
        """
        i'm not sure if I understand correctly how to get the
        positive/negative value of this
        """
        bid = 0
        last = (
            obj.bids.filter(is_active=True)
            .aggregate(Max("current_bid"))
            .get("current_bid__max")
        )

        if last:
            bid = last - obj.market_value

        return bid


class PropertyDetailSerializer(serializers.ModelSerializer):
    winning_bid = serializers.SerializerMethodField()
    current_user_bid = serializers.SerializerMethodField()

    class Meta:
        model = Property
        fields = "__all__"

    def get_winning_bid(self, obj):
        return (
            obj.bids.filter(is_active=True)
            .aggregate(Max("current_bid"))
            .get("current_bid__max")
        )

    def get_current_user_bid(self, obj):
        """
        assuming user 2 (this should be the request.user, but for dummy data purposes)
        """

        user = User.objects.get(pk=2)

        try:
            bid = PropertyBid.objects.get(user=user, property=obj)

            last = (
                obj.bids.filter(is_active=True)
                .aggregate(Max("current_bid"))
                .get("current_bid__max")
            )

            outbid = 0
            if last:
                outbid = bid.current_bid - last

            return {"active": bid.current_bid, "outbid": outbid}
        except PropertyBid.DoesNotExist:
            return {}
