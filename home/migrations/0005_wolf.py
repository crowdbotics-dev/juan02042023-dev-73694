# Generated by Django 2.2.28 on 2023-04-06 22:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_dog'),
    ]

    operations = [
        migrations.CreateModel(
            name='Wolf',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=256, null=True)),
                ('cousin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='wolf_cousin', to='home.Dog')),
            ],
        ),
    ]
