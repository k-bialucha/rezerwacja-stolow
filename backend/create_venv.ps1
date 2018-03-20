param($envname = "newenv")
python -m venv $envname
.\activate.ps1 -envname $envname
pip install -r .\BillardApp\testsite\requirements\base.txt