# 12062021-project

- sample project using django as backend and reactjs for frontend
- Python Django, Reactjs, Typescript

# Backend

## How to run

### Create env file first

```
    cp env.sample .env
    vim .env
    add values on .env
```

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

### API Urls

- http://127.0.0.1:8000/api/v1/property/1/
- http://127.0.0.1:8000/api/v1/property/?exclude=1
- http://127.0.0.1:8000/api/v1/users/2/bids

### API Docs

- http://127.0.0.1:8000/api/docs

#### Notes

- db used is just sqlite3 so you don't have to setup the db anymore

---

# Frontend

### Create env file first

```
    cp env.sample .env
    vim .env
    add values on .env
```

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
