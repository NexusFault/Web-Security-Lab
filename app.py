from flask import Flask, render_template, url_for, request, jsonify
import json

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



if __name__ == "__main__":
    app.run(debug=True)