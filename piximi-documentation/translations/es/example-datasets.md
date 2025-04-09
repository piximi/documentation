# Conjuntos de datos de ejemplo

Piximi incluye varios conjuntos de datos de ejemplo.
Se describen a continuación, junto con sus fuentes y licencias.
Si utiliza alguno de los conjuntos de datos de ejemplo en una publicación, cite también el conjunto de datos original mediante la cita que se proporciona a continuación.

## MNIST

`````{grid}
````{grid-item}
:columns: 3
```{image} img/example_project_icons/mnistExampleProjectIcon.png
:alt: mnistExampleIcon
:align: left
```
````
````{grid-item}
:columns: 9
MNIST (Instituto Nacional de Estándares y Tecnología Modificado) es una base de datos de dígitos manuscritos que se utiliza frecuentemente en aprendizaje automático.
Las imágenes están en escala de grises y tienen un tamaño de 28x28 píxeles, y cada imagen contiene un solo dígito.
Ofrecemos una pequeña parte de la base de datos completa de MNIST.

Accedimos a MNIST desde un sitio web proporcionado por los autores originales. Licencia MNIST: [CC-BY-SA-3](https://creativecommons.org/licenses/by-sa/3.0/) Cita MNIST doi: 10.1109/5.726791
````
`````

## *C. elegans*

`````{grid}
````{grid-item}
:columns: 3
```{image} img/example_project_icons/cElegansExampleProjectIcon.png
:alt: cElegansExampleIcon
:align: left
```
````
````{grid-item}
:columns: 9
*Caenorhabditis elegans* es un gusano nematodo y un organismo modelo de uso común.
Este conjunto de datos contiene imágenes de *C. elegans* transgénico que expresa el promotor del gen *clec-60* fusionado a GFP (*clec-60:GFP*) y una faringe de mCherry marca. En gusanos silvestres, *clec-60:GFP* se expresa en el intestino posterior células, mientras que en mutantes *pmk-1(km25)*, la expresión de *clec-60:GFP* es elevada y visible en el intestino anterior, cerca de la faringe.
Se observan múltiples gusanos en cada imagen.
El canal 1 corresponde a GFP y el canal 2 a mCherry.

Los datos de *C. elegans* fueron proporcionados por Javier Irazoqui como BBBC012 en la [Broad Bioimage Benchmark Collection](https://bbbc.broadinstitute.org/BBBC012).

Licencia de *C. elegans*: [CC0](https://creativecommons.org/publicdomain/zero/1.0/)

*C. elegans* cita doi: 10.1038/nmeth.2083
````
`````

## Humano U2OS-células

`````{grid}
````{grid-item}
:columns: 3
```{image} img/example_project_icons/humanU2OSCellsExampleProjectIcon.png
:alt: humanU2OSCellsExampleIcon
:align: left
```
````
```{grid-item}
:columns: 9
Estos U2OS humanos células expresan b-arrestina-GFP y un GPCR huérfano.
Cuando se estimula el GPCR, la b-arrestina-GFP se recluta a la membrana plasmática y finalmente se endocita, dando lugar a estructuras vesiculares.
El canal 1 es GFP, el canal 2 es ADN.

Los datos U2OS células fueron proporcionados por Ilya Ravkin como BBBC016 en la [Colección de Referencia de Bioimagen Amplia](https://bbbc.broadinstitute.org/BBBC016).

Licencia U2OS: [CC-BY-3](https://creativecommons.org/licenses/by/3.0/)
Cita U2OS doi: 10.1038/nmeth.2083
````
`````

## Cultivos de citoplasma humano U20S-células

`````{grid}
````{grid-item}
:columns: 3
```{image} img/example_project_icons/BBBC013ExampleProjectIcon.png
:alt: BBBC013ExampleIcon
:align: left
```
````
```{grid-item}
:columns: 9
Estos osteosarcomas U2OS humanos células se transfectan de forma estable con la proteína Forkhead marcada con fluorescencia (FKHR-EGFP).
En la proliferación de células, la FKHR-EGFP se mueve constantemente entre el núcleo y el citoplasma. Cuando se trata con fármacos que inhiben la señalización de la PI3 quinasa/PKB, la exportación nuclear se inhibe y FKHR-EGFP se acumula en el núcleo.
El canal 1 es FKHR-GFP, el canal 2 es ADN.

Los datos de cultivo de citoplasma U2OS células fueron proporcionados por Ilya Ravkin como BBBC013 en la [Broad Bioimage Benchmark Collection](https://bbbc.broadinstitute.org/BBBC013).

Licencia U2OS: [CC-BY-3](https://creativecommons.org/licenses/by/3.0/)
Cita U2OS doi: 10.1038/nmeth.2083
````
`````

## Localización del PLP1 humano

`````{grid}
````{grid-item}
:columns: 3
```{image} img/example_project_icons/PLP1ExampleProjectIcon.png
:alt: PLP1ExampleIcon
:align: left
```
````
```{grid-item}
:columns: 9
Estas células HeLa humanas células expresan la proteína PLP1 de tipo silvestre o la variante asociada a la enfermedad, que se localiza de forma diferente a la versión sana.
El canal 1 representa artefactos, el canal 2 representa la proteína PLP1 marcada con fluorescencia y el canal 3 representa ADN.

Los datos de localización del gen PLP1 humano fueron proporcionados por Jessica Lacoste en el laboratorio de Mikko Taipale en la Universidad de Toronto.
Licencia del gen PLP1 humano: [CC0](https://creativecommons.org/publicdomain/zero/1.0/)
Cita del gen PLP1 humano: doi: 10.1016/j.celular.2024.09.003
````
`````
