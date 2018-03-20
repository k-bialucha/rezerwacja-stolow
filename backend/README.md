## Uruchomienie projektu backend
Wymagania:
  - Python >=3.5


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