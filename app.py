from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

@app.route("/")
def home():
    search_query = request.args.get("search", "")
    with open("static/hotels.json", "r", encoding="utf-8") as f:
        all_hotels = json.load(f)
    
    if search_query:
        filtered_hotels = [h for h in all_hotels if search_query.lower() in h["name"].lower()]
    else:
        filtered_hotels = all_hotels
    
    return render_template("index.html", search_query=search_query, hotels=filtered_hotels)

@app.route("/api/hotels")
def get_hotels():
    with open("static/hotels.json", "r", encoding="utf-8") as f:
        hotels = json.load(f)
    return jsonify(hotels)

@app.route("/api/search")
def search_hotels():
    search_query = request.args.get("q", "")
    with open("static/hotels.json", "r", encoding="utf-8") as f:
        all_hotels = json.load(f)
    
    if search_query:
        filtered_hotels = [h for h in all_hotels if search_query.lower() in h["name"].lower()]
    else:
        filtered_hotels = all_hotels
    
    return jsonify({
        "query": search_query,
        "hotels": filtered_hotels
    })

if __name__ == "__main__":
    app.run(debug=True)