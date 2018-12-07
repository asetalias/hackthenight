# Hack The Night | 24 hour Hackathon
This is the official repository of "Hack The Night 2019".
Visit Website at: (hackthenight.asetalias.in)[http://hackthenight.asetalias.in]

## How to contribute?
This website uses StaticJinja to build top-level html files

### Setup a virtualenv and install requriements
```
sudo apt-get install virtualenv
virtualenv -p python2 venv
source venv/bin/activate
pip install -r requirements.txt
```

### Run Development Server and Build Files

```
python -m SimpleHTTPServer && python build.py
```

All Set. Make changes and submit a PR.

Happy Hacking!
