from django.db import models
from users.models import Customer
from datetime import date, datetime

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(upload_to='articles/')
    created_at = models.DateTimeField(auto_now_add=True)

class CompanyInfo(models.Model):
    text = models.TextField()
    logo = models.ImageField(upload_to='company/')
    video = models.FileField(upload_to='company/', blank=True, null=True)
    history = models.TextField(blank=True, null=True)
    requisites = models.TextField(blank=True, null=True)
    certificate = models.TextField()

class Certificate(models.Model):
    header = models.CharField(max_length=100, verbose_name="Заголовок")
    name = models.CharField(max_length=100, verbose_name="Название")
    date = models.DateField(verbose_name="Дата", default=date.today())
    city = models.CharField(max_length=100, verbose_name="Город")
    text = models.CharField(max_length=600, verbose_name="Текст")
    background_image =  models.ImageField(upload_to='images/', default='images/white_background.png', verbose_name="Фон")
    
    class Meta:
        verbose_name = "Сертификат"
        verbose_name_plural = "Сертификаты"
    def __str__(self) -> str:
        return self.name

class Company(models.Model):
    info = models.CharField(max_length=150, verbose_name="Описание")
    history = models.CharField(max_length=250, verbose_name="История")
    certificate = models.ForeignKey(Certificate, on_delete = models.SET_NULL, null=True, max_length=250, verbose_name="Сертификат")
    requisites = models.CharField(max_length=50, verbose_name="Реквизиты")
    video = models.FileField(upload_to='videos/', verbose_name="Видео")
    image = models.ImageField(verbose_name="Логотип")
    class Meta:
        verbose_name = "Компания"
        verbose_name_plural = "Компании"
    def __str__(self) -> str:
        return self.info
    
class News(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(upload_to='news/')
    created_at = models.DateTimeField(auto_now_add=True)

class Term(models.Model):
    question = models.CharField(max_length=200)
    answer = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Vacancy(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


class Review(models.Model):
    user = models.ForeignKey(Customer, on_delete=models.CASCADE)
    rating = models.IntegerField()
    text = models.TextField()
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Review by {self.user.user.username} on {self.date}"
    
class Partner(models.Model):
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='partners/')
    website = models.URLField()

    def __str__(self):
        return self.name
    
class Worker(models.Model):
    first_name = models.CharField(max_length=50, verbose_name='Имя')
    last_name = models.CharField(max_length=50, verbose_name='Фамилия')
    job_description = models.TextField(verbose_name='Описание работы')
    phone_number = models.CharField(max_length=15, verbose_name='Телефон')
    email = models.EmailField(verbose_name='Email')
    photo = models.ImageField(upload_to='employees_photos/', verbose_name='Фото', blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Сотрудники'