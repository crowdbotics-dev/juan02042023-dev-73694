# Generated by Django 2.2.28 on 2023-04-06 22:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_wolf'),
    ]

    operations = [
        migrations.AddField(
            model_name='cat',
            name='enemy',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='cat_enemy', to='home.Dog'),
        ),
    ]
