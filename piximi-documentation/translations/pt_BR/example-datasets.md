# Conjuntos de dados de exemplo

O Piximi inclui vários conjuntos de dados de exemplo.
Eles são descritos abaixo, juntamente com suas fontes e licenças.
Se você utilizar qualquer um dos conjuntos de dados de exemplo em uma publicação, cite também o conjunto de dados original com a citação fornecida abaixo.

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
MNIST (Instituto Nacional de Padrões e Tecnologia Modificado) é um banco de dados de dígitos manuscritos frequentemente usado em aprendizado de máquina.
As imagens são em tons de cinza e 28x28 pixels, e cada imagem contém um único dígito.
Fornecemos um pequeno subconjunto do banco de dados completo do MNIST.

Acessamos o MNIST a partir de um [site](http://yann.lecun.com/exdb/mnist/) fornecido pelos autores originais. \
Licença MNIST: [CC-BY-SA-3](https://creativecommons.org/licenses/by-sa/3.0/) \
Citação MNIST doi: 10.1109/5.726791
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
*Caenorhabditis elegans* é um verme nematoide e um organismo modelo comumente utilizado.
Este conjunto de dados contém imagens de *C. elegans* transgênico expressando o promotor do gene *clec-60* fundido a GFP (*clec-60:GFP*) e um marcador de faringe mCherry.
Em vermes selvagens, *clec-60:GFP* é expresso em células intestinais posteriores, enquanto em mutantes *pmk-1(km25)*, a expressão de *clec-60:GFP* é elevada e visível na região anterior do intestino, próximo à faringe.
Há vários vermes visíveis em cada imagem.
O canal 1 é GFP, o canal 2 é mCherry.

Os dados de *C. elegans* foram fornecidos por Javier Irazoqui como BBBC012 na [Broad Bioimage Benchmark Collection](https://bbbc.broadinstitute.org/BBBC012). \
*C. elegans* licença: [CC0](https://creativecommons.org/publicdomain/zero/1.0/) \
*C. elegans* citação doi: 10.1038/nmeth.2083
````
`````

## Células U2OS humanas

`````{grid}
````{grid-item}
:columns: 3
```{image} img/example_project_icons/humanU2OSCellsExampleProjectIcon.png
:alt: humanU2OSCellsExampleIcon
:align: left
```
````
````{grid-item}
:columns: 9
Estas células U2OS humanas expressam β-arrestina-GFP e um GPCR órfão.
Quando o GPCR é estimulado, a β-arrestina-GFP é recrutada para a membrana plasmática e eventualmente endocitada, resultando em estruturas semelhantes a vesículas.
O canal 1 é GFP, o canal 2 é DNA.

Os dados das células U2OS foram fornecidos por Ilya Ravkin como BBBC016 na [Broad Bioimage Benchmark Collection](https://bbbc.broadinstitute.org/BBBC016). \
Licença U2OS: [CC-BY-3](https://creativecommons.org/licenses/by/3.0/) \
Citação U2OS doi: 10.1038/nmeth.2083
````
`````

## Culturas de citoplasma de células U20S humanas

`````{grid}
````{grid-item}
:columns: 3
```{image} img/example_project_icons/BBBC013ExampleProjectIcon.png
:alt: BBBC013ExampleIcon
:align: left
```
````
````{grid-item}
:columns: 9
Estas células humanas de osteossarcoma U2OS são transfectadas de forma estável com a proteína Forkhead marcada com fluorescência (FKHR-EGFP).
Em células em proliferação, a FKHR-EGFP está em constante trânsito entre o núcleo e o citoplasma.
Quando tratadas com fármacos que impedem a sinalização da PI3 quinase/PKB, a exportação nuclear é inibida e a FKHR-EGFP acumula-se no núcleo.
O canal 1 é FKHR-GFP, o canal 2 é DNA.

Os dados de cultura de citoplasma das células U2OS foram fornecidos por Ilya Ravkin como BBBC013 na [Broad Bioimage Benchmark Collection](https://bbbc.broadinstitute.org/BBBC013). \
Licença U2OS: [CC-BY-3](https://creativecommons.org/licenses/by/3.0/) \
Citação U2OS doi: 10.1038/nmeth.2083
````
`````

## Localização de PLP1 humano

`````{grid}
````{grid-item}
:columns: 3
```{image} img/example_project_icons/PLP1ExampleProjectIcon.png
:alt: PLP1ExampleIcon
:align: left
```
````
````{grid-item}
:columns: 9
Estas células HeLa humanas expressam a proteína PLP1 selvagem ou a variante associada à doença, que se localiza de forma diferente da versão saudável.
O canal 1 são artefatos, o canal 2 é a proteína PLP1 marcada com fluorescência e o canal 3 é DNA.

Os dados de localização da PLP1 humana foram fornecidos por Jessica Lacoste no [laboratório de Mikko Taipale](http://taipalelab.org/) na Universidade de Toronto. \
Licença humana PLP1: [CC0](https://creativecommons.org/publicdomain/zero/1.0/) \
Citação de PLP1 humano doi: 10.1016/j.cell.2024.09.003
````
`````
