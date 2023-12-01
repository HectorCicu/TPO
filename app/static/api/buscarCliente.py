from flask import Flask, render_template, request, url_for, jsonify, redirect
from flask_mysqldb import MySQL
from flask_cors import CORS
import random

app = Flask(__name__)

# conexión a base de datos
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'tpog18'

conexion = MySQL(app)

@app.route('/valida_cliente', methods=['GET'])
def validar_Cliente():
    data = {}
    try:
        cursor = conexion.connection.cursor()

        sql = "SELECT * FROM tpog18.clientes;"
        cursor.execute(sql)
        clientes = cursor.fetchall()
        print(clientes)
        data['clientes'] = clientes
       
        # data['mensaje'] = 'Éxito'
    except Exception as e:
        print(e)
        data['mensaje'] = 'Error....'
    return jsonify(data)