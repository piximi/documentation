# Classificação de imagens
## 1. Carregar imagens

Para começar, carregaremos as imagens de um conjunto de dados de exemplo incluído no Piximi pressionando ![abrir](./icons/open-folder-icon.svg) `Abrir` no canto superior esquerdo. Selecione `Abrir` > `Projeto` > `Projeto de Exemplo` > `Projeto de Exemplo de Células U2OS Humanas` para começar. Como alternativa, se desejar carregar suas próprias imagens, acesse `Abrir` > `Imagem` > `Nova Imagem`.

As imagens correspondem a células U2OS coexpressando arrestina-GFP e um GPCR órfão. Após a estimulação do receptor, a arrestina-GFP é recrutada para a membrana plasmática e, eventualmente, endocitada, resultando em estruturas semelhantes a vesículas.


```{figure} ./img/user-guide-open-img.png
---
nome: open-img
---
Abra o conjunto de dados de exemplo do U2OS
```

## 2. Categorizar imagens

No submenu `Categorias`, à esquerda, você pode ver que já existem 3 classes definidas para o projeto de exemplo U2OS. Para ativar/desativar a exibição de imagens sob um determinado rótulo, clique no ícone de filtros ![filters](./icons/filter-icon.svg) no painel direito e alterne o rótulo de interesse em `Por categoria`. As classes são:
- Desconhecido
- Representa as imagens não categorizadas. O Piximi preverá a qual classe essas imagens pertencem posteriormente.
- Controle Positivo (GFP vesicular)
- Controle Negativo (GFP citoplasmático)

```{figure} ./img/user-guide-u2os-label-highlight.png
---
name: u2os-labels
---
Explore o menu de categorias. Ative/desative (![label](./icons/label-icon.svg)/![label](./icons/label-off-icon.svg)) uma categoria específica para mostrar/ocultar apenas essas imagens.
```

<!-- ```{margin} 
**Terminologia**: Categorizamos em classes
``` -->

Certifique-se de que nenhuma imagem esteja selecionada clicando no ícone ![desmarcar](./icons/deselect-icon.svg) `Desmarcar`. Em seguida, clique uma vez para selecionar de 2 a 3 imagens da categoria desconhecida que melhor se enquadram na categoria `Controle Negativo`. Após selecionar, clique em `Categorizar` no canto superior direito e selecione `Controle Negativo`. Faça o mesmo para 2 a 3 imagens de `Controle Positivo`.

<!-- ```{admonition} Quantas imagens devo categorizar?
:class: tip, dropdown
Esta informação deve ser adicionada? Algo como:
Clique aqui para considerações ao categorizar suas imagens e decidir quantas imagens adicionar a cada categoria.
``` -->

## 3. Modelo de trem

Clique no botão "Classificação" em "Tarefa de Aprendizagem" e prossiga para personalizar as configurações de ajuste do modelo clicando no ícone "Ajustar Modelo" ![fit-model](./icons/fit-model-icon.svg). No menu que se abre, você pode selecionar vários parâmetros para ajustar o treinamento do modelo. Abra o menu "Configurações do Conjunto de Dados" para encontrar o campo "Porcentagem de Treinamento". Este valor controla qual fração das imagens que você anotou será usada para treinar o modelo no Piximi. O restante será usado para testar a eficiência do Piximi na classificação de imagens não vistas anteriormente. Usaremos o valor padrão por enquanto.

```{figure} ./img/user-guide-u2os-fit-settings.png
---
nome: u2os-fit-settings
---
Abra as configurações do classificador.
```

No canto superior direito, clique no botão ![play-button](./icons/play-button-icon.svg) `Fit Classifier` para iniciar o treinamento. O Piximi agora analisará o subconjunto de **treinamento** das imagens que você anotou e tentará descobrir o que vincula a imagem de entrada a uma classe específica. Em seguida, o Piximi aplicará o que aprendeu examinando o subconjunto de **validação** das imagens e comparará as respostas dos modelos com a classe da imagem.

```{figure} ./img/user-guide-run-fit.png
---
name: fit-settings
---
Explore as configurações do classificador e pressione ![play-button](./icons/play-button-icon.svg) para iniciar o treinamento.
```

Na parte inferior da página de configurações do `Fit Model`, você verá dois gráficos atualizados conforme o Piximi treina o modelo; eles mostram a precisão e a perda do modelo ao longo de períodos incrementais.

```{figure} ./img/user-guide-accuracy-plot.png
---
nome: gráfico-de-precisão-de-época
---
Histórico de treinamento de um modelo de classificador bem-sucedido para o conjunto de dados de exemplo U2OS.
```

```{admonition} O que é uma época?
:class: tip, dropdown
Uma época é uma medida de quantas vezes todo o subconjunto de treinamento é estudado pelo modelo de aprendizado profundo. À medida que o número de épocas aumenta, o modelo se otimiza para melhorar o desempenho da classificação.

No entanto, aumentar o número de épocas não leva necessariamente a melhores resultados e pode, em vez disso, resultar em sobreajuste. Clique aqui para ler mais sobre sobreajuste (precisa de link).
```

``Precisão`` é uma medida do desempenho do modelo e é calculada como a razão entre o número de previsões corretas e o número total de previsões. Nesse caso, ``Precisão`` refere-se à precisão do modelo em determinar corretamente a classe de imagens no subconjunto de imagens de **treinamento**.

<!-- https://developers.google.com/machine-learning/crash-course/classification/accuracy -->
```{math}
:label: accuracy_equation
Precisão = \frac{\text{Número de previsões corretas}}{\text{Número total de previsões}}
```

`Precisão de Validação` é a precisão quando o modelo examina o subconjunto de dados de **validação**.

```{admonition} Precisão de validação vs. precisão
:class: tip, dropdown
Se você notar que o valor de `Precisão de Validação` diminui à medida que os períodos aumentam, mas sua medida de `Precisão` continua aumentando, isso significa que seu modelo está se ajustando melhor ao subconjunto de dados de treinamento, mas está perdendo a capacidade de prever com precisão novos dados.

Isso é resultado de **sobreajuste**, pois seu modelo começa a captar características na imagem, como ruído, que não são relevantes para a classificação. Em essência, o sobreajuste ocorre quando o modelo memoriza a resposta para uma pergunta específica, em vez de determinar a resposta do zero.
```

A perda é outra métrica calculada com base nos subconjuntos de dados de treinamento e validação, sendo representada como perda e perda de validação, respectivamente. A perda representa a soma dos erros cometidos pelo modelo durante a classificação.

Agora você pode sair das configurações de ``Ajustar Modelo` clicando em ![fechar](./icons/close-icon.svg) no canto superior esquerdo da caixa de diálogo.

```{figure} ./img/user-guide-exit-fit.png
---
name: fit-exit
---
Saia do menu de configurações de ajuste.
```

<!-- ```{margin} Um título opcional
Diagnosticando subajuste e sobreajuste de modelos: https://machinelearningmastery.com/learning-curves-for-diagnosing-machine-learning-model-performance/

Discussão sobre conjuntos de treinamento, validação e teste: https://github.com/piximi/prototype/discussions/217

Atualmente, o Piximi não possui um conjunto de teste de retenção.
``` -->

## 4. Prever classes para dados não rotulados

Após o treinamento do seu modelo, você pode clicar em ![chart](./icons/chart-icon.svg) `Avaliar` para ver métricas detalhadas sobre o desempenho do modelo. Em seguida, você pode clicar em ![label](./icons/label-important-icon.svg) `Prever` para executar o modelo treinado nos dados não anotados. Após a classificação da imagem, você verá a cor ![label](./icons/label-icon.svg) na miniatura da imagem ser atualizada para essa classe específica. Nesta etapa, você pode inspecionar as classes previstas e aceitar as previsões clicando e segurando ![check-icon](./icons/check-icon.svg) `Aceitar Previsões` ou rejeitá-las clicando em ![close](./icons/close-icon.svg) `Limpar Previsões`. Dependendo do desempenho do modelo, pode ser desejável anotar mais imagens com base nas previsões e/ou ajustar as configurações de `Ajustar modelo`.

```{figure} ./img/user-guide-u2os-run-predict.png
---
nome: executar-prever
---
Preveja a classe de imagens desconhecidas usando seu modelo treinado.
```

<!-- ```{figure} ./img/user-guide-evaluate.png
---
nome: avaliar
---
A confirmar

```{admonition} Veja também
:class: seealso
Link para o nosso guia ou para um guia em outro lugar. Ex.:

Para mais informações sobre as métricas de avaliação, consulte nosso guia de avaliação de modelos.
```
``` -->

```{admonition} Direitos autorais
:class: seealso

As imagens [BBBC016](https://bbbc.broadinstitute.org/BBBC016) usadas aqui são licenciadas sob uma [Licença Creative Commons Atribuição 3.0 Não Adaptada](https://creativecommons.org/licenses/by/3.0/) por Ilya Ravkin.
```


