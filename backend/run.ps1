param($envname = "newenv", $password = "")
"Parameters: $envname, $password"
.\activate.ps1 -envname $envname
$env:MYSQL_PASSWORD = $password
python BillardApp\testsite\manage.py runserver 0.0.0.0:8000