from django.conf.urls import url

from .api import (
    UserBidDetailView,
)

urlpatterns = [
    url(r"^(?P<pk>[0-9]+)/bids$", UserBidDetailView.as_view(), name="user-bid-detail"),
]
