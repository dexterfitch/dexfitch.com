from django.db import models

class UserProfile(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()
    profile_image = models.ImageField(upload_to='profile/')
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    linkedin = models.URLField(blank=True)
    github = models.URLField(blank=True)
    website = models.URLField(blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Profile'
        verbose_name_plural = 'Profile'

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

class Skill(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='projects')
    skills = models.ManyToManyField(Skill, related_name='projects')
    date_completed = models.DateField()
    featured = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Media(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='media')
    media_type = models.CharField(max_length=50, choices=[('image', 'Image'), ('video', 'Video')])
    file = models.FileField(upload_to='media/')
    caption = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f'{self.media_type} for {self.project.title} ({self.caption})'

    class Meta:
        verbose_name = 'Media'
        verbose_name_plural = 'Media'