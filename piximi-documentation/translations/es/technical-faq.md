# Preguntas técnicas frecuentes

- [Si Piximi se bloquea, ¿cómo puedo recuperar mi proyecto?](if-piximi-crashes)
- [¿Puedo ejecutar Piximi sin conexión?](puedo-ejecutar-piximi-sin-conexión)
- ¿Hay registro?
- ¿Qué modelos se utilizan?
- [¿Qué pasa si pierdo mi conexión a Internet mientras el modelo está entrenando?](¿Qué-pasa-si-se-pierde-internet?)
- ¿Es posible ver un resumen del entrenamiento? (ver-un-resumen-del-entrenamiento)
- ¿Piximi usa una GPU?
- [Si ejecuto Piximi varias veces, ¿por qué obtengo diferentes resultados de entrenamiento?](run-model-multiple-times)

(si-piximi-falla)=
## Si Piximi falla, ¿cómo puedo recuperar mi proyecto?

Actualmente, no existe un mecanismo para guardar el trabajo automáticamente. Se recomienda encarecidamente guardar el trabajo manualmente periódicamente a medida que avanza.

La opción "Guardar proyecto" guardará el estado completo del proyecto, incluidas todas las imágenes y anotaciones realizadas en ellas, y las configuraciones del modelo (preprocesamiento, arquitectura, optimización y configuraciones del conjunto de datos), pero sin incluir los pesos del modelo entrenado.

![Opción para guardar proyecto](./img/save_project_1.png)

![Cuadro de diálogo Guardar proyecto](./img/save_project_2.png)

Para guardar los pesos del modelo entrenado, utilice la opción "Guardar clasificador".

![Opción para guardar clasificador](./img/save_classifier_1.png)

![Cuadro de diálogo Guardar clasificador](./img/save_classifier_2.png)

Si Piximi falla, vuelva a cargar su trabajo utilizando la opción "Abrir proyecto" para cargar imágenes y configuraciones del proyecto.

![Opción Abrir proyecto](./img/open_project_1.png)

![Abrir ubicación del proyecto](./img/open_project_2.png)

Utilice la opción "Abrir clasificador" para cargar un modelo entrenado y sus parámetros.

![Opción de clasificador abierto](./img/open_classifier_1.png)

Asegúrese de seleccionar tanto el archivo bin de pesos (parámetros del modelo) como el archivo json (arquitectura del modelo).

![Cuadro de diálogo Abrir clasificador](./img/open_classifier_2.png)

![Ubicación del clasificador abierto](./img/open_classifier_3.png)

(puedo ejecutar piximi sin conexión)
## ¿Puedo ejecutar Piximi sin conexión?

Sí. Una vez que accedas a la aplicación, no necesitas conexión a internet, siempre y cuando no cierres ni actualices la pestaña. Si cierras o actualizas la pestaña, necesitarás conexión a internet para volver a cargar Piximi.

También puedes servir la aplicación localmente con Docker. Las instrucciones para ello se encuentran en el [README del repositorio principal de Piximi](https://github.com/piximi/piximi#docker). Tras descargar el código fuente, no se necesita conexión a internet para servir localmente y usar la aplicación.

No se necesita conexión a internet para guardar o cargar proyectos y modelos de clasificadores.
Los modelos de segmentación sí requieren conexión a internet y algunos, como Cellpose, transmiten datos por internet.
Los modelos de segmentación que transmiten datos por internet están claramente indicados.

(¿hay registro?)=
## ¿Existe registro?

No. Piximi no registra ninguna información, no realiza ninguna telemetría ni realiza ninguna llamada API externa.

(que-modelos-se-utilizan)=
## ¿Qué modelos de clasificación se utilizan?

SimpleCNN utiliza dos capas convolucionales, dos capas de agrupamiento máximo y una capa densa. Todas las capas se inicializan con pesos aleatorios y se entrena el modelo completo.

[MobileNetV1](https://github.com/tensorflow/models/blob/master/research/slim/nets/mobilenet_v1.md) (en concreto, `MobileNet_v1_0.25_224`), que es un modelo preentrenado para la clasificación de imágenes. Solo se modifican los parámetros de la capa convolucional final durante el entrenamiento; el resto de los parámetros del modelo se congelan.

(¿Qué pasa si se pierde Internet?)
## ¿Qué pasa si se pierde la conexión a Internet mientras un modelo está entrenando?

Una vez cargado Piximi, no se necesita conexión a internet. Puedes seguir trabajando, guardar tu proyecto y modelo, y cargar proyectos y modelos guardados previamente. Si cierras la pestaña de Piximi o pulsas "actualizar" en el navegador, necesitarás conexión a internet para volver a cargar Piximi.

No es necesaria conexión a Internet para guardar o cargar proyectos y modelos.

(ver resumen de capacitación)
## ¿Es posible ver un resumen del entrenamiento?

Sí. El resumen del modelo, la precisión y la pérdida se muestran en el cuadro de diálogo Clasificador y permanecerán allí incluso si sale del cuadro de diálogo y vuelve a ingresar.

![Gráficos de entrenamiento](./img/training_plots.png)

Hay métricas adicionales disponibles a través del cuadro de diálogo Evaluación.

![Evaluar opción](./img/evaluate_option.png)

![Cuadro de diálogo de evaluación](./img/evaluate_dialog.png)

Sin embargo, si se entrena un nuevo modelo o se vuelve a entrenar el actual, estos se perderán. Para evitarlo, guarde el modelo actual antes de realizar cualquier entrenamiento adicional.

(¿piximi usa una gpu?)
## ¿Piximi utiliza una GPU?

Sí. Piximi utiliza Tensorflow.js, que a su vez utiliza [WebGL](https://en.wikipedia.org/wiki/WebGL).

Si usan Chrome, los usuarios deberán habilitar el uso de GPU yendo a preferencias -> avanzado -> sistema y habilitando la opción "Usar aceleración de hardware cuando esté disponible".

(ejecutar-modelo-varias-veces)=
## Si ejecuto el mismo modelo varias veces, ¿por qué obtengo resultados de entrenamiento diferentes?

Es posible obtener diferentes resultados de entrenamiento al entrenar con los mismos datos. Hay dos razones principales para esto: la primera es el resultado del conjunto de datos de validación aleatorio que Piximi selecciona al presionar ![play-button](./icons/play-button-icon.svg) `Fit Classifier`. Por ejemplo, la primera vez que ajusta el clasificador, podrían seleccionarse las imágenes 1, 2 y 3 para el conjunto de datos de validación. Una segunda ejecución idéntica del clasificador de ajuste podría seleccionar las imágenes 4, 5 y 6 como su conjunto de datos de validación, que se ven diferentes a las imágenes seleccionadas en la primera ejecución. La selección de imágenes de validación es aleatoria para que el rendimiento del modelo pueda evaluarse independientemente de las imágenes seleccionadas para la validación. Sin embargo, incluso si su conjunto de datos de validación fuera idéntico, sus resultados podrían ser ligeramente diferentes entre ejecuciones debido a ciertos pasos en el proceso de entrenamiento que recurren a números aleatorios o mezclan los datos; actualmente no proporcionamos, pero podríamos hacerlo en el futuro, formas de estabilizar estos parámetros entre ejecuciones.

Teniendo en cuenta estas consideraciones, guarde sus modelos con frecuencia si cree que tienen un rendimiento pocillo: siempre puede eliminar un modelo antiguo más tarde, pero no puede asegurarse de que un modelo generado se genere nuevamente si no se ha guardado.
