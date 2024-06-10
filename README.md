 Descripción del proyecto.

El sistema de gestión de pedidos y mesas permitirá a los usuarios ingresar los pedidos realizados por los clientes en un restaurant. Tendrán la capacidad de registrar los productos solicitados por cada mesa específica. Para ingresar un pedido, el usuario primero seleccionará la mesa correspondiente. Una vez seleccionada la mesa, el usuario podrá agregar los artículos solicitados por los clientes, indicando la cantidad y valor del producto.

 Instrucciones para configurar y ejecutar el proyecto.
-Abre el Panel de Control de XAMPP, inicia los servicios de Apache y MySQL y crea la siguiente base de datos en phpMyAdmin.

CREATE DATABASE restaurant; 
USE restaurant; 
CREATE TABLE orders ( 
id INT AUTO_INCREMENT PRIMARY KEY, 
table_number INT NOT NULL, 
items TEXT NOT NULL, 
subtotal DECIMAL(10, 2) NOT NULL, 
total DECIMAL(10, 2) NOT NULL, 
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

-Abre una terminal en Visual Studio Code y escribe node app.js. Luego de eso en un navegador para poder visualizar la página escribe localhost:3000.

 Capturas de pantalla de la interfaz de usuario.
![image](https://github.com/benjaminaraya23/Sistema-de-Pedidos-para-un-Restaurante/assets/171303305/ec94e5f4-4710-446a-aeb0-593cf94baf67)
![image](https://github.com/benjaminaraya23/Sistema-de-Pedidos-para-un-Restaurante/assets/171303305/390a9d3b-7b59-402a-80a2-ab5aaa487000)
