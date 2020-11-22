# Ejercicios sobre el tema Serverless computing

## Ejercicio 1: Darse de alta en Vercel y Firebase, y descargarse los SDKs para poder trabajar con ellos localmente.

### Vercel
Para darte de alta en Vercel, vamos a su [página web](https://vercel.com/) y nos registramos. Nos da la opción de registrarnos con Github, selecionamos ésta y le daremos una serie de permisos necesarios para enlazar nuestras cuentas.

![](https://github.com/sergiocantero8/IV-Autoevaluacion/blob/main/img/ejercicio1_serverless.png)

Introducimos el link del repositorio de Github que queremos importar

![](https://github.com/sergiocantero8/IV-Autoevaluacion/blob/main/img/ejercicio1_serverless_2.png)

Nos redirigirá a Github para instalar Vercel ahí.

![](https://github.com/sergiocantero8/IV-Autoevaluacion/blob/main/img/ejercicio1_serverless_3.png)

E importamos nuestro repositorio

![](https://github.com/sergiocantero8/IV-Autoevaluacion/blob/main/img/ejercicio1_serverless_5.png)

Para trabajar localmente con Vercel, lo descargamos con la orden:

```
npm i -g vercel
```

![](https://github.com/sergiocantero8/IV-Autoevaluacion/blob/main/img/ejercicio1_serverless_4.png)

La primera que ejecutamos vercel en local, nos pide nuestro email y envía un correo de confirmación.

![](https://github.com/sergiocantero8/IV-Autoevaluacion/blob/main/img/ejercicio1_serverless_6.png)

Una vez que confirmamos nuestro email, ya podemos configurarlo y desplegar la app al volver a ejecutar la orden vercel.

![](https://github.com/sergiocantero8/IV-Autoevaluacion/blob/main/img/ejercicio1_serverless_7.png)

### Firebase
Firebase, al ser de Google, con tener una cuenta de Google ya tendrías acceso a Firebase.

Para poder usar localmente Firebase, deberemos descargar su SDK.

![](https://github.com/sergiocantero8/IV-Autoevaluacion/blob/main/img/ejercicio1_serverless_8.png)



## Ejercicio 2: Tomar alguna de las funciones de prueba de Vercel, y hacer despliegues de prueba con el mismo.

Me he creado un [repositorio](https://github.com/sergiocantero8/vercel-example) aparte para este ejemplo, he usado esta función de prueba que la he sacado de la [página web oficial](https://vercel.com/docs/runtimes#official-runtimes/node-js/node-js-request-and-response-objects)

![](https://github.com/sergiocantero8/IV-Autoevaluacion/blob/main/img/ejercicio2_serverless.png)

Ejecutamos vercel y seguimos el [link](https://vercel-example-xi.vercel.app/api/ejemplo_vercel.js) que nos dan para ver el despliegue de la función.

![](https://github.com/sergiocantero8/IV-Autoevaluacion/blob/main/img/ejercicio2_serverless_2.png)
