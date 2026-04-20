# Web-Security-Lab
Web Security Lab was created to demonstrate basic web vulnerabilities and how they can be exploited and mitigated. It is intended for educational purposes to help understand common security flaws in web applications.

## SQL Injection Lab Setup

For SQLi to work properly, you need to:

1. Install MySQL or MariaDB
2. Log in as an existing user or create a new one
3. Create a database
4. Inside the database, create a table named `users` with columns `username` and `password`

### Create Table

```sql
CREATE TABLE users (
    username VARCHAR(50),
    password VARCHAR(255)
);
```

### Insert Test Data
Then insert a record with username `admin` and password `MySecretKey`:

```sql
INSERT INTO users (username, password) VALUES ('admin', 'MySecretKey');
```
