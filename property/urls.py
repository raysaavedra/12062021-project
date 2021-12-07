from django.conf.urls import url

from .api import (
    PropertyDetailView,
    PropertyListView,
)

urlpatterns = [
    url(r"^$", PropertyListView.as_view(), name="property-list"),
    url(r"^(?P<pk>[0-9]+)/$", PropertyDetailView.as_view(), name="property-detail"),
]
