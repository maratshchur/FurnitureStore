from django.urls import re_path, path
from . import views

urlpatterns = [
    re_path(r'^$', views.home, name='home'),
    re_path(r'^products/create/$', views.create_product, name='create_product'),
    re_path(r'^products/(?P<pk>\d+)/update/$', views.update_product, name='update_product'),
    re_path(r'^products/(?P<pk>\d+)/delete/$', views.delete_product, name='delete_product'),
    re_path(r'^products/(?P<pk>\d+)/$', views.product_detail, name='product_detail'),
    re_path(r'^products/$', views.products_list, name='products_list'),

    re_path(r'^orders/create/(?P<product_id>\d+)$', views.create_order, name='create_order'),
    re_path(r'^search/$', views.search_products, name='search_products'),
    re_path(r'^filter/$', views.filter_products, name='filter_products'),
    re_path(r'^orders/$', views.user_orders, name='cart'),

    re_path(r'^employee_dashboard/$', views.employee_dashboard, name='employee_dashboard'),
    re_path(r'^create_product/$', views.create_product, name='create_product'),

    re_path(r'^promocodes/create/$', views.create_promocode, name='create_promocode'),
    re_path(r'^promo_codes/(?P<pk>\d+)/update/$', views.update_promocode, name='update_promocode'),
    re_path(r'^promo_codes/(?P<pk>\d+)/delete/$', views.delete_promocode, name='delete_promocode'),
    re_path(r'^promo_codes/$', views.promo_codes, name='promo_codes'),

    re_path(r'^pickup_points/create/$', views.create_pickup_point, name='create_pickup_point'),
    re_path(r'^pickup_points/(?P<pk>\d+)/update/$', views.update_pickup_point, name='update_pickup_point'),
    re_path(r'^pickup_points/(?P<pk>\d+)/delete/$', views.delete_pickup_point, name='delete_pickup_point'),
    re_path(r'^pickup_points/$', views.pickup_points_list, name='pickup_points_list'),

    re_path(r'^product_types/create/$', views.create_product_type, name='create_product_type'),
    re_path(r'^product_types/(?P<pk>\d+)/update/$', views.update_product_type, name='update_product_type'),
    re_path(r'^product_types/(?P<pk>\d+)/delete/$', views.delete_product_type, name='delete_product_type'),
    re_path(r'^product_types/$', views.product_types_list, name='product_types_list'),

    re_path(r'^price_list/$', views.price_list, name='price_list'),
    re_path(r'^customer_list/$', views.customer_list, name='customer_list'),

    re_path(r'^dashboard/$', views.admin_dashboard, name='admin_dashboard'),
    path('add_to_cart/<int:pk>/', views.add_to_cart, name='add_to_cart'),
    path('update_cart/<int:pk>/', views.update_cart, name='update_cart'),
    path('remove_from_cart/<int:pk>/', views.remove_from_cart, name='remove_from_cart'),
    path('cart/', views.cart, name='cart'),
    path('payment/', views.payment, name='payment'),
    path('process_payment/', views.process_payment, name='process_payment'),
    path('employees/', views.employees, name='employees'),
    path('js1/', views.js_var1, name='js_var1'),
    path('js2/', views.js_var2, name='js_var2'),
    path('employees_page/', views.employees_page, name='employees_page'),
    path('employee_manage/', views.employees_manage, name='employees_manage'),
     path('employee_add/', views.employee_add, name='employee_add'),
    path('func_plots/', views.func_plots, name='func_plots'),

    

]