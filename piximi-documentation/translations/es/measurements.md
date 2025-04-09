# Medidas

Si bien a veces el objetivo de un experimento es simplemente encontrar objetos o clasificar imágenes u objetos, otras veces queremos profundizar y aprender más sobre las imágenes u objetos que nos interesan. Aquí es donde entran en juego las *Medidas*.

Actualmente, Piximi admite dos tipos de mediciones: mediciones de intensidad, que funcionan con imágenes u objetos, y mediciones de forma/geometría, que funcionan solo con objetos. Próximamente se añadirán más categorías de mediciones. ¡Estén atentos!

Las medidas están disponibles en el ícono ![Medidas](./icons/ruler-icon.svg) en la barra superior de Piximi.

Las mediciones se crean en tablas individuales; cada tabla es específica de un tipo, ya sean imágenes o un tipo de objeto segmentado (como células). Puedes crear tantas tablas como quieras.

Cada tabla contiene mediciones desglosadas por *divisiones*: en esencia, ¿cuáles son las diferentes condiciones en este experimento (si las hay) y cómo debemos analizarlas? Cada tabla tiene su propio conjunto de divisiones, que puedes ajustar en cualquier momento.

# Creación de medidas en Piximi

1. Haga clic en el ícono [Medidas](./icons/ruler-icon.svg) en la barra superior de Piximi.

2. Haga clic en el botón "+" junto a la palabra "Tablas" para crear una nueva tabla de medidas. Puede crear tantas tablas como desee para representar diferentes imágenes u objetos, desglosados en diferentes subconjuntos.

```{figure} ./img/measurement-walkthrough/measure-00-pre-measurement.png
---
nombre: medida-00-tabla-más
Escala: 50%
---
El botón `+` en la parte superior del menú Tablas le permite agregar una nueva tabla
```

3. Seleccione el tipo de tabla que desea medir. Recuerde que los tipos incluyen las imágenes, así como cualquier objeto creado mediante segmentación o anotación.

```{figure} ./img/measurement-walkthrough/measure-01-create-table.png
---
nombre: measure-01-create-table
escala: 50%
---
Seleccione el tipo de tabla de medición que desea crear
```

4. Piximi comenzará a calcular las métricas en segundo plano. Dependiendo de la cantidad de ejemplos presentes en ese tipo, esto puede tardar unos minutos; un indicador mostrará el progreso.

```{figure} ./img/measurement-walkthrough/measure-02-spin- while-creating-table.png
---
nombre: medida-02-giro-mientras-crea-tabla
Escala: 50%
---
El indicador circular junto a "Tablas" indica el estado de Piximi en la generación de mediciones. Asegúrate de mantener abierta la ventana de Piximi (considera moverla a una pestaña independiente) para que los cálculos continúen.
```

5. Una vez realizados los cálculos preliminares, puede seleccionar las mediciones que desea realizar, así como la forma en que desea subdividir los datos (actualmente por `Categoría` o por `Partición`; si solo tiene una categoría, no hay problema, ¡pero debe hacer clic aquí!). Como antes, esto llevará un tiempo, así que simplemente deje abierta la pestaña Piximi y el indicador circular le indicará cuánto tiempo tardará.

```{figure} ./img/measurement-walkthrough/measure-03-select-splits-and-measurements.png
---
nombre: measure-03-select-splits-and-measurements
escala: 50%
---
Seleccione la división o divisiones que desea medir para cada tabla, así como las medidas que desea para esa tabla. Al igual que durante la creación de la tabla, un indicador circular junto a la palabra "Medidas" le indicará el progreso de Piximi en la generación de sus medidas.
```

6. Una vez generadas las mediciones, aparecerán en el área principal de una cuadrícula de datos. En la cuadrícula, podrá ver el nombre de la medición, el subconjunto (o "Split") de los datos representados y la media, la mediana y la desviación estándar de los datos para esa característica en ese subconjunto.

```{figure} ./img/measurement-walkthrough/measure-04-data-grid.png
---
Nombre: medida-04-cuadrícula-de-datos
---
La cuadrícula de datos de Piximi
```

7. Si desea representar gráficamente los datos en Piximi, simplemente navegue a la cuadrícula de datos que contiene los datos que desea representar y haga clic en la pestaña "Gráficos" en la parte superior. Puede crear tantos gráficos como desee pulsando el botón "+" en la pestaña "Gráficos". Los gráficos también se pueden exportar guardándolos en formato PNG. Piximi incluye varios tipos de gráficos, como gráficos de dispersión, gráficos de enjambre e histogramas.

```{figure} ./img/measurement-walkthrough/measure-05-scatter.png
---
nombre: measure-05-scatter
escala: 50%
---
Los gráficos de dispersión generados en Piximi pueden tener medidas X, Y y Tamaño seleccionadas; también pueden mostrar colores según las divisiones seleccionadas (con numerosos mapas de colores para elegir). ¡Presta atención al botón "Guardar como PNG" en la esquina inferior derecha!

```{figure} ./img/measurement-walkthrough/measure-06a-swarm-no-category.png
---
nombre: medida-06a-enjambres
Escala: 50%
---
Las tramas de enjambre se pueden mostrar por sí solas...
```

```{figure} ./img/measurement-walkthrough/measure-06b-swarm-with-category.png
---
nombre: measure-06b-swarms
escala: 50%
---
... o con un diagrama de caja resumen superpuesto.
```

```{figure} ./img/measurement-walkthrough/measure-07-histogram.png
---
nombre: medida-07-histograma
Escala: 50%
---
Puede elegir representar sus datos como un histograma, con un número personalizado de contenedores.
```

Si desea realizar análisis más profundos de sus datos (¡y debería hacerlo!), puede exportar sus tablas de datos desde el menú de mediciones. Esto le permitirá realizar los análisis posteriores que desee.

```{figure} ./img/measurement-walkthrough/measure-08-export-measurements.png
---
nombre: measure-08-export-measurements
escala: 50%
---
Piximi le permite exportar sus datos a programas externos
```
