
# Imágenes para el descubrimiento

Piximi es una aplicación que se ejecuta completamente desde el navegador y no requiere instalación, solo una configuración mínima. Nuestra visión para Piximi es ofrecer una aplicación intuitiva para la anotación, segmentación, clasificación y medición de imágenes. En esta versión, Piximi permite a los usuarios anotar regiones específicas de las imágenes, como los núcleos, y también puede usar aprendizaje profundo para clasificar las imágenes en grupos distintos.

<!-- ![piximi-workflow](./img/piximi-workflow.png) -->


<a class='piximi-btn' href="https://www.piximi.app/" target="_blank"><img class="text-img" src="./img/piximi_logo_icon.png"> Inicia Piximi aquí</a>

[Mira un tutorial de Piximi en YouTube](https://youtu.be/-wjUxc4ZHCc?si=sB-Z2EnBtjd-PP_j)

```{admonition} Problemas conocidos
:class: advertencia

Piximi está en desarrollo. [Haga clic aquí para ver los problemas conocidos en los que estamos trabajando](en desarrollo).


## El anotador de Piximi

![intro-anotador](./img/intro-anotador.png)

El anotador de Piximi te permite crear anotaciones intuitivamente en la imagen que elijas con diversas herramientas. Estas herramientas incluyen anotaciones manuales con lápiz, además de métodos más automáticos con anotación rápida. El anotador de Piximi también funciona con imágenes **multicanal** y **multiplano**, que se pueden seleccionar fácilmente para asegurar que las anotaciones se coloquen donde deben estar. En futuras versiones, también incluiremos la interpolación del plano Z para facilitar aún más las anotaciones en 3D.

## El clasificador Piximi

Mediante el aprendizaje profundo, Piximi puede clasificar imágenes de diversos temas, como bacterias, cultivos de células, insectos y más. El poder del aprendizaje profundo se aplica a un pequeño número de imágenes que el usuario ha categorizado en Piximi, lo que le da al ordenador un punto de partida para comprender cómo se ve una categoría particular de imagen. Por ejemplo, el usuario puede enseñar al ordenador cómo se ve células en las fases G1, S, G2 o M del ciclo celular. Estas categorizaciones realizadas por el usuario son luego examinadas intensamente por el modelo de aprendizaje profundo dentro de Piximi a través de un proceso conocido como entrenamiento. Durante este proceso de entrenamiento, el modelo de aprendizaje profundo encuentra patrones en los datos para vincular la entrada (una imagen añadida por el usuario) con una salida (la categoría o clase definida por el usuario). El modelo de aprendizaje profundo entrenado puede entonces predecir imágenes sin categorizar y determinar a qué clase pertenecen. En el ejemplo mencionado, esto determinaría en qué etapa del ciclo celular se encuentra un celular en particular sin depender de la entrada del usuario.

En última instancia, Piximi ofrece a los usuarios una forma de tener un método altamente personalizable para clasificar grandes conjuntos de imágenes en una variedad de temas aprendiendo de las anotaciones realizadas por el usuario.

## Próximos pasos de Piximi

Piximi es un proyecto en desarrollo que actualmente incluye un anotador de imágenes y una clasificación de imágenes basada en aprendizaje profundo. El objetivo final de Piximi es proporcionar a los usuarios una aplicación intuitiva para la anotación, segmentación, clasificación y medición de la información presente en las imágenes. En esta fase de Piximi, hemos lanzado el anotador y el clasificador, ya que son pasos iniciales importantes para la incorporación de las funcionalidades de segmentación y medición.

Estamos desarrollando Piximi abiertamente. Si tienes alguna función que te gustaría ver en Piximi, crea un debate en [nuestro repositorio de Piximi en Github](https://github.com/piximi/piximi/discussions).

<!-- Table on contents directive prints the ToC -->
<!-- ```{tableofcontents}
``` -->
