from django.contrib import admin
from testsite.models import ReservationPriceHour, ReservationList, TABLES, TABLES_TYPE, RezView
# Register your models here.
class PriceAdmin(admin.ModelAdmin):
	list_display = ('Id_club', 'week', 'weekend', 'week_aft')

class ReservationAdmin(admin.ModelAdmin):
	list_display = ('ID_RES', 'ID_USER', 'ID_TABLE', 'DATE', 'HOUR_FROM', 'HOUR_TO', 'CHARGE', 'CONFIRMED')

class TableAdmin(admin.ModelAdmin):
	list_display = ('ID_TABLE', 'NUM_OF_SEATS', 'ID_TYPE')

class TablesTypeAdmin(admin.ModelAdmin):
	list_display = ('ID_TYPE', 'TYPE')

class RezAdmin(admin.ModelAdmin):
	list_display = ('Id_table', 'Date', 'Hour_From', 'Hour_To')
	ordering = ['-Date']

admin.site.register(ReservationPriceHour, PriceAdmin)

admin.site.register(ReservationList, ReservationAdmin)

admin.site.register(TABLES, TableAdmin)
admin.site.register(TABLES_TYPE, TablesTypeAdmin)
admin.site.register(RezView, RezAdmin)