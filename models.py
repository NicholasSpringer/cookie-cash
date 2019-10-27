from google.cloud import ndb

class Job(ndb.Model):
    name = ndb.StringProperty()
    value = ndb.IntegerProperty()
    description = ndb.StringProperty()
    timestamp = ndb.IntegerProperty()

class Item(ndb.Model):
    name = ndb.StringProperty()
    value = ndb.IntegerProperty()
    description = ndb.StringProperty()
    timestamp = ndb.IntegerProperty()
    
class Bond(ndb.Model):
    type = ndb.StringProperty()
    redeemed = ndb.BooleanProperty()
    redeem_timestamp = ndb.IntegerProperty()

class Child(ndb.Model):
    name = ndb.StringProperty()
    cookies = ndb.IntegerProperty()
    completed_jobs = ndb.StructuredProperty(Job, repeated=True)
    pending_jobs = ndb.StructuredProperty(Job, repeated=True)
    purchased_items = ndb.StructuredProperty(Item, repeated=True)
    bonds = ndb.StructuredProperty(Bond, repeated=True)

class Parent(ndb.Model):
    password =  ndb.StringProperty()
    children = ndb.KeyProperty(repeated=True)
    available_jobs = ndb.StructuredProperty(Job, repeated=True)
    available_items = ndb.StructuredProperty(Item, repeated=True)

def get_parent(id):
    key = ndb.Key('Parent', id)
    return key.get()

def set_parent(parent):
    parent.put()

def get_child(parent_id, child_name):
    parent = ndb.Key('Parent', parent_id).get()
    for child_key in parent.children:
        child = child_key.get()
        if child.name == child_name:
            return child
    return None

def set_child(parent_id, child):
    parent = ndb.Key('Parent', parent_id).get()
    parent.children = [child_key for child_key in parent.children 
        if child_key.get().name != child.name]
    parent.children.append(child.put())
    parent.put()