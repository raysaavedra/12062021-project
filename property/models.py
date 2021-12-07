from django.db import models
from django.utils.translation import gettext_lazy as _

from core.models import TimestampedModel, ActiveModel


class Property(TimestampedModel, ActiveModel):
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=2)
    zip = models.CharField(max_length=5)
    market_value = models.FloatField()
    reserve_price = models.FloatField()

    class Meta:
        db_table = "property"
        verbose_name = _("Property")
        verbose_name_plural = _("Properties")
        ordering = ("-created_at",)

    def complete_address(self):
        return f"{self.address} {self.city} {self.state} {self.zip}"
