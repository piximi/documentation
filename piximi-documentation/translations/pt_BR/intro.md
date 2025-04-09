
# Imagens para Descoberta

O Piximi é um aplicativo que roda inteiramente no seu navegador e não requer instalação e configuração mínima. Nossa visão para o Piximi é fornecer um aplicativo intuitivo para anotação, segmentação, classificação e mensuração de imagens. Nesta versão atual, o Piximi permite que os usuários anotem regiões específicas das suas imagens, como núcleos, e também podem usar aprendizado profundo para classificar suas imagens em grupos distintos.

<!-- ![piximi-workflow](./img/piximi-workflow.png) -->


<a class='piximi-btn' href="https://www.piximi.app/" target="_blank"><img class="text-img" src="./img/piximi_logo_icon.png"> Abra o Piximi aqui</a>

[Assista a um tutorial do Piximi no YouTube](https://youtu.be/-wjUxc4ZHCc?si=sB-Z2EnBtjd-PP_j)

```{admonition} Problemas conhecidos
:class: aviso

O Piximi é um projeto em andamento. [Clique aqui para ver os problemas conhecidos nos quais estamos trabalhando](work-in-progress).
```


## O Anotador Piximi

![intro-annotator](./img/intro-annotator.png)

O anotador do Piximi permite que você crie anotações intuitivamente na imagem de sua escolha usando uma variedade de ferramentas. Essas ferramentas incluem anotações manuais com caneta, além de métodos mais automáticos com anotações rápidas. O anotador do Piximi também funciona com imagens **multicanal** e **multiplano**, ambas facilmente selecionáveis para garantir que as anotações sejam posicionadas onde precisam estar. Em versões futuras, pretendemos incluir também a interpolação no plano z para facilitar ainda mais a anotação em 3D.

## O Classificador Piximi

Usando aprendizado profundo, o Piximi pode classificar imagens de uma variedade de assuntos, como bactérias, células cultivadas, insetos e muito mais. O poder do aprendizado profundo é aplicado a um pequeno número de imagens que foram categorizadas pelo usuário no Piximi, o que então fornece ao computador um ponto de partida para entender a aparência de uma categoria específica de imagem. Por exemplo, o usuário pode ensinar ao computador a aparência das células nas fases G1, S, G2 ou M do ciclo celular. Essas categorizações feitas pelo usuário são então examinadas intensamente pelo modelo de aprendizado profundo dentro do Piximi por meio de um processo conhecido como treinamento. Durante esse processo de treinamento, o modelo de aprendizado profundo encontra padrões nos dados para vincular a entrada (uma imagem adicionada pelo usuário) a uma saída (a categoria, ou classe, definida pelo usuário). O modelo de aprendizado profundo treinado pode então prever imagens não categorizadas e determinar a qual classe elas pertencem. No exemplo mencionado, isso determinaria em qual estágio do ciclo celular uma célula específica está sem depender da entrada do usuário.

Em última análise, o Piximi oferece aos usuários uma maneira de ter um método altamente personalizável para classificar grandes conjuntos de imagens em uma variedade de assuntos, aprendendo com as anotações feitas pelo usuário.

## Próximos passos do Piximi

O Piximi é um projeto em andamento e atualmente conta com um anotador de imagens e uma classificação de imagens baseada em aprendizado profundo. O objetivo final do Piximi é fornecer aos usuários um aplicativo intuitivo para anotação, segmentação, classificação e mensuração das informações presentes em imagens. Nesta fase do Piximi, lançamos o anotador e o classificador, pois são os primeiros passos importantes na preparação para adicionar as funcionalidades de segmentação e mensuração.

Estamos desenvolvendo o Piximi em modo aberto. Se você tiver algum recurso que gostaria de ver no Piximi, crie uma discussão em [nosso repositório Piximi no Github](https://github.com/piximi/piximi/discussions).

<!-- Table on contents directive prints the ToC -->
<!-- ```{tableofcontents}
``` -->
