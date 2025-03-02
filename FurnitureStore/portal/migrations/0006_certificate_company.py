# Generated by Django 5.0.6 on 2024-10-18 14:00

import datetime
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portal', '0005_worker'),
    ]

    operations = [
        migrations.CreateModel(
            name='Certificate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('header', models.CharField(max_length=100, verbose_name='Заголовок')),
                ('name', models.CharField(max_length=100, verbose_name='Название')),
                ('date', models.DateField(default=datetime.date(2024, 10, 18), verbose_name='Дата')),
                ('city', models.CharField(max_length=100, verbose_name='Город')),
                ('text', models.CharField(max_length=600, verbose_name='Текст')),
                ('background_image', models.ImageField(default='images/white_background.png', upload_to='images/', verbose_name='Фон')),
            ],
            options={
                'verbose_name': 'Сертификат',
                'verbose_name_plural': 'Сертификаты',
            },
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('info', models.CharField(max_length=150, verbose_name='Описание')),
                ('history', models.CharField(max_length=250, verbose_name='История')),
                ('requisites', models.CharField(max_length=50, verbose_name='Реквизиты')),
                ('video', models.FileField(upload_to='videos/', verbose_name='Видео')),
                ('image', models.ImageField(default='images/zoopark_icon.jpg', upload_to='', verbose_name='Логотип')),
                ('certificate', models.ForeignKey(max_length=250, null=True, on_delete=django.db.models.deletion.SET_NULL, to='portal.certificate', verbose_name='Сертификат')),
            ],
            options={
                'verbose_name': 'Компания',
                'verbose_name_plural': 'Компании',
            },
        ),
    ]
