import csv
from flask import Flask, request
from flask_cors import CORS

server = Flask('app')
CORS(server, supports_credentials=True)

data_path = 'data.csv'

@server.route('/api/intro')
def get_info():

    user_id = request.args.get('id') 

    file = open(data_path,'r',encoding='utf-8')
    data = csv.reader(file)

    for item in data:
        if item[0] == user_id:

            return {
                "code": 200,
                "data": {    
                    "name":item[1],
                    "sex":item[2],
                    "about":item[3]
            },
            "msg": "Ok"
            }
    file.close()

    return{

    "code": 404,
    "msg": "未找到该用户"
    }

server.run('127.0.0.1',port=8080)