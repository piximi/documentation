# Crie culturas de células com CellProfiler

Embora seja possível segmentar/anotar e classificar objetos inteiramente no Piximi, você também pode usar o [CellProfiler](https://cellprofiler.org/) para segmentar células individuais e criar imagens recortadas de células únicas que podem ser abertas no Piximi e categorizadas.

Este guia explica como criar um pipeline do CellProfiler que primeiro identificará os núcleos usando o módulo `IdentifyPrimaryObjects`, seguido pela identificação das células com o módulo `IdentifySecondaryObjects`. Em seguida, criaremos uma imagem RGB multicanal com o DNA colorido em azul e o GFP colorido em verde. Por fim, essas imagens RGB multicanal serão recortadas com base no objeto de célula identificado anteriormente usando o módulo `SaveCroppedObjects`.

Os recortes de imagens de células individuais para o projeto de exemplo `Cultivos de Citoplasma de Células U2OS Humanas` da Piximi foram criados usando este fluxo de trabalho. As imagens são do [conjunto de dados de translocação de citoplasma-núcleo BBCC013](https://bbbc.broadinstitute.org/BBBC013) da Coleção de Referência de Bioimagem Broad. O pipeline do CellProfiler usado no exemplo a seguir pode ser {download}`baixado aqui <downloads/BBBC013-translocation-crop-4.2.2.cppipe.zip>` para a versão **4.2.2** do CellProfiler. Para CellProfiler **4.2.1** ou anterior, {download}`baixe este pipeline <downloads/BBBC013-translocation-crop-4.2.1.cppipe.zip>`.

## 1. Importar imagens

Para começar, arraste e solte suas imagens no módulo de entrada `Imagens` do CellProfiler.

```{figure} ./img/user-guide-images-input-view.png
---
nome: imagens-entrada-visualização
---
Arraste e solte suas imagens no módulo de entrada `Imagens`.
```

Em seguida, selecione as regras apropriadas para categorizar seus arquivos no módulo de entrada `NamesAndTypes`. Nessas imagens, os arquivos que contêm `Channel2` no nome recebem o nome `rawDNA`, enquanto as imagens que contêm `Channel1` no nome recebem o nome `rawGFP`.

```{figure} ./img/user-guide-names-and-types-view.png
:class: img-shadow
---
name: NamesAndTypes-view
---
No módulo `NamesAndTypes`, atribua nomes apropriados aos canais DNA e GFP.
```

## 2. Identificar objetos primários

Em seguida, adicione um módulo `IdentifyPrimaryObjects` e defina sua imagem de DNA (por exemplo, `rawDNA`) como imagem de entrada. Nomeie esse objeto primário como `Nuclei`. Ajuste os parâmetros para obter uma segmentação adequada ao usar o modo de teste.

```{figure} ./img/user-guide-identify-primary-object-view.png
---
nome: IdentifyPrimaryObjects-view
---
Adicione um módulo IdentifyPrimaryObjects e ajuste os parâmetros para obter segmentação adequada de objetos da imagem `rawDNA`.
```

## 3. IdentifySecondaryObjects

Adicione um módulo `IdentifySecondaryObjects` e selecione a imagem da célula (por exemplo, `rawGFP`) como imagem de entrada e `Nuclei` como objeto de entrada. Nomeie este objeto secundário como `Células`. Você pode ajustar os parâmetros de segmentação para identificar seus objetos de célula ou definir o método `Distância - N` para identificar objetos secundários com uma distância que capture a borda da maioria das células (por exemplo, `10`).

```{figure} ./img/user-guide-identify-secondary-object-view.png
---
name: IdentifySecondaryObjects-view
---
Adicione um módulo IdentifySecondaryObjects usando `rawGFP` como imagem de entrada e `Nuclei` como objeto de entrada.
```

## 4. Cinza para Colorir

Agora, criaremos uma imagem RGB multicanal usando as imagens de entrada `rawDNA` e `rawGFP`. Adicione um módulo `GrayToColor` e selecione `rawGFP` para colorir em verde e `rawDNA` para colorir em azul. Nomeie a imagem de saída como `GFPandDNA`.

```{figure} ./img/user-guide-color-to-gray-view.png
---
nome: ColorToGray-view
---
Adicione um módulo ColorToGray e defina `rawGFP` como verde e `rawDNA` como azul.
```

## 5. SaveCroppedObjects

Em seguida, adicione um módulo `SaveCroppedObjects` e selecione os objetos `Cells` em `IdentifySecondaryObjects`. Para a configuração `Image to crop`, selecione `GFPandDNA` criado pelo módulo `ColorToGray`. É essa imagem que será recortada em objetos `Cells` individuais. Selecione um diretório apropriado para salvar as imagens recortadas.

````{admonition} Modificações no pipeline se estiver usando o CellProfiler 4.2.1 ou anterior
:class: seealso, dropdown

As versões 4.2.1 e anteriores do CellProfiler também podem ser ajustadas para salvar imagens recortadas em subdiretórios com o nome do arquivo de entrada. Isso pode ser feito habilitando a extração de metadados e usando o nome do arquivo extraído no caminho de saída da subpasta em SaveCroppedObjects. Abaixo estão as alterações no pipeline mencionado acima para atingir este resultado. O pipeline acima, que foi modificado para o CellProfiler 4.2.1, pode ser {download}`baixado aqui <downloads/BBBC013-translocation-crop-4.2.1.cppipe.zip>`.

**1. Habilitar extração de metadados**

No módulo de entrada `Metadados`, selecione `Sim` na opção `Extrair Metadados`. No campo `Expressão regular para extrair do nome do arquivo`, insira a expressão regular `\-(?P<FileName>.*)\.`. Isso extrairá as informações após o primeiro `-` e antes do último `.` dos nomes de arquivo de imagem no conjunto de dados `BBBC013`.

*Por que extrair metadados para esta parte do nome do arquivo?*
Para cada imagem, há dois nomes de arquivo individuais, representando `channel1` ou `channel2`. Se você optar por extrair o nome de arquivo inteiro, `SaveCroppedObjects` não conseguirá decidir qual nome de arquivo usar e, em vez disso, usará `None`. Ao usar a expressão regular mencionada acima, o nome do arquivo extraído será o mesmo nos dois canais.

```{figure} ./img/user-guide-metadata-view-4.2.1.png
---
name: metadata-view-4.2.1
---
Use a expressão regular `\-(?P<FileName>.*)\.` para extrair um nome de arquivo apropriado das imagens BBBC013.
```

**2. SalvarObjetosCortados**

Em `SaveCroppedObjects`, selecione `Subpasta Pasta de Saída Padrão` e então **clique com o botão direito** na caixa de texto `subpasta` e selecione `NomeDoArquivo`.

```{figure} ./img/user-guide-save-cropped-objects-view-4.2.1.png
---
nome: SaveCroppedObjects-view-4.2.1
---

Clique com o botão direito na caixa de texto `Subpasta` e selecione `Nome do arquivo`, conforme definido anteriormente no módulo Metadados.

```

````

```{figure} ./img/user-guide-save-cropped-objects-view.png
---
nome: SaveCroppedObjects-view
---
Adicione um módulo SaveCroppedObjects e selecione o `Objeto` e a `Imagem` desejados para recortar. No CellProfiler `4.2.2`, você pode optar por salvar os recortes em pastas aninhadas com o nome do arquivo de imagem de entrada.
```

```{admonition} Direitos autorais
:class: seealso

As imagens [BBBC013](https://bbbc.broadinstitute.org/BBBC013) usadas aqui são licenciadas sob uma [Licença Creative Commons Atribuição 3.0 Não Adaptada](https://creativecommons.org/licenses/by/3.0/) por Ilya Ravkin.
```
