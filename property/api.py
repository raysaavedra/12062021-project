from django.shortcuts import get_object_or_404

from rest_framework import generics
from django_filters import rest_framework as filters

from .filters import PropertyListFilter
from .models import Property
from .serializers import PropertySerializer, PropertyDetailSerializer


class PropertyListView(generics.ListAPIView):
    serializer_class = PropertySerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = PropertyListFilter
    filterset_fields = ("id",)

    def get_queryset(self):
        exclude = self.request.query_params.get("exclude")
        query = Property.objects.all().filter(is_active=True).order_by("-updated_at")

        if exclude:
            query = query.exclude(pk=exclude)
        return query


class PropertyDetailView(generics.RetrieveAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertyDetailSerializer
    lookup_field = "pk"

    def get_object(self):
        pk = self.kwargs["pk"]
        return get_object_or_404(Property, pk=pk)
