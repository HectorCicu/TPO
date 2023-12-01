import mysql.connector
def conectardb():
    cnx = mysql.connector.connect(
            host="localhost",
            user="root",
            password="root",
            database="tpog18",
        )
    cursor = cnx.cursor() 
    return cnx, cursor
   
def buscar_cliente(nombre):
    cnx, cursor = conectardb()
    cursor.execute("SELECT * FROM clientes WHERE username = %s", nombre)
    resultados = cursor.fetchall()
    cnx.close()
    return resultados
