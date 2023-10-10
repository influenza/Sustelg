from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS, cross_origin
import connection
number=None
arr=[]
app=Flask(__name__)
cors = CORS(app)
@app.route("/comentario", methods=["POST"])
@cross_origin(origins=['http://localhost:3000'])
def my_endpoint2():
    comentario = request.json['comentario']
    arr = connection.json_to_data_arr(comentario)
    return arr

@app.route("/members")
def members():
  return {"members": arr}

@app.route("/registro", methods=["POST"])
@cross_origin(origins=['http://localhost:3000'])
def my_endpoint():
    data = request.get_json() # Extrai os dados enviados pelo cliente
    comentario=data["comentario"]
    print(comentario)
    connection.my_connetion(comentario=comentario)


    
if __name__ =="__main__":
    app.run(debug=True)
