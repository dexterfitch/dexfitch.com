from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UserProfile, Category, Skill, Project, Media
from .serializers import UserProfileSerializer, CategorySerializer, SkillSerializer, ProjectSerializer, MediaSerializer

class ProfileView(APIView):
    def get(self, request):
        profile = UserProfile.objects.first()
        if profile:
            serializer = UserProfileSerializer(profile)
            return Response(serializer.data)
        return Response({'error': 'No profile found'}, status=status.HTTP_404_NOT_FOUND)

class CategoryListView(APIView):
    def get(self, request):
        categories = Category.objects.order_by('name')
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

class CategoryProjectsView(APIView):
    def get(self, request, category_name):
        try:
            category = Category.objects.get(name=category_name)
            projects = category.projects.all()
            serializer = ProjectSerializer(projects, many=True)
            return Response(serializer.data)
        except Category.DoesNotExist:
            return Response({'error': 'Category not found'}, status=status.HTTP_404_NOT_FOUND)

class SkillListView(APIView):
    def get(self, request):
        skills = Skill.objects.order_by('name')
        serializer = SkillSerializer(skills, many=True)
        return Response(serializer.data)

class ProjectListView(APIView):
    def get(self, request):
        projects = Project.objects.order_by('-date_completed')
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

class FeaturedProjectsView(APIView):
    def get(self, request):
        projects = Project.objects.filter(featured=True).order_by('-date_completed')
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

class ProjectDetailView(APIView):
    def get(self, request, project_id):
        try:
            project = Project.objects.get(id=project_id)
            serializer = ProjectSerializer(project)
            return Response(serializer.data)
        except Project.DoesNotExist:
            return Response({'error': 'Project not found'}, status=status.HTTP_404_NOT_FOUND)

class MediaListView(APIView):
    def get(self, request):
        media = Media.objects.order_by('project', 'media_type')
        serializer = MediaSerializer(media, many=True)
        return Response(serializer.data)

class ProjectMediaView(APIView):
    def get(self, request, project_id):
        try:
            project = Project.objects.get(pk=project_id)
            media = project.media.all()
            serializer = MediaSerializer(media, many=True)
            return Response(serializer.data)
        except Project.DoesNotExist:
            return Response({'error': 'Project not found'}, status=status.HTTP_404_NOT_FOUND)