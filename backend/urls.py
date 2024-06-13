from django.contrib import admin
from django.urls import path, re_path
from . import views

# Set the admin site header
admin.site.site_header = 'dexfitch.com - admin'

urlpatterns = [
    path('api/profile/', views.profile),
    path('api/categories/', views.categories),
    path('api/skills/', views.skills),
    path('api/projects/', views.projects),
    path('api/project/<int:project_id>/', views.project),
    path('api/media/', views.media),
    path('api/project_media/<int:project_id>/', views.project_media),
    re_path(r'^.*$', views.index),
]