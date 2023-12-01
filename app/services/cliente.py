import  sys
import json

import conexion


r = conexion.buscar_cliente('usuario001')
print(r)


# uno, dos = conexion.conectardb()

# def buscar_cliente(nombre):
#     global uno, dos

#     cursor = dos.cursor()
#     query = f"SELECT * FROM clientes WHERE nombre = '{nombre}'"
#     cursor.execute(query)

#     clientes = cursor.fetchall()

#     for cliente in clientes:
#         print(f"ID: {cliente[0]}, Nombre: {cliente[1]}, Dirección: {cliente[2]}, Teléfono: {cliente[3]}")


# def buscar_pedido(id_pedido):
#     global uno, dos

#     cursor = dos.cursor()
#     query = f"SELECT * FROM pedidos WHERE id = {id_pedido}"
#     cursor.execute(query)

#     pedidos = cursor.fetchall()

#     for pedido in pedidos:
#         print(f"ID: {pedido[0]}, Cliente ID: {pedido[1]}, Producto: {pedido[2]}, Cantidad: {pedido[3]}, Precio: {pedido[4]}")


# def agregar_cliente(nombre, direccion, telefono):
#     global uno, dos

#     cursor = dos.cursor()
#     query = f"INSERT INTO clientes (nombre, direccion, telefono) VALUES ('{nombre}', '{direccion}', '{telefono}')"
#     cursor.execute(query)
#     uno.commit()


# # def agregar_pedido(cliente_id, producto,   
# a = buscar_cliente("usuario001")