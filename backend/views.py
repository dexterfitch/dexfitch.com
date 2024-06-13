from django.shortcuts import render
from django.core.serializers import serialize
from django.http import HttpResponse, JsonResponse
from .models import UserProfile, Category, Skill, Project, Media

def profile(request):
    profile = UserProfile.objects.first()
    if profile:
        data = serialize('json', [profile])
        return HttpResponse(data, content_type='application/json')
    else:
        return JsonResponse({'error': 'No profile found'}, status=404)

def categories(request):
    categories = Category.objects.order_by('name')
    data = serialize('json', categories)
    return HttpResponse(data, content_type='application/json')

def skills(request):
    skills = Skill.objects.order_by('name')
    data = serialize('json', skills)
    return HttpResponse(data, content_type='application/json')

def projects(request):
    projects = Project.objects.order_by('-date_completed')
    data = serialize('json', projects)
    return HttpResponse(data, content_type='application/json')

def project(request, project_id):
    try:
        project = Project.objects.get(id=project_id)
        data = serialize('json', [project])
        return HttpResponse(data, content_type='application/json')
    except Project.DoesNotExist:
        return JsonResponse({'error': 'Project not found'}, status=404)

def media(request):
    media = Media.objects.order_by('project', 'media_type')
    data = serialize('json', media)
    return HttpResponse(data, content_type='application/json')

def project_media(request, project_id):
    project = Project.objects.get(pk=project_id)
    media = project.media.all()
    data = serialize('json', media)
    return HttpResponse(data, content_type='application/json')

def index(request):
    return render(request, 'index.html')