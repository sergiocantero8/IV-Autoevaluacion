# Ejercicios del tema Microservicios

## Ejercicio 1 - Instalar etcd3, averiguar qué bibliotecas funcionan bien con el lenguaje que estemos escribiendo el proyecto (u otro lenguaje), y hacer un pequeño ejemplo de almacenamiento y recuperación de una clave; hacer el almacenamiento desde la línea de órdenes (con etcdctl) y la recuperación desde el mini-programa que hagáis.

Etcd es un almacén de clave-valor de código libre, distribuido y uniforme que permite la configuración compartida, la detección de servicios y la coordinación del programador de clústeres o sistemas distribuidos de máquinas. Facilita la ejecución de actualizaciones automáticas de forma más segura, coordina el trabajo que se programa para los hosts e interviene en la configuración de las redes superpuestas para los contenedores. 

Para instalar etcd localmente deberemos hacer:
```
apt-get install etcd

```

Iniciamos el servicio con el comando:
```
systemctl start etcd.service
```
Instalamos el servicio en el proyecto de NodeJS:

```
npm install --save etcd3
```

Y añadimos la clave con el comando :

```
etcdctl put key claveprueba
```

Al ejecutar este sencillo programa: 
```
const { Etcd3 } = require('etcd3');
const client = new Etcd3();

(async () => {

  const key_value = await client.get('key').string();
  console.log('Valor de la clave:', key_value);

  await client.delete().all();
})();
```

Ejecutamos con la orden:
```
npm run etcd3
```

Y la salida es:
```
Valor de la clave: claveprueba
```
## Ejercicio 2 - Realizar una aplicación básica que use express para devolver alguna estructura de datos del modelo que se viene usando en el curso.

Lo primero añadimos express al proyecto: 

```
npm i --save express 
```

He creado una aplicacion básica:

```
var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send({      
        "pistas" : [
        {
            "precio": "14 euros",
            "horario": "9:00-21:00",
            "ubicacion": "Polideportivo Armilla"
        },
        {
            "precio": "8 euros",
            "horario": "9:00-17:00",
            "ubicacion": "Cartuja"
        }
    ] });
});

app.listen(process.env.PORT || 5000);
console.log('Servidor en http://127.0.0.1:5000/');
```

Lanzamos el servidor que escuchará el puerto 5000, navegamos a [http://127.0.0.1:8080/](http://127.0.0.1:8080/):

![](https://github.com/sergiocantero8/IV-Autoevaluacion/blob/main/img/ej_2_microservicios.png)