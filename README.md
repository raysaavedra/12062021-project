# 12062021-project

- sample project using django as backend and reactjs for frontend
- Python Django, Reactjs, Typescript

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

# Frontend

```
    cd frontend
    cd web
    yarn install
    yarn start (make sure backend is already running)
```

### Routes

- http://localhost:3000/property/1

#### Notes

- left/right dial when exported from figma does not include the outer gray
- api urls are fixed on hooks
