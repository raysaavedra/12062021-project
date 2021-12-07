from django.contrib.auth import get_user_model
from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimestampedModel, ActiveModel
from property.models import Property

User = get_user_model()


class PropertyBid(TimestampedModel, ActiveModel):
    user = models.ForeignKey(User, related_name="my_bids", on_delete=models.CASCADE)
    property = models.ForeignKey(
        Property, related_name="bids", on_delete=models.CASCADE
    )
    last_bid = models.FloatField()
    current_bid = models.FloatField()

    class Meta:
        db_table = "property_bid"
        verbose_name = _("Property Bid")
        verbose_name_plural = _("Property Bids")
        ordering = ("-created_at",)

    def __str__(self):
        return f"{self.property.id} {self.current_bid}"
