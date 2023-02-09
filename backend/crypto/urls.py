"""backend URL Configuration

The `urlpatterns` list routes URLs to algs. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function algs
    1. Add an import:  from my_app import algs
    2. Add a URL to urlpatterns:  path('', algs.home, name='home')
Class-based algs
    1. Add an import:  from other_app.algs import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include('main.urls')),
    path('admin/', admin.site.urls),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
