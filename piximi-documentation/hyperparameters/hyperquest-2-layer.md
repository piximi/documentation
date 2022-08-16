# HyperQuest - Two Layer Net

HyperQuest is a program to learn about hyperparameters, developed for Stanford's [CS231n: Deep Learning for Computer Vision](http://cs231n.stanford.edu/). An open-source clone was created by [Bingcheng HU](https://bingcheng.openmc.cn/HyperQuest/about/), with [approval](https://github.com/bingcheng1998/HyperQuest/issues/1) from the co-creator of the original HyperQuest, [Linxi "Jim" Fan](https://jimfan.me).

* You are provided a dataset. Your goal is to train a two-layer network for classification on the dataset, with as high a validation accuracy (~0.5) as you can.
* First, you will choose the initial network configuration (the set of hyperparameters), and then run the network.
* Second, you are provided performance metrics in the form of training & validation accuracy and loss.
* Third, re-adjust the hyperparameters reach optimize for a high validation accuracy.

<div id = 'form'></div>
<a type="button" href="javascript: submitForm()">Train Model</a>
<span id="acc"></span>
<p id="gradient_canvas"></p>
<div id="loss_chart" style="height: 300px; width: 100%;"></div>
<div id="train_and_vali_acc" style="height: 300px; width: 100%;"></div>

<script type="text/javascript" src='https://cdn.plot.ly/plotly-latest.min.js'></script>
<script type="text/javascript" src='https://bingcheng.openmc.cn/HyperQuest/html/2-layer-latest.js'></script>
