# Data Lovers

## 1. Presentación del proyecto: POKEKANTO

El usuario son jugadores nivel medio de Pokémon Go, quienes ya tienen un acercamiento y conocimiento básico de esta aplicación y buscan información de los 151 pokémon de la región de Kanto para perfeccionarse como entrenador Pokémon.


### Investigación inicial

Se realizó una búsqueda en facebook del grupo con mayores usuarios en Chile del juego Pókemon Go y gracias a la búsqueda por palabras identificamos los principales aspectos que se comentaban respecto a la región de Kanto.
Como resultado encontramos que la mayoría busca completar su pokédex y tener pokémon con buenas estadísticas. Por lo tanto, decidimos tener 3 categorías principales en nuestra web:

**• Pokédex:** Mostrar los 151 pokémon de la región de kanto.

**• Estadísticas:** Mostrar información específica de mejores puntajes de cada pokémon.

**• Crianza:** Mostrar información de caramelos para saber cúantos km recorrer con un pókemon compañero y poder tener su evolución.


### Concepto de idea y diseño

El proceso de diseño consistió en realizar una investigación sobre la identidad visual del juego, teniendo como resultado el primer prototipo de alta fidelidad, el cual fue testeado con algunos usuarios y gracias al feedback se aplicaron cambios que ayudaron a lograr la coherencia visual que se buscaba.

![imgdesign](http://imgfz.com/i/B7rzis6.png)

**Nombre “POKEKANTO”:** Este juego de palabras hace relación directa a la región de Kanto para que el usuario sepa del primer momento de qué se trata y lo recuerde fácilmente si desea volver a visitar la página.

**Imágenes, iconografía y botones:** Las imágenes utilizadas fueron editadas para lograr una identidad que estuviera familiarizada con el juego, como es el mapa vectorizado de pokémon go y la imagen principal. En íconos y botones creamos figuras geométricas con bordes redondeados.

**Colores:** Se definió una paleta de colores para aplicar en toda la página y textos.

**Tipografía:** Montserrat fue la familia elegida por ser sans serif de estructura geométrica y legible en todos los tamaños. Los cuerpos utilizados son Black para títulos, Bold para subtítulos y Regular en párrafos.


## 2. Prototipos

Una vez que definimos los usuarios con los que íbamos a trabajar comenzamos a desarrollar el primer prototipo.

### Baja fidelidad

![imgbaja](http://imgfz.com/i/OpZue2t.png)

### Alta fidelidad inicial

Enviamos a los usuarios el primer prototipo en alta fidelidad en Figma, recibimos feedback y rescatamos los siguientes comentarios:

Positivos: Sitio y diseño limpio, ordenado y fácil de leer.
A mejorar: Los colores de fondo no logran relacionarse con el juego, además buscar una forma de diferenciar mejor las categorías de "Combate" y "Colección", el nombre correcto de esta última es "Crianza".

![imgaltaini](http://imgfz.com/i/ZYgeOTU.png)

### Alta fidelidad

Añadimos mejoras y creamos el nuevo prototipo tomando en cuenta las historias de usuario.

![imgalta1](http://imgfz.com/i/X8E4AIU.png)
![imgalta2](http://imgfz.com/i/FeZgXfy.png)
![imgalta3](http://imgfz.com/i/2OTtW8N.png)

***

## 3. Historias de usuario

### Historia 1
 
“Yo como jugador nivel medio de Pokémon Go quiero seleccionar la pokédex para visualizar los 151 pokémon de la región Kanto”
 
**Criterios de aceptación:**
Por medio de un botón el usuario selecciona la categoría Pokédex se dirige a otra página donde puede visualizar todos los pokémon de manera ordenada.

### Historia 2
 
“Yo como jugador nivel medio de Pokémon Go quiero encontrar pokémon por tipo para ver solamente esos resultados que estoy buscando y no toda la pokédex”
 
**Criterios de aceptación:**
Por medio del botón “tipo” el usuario podrá ver todos los tipos pertenecientes a la región de kanto, seleccionar los que desea y filtrar para ver en la pokédex.

### Historia 3

“Yo como jugador nivel medio de Pokémon Go quiero ver en orden ascendente y descendente la lista de pokémon para saber quiénes son los primeros y los últimos pokémon”
 
**Criterios de aceptación:**
Por medio del botón “orden” el usuario podrá seleccionar si visualizará los pokémon en orden ascendente o descendente según su número en la pokédex de manera rápida, funcionando en conjunto al filtro de tipo.

### Historia 4

“Yo como jugador nivel medio de Pokémon Go quiero ordenar alfabéticamente los pokémon para reconocerlos por sus nombres más fácil a la vista" 

 
**Criterios de aceptación:**
Por medio del botón “orden” el usuario podrá seleccionar si visualizará los pokémon en orden alfabético de A-Z y de Z-A, funcionando en conjunto al filtro de tipo.

### Historia 5
 
“Yo como jugador nivel medio de Pokémon Go quiero poder ver la información básica de un pókemon”
 
**Criterios de aceptación:**
Al hacer click sobre el pokémon que le interesa, se despliega un modal con su información básica, el cual podrá cerrar con una X en la esquina superior derecha para continuar navegando.

### Historia 6
 
“Yo como jugador nivel medio de Pokémon Go quiero poder buscar un pokémon solamente sabiéndome su nombre y que aparezca”
 
**Criterios de aceptación:**
En el header al lado derecho está ubicado un buscador donde se puede ingresar el nombre de un pokémon y encontrarlo rápidamente en la pokédex.

## Feedback de usuario 

Creamos una encuesta ubicada en el footer, donde el usuario podrá entregarnos su experiencia con el sitio y ayudarnos a mejorar.

Link: https://forms.gle/PFdK6d321wQkQ2a66


***

## 4. Objetivos de aprendizaje

### UX
- [x] Diseñar la aplicación pensando y entendiendo al usuario.
- [x] Crear prototipos para obtener feedback e iterar.
- [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [x] Planear y ejecutar tests de usabilidad.

### HTML y CSS
- [x] Entender y reconocer por qué es importante el HTML semántico.
- [x] Identificar y entender tipos de selectores en CSS.
- [x] Entender como funciona  `flexbox` en CSS.
- [x] Construir tu aplicación respetando el diseño planeado (maquetación).

### DOM
- [x] Entender y reconocer los selectores del DOM (querySelector | querySelectorAll).
- [x] Manejar eventos del DOM. (addEventListener)
- [x] Manipular dinámicamente el DOM. (createElement, appendchild, innerHTML, value)

### Javascript
- [x] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [x] Manipular objects (key | value).
- [x] Entender el uso de condicionales (`if-else` | `switch`).
- [x] Entender el uso de bucles (`for` | `forEach`).
- [ ] Entender la diferencia entre expression y statements.
- [x] Utilizar funciones (parámetros | argumentos | valor de retorno).
- [ ] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [x] Utilizar ES Modules (`import` | `export`).

### Pruebas Unitarias (_testing_)
- [ ] Testear funciones (funciones puras).

### Git y GitHub
- [x] Ejecutar comandos de git (`add` | `commit` | `pull` | `status` | `push`).
- [x] Utilizar los repositorios de GitHub (`clone` | `fork` | gh-pages).
- [x] Colaborar en Github (pull requests).

### Buenas prácticas de desarrollo
- [ ] Organizar y dividir el código en módulos (Modularización).
- [x] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [ ] Utilizar linter para seguir buenas prácticas (ESLINT).

### Soft skills
- [x] **Planificación, organización y manejo del tiempo** Organizarse utilizando historias de usuario, haciendo una estimación general de los tiempos que se necesitarán para la realización del proyecto. Conocer las ceremonias y artefactos ágiles (sprint planning, dailys, retrospectiva, tablero al menos, etc) a pesar de que no se utilicen con regularidad. 

- [x] **Trabajo en equipo** Trabajar con otros de forma colaborativa y en base a un objetivo común, entregando ideas para la construcción del proyecto

- [x] **Autoaprendizaje** Demostrar interés y adquirir nuevos conocimientos autónomamente, estudiando de manera independiente, lo que se traduce, en que cuando es necesario, la estudiante buscará aclarar conceptos y resolver dudas sobre la materia.

- [ ] **Presentaciones** Utilizar ciertas estrategias para hablar en público (tono y ritmo de voz adecuado, contacto visual con el público, interacción con medios de presentación), que permitan asegurar un mediano entendimiento de la audiencia.

- [x] **Adaptabilidad** Afrontar los cambios inesperados o nuevos desafíos con una actitud positiva, aunque no necesariamente se logre accionar o adaptarse de la mejor manera a los diferentes contextos.

- [x] **Solución de problemas** Trabajar en la búsqueda y en la elaboración de soluciones alternativas a problemas de mediana complejidad.

- [x] **Responsabilidad** Demostrar actitud de compromiso, reflejandolo en la entrega de trabajo a tiempo, llegando a la hora acordada y/o avisando cuando no se pueda asistir.

- [x] **Dar y recibir feedback** Escuchar los comentarios y críticas de los demás de manera respetuosa, y/o comunicar a los demás las opiniones de forma constructiva.

- [x] **Comunicación eficaz** Comunicar ideas a los demás cuando es necesario, aunque no siempre se fomenten de manera proactiva estas instancias de comunicación.


***

## 9. Checklist

* [ ] Usa VanillaJS.
* [x] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.
