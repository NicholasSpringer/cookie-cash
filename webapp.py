from flask import Flask, request, Response, render_template, g, abort
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
            return (json.dumps({'error': 'no authorization token provied'}),
                    403, {'Content-type': 'application/json'})

        try:
            token = authorization.split(' ')[1]
            resp = decode(token, None, verify=False, algorithms=['HS256'])
            g.user = resp['sub']
        except exceptions.DecodeError:
            return (json.dumps({'error': 'invalid authorization token'}),
                    403, {'Content-type': 'application/json'})

        return f(*args, **kwargs)

    return wrap


@app.route('/')
def render_landing():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def render_login():
    if request.method == 'POST':
        if request.form['password'] == 'yes':
            return 'woke'
        else:
            return 'not woke'
    else:
        return render_template('login.html')

@app.route('/register', methods=['GET'])
def register():
    return "Hello, world!"


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=80)
