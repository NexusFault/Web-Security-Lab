
# Web Security Labs Setup Guide

This guide explains how to set up the MySQL/MariaDB database for Web Security Labs and configure the application (`app.py`) to work correctly.

---

## **1. Prerequisites**

Make sure you have the following installed:

- MySQL or MariaDB
- Python 3.13.5
- `mysql-connector-python` package:
```bash
pip install mysql-connector-python
```

## **2. Create the Database**

### 1. Open your MySQL/MariaDB client
```bash
mysql -u root -p
```

### 2. Create a new database. **Do not include the .sql extension** in the database name
```sql
CREATE DATABASE sqli_union;
EXIT;
```
Replace `sqli_union` with the name you want to use (must match what you’ll configure in `app.py`).

### 3. Import the .sql File

```bash
mysql -u root -p sqli_union < /path/to/sqli_union.sql
```

## 3. Configure app.py

### 1. Open app.py and locate the database connection block:

```python
con = mysql.connector.connect(
    host="localhost",          # Usually localhost
    user="root",               # Your MySQL username
    password="mypassword123",  # Your MySQL password
    database="sqli_union",     # Database you created
    port=3306                  # Default MySQL port
)
```

### 2. Update it with your own credentials:

```python
con = mysql.connector.connect(
    host="localhost",          # Usually localhost
    user="root",               # Your MySQL username
    password="mypassword123",  # Your MySQL password
    database="sqli_union",     # Database you created
    port=3306                  # Default MySQL port
)
```

## 4. Start the Application

### 1. Run `app.py`:

```bash
python app.py
```

If everything is set up correctly, the Web Security Labs application should start and be ready for testing SQL injection vulnerabilities.