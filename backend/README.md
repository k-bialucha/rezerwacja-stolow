## Uruchomienie projektu backend
Wymagania:
  - Python >=3.5

### Skrypty dla Linux (Ubuntu) do uruchomienia Serwera Backend

Stworzenie skryptu run.sh:
```bash
cd /rezerwacja-stolow/backend/;
source newenv/bin/activate;
cd /rezerwacja-stolow/backend/BillardApp/testsite/;
MYSQL_PASSWORD="XXX" G_PASS="XXX" python manage.py runserver 0.0.0.0:8000
```
Podczas tworzenia skryptu trzeba podać prawidłowe hasła w zmiennych. 
MYSQL_PASSWORD = Hasło do bazy danych
G_PASS = Hasło do poczty email

Uruchomienie skryptu:
```bash
./run.sh
```


### Skrypty dla Windows (PowerShell)

Stworzenie Python Virtual Environment:
```sh
> .\create_venv.ps1
```
Stworzenie niedomyślnego Virtual Environment: parametr -envname (domyślnie "newenv"): 
```sh
> .\create_venv.ps1 -envname "my-custom-env"
```

Uruchomienie projektu:
```sh
> .\run.ps1 -password "secret"
```
WAŻNE: parametr -password jest wymagany i oznacza hasło do bazy MySQL.

Uruchomienie projektu w niedomyślnym Virtual Environment: parametr -envname (domyślnie "newenv"): 
```sh
> .\run.ps1 -password "secret" -envname "my-custom-env"
```

Aktywacja domyślnego Virtual Environment (lub niedomyślnego z parametrem -envname):
```sh
$ .\activate.ps1 -password "secret" -envname "my-custom-env"
```
