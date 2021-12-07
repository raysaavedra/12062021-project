from django.shortcuts import get_object_or_404

from rest_framework import generics

from .models import User
from .serializers import UserBidSerializer


class UserBidDetailView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserBidSerializer
    lookup_field = "pk"

    def get_object(self):
        pk = self.kwargs["pk"]
        return get_object_or_404(User, pk=pk)
