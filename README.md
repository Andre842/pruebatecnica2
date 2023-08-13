PRUEBA TÉCNICA 10 AGOSTO 2023

1. ¿Cuál es el propósito principal de CSS?
RTA/ El propósito del CSS es dar estilos a la página, diseño, visualización, el diseño responsivo para que la página se adapte a diferentes dispositivos. 

2. ¿Cuál es la diferencia entre margin y padding en CSS?
RTA/ El pargin es el espaciado hacia afuera del elemento, es decir el espacio que hay entre un elemento y otro y el padding es el espaciado dentro del elemento, es decir tenemos un elemento y queremos que su contenido tenga un espaciado. 

3. ¿Qué es Bootstrap?
RTA/ Es un framework que nos ayuda a implementar componentes predefinidos a nuestra página y aplicaciones web y hacer el diseño más rápido, es como una plantilla para el frontend que podemos modificar a nuestra necesidad. 

4. ¿Cuál es la etiqueta correcta para enlazar un archivo de hoja de estilos externo en un documento HTML?
RTA/ <link rel="stylesheet" href="Aquí va la ruta del archivo css">

5. ¿Qué es una clase CSS y cómo se selecciona en un documento HTML?
RTA/ Una clase CSS es un selector que se utiliza para aplicar los estilos a los elementos. En el archivo HTML se utiliza dentro de la etiqueda del elemento Ejm. 
<section class="container">
Para llamarlo en el CSS escribimos el nombre dentro de las comillas y un punto al inicio (.container)

6. ¿Qué es un diseño web responsivo (responsive design)?
RTA/ Es el diseño de un sitio web o aplicación que se adapta a varios dispositivos como PC, tablets, móvil según la resolución y el tamaño de la pantalla. 


JavaScript
Parte teórica
1. Pregunta: ¿Qué es JavaScript?
RTA/ Es un lenguaje que sirve para darle interacción a una página web y que su contenido sea más interactivo y dinámico para el usuario.

2. Pregunta: ¿Cuál es la diferencia entre "null" y "undefined" en JavaScript?
RTA/ NULL significa que el dato o variable esta nulo, es decir esta vacío y Undefined significa que el dato o variable no se encuentra definido, no existe.

3. Pregunta: ¿Cómo se declara una variable en JavaScript?
RTA/ para declarar una variable se usa let o const dependiendo si la variable puede modificar o no su contenido.

4. Pregunta: ¿Qué es una función en JavaScript?
RTA/ una función en bloque de código que se puede llamar en cualquier momento para realizar una tarea específica. 

5. Pregunta: ¿Cuál es la diferencia entre "==" y "===" en JavaScript?
RTA/ los dos sirve para comparar dos valores, la diferencia es que == compara dos valores sin importar su tipo, mientras que === se utiliza para comparar dos valores teniendo en cuenta su tipo. (tipo de datos)

6. Pregunta: ¿Qué es el DOM (Document Object Model) en JavaScript?
RTA/ es una interfaz que permite a los programas javascript acceder y manipular el contenido, estructura y estilo de una página web. se utiliza para interactuar con los elementos de la página web y modificarlos dinámicamente. 


1. Qué realiza el siguiente código JavaScript? Elige la respuesta correcta

var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");

ctx.moveTo(10,10);
ctx.lineTo(180,180);

ctx.strokeStyle="#f00";
ctx.stroke();

RTA/ b) Dibujar una línea roja dentro del Canvas.

2. ¿Cual de las siguientes líneas de código es la correcta en HTML5?
RTA/ b) <script src=»fichero.js»></script>

3. ¿Qué haces cuando al ejecutar código tienes un error y no das con la causa? (pregunta abierta)
RTA/ Primero comienzo a verificar el error que me sale y si no lo entiendo o no le encuentro solución comienzo a buscar en google porque se puede dar ese error o le pregunto a IA por este error. 

BASES DE DATOS

Ejercicio 3: Responde las siguientes preguntas:
1. ¿Qué es una clave primaria y cuál es su propósito en una base de datos?
RTA/ es un campo de la tabla que identifica de manera única cada registro de la tabla, su propósito es garantizar la integridad de los datos, que su registro único no se repita.
2. ¿Cuál es la diferencia entre una clave primaria y una clave foránea?
RTA/ la clave primaria identifica de manera única cada registro de una tabla mientras que la clave foránea establece una relación entre dos tablas.
3. ¿Cómo se realiza una consulta SELECT en SQL?
RTA/ Para realizar una consulta en una tabla de datos la sintaxis es la siguiente:
SELECT columna1 (nombre de la columna que deseamos consultar) FROM table (nombre de la tabla). 
para traer todos los datos de la tabla se una SELECT * FROM table(nombre de la tabla).
4. ¿Cuál es la diferencia entre una relación uno a uno y una relación uno a muchos en el modelo ER?
RTA/ la diferencia es que en una relación uno a uno, una tabla se relaciona con un registro de otra tabla o viceversa ejm(un almacen tiene un dueño). Mientras que una relación uno a muchos, una tabla se relaciona con muchos registros de otra tabla ejm(un almacen tiene muchos empleados). 
5. ¿Qué es la cardinalidad en el contexto de las relaciones en el modelo ER?
RTA/ La cardinalidad de refiere a la cantidad de instancias de una entidad que pueden estar relacionadas con una o varias instancias de otra entidad. uno a uno, uno a muchos o muchos a muchos. 
6. ¿Cuáles son los 3 lenguajes básicos existentes en el contexto de base de datos, dependiendo de su función?
RTA/ Lenguaje de Definición de Datos (DDL): se utiliza para definir la estructura y el esquema de la base de datos.
Lenguaje de Manipulación de Datos (DML): se utiliza para manipular los datos en la base de datos. 
Lenguaje de Control de Datos (DCL): se utiliza para controlar el acceso a la base de datos y establecer permisos y privilegios de usuario. 