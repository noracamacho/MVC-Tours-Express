# MVC-Tours-Express
Mongodb, Express, Node Js, MVC

### REST Web Services 
Son programas basados en REST, que permiten manipular información (GET, POST, PUT, DELETE), para acceder a la información, requieren de una URL, método HTTP, entregan la información en formato JSON,  
REST ( Representational State Transfer) es una arquitectura basada en el estándar web y utiliza el protocolo HTTP.

> Los métodos más usados en una API REST son:

>> - __GET: Obtiene recursos.__
>> - __POST: Crea recursos.__
>> - __PUT: Actualiza / modifica recursos.__
>> - __DELETE: Eliminar recursos.__


### Arquitectura MVC
MVC es uno de los patrones de arquitectura más utilizados en el desarrollo web, esta se divide en  Modelo, Vista y Controlador. En el Modelo, la estructura de la base de datos. En el controlador, la lógica. En la vista, la interfaz de usuario.

#### Importación de colecciones
1.- Se realizó la importación de las colecciones tour, restaurants y postal (códigos postales del estado de México) a MongoDb Atlas, está se hizo por medio de la terminal de comandos.
![](Images/Imagen1.jpg)

2.- Se confirma que las colecciones efectivamente se encuentren en la base de datos learning_mongo en MongoDB Atlas.
![](Images/Imagen2.png)

3.- Se realizó la instalación de las librerías requeridas mediante el uso de la terminal de comandos: 
![](Images/Imagen3.png)

4.- Generamos las estructura MVC (Modelo Vista Controlador) en nuestro espacio de trabajo de Visual Estudio Code:
![](Images/Imagen4.png)

5.- En el archivo /MVC/app.js se escribe el requerimiento de librerías y drivers, la configuración del Web Server y parsee de datos.
![](Images/Imagen5.png)

6.- Una vez configurado el Web Server, se verificó el mensaje de encendido.
![](Images/Imagen6.png)

7.- Dentro de la carpeta modelos creamos el archivo tours.js. Este lo editamos y creamos el modelo de la API.
![](Images/Imagen7.png)

8.- Se escribió el código de las API en el archivo MVC/controllers/admin.js (GET, POSTy DELETE).
![](Images/Imagen8.png)




