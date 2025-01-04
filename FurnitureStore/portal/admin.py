from django.contrib import admin
from.models import Article, Certificate, Company, CompanyInfo, News, Partner, Term, Vacancy, Review, Worker

admin.site.register(Article)
admin.site.register(CompanyInfo)
admin.site.register(Company)
admin.site.register(Certificate)
admin.site.register(News)
admin.site.register(Term)
admin.site.register(Vacancy)
admin.site.register(Review)
admin.site.register(Partner)
@admin.register(Worker)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'phone_number', 'email')
    search_fields = ('first_name', 'last_name', 'email')