from flask import Flask, request, Response, render_template, g, abort, redirect
from functools import wraps
from jwt import decode, exceptions
import database
import json

app = Flask(__name__, template_folder='public', static_folder='')

def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        authorization = request.headers.get("authorization", None)
        if not authorization:
            return redirect("/login", code=302)
        try:
            token = authorization.split(' ')[1]
            resp = decode(token, None, verify=False, algorithms=['HS256'])
            g.user = resp['sub']
        except exceptions.DecodeError:
            return redirect("/login", code=302)
        return f(*args, **kwargs)
    return wrap

@app.route('/')
def render_landing():
    return render_template('index.html')

@app.route('/login', methods=['GET'])
def render_login():
    return render_template('login.html')

@app.route('/app', methods=['GET'])
@login_required
def render_app():
    return 'hello'

@app.route('/login-parent', methods=['POST'])
def login_parent():
    email = request.form['email']
    password = request.form['password']
    if password == 'yes':
        return 'woke'
    else:
        return 'not woke'

@app.route('/login-child', methods=['POST'])
def login_child():
    email = request.form['email']
    username = request.form['name']
    password = request.form['password']
    if password == 'yes':
        return 'woke'
    else:
        return 'not woke'

@app.route('/register', methods=['POST'])
def register():
    return "Hello, world!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=80)
