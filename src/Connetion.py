import mysql.connector
import json as jso
import pandas as pd
def my_connetion(comentario):
    cxn = mysql.connector.connect(
         host="localhost",
         user="root",
         password="gabrielben07",
         database="projetos"
        )
    
    if cxn.is_connected():
         print("Conexão estabelecida com sucesso!")
         cursor = cxn.cursor()
         cursor.execute(f'insert into site_bd(comentario) values ("{comentario}')
         resultados = cursor.fetchall()
         print(resultados)
         cursor.close()
    cxn.commit()
    cxn.close()



