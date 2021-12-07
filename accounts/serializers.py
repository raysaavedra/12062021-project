from django.contrib.auth import get_user_model
from django.db.models import Q, Max

from rest_framework import serializers

from .models import User
from bids.models import PropertyBid
from property.models import Property

User = get_user_model()


class UserBidSerializer(serializers.ModelSerializer):
    bids = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = "__all__"

    def get_bids(self, obj):
        pk = obj.pk
        my_bids = obj.my_bids.filter(is_active=True)
        winning = 0
        outbid = 0

        for bids in my_bids:
            property = (
                PropertyBid.objects.filter(property=bids.property)
                .values("user__pk")
                .order_by("-current_bid")
                .first()
            )
            print(property)
            if property.get("user__pk") == pk:
                winning += 1
            else:
                outbid += 1

        return {
            "active": my_bids.values("id").count(),
            "winning": winning,
            "outbid": outbid,
        }
