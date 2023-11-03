Prueba de Trabajo Práctico Codo a Codo

Información sobre películas y series - alquiler vía Streaming

https://github.com/HectorCicu/TPO.git
uso de Gooble Fonts
uso de https://uiverse.io/ para formulario de sign in  - registración

Consumo de API OMDB

Pantalla inicial (Index.html),

Carousel de poster de películas random (Bootstrap). Para eso utilizo números random así puedo importar películas por alguna palabra clave y en alguna página también determinada por números random.

Por el hecho de que se repiten el header y footer, ambos están embebidos dentro del código js (modelado.js)


Ingreso y Registración 
Para ingresar hay que logguearse con usuario (usuario001) y contraseña (p1234).

El botón "olvidó contraseña" envía a mi casilla de correos la solicitud de reestablecimiento.

También se encuentra el formulario de registración, el cual envía solicitud de registro por mail.

Ambos mails se generan con FormsPree


-- Pantalla infoVideos.html
Se muestra una lista de películas random, consumiendo nuevamente la API.

Existe un botón de busqueda, que a partir de la tercer letra (requisito de la api), comienza a buscar los títulos.

Se puede seleccionar películas o series.

Por cada fila existe un botón de detalle, el cual, al pulsarlo muestra el poster y otros datos (calificación imdb, año, resumen, elenco)

Se utilizan fuentes de Google Fonts.

Pantalla Alquiler
Es similar a infoVideos, salvo que se agregó precio para "alquilar" la película (solo películas y tipo streaming), y el precio es según la calificación de IMDB. Está dividido en 4 valores, si la calificación en menor a 4, menor a 7 o mayor que 7.

Una vez seleccionado la película a alquilar, se dirige a la página de la carga del pago mediante tarjeta de crédito. Cuando se confirma la tarjeta, aparece una ventana emergente con el "link" a la película para ver pos streaming.

