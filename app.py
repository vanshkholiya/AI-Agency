from flask import Flask, render_template, request, send_from_directory
import os
import mysql.connector

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, template_folder=BASE_DIR)

# MySQL connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="vanshkholiya",
    database="ai_agency"
)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/style.css")
def style():
    return send_from_directory(BASE_DIR, "style.css")

@app.route("/script.js")
def script():
    return send_from_directory(BASE_DIR, "script.js")

@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    cursor = db.cursor()

    cursor.execute(
        "INSERT INTO contacts (name, email, message) VALUES (%s, %s, %s)",
        (name, email, message)
    )

    db.commit()
    cursor.close()

    return "Message received and saved successfully!"


@app.route("/chat", methods=["POST"])
def chat():
    message = request.json.get("message")

    if not message:
        return {"reply": "Please enter a message."}

    message_lower = message.lower()

    if "hello" in message_lower or "hi" in message_lower:
        reply = "Hello! 👋 How can I help you today?"

    elif "chatbot" in message_lower:
        reply = "We provide AI chatbot solutions for customer support and business automation."

    elif "service" in message_lower:
        reply = "We offer AI Chatbot Development, Business Automation, AI Integration and Custom AI Solutions."

    elif "price" in message_lower or "cost" in message_lower:
        reply = "Please contact us with your requirements for pricing information."

    else:
        reply = "Thanks for your message! Our AI assistant is currently in demo mode. 🤖"

    return {"reply": reply}


@app.route("/admin")
def admin():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM contacts ORDER BY id DESC")
    messages = cursor.fetchall()
    cursor.close()

    return render_template("admin.html", messages=messages)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

   