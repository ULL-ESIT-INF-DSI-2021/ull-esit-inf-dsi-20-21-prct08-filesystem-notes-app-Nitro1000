# Práctica 8 - Aplicación de procesamiento de notas de texto

| Apellidos | Nombre |
| ------ | ------ |
| Rivas Quintero| Milton Daniel |

## Índice

1. [Introducción](#intro)
2. [Desarrollo](#desarrollo)
3. [Conclusión](#conclu)
4. [Bibliografía](#biblio)

---------------------

## Introducción<a name="intro"></a>

En esta practica grupal tendremos que establecer un diseño orientado a objetos para diseñar menús, creando una serie de clases como son alimento, plato y menú que nos permitiran emular la estructura. Seguiremos usando lo aprendido en las anteriores practicas como el TypeDoc y TDD, además de los principios SOLID explicados en clase. Tambien empezaremos a utilizar unas nuevas herramientas *Inquirer.js* y *Lowdb* que nos permitiran interactuar con el programa de tal forma que se podran crear nuevos platos y menús. Comenzaremos a utilizar **SonarCloud** y **GitHub Actions** para comprobar la calidad y seguridad del código fuente. 

---------------------

## Desarrollo<a name="desarrollo"></a>

### Clase Alimento

En esta clase vamos a modelar un alimento/ingrediente que sera la clase básica que necesitaremos. La clase es muy simple teniendo solo el constructor y los getters para cada atributo de la clase. Además esta clase tendrá un tipo de dato que nos permitirá determinar el grupo al que pertenece el alimento.

Aquí se indican los enlaces para ver el contenido de la clase Alimento y sus respectivas pruebas.

[Clase Alimento](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/alimento.ts)

[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/alimento.spec.ts)

### Clase Plato

Esta clase representa a los platos que podemos ver en los menús, esta compuesta por alimentos y tendrá diferentes categorías. Tendremos un tipo de dato que nos permitirá determinar la categoría del plato. La clase tendrá los siguientes métodos:

- *composition*: con el cual determinaremos la composición del plato respeto a los alimentos que lo compone, para esto recorremos los nutrientes de cada alimento y lo vamos agregando a los nutrientes respectivos del plato.
- *foodPredominante*: este nos indica que grupo de alimento es el mas abundante en el plato, simplemente vamos contando cada grupo de alimento y el mayor es el que va a determinar el alimento predominante.
- *addPrice*: nos dará el precio total del plato, respeto a los precios de cada alimento.
- *getInfo*: nos permitirá visualizar la información del plato.

Por ultimo tenemos los respectivos getters de la clase para cada atributo.

Aquí se indican los enlaces para ver el contenido de la clase Plato y sus respectivas pruebas.

[Clase Plato](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/plato.ts)

[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/plato.spec.ts)

### Clase Menu

Con esta clase modelamos los menús que estarán compuestos por platos (mínimo 3 platos). Determinaremos la cantidad de platos mediante un tipo de dato. Esta clase contendrá los siguientes métodos:

- *comprobarMenu*: que nos permitirá determinar si el menú cumple la regla de tener al menos 3 categorías diferentes, para esto vemos en cada plato su categoría y si hay mas de 3 entre todos los platos, pues se cumple la regla.
- *composicionNutricionalMenu*: es el mismo principio que en la clase plato, donde por cada plato tenemos una composición que la sumaremos a la composición nutricional del menú.
- *listadoGruposAliments*: gracias a este método podremos saber que el grupo predominante de cada plato del menú.
- *precioTotal*: es el mismo que las anteriores clases, simplemente vamos agregando el precio de cada plato al menú.
- *write*: lo usaremos para visualizar el menú de manera clara.

Por ultimo tenemos los respectivos getters de la clase para cada atributo.

Aquí se indican los enlaces para ver el contenido de la clase Menú y sus respectivas pruebas.

[Clase Menu](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/menu.ts)

[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/menu.spec.ts)

### Clase Carta

Esta clase estará compuesta por Menús y Platos. Simplemente tendrá sus respectivos getters para los atributos y un *write* para visualizar cada menú o plato de la carta.

Aquí se indican los enlaces para ver el contenido de la clase Carta y sus respectivas pruebas.

[Clase Carta](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/carta.ts)

[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/carta.spec.ts)

### Clase Comanda

Esta clase es la princiapal por la cual el usuario podra seleccionar las opciones que el programa le presenta, para esto se usaron los módulos **Inquirer.js** y **Lowdb**. El fichero contiene lo siguiente:

Enums de la clase comanda: 
- *Seleccionar*: permite seleccionar entre los menús existentes o los platos individuales.
- *Principal*: permite selecionar entre las opciones **Menu, Plato Individual y Menu personalizado**.
- *Opciones*: opciones para decidir entre si o no.
- *SeleccionarMenu*: permite seleccionar el menú que se quiere usar.

Métodos de la clase comanda:
- *selectPrincipal*: el método mostrará las opciones iniciales de **Menu, Plato Individual y Menu personalizado**.
- *showPedido*: mostrará el pedido de la comanda.
- *selectPlato*: mostrará la opción de seleccionar un plato de la lista y poder añadirla a la carta.
- *selectMenu*: mostrará la opción de seleccionar un menú de la lista y poder agregarla a la carta.
- *selectPersonalizado*: método para seleccionar el menú personalizado correspondiente.
- *promptOpcion*: método que puede seleccionar el menú que se desea. 
- *GuardarPersonalizado*: método para guardadar el menú personalizado creado.

Aquí se indican los enlaces para ver el contenido de la clase Comanda y sus respectivas pruebas.   

[Clase Comanda](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/comanda.ts)

[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/comanda.spec.ts)

### Base de Datos

Se crearan una serie de ficheros en *src/database* que contendrán los diferentes objetos prediseñados de cada clase. Los ficheros son:

- *aliments.ts*: contiene todos los alimentos prediseñados de acuerdo al recurso facilitado por el profesorado en el guion de la practica. El recurso es el siguiente: [recurso](https://drive.google.com/file/d/1B-jULJvgWmphWsZV1e3BG0fGL77jokSZ/view?usp=sharing)
- *dishes.ts*: contiene todos los platos prediseñados en función a los alimentos del fichero *aliments.ts*.
- *menus.ts*: contiene todos los menús prediseñados en función a los platos del fichero *dishes.ts*.
- *carta.ts*: contiene la carta que esta compuesta por los menús y platos de los ficheros *menus.ts* y *dishes.ts* respectivamente.


[Base de Datos](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/database)

---------------------

## Conclusión<a name="conclu"></a>

Gracias a esta practica pudimos experimentar el trabajo en equipo donde nos dividíamos las tareas y nos ayudábamos entre nosotros. Aprendimos a utilizar **SonarCloud** y **GitHub Actions** para comprobar la calidad y seguridad del código y comprendimos el funcionamiento de **Inquirer.js** y **Lowdb** para poder operar por consola de comandos y hacer que el usuario pueda añadir, borrar y modificar ingredientes, platos, menús y cartas. Las principales dificultades que tuvimos fue a la hora de usar el **Inquirer.js** y **Lowdb**, ya que era una herramienta nueva y tuvimos que hacer varias pruebas para saber como funcionaba, de resto no hubo muchas dificultades mas allá de pensar el como resolver los problemas planteados para cada clase. Por otro lado la experiencia fue gratificante porque como se dijo anteriormente el trabajo en equipo nos ayudo a tener un ritmo constante de tal forma que cuando algún integrante del equipo tenia que hacer algo fuera del ámbito de la practica y la asignatura, pues otro podría retomar el trabajo donde lo dejo y la verdad eso nos hice mucho mas amena la realización de esta practica.

---------------------

## Bibliografía <a name="biblio"></a>

- [TypeDoc](https://typedoc.org/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Istanbul](https://istanbul.js.org/)
- [Coveralls](https://coveralls.io/)
- [Sonar Cloud](https://sonarcloud.io/)
- [Guión de la práctica](https://ull-esit-inf-dsi-2021.github.io/prct08-filesystem-notes-app/)