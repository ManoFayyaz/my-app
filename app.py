from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)  # Allow React frontend to access this API


# ---------- Database Setup ----------
def init_db():
    conn = sqlite3.connect("todos.db")
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            desc TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()


# ---------- Routes ----------

@app.route("/todos", methods=["GET"])
def get_todos():
    conn = sqlite3.connect("todos.db")
    cursor = conn.cursor()
    cursor.execute("SELECT id, title, desc FROM todos")
    rows = cursor.fetchall()
    conn.close()

    todos = [{"id": row[0], "title": row[1], "desc": row[2]} for row in rows]
    return jsonify(todos)


@app.route("/todos", methods=["POST"])
def add_todo():
    data = request.json
    title = data.get("title")
    desc = data.get("desc")

    conn = sqlite3.connect("todos.db")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO todos (title, desc) VALUES (?, ?)", (title, desc))
    conn.commit()
    new_id = cursor.lastrowid   # SQLite autoincrement to new todo
    conn.close()

    return jsonify({"id": new_id, "title": title, "desc": desc})


@app.route("/todos/<int:dbId>", methods=["DELETE"])
def delete_todo(dbId):
    conn = sqlite3.connect("todos.db")
    cursor = conn.cursor()
    cursor.execute("DELETE FROM todos WHERE id = ?", (dbId,))
    conn.commit()
    conn.close()
    return jsonify({"message": f"Todo {dbId} deleted"})


@app.route("/todos/<int:dbId>", methods=["PUT"])
def update_todo(dbId):
    data = request.json
    title = data.get("title")
    desc = data.get("desc")

    conn = sqlite3.connect("todos.db")
    cursor = conn.cursor()
    cursor.execute("UPDATE todos SET title=?, desc=? WHERE id=?", (title, desc, dbId))
    conn.commit()
    conn.close()

    return jsonify({"id": dbId, "title": title, "desc": desc})


# ---------- Run ----------
if __name__ == "__main__":
    init_db()
    app.run(debug=True)
