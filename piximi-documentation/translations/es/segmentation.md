# Segmentación

# Segmentación de imágenes

El módulo de segmentación de imágenes permite a los investigadores identificar rápidamente células o núcleos mediante la selección de modelos de segmentación preentrenados. Los usuarios pueden elegir un modelo entre las opciones disponibles y aplicarlo a las imágenes abiertas y seleccionadas en Piximi para su inferencia.

## 1. Cargar imágenes

Para empezar, carga las imágenes de un conjunto de datos de ejemplo incluido en Piximi. Para ello, pulsa "Abrir" en la esquina superior izquierda. Selecciona "Imagen" > "Imagen de ejemplo" > "Experimento de pintura U2OS celular". Si prefieres cargar tus propias imágenes, pulsa "Abrir imagen" en la esquina superior derecha.

Las imágenes corresponden a U2OS células U2OS células tratado con un reactivo de ARNi (https://portals.broadinstitute.org/gpp/public/clone/details?cloneld=TRCN0000195467) y teñido para un experimento de celular-painting.

## 2. Modelos de carga

Actualmente, el anotador proporciona cinco modelos previamente entrenados, cada uno diseñado para tareas de segmentación específicas:

- **Cellpose**: Un algoritmo generalista para la segmentación celular y entrenado en imágenes de fluorescencia
- **Stardistfluo**: Entrenado en imágenes de fluorescencia, ideal para identificar objetos con formas convexas en estrella.
- **StardistVHE**: Para identificar núcleos en imágenes teñidas con hematoxilina y eosina (H&E).
- StardistFluo
- **COCO-SSD**: Para identificar objetos en “imágenes naturales” (o fotografías) de 80 clases diferentes (como humanos y cometas) utilizando el formato COCO
- **Segmentación de Glándulas**: Para segmentar las glándulas intestinales entrenadas en el Concurso de Imágenes de Histología de Colon y Segmentación de Glándulas (GlaS)29

En el submenú 'Tarea de aprendizaje' del lado izquierdo, haga clic en el botón 'Segmentación' para cambiar la clasificación a segmentación celular.


<div align="center">

![texto alternativo](img/model_predict.png)

*Interfaz de segmentación*

</div>

Luego, haga clic en el botón "+ Cargar modelo" para seleccionar un modelo. Actualmente, solo se puede seleccionar el modelo preentrenado.

<div align="center">

![texto alternativo](img/load_pretrained_model.png)

*Selección del modelo de segmentación*

</div>

Nota: Cellpose actualmente es único porque se ejecuta en el servidor BioEngine30 del proyecto AI4Life, mientras que StarDist, al igual que otros modelos de Piximi, se ejecuta solo en el cliente en el navegador del usuario sin que los datos salgan de su máquina.

¡Esté atento a la "carga local" y a la "función remota"!

## 3. Ejecute el modelo
Haga clic en ![alt text](icons/marca-icon.svg) 'predecir modelo' para ejecutar el modelo que seleccionó para la imagen seleccionada para la segmentación

<div align="center">

![texto alternativo](img/model_predict.png)
*Predicción del modelo*

</div>


## 4. Salida de la segmentación

En este ejemplo, usamos el modelo Cellpose-celular para segmentar células en la imagen. Para ver el células segmentado, cambie los canales de "Imagen" a "Cellpose-celular" ![alt text](icons/cloud-upload-icon.svg) en la parte superior central de la interfaz.

<div align="center">

![alt text](img/segmentation_output.png)
*Ejemplos de resultados de segmentación*

</div>

Los resultados de los objetos segmentados se pueden utilizar para análisis posteriores, incluidas anotaciones, mediciones y clasificaciones.
