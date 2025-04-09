# Medidas

Embora, às vezes, o objetivo de um experimento seja apenas encontrar objetos ou classificar imagens e/ou objetos, outras vezes queremos nos aprofundar e aprender mais sobre as imagens e/ou objetos que nos interessam. É aí que entram as *Medições*.

Atualmente, o Piximi oferece suporte a duas classes amplas de medições: medições de intensidade, que funcionam para imagens OU objetos, e medições de forma/geometria, que funcionam apenas para objetos. Mais categorias de medições serão lançadas em breve - fique ligado!

As medidas estão disponíveis no ícone ![Medidas](./icons/ruler-icon.svg) na barra superior do Piximi.

As medições são criadas em tabelas individuais — cada tabela é específica para um "tipo" — imagens ou um tipo de objeto segmentado (como células). Você pode criar quantas tabelas quiser.
Cada tabela tem medições divididas por *Divisões* — essencialmente, quais são as diferentes condições neste experimento (se houver) e como devemos analisá-las? Cada tabela tem seu próprio conjunto de divisões, que você pode ajustar a qualquer momento.

# Criando Medidas no Piximi

1. Clique no ícone [Medidas](./icons/ruler-icon.svg) na barra superior do Piximi.

2. Clique no botão `+` ao lado da palavra `Tabelas` para criar uma nova tabela de medidas. Você pode criar quantas tabelas quiser para representar diferentes imagens ou objetos, divididos em diferentes subconjuntos.

```{figure} ./img/measurement-walkthrough/measure-00-pre-measurement.png
---
nome: measurement-00-table-plus
escala: 50%
---
O botão `+` no topo do menu Tabelas permite que você adicione uma nova tabela
```

3. Selecione um `tipo` para o qual deseja fazer medições. Lembre-se: `tipos` incluem as imagens, bem como quaisquer objetos que você tenha criado por meio de segmentação ou anotação.

```{figure} ./img/measurement-walkthrough/measure-01-create-table.png
---
nome: measure-01-create-table
escala: 50%
---
Selecione o tipo de tabela de medições que deseja criar
```

4. O Piximi começará a calcular métricas em segundo plano. Dependendo do número de exemplos presentes naquele `tipo`, isso pode levar alguns minutos — um indicador mostrará o progresso realizado.

```{figure} ./img/measurement-walkthrough/measure-02-spin-while-creating-table.png
---
nome: medida-02-girar-enquanto-cria-tabela
escala: 50%
---
O indicador circular ao lado de "Tabelas" indica o estágio de geração das medições no Piximi. Mantenha a janela do Piximi aberta (considere movê-la para uma aba separada) para que os cálculos continuem!
```

5. Após a conclusão dos pré-cálculos iniciais, você pode selecionar quais medições deseja fazer, bem como como deseja subdividir os dados (atualmente por `Categoria` ou por `Partição`; se você tiver apenas uma categoria, tudo bem, mas você precisa clicar em algo aqui!). Como antes, isso levará algum tempo, então deixe a aba Piximi aberta e o indicador circular informará quanto tempo isso levará.

```{figure} ./img/measurement-walkthrough/measure-03-select-splits-and-measurements.png
---
nome: measure-03-select-splits-and-measurements
escala: 50%
---
Selecione a divisão ou divisões que deseja medir para cada tabela, bem como as medidas que deseja para essa tabela. Assim como durante a criação da tabela, um indicador circular ao lado da palavra `Medidas` indicará o progresso da geração das suas medidas no Piximi.
```

6. Após a geração das suas medições, elas aparecerão na área principal em uma grade de dados! Na grade, você pode ver o nome da medição, o subconjunto (ou "Divisão") dos dados representados e a Média, a Mediana e o Desvio Padrão dos dados para aquele recurso naquele subconjunto.

```{figure} ./img/measurement-walkthrough/measure-04-data-grid.png
---
nome: medida-04-grade-de-dados
---
A grade de dados Piximi
```

7. Se desejar plotar dados no Piximi, basta navegar até a grade de dados que contém os dados que deseja plotar e clicar na aba "Plots" na parte superior. Você pode criar quantos gráficos desejar clicando no botão `+` na aba "Plots". Os gráficos também podem ser exportados salvando-os em PNG. O Piximi inclui vários tipos de gráficos, incluindo gráficos de dispersão, gráficos de enxame e histogramas.

```{figure} ./img/measurement-walkthrough/measure-05-scatter.png
---
name: measure-05-scatter
scale: 50%
---
Os gráficos de dispersão gerados no Piximi podem ter as medidas X, Y e Tamanho selecionadas; eles também podem exibir cores de acordo com as divisões selecionadas (com diversos mapas de cores para escolher). Observe o botão "Salvar em PNG" no canto inferior direito!
```

```{figure} ./img/measurement-walkthrough/measure-06a-swarm-no-category.png
---
nome: medida-06a-enxames
escala: 50%
---
Os gráficos de enxame podem ser exibidos por si só...
```

```{figure} ./img/measurement-walkthrough/measure-06b-swarm-with-category.png
---
nome: measure-06b-swarms
escala: 50%
---
... ou com um boxplot de resumo sobreposto.
```

```{figure} ./img/measurement-walkthrough/measure-07-histogram.png
---
nome: medida-07-histograma
escala: 50%
---
Você pode escolher representar seus dados como um histograma, com um número personalizado de compartimentos.
```

Se quiser fazer análises mais aprofundadas dos seus dados (e deveria!), você pode exportar suas tabelas de dados a partir do menu de medições. Isso permitirá que você faça qualquer análise posterior que desejar.

```{figure} ./img/measurement-walkthrough/measure-08-export-measurements.png
---
nome: measure-08-export-measurements
escala: 50%
---
O Piximi permite que você exporte seus dados para programas externos
```
