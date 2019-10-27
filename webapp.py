from flask import Flask, request, Response, render_template, g, abort, redirect
from functools import wraps
from jwt import decode, exceptions
from google.cloud import ndb
from models import *
import json

app = Flask(__name__, template_folder='public', static_folder='')

def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        #authorization = request.headers.get("authorization", None)
        #if not authorization:
            #return redirect("/login", code=302)
        #try:
            #token = authorization.split(' ')[1]
            #resp = decode(token, None, verify=False, algorithms=['HS256'])
            #g.user = resp['sub']
        #except exceptions.DecodeError:
            #return redirect("/login", code=302)
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

    #user = #search by email to find user

    if not user or not check_password_hash(user.password, password):
        return redirect("/login", code=302)
    return redirect("/app")

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
    email = request.form['email']
    username = request.form['name']
    password = request.form['password']

    #user = #search by email to find user

    if (user):
        return redirect("/login", code=302)
    
    new_user = Parent(
        email = email,
        name = name,
        password = generate_password_hash(password, method='sha256'))

    #add user to the database

# API
@app.route('/api/get_available_jobs')
@login_required
def get_available_jobs():
    parent_id = request.args['parent_id']
    client = ndb.Client()
    with client.context():
        parent_dict = get_parent(parent_id).to_dict()
        return json.dumps(parent_dict['available_jobs'])

@app.route('/api/get_available_items')
@login_required
def get_available_items():
    parent_id = request.args['parent_id']
    client = ndb.Client()
    with client.context():
        parent_dict = get_parent(parent_id).to_dict()
        return json.dumps(parent_dict['available_items'])

@app.route('/api/get_active_bonds')
@login_required
def get_active_bonds():
    parent_id = request.args['parent_id']
    child_name = request.args['child_name']
    client = ndb.Client()
    with client.context():
        child_dict = get_child(parent_id, 
            child_name).to_dict()
        return json.dumps([bond for bond in child_dict['bonds'] 
            if not bond['redeemed']])

@app.route('/api/get_redeemed_bonds')
@login_required
def get_redeemed_bonds():
    parent_id = request.args['parent_id']
    child_name = request.args['child_name']
    client = ndb.Client()
    with client.context():
        child_dict = get_child(parent_id, 
            child_name).to_dict()
        return json.dumps([bond for bond in child_dict['bonds'] 
            if bond['redeemed']])

@app.route('/api/get_purchased_items')
@login_required
def get_purchased_items():
    parent_id = request.args['parent_id']
    child_name = request.args['child_name']
    client = ndb.Client()
    with client.context():
        child_dict = get_child(parent_id, 
            child_name).to_dict()
        return json.dumps(child_dict['purchased_items'])

@app.route('/api/get_completed_jobs')
@login_required
def get_completed_jobs():
    parent_id = request.args['parent_id']
    child_name = request.args['child_name']
    client = ndb.Client()
    with client.context():
        child_dict = get_child(parent_id, 
            child_name).to_dict()
        return json.dumps(child_dict['completed_jobs'])

@app.route('/api/get_pending_jobs')
@login_required
def get_pending_jobs():
    parent_id = request.args['parent_id']
    child_name = request.args['child_name']
    client = ndb.Client()
    with client.context():
        child_dict = get_child(parent_id, 
            child_name).to_dict()
        return json.dumps(child_dict['pending_jobs'])

@app.route('/api/get_sibling_names')
@login_required
def get_sibling_names():
    parent_id = request.args['parent_id']
    child_name = request.args['child_name']
    client = ndb.Client()
    with client.context():
        parent = get_parent(parent_id)
        child_list = [child.get().name for child in parent.children]
        return json.dumps([cn for cn in child_list if not cn == child_name])


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=80)

with client.context():
  set_parent(Parent(id='empty-parent',
    password='mypass',
    available_jobs = [Job(name='job1',value=2),Job(name='job2',value=4)],
    available_items = [Item(name='item1',value=3),Item(name='item2',value=5)]))