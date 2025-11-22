import functools
import jwt

from flask import Flask, request


app = Flask(__name__)
app.config["SECRET_KEY"] = "004f2af45d3a4e161a7dd2d17fdae47f"


def token_required(f):
    @functools.wraps(f)
    def decorated(*args, **kwargs):
        if "Authentication" not in request.headers:
            return {
                "message": "No token (1)",
            }, 401

        token = request.headers["Authentication"].split(" ")

        if len(token) != 2:
            return {
                "message": "No token (2)",
            }, 401

        if len(token[1]) <= 0:
            return {
                "message": "No token (3)",
            }, 401

        try:
            data = jwt.decode(token[1], app.config["SECRET_KEY"], algorithms=["HS256"])
        except Exception as e:
            return {
                "message": "No token (4)", "error": str(e),
            }, 401
        else:
            print(data)

        return f(*args, **kwargs)

    return decorated


@app.route("/auth")
@token_required
def auth():
    data = {
        "auth": 123,
    }

    return data, 200


@app.route('/layers')
@token_required
def layers():
    data = {
        "layers": 123,
    }

    return data, 200


@app.route('/login')
def login():
    data = {
        "user_id": 20,
    }

    token = jwt.encode(data, app.config["SECRET_KEY"], algorithm="HS256")

    return token, 200


@app.route('/logout')
def logout():
    data = {
        "logout": 123,
    }

    return data, 200
