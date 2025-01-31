# Generated by Django 5.0.6 on 2024-09-09 11:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0001_initial'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='client',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.customer', verbose_name='Клиент'),
        ),
        migrations.AddField(
            model_name='order',
            name='pickup_point',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.pickuppoint', verbose_name='Точка самовывоза'),
        ),
        migrations.AddField(
            model_name='product',
            name='pickup_points',
            field=models.ManyToManyField(to='products.pickuppoint', verbose_name='Точки самовывоза'),
        ),
        migrations.AddField(
            model_name='order',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product', verbose_name='Продукт'),
        ),
        migrations.AddField(
            model_name='product',
            name='product_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.producttype', verbose_name='Вид изделия'),
        ),
    ]
