"**" Trabajo Práctico Codo a Codo - Equipo 18 "**" 

Repositorio: https://github.com/HectorCicu/TPO.git


- Información sobre películas y series - alquiler vía Streaming

- Uso de Google Fonts

- Uso de https://uiverse.io/ para formulario de sign in  - registración

- Consumo de API OMDB

- Al ser el footer similar en todas las páginas, se utilizó la manipulación del DOM para incrustarlo en cada uno de ellos, de forma de no tener que repetirlo, y si necesita modificarse se realice en un solo lugar.

- Como el header es casi similar en todas las páginas, se utilizó mediante JavaScript la manipulación del DOM a fin de crear un solo modelo. 
Al ser variable parte de la cabecera (muestra diferente botones o enlaces según la página) se resolvió condicionando segun la URL en la que estaba el programa para determinar cuáles atributos mostrar u ocultar.

- Se resolvió dejar solamente el index.html en la carpeta principal y alojar todas las otras páginas en una carpeta especial. Esto hizo que haya que manipular el DOM desde JS para poder mostrar el favicon y el logo de acuerdo a la página de referencia.

- Se utilizaron fuentes de Google Fonts, guardándolas como variables para utilizarlas en diferentes páginas.



"__"Pantalla inicial (Index.html)"__"

    Muestra como principal "atractivo" un Carousel de póster de películas, mediante una combinación random de tipo (películas/series), búsqueda por parte de títulos y número de paginación.
    Esto se realizó para no mostrar siempre las mismas películas en la pantalla principal.
    Para el Carousel se utilizó Bootstrap.

    Iframe de youtube, con trailer de Forrest Gump


"__"Ingreso y Registración "__"
    Para ingresar hay que logguearse con usuario (usuario001) y contraseña (p1234).

    El botón "olvidó contraseña" envía a mi casilla de correos la solicitud de reestablecimiento.

    También se encuentra el formulario de registración, el cual envía solicitud de registro por mail.

    Ambos mails se generan con FormsPree


"__"Pantalla infoVideos.html"__"
    Se muestra una lista de películas random, consumiendo nuevamente la API.

    Existe un botón de busqueda, que a partir de la tercer letra (requisito de la api), comienza a buscar los títulos.

    Se puede seleccionar películas o series.

    Por cada fila existe un botón de detalle, el cual, al pulsarlo muestra el poster y otros datos (calificación imdb, año, resumen, elenco)

    Se utilizan fuentes de Google Fonts.

"__"Pantalla Alquiler"__"
    Es similar a infoVideos, salvo que se agregó precio para "alquilar" la película (solo películas y tipo streaming).
    El precio se calcula con una combinación entre la calificación de IMDB y la antigüedad de la película. 

    Una vez seleccionada la película a alquilar, se dirige a la página de la carga del pago mediante tarjeta de crédito. 
    Al confirmar los datos de la tarjeta, aparece una ventana con el link a la película.

"__" Pantalla quienes somos "__"

    Se agregó una