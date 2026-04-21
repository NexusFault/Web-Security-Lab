from flask import Flask, render_template, url_for, request, jsonify
import mysql.connector
from mysql.connector import Error

import json
import os

app = Flask(__name__)    

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/xss/reflected")
def xss_reflected():
    search_query = request.args.get("search", "")
    search_normalized = search_query.lower().strip()

    with open("static/hotels.json", "r", encoding="utf-8") as f:
        all_hotels = json.load(f)

    if search_normalized:
        filtered_hotels = [
            hotel for hotel in all_hotels
            if search_normalized in hotel["name"].lower()
        ]
    else:
        filtered_hotels = all_hotels

    return render_template(
        "XSS/reflected-xss.html",
        search=search_query,
        hotels=filtered_hotels
    )


@app.route("/xss/storage", methods=["GET", "POST"])
def xss_storage():
        
    if request.method == "POST":
        
        name = request.form.get('name')
        text = request.form.get("text")
        
        if os.path.exists("static/comments.json"):
            with open("static/comments.json", "r", encoding="utf-8") as f:
                data = json.load(f)
        else:
            data = []

        data.append({"name": name, "text":text})

        with open("static/comments.json", "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
    
    with open("static/comments.json", "r", encoding="utf-8") as f:
        data = json.load(f) 
        
    return render_template("XSS/storage-xss.html", data=data)


@app.route("/xss/dom")
def dom_xss():
    return render_template("XSS/dom-xss.html")


@app.route("/sqli/login", methods=['GET', 'POST'])
def sqli_login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        if not username or not password:
            return render_template("SQLi/sqli-login.html", both="Please enter both username and password")
        
        query = f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'"
        
        con = mysql.connector.connect(
            host="localhost",
            user="root",           # Enter your own username for the database
            password="password123",       # Enter the user's password from the database
            database="mydb",       # Enter the name of the database you created
            port=3306
        )
        
        cursor = con.cursor()
        cursor.execute(query)
        result = cursor.fetchone()
        
        cursor.close()
        con.close()
        
        if result:
            success_message = f"Login successful! Welcome {username}"
            return render_template("SQLi/sqli-login.html", success=success_message)
        else:
            error_message = "Login failed! Invalid credentials"
            return render_template("SQLi/sqli-login.html", error=error_message)
 
    return render_template("SQLi/sqli-login.html")


@app.route("/sqli/union")
def sqli_union():
    products_query = request.args.get("products", "")
    products_normalized = products_query.lower().strip()
    
    
    
    return render_template("sqli/sqli-union.html")

if __name__ == "__main__":
    app.run(debug=True)