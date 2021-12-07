# 12062021-project

# Backend

## How to run

```
    cd backend
    activate virtualenv
    pip install -r requirements/base.txt
    ./manage.py migrate
    ./manage.py createsuperuser
    ./manage.py loaddata fixtures/accounts.json
    ./manage.py loaddata fixtures/property.json
    ./manage.py loaddata fixtures/bids.json
    ./manage.py runserver
```

## API Docs

- http://127.0.0.1:8000/api/docs
