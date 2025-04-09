# Clasificación de imágenes
## 1. Cargar imágenes

Para comenzar, cargaremos las imágenes de un conjunto de datos de ejemplo incluido en Piximi. Para ello, pulse el botón "Abrir" en la esquina superior izquierda. Seleccione "Abrir" > "Proyecto" > "Proyecto de ejemplo" > "Proyecto de ejemplo Human U2OS-células" para empezar. Si desea cargar sus propias imágenes, vaya a "Abrir" > "Imagen" > "Nueva imagen".

Las imágenes corresponden a U2OS células, que coexpresa arrestina-GFP y un receptor GPCR huérfano. Tras la estimulación del receptor, la arrestina-GFP se recluta a la membrana plasmática y finalmente se endocitosa, dando lugar a estructuras vesiculares.


```{figure} ./img/user-guide-open-img.png
---
nombre: open-img
---
Abra el conjunto de datos de ejemplo de U2OS
```

## 2. Categorizar imágenes

En el submenú «Categorías» de la izquierda, puede ver que ya hay 3 clases definidas para el proyecto de ejemplo U2OS. Para activar o desactivar la visualización de imágenes bajo un marca determinado, haga clic en el icono de filtros ![filters](./icons/filter-icon.svg) del panel derecho y active el marca que le interese en «Por categoría». Las clases son:
- Desconocida
- Representa las imágenes sin categorizar. Piximi predecirá posteriormente a qué clase pertenecen estas imágenes.
- Control positivo (GFP vesicular)
- Control negativo (GFP citoplasmático)

```{figure} ./img/user-guide-u2os-marca-highlight.png
---
nombre: u2os-labels
---
Explora el menú de categorías. Activar/desactivar (![marca](./icons/marca-icon.svg)/![marca](./icons/marca-off-icon.svg)) una categoría específica para mostrar/ocultar solo esas imágenes.

<!-- ```{margin} 
**Terminología**: Clasificamos en clases
``` -->

Asegúrese de que no haya ninguna imagen seleccionada haciendo clic en el icono "Deseleccionar" (![deselect](./icons/deselect-icon.svg). A continuación, haga clic una vez para seleccionar de 2 a 3 imágenes de la categoría desconocida que mejor se ajusten a la categoría "Control Negativo". Una vez seleccionadas, haga clic en "Categorizar" en la esquina superior derecha y seleccione "Control Negativo". Haga lo mismo con las 2 o 3 imágenes de "Control Positivo".

<!-- ```{admonition} ¿Cuántas imágenes debo categorizar?
:class: tip, dropdown
¿Debería añadirse esta información? Algo como:
Haga clic aquí para ver consideraciones al categorizar sus imágenes y decidir cuántas imágenes añadir a cada categoría.
``` -->

## 3. Modelo de tren

Haga clic en el botón "Clasificación" en "Tarea de aprendizaje" y luego personalice la configuración del ajuste del modelo haciendo clic en el icono "Ajustar modelo" ![fit-model](./icons/fit-model-icon.svg). En el menú que se abre, puede seleccionar varios parámetros para ajustar el entrenamiento del modelo. Abra el menú "Configuración del conjunto de datos" para encontrar el campo "Porcentaje de entrenamiento". Este valor controla qué fracción de las imágenes anotadas se utilizará para entrenar el modelo en Piximi. El resto se usará para probar cómo pocillo Piximi puede clasificar imágenes no vistas anteriormente. Por ahora, usaremos el valor predeterminado.

```{figure} ./img/user-guide-u2os-fit-settings.png
---
Nombre: u2os-fit-settings
---
Abra la configuración del clasificador.
```

En la esquina superior derecha, haz clic en el botón ![play-button](./icons/play-button-icon.svg) "Clasificador de Ajuste" para comenzar el entrenamiento. Piximi examinará el subconjunto de **entrenamiento** de las imágenes que has anotado e intentará descubrir qué vincula la imagen de entrada a una clase específica. Después, Piximi aplicará lo aprendido examinando el subconjunto de **validación** de imágenes y comparará las respuestas de los modelos con la clase de imagen.

```{figure} ./img/user-guide-run-fit.png
---
name: fit-settings
---
Explora la configuración del clasificador y luego pulsa ![play-button](./icons/play-button-icon.svg) para comenzar el entrenamiento.
```

En la parte inferior de la página de configuración de "Ajustar modelo", verá dos gráficos que se actualizan a medida que Piximi entrena el modelo; estos muestran la precisión y la pérdida del modelo a lo largo de épocas incrementales.

```{figure} ./img/user-guide-accuracy-plot.png
---
Nombre: gráfico de precisión de época
---
Historial de entrenamiento de un modelo de clasificador exitoso para el conjunto de datos de ejemplo U2OS.
```

```{admonition} ¿Qué es una época?
:class: tip, dropdown
Una época mide cuántas veces el modelo de aprendizaje profundo estudia el subconjunto de entrenamiento completo. A medida que aumenta el número de épocas, el modelo se optimiza para mejorar el rendimiento de la clasificación.

Sin embargo, aumentar el número de épocas no necesariamente produce mejores resultados, sino que puede provocar sobreajuste. Haga clic aquí para obtener más información sobre sobreajuste (se necesita un enlace).
```

La precisión mide el rendimiento del modelo pocillo y se calcula como la relación entre el número de predicciones correctas y el número total de predicciones. En este caso, la precisión se refiere a la precisión del modelo al determinar correctamente la clase de imágenes en el subconjunto de **entrenamiento**.

<!-- https://developers.google.com/machine-learning/crash-course/classification/accuracy -->
```{math}
:marca: accuracy_equation
Accuracy = \frac{\text{Número de predicciones correctas}}{\text{Número total de predicciones}}
```

La precisión de validación es la precisión cuando el modelo examina el subconjunto de datos de **validación**.

```{admonition} Precisión de validación vs. precisión
:class: tip, dropdown
Si observa que el valor de precisión de validación disminuye a medida que aumentan las épocas, pero la medición de precisión continúa aumentando, significa que su modelo se ajusta mejor al subconjunto de datos de entrenamiento, pero está perdiendo la capacidad de predecir con precisión con nuevos datos.

Esto se debe al **sobreajuste**, ya que el modelo empieza a detectar características en la imagen, como el ruido, que no son relevantes para la clasificación. En esencia, el sobreajuste ocurre cuando el modelo memoriza la respuesta a una pregunta específica, en lugar de determinarla desde cero.
```

La pérdida es otra métrica que se calcula en los subconjuntos de datos de entrenamiento y validación, y se representa como pérdida y pérdida de validación, respectivamente. La pérdida representa la suma de los errores que el modelo ha cometido durante la clasificación.

Ahora puede salir de la configuración de `Ajustar Modelo` haciendo clic en ![close](./icons/close-icon.svg) en la esquina superior izquierda del cuadro de diálogo.

```{figure} ./img/user-guide-exit-fit.png
---
name: fit-exit
---
Salga del menú de configuración de ajuste. ```

<!-- ```{margin} Título opcional
Diagnóstico del subajuste y sobreajuste del modelo: https://machinelearningmastery.com/learning-curves-for-diagnosing-machine-learning-model-performance/

Discusión sobre los conjuntos de entrenamiento, validación y prueba: https://github.com/piximi/prototype/discussions/217

Piximi no dispone actualmente de un conjunto de prueba de reserva.
``` -->

## 4. Predecir clases para datos no etiquetados

Una vez entrenado el modelo, puede hacer clic en ![chart](./icons/chart-icon.svg) "Evaluar" para ver métricas detalladas sobre su rendimiento pocillo. A continuación, puede hacer clic en ![marca](./icons/marca-important-icon.svg) "Predecir" para ejecutar el modelo entrenado con los datos sin anotaciones. Una vez clasificada una imagen, verá que el color de la miniatura de la imagen se actualiza a esa clase específica. En esta etapa, puede inspeccionar las clases predichas y aceptarlas manteniendo pulsado el botón "Aceptar Predicciones" o rechazarlas haciendo clic en "Borrar Predicciones" en el botón "Cerrar". Según el rendimiento del modelo, puede que desee añadir más imágenes basadas en las predicciones o ajustar la configuración de "Ajustar Modelo".

```{figure} ./img/user-guide-u2os-run-predict.png
---
Nombre: ejecutar-predecir
---
Predecir la clase de imágenes desconocidas usando su modelo entrenado.
```

<!-- ```{figure} ./img/user-guide-evaluate.png
---
nombre: evaluar
---
Por confirmar

```{admonition} Véase también
:class: seealso
Enlace a nuestra guía sobre modelos o a una guía en otro lugar. Por ejemplo:

Para obtener más información sobre las métricas de evaluación, consulte nuestra guía de evaluación de modelos.
```
``` -->

```{admonition} Copyright
:class: seealso

Las imágenes [BBBC016](https://bbbc.broadinstitute.org/BBBC016) utilizadas aquí están licenciadas bajo la [Licencia Creative Commons Atribución 3.0 Unported](https://creativecommons.org/licenses/by/3.0/) de Ilya Ravkin.
```


