from google.cloud import ndb

class Job(ndb.Model):
    name = ndb.StringProperty()
    value = ndb.IntegerProperty()

class CompletedJob(ndb.Model):
    job = ndb.StructuredProperty(Job)
    timestamp = ndb.IntegerProperty()

class ShopItem(ndb.Model):
    name = ndb.StringProperty()
    value = ndb.IntegerProperty()
    
class PurchasedItem(ndb.Model):
    item = ndb.StructuredProperty(ShopItem)
    timestamp = ndb.IntegerProperty()

class Bond(ndb.Model):
    bond_type = ndb.StringProperty()
    redeemed = ndb.BooleanProperty()
    redeem_timestamp = ndb.IntegerProperty()

class Child(nbd.Model):
    name = ndb.StringProperty()
    cookies = ndb.IntegerProperty()
    completed_jobs = ndb.StructuredProperty(CompletedJob, repeated=True)
    purchased_items = ndb.StructuredProperty(PurchasedItems, repeated=True)
    bonds = ndb.StructuredProperty(Bond, repeated=True)

class Account(ndb.Model):
    email = ndb.StringProperty()
    password =  ndb.StringProperty()
    available_jobs = ndb.StructuredProperty(Job, repeated=True)
    shop_items = ndb.StructuredProperty(ShopItem, repeated=True)