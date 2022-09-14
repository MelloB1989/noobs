import firebase_admin
import json
from firebase_admin import credentials, firestore

cred = credentials.Certificate("./firebase_key.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
collection = db.collection('standard-post-blogs')
doc = collection.document('test-blog')

json_file_path = "./api_standard.json"

with open(json_file_path, 'r') as j:
     contents = json.loads(j.read())

create = doc.set(contents)

print(create)
	
