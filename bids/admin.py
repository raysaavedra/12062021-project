from django.contrib import admin

from .models import PropertyBid


class PropertyBidAdmin(admin.ModelAdmin):
    pass


admin.site.register(PropertyBid, PropertyBidAdmin)
