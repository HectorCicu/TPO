from flask import Flask, render_template, request, url_for, jsonify, redirect
from flask_mysqldb import MySQL
from flask_cors import CORS
import mysql.connector
import random
from datetime import date

app = Flask(__name__)
CORS(app)
# conexión a base de datos
conexion = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="tpog18"
)
# app.config['MYSQL_HOST'] = 'localhost'
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_PASSWORD'] = 'root'
# app.config['MYSQL_DB'] = 'tpog18'

# conexion = MySQL(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/infoVideos')
def infoVideos():
    return render_template('infoVideos.html')


@app.route('/alquilarPeliculas')
def alquilarPeliculas():
    return render_template('alquilarPeliculas.html')


@app.route('/pagoAlquiler')
def pagoAlquiler():
    return render_template('pagoAlquiler.html')


@app.route('/quienesSomos')
def quienesSomos():
    return render_template('quienesSomos.html')


@app.route('/ventanaPago')
def ventanaPago():
    return render_template('ventanaPago.html')


@app.route('/validar_cliente', methods=['GET'])
def validar_Cliente():
    data = {}

    try:
        cursor = conexion.cursor()

        sql = "SELECT * FROM tpog18.clientes;"
        cursor.execute(sql)
        clientes = cursor.fetchall()

        clientes_formateados = []

        for cliente in clientes:

            cliente_f = {}

            cliente_f['username'] = cliente[0]
            cliente_f['email'] = cliente[1]
            cliente_f['password'] = cliente[2]
            cliente_f['fecha_alta'] = cliente[3]
            cliente_f['userid'] = cliente[4]

            clientes_formateados.append(cliente_f)

        data['clientes'] = clientes_formateados
        # data['mensaje'] = 'Éxito'

        return jsonify(data), 200
    except Exception as e:
        print(e)
        data['mensaje'] = 'Error....'
    # return jsonify(data) ,200


@app.route("/nuevoCliente", methods=["POST"])  # ESTO ES UN DECORADOR
def nuevoCliente():
    username = request.form['nombreUsuario']
    email = request.form['email']
    passwd = request.form['passw']

    try:
        conexion = mysql.connector.connect(
            host="localhost",
            user="root",
            password="root",
            database="tpog18"
        )
        if conexion.is_connected():
            print("Conexión exitosa a la base de datos")
        else:
            print("No hay conexión a la base de datos")

        cursor = conexion.cursor()
        fecha_actual = date.today().strftime('%Y-%m-%d')
        # fecha_formateada = fecha_actual

        sql1 = f"SELECT * FROM clientes WHERE username = '{username}';"
        cursor.execute(sql1)
        existe = cursor.fetchone()
        print(existe)
        if existe:
            return jsonify({"mensaje": "1"}), 200

        sql = f"INSERT INTO `clientes` (`username`, `email`, `password`, `fecha_alta`) VALUES ('{username}', '{email}', '{passwd}', '{fecha_actual}');"
        cursor.execute(sql)

        conexion.commit()

        cursor.close()
        conexion.close()

        return jsonify({"mensaje": "Cliente agregado", "nombre": username}), 200
    except Exception as e:
        return jsonify({"mensaje": "Error en la base de datos: " + str(e)}), 500


@app.route("/compraPeliculas/<string:titulo>/<float:precio>/<string:imdbID>/<string:genero>/<int:anio>/<string:username>", methods=["POST"])
def compraPeliculas(titulo, precio, imdbID, genero, anio, username):
    titulo = titulo.replace("'", " ")
    try:

        conexion = mysql.connector.connect(
            host="localhost",
            user="root",
            password="root",
            database="tpog18"
        )
        if conexion.is_connected():
            print("Conexión exitosa a la base de datos")
        else:
            print("No hay conexión a la base de datos")

        cursor = conexion.cursor()
        fecha_alquiler = date.today().strftime('%Y-%m-%d')

        sql2 = f"INSERT INTO `tpog18`.`alqulervideos`(`username`,`imdbID`,`precio`,`fechaAlquiler`) VALUES ('{username}','{imdbID}',{precio},'{fecha_alquiler}');"
        cursor.execute(sql2)
        
        #busco si existe ese video en la tabla videos. Si existe no realizo acción, sino guardo el dato.
        sql0 = f"SELECT imdb_ID from tpog18.videos WHERE imdb_ID = '{imdbID}'"
        cursor.execute(sql0)
        existeVideo = cursor.fetchone()
        if existeVideo :
            pass
        else:
            sql3 = f"INSERT INTO `tpog18`.`videos`(`titulo`,`imdb_ID`,`genero`,`anio`) VALUES ('{titulo}','{imdbID}','{genero}',{anio});"
            cursor.execute(sql3)
        conexion.commit()

        cursor.close()
        conexion.close()
        return jsonify({"mensaje": "Operacion exitosa"}), 200
    except Exception as e:
        return jsonify({"mensaje": "Error en la base de datos: " + str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
