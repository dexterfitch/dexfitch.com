from django.contrib import admin
from .models import UserProfile, Category, Skill, Project, Media

admin.site.register(UserProfile)
admin.site.register(Category)
admin.site.register(Skill)
admin.site.register(Project)
admin.site.register(Media)