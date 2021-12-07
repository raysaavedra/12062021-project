# Third Party
from django_filters import rest_framework as filters

# Core
from .models import Property


class PropertyListFilter(filters.FilterSet):
    class Meta:
        model = Property
        fields = ("id", "is_active")
