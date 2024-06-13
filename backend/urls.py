from django.contrib import admin
from django.urls import path, re_path
from django.shortcuts import render
from .views import (
    ProfileView, CategoryListView, CategoryProjectsView, SkillListView, ProjectListView, 
    FeaturedProjectsView, ProjectDetailView, MediaListView, ProjectMediaView
)

admin.site.site_header = 'dexfitch.com - admin'

urlpatterns = [
    path('api/profile/', ProfileView.as_view()),
    path('api/categories/', CategoryListView.as_view()),
    path('api/category/<str:category_name>/', CategoryProjectsView.as_view()),
    path('api/skills/', SkillListView.as_view()),
    path('api/projects/', ProjectListView.as_view()),
    path('api/projects/featured/', FeaturedProjectsView.as_view()),
    path('api/project/<int:project_id>/', ProjectDetailView.as_view()),
    path('api/media/', MediaListView.as_view()),
    path('api/project_media/<int:project_id>/', ProjectMediaView.as_view()),
    re_path(r'^.*$', lambda request: render(request, 'index.html')),
]