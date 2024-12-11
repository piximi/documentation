# HyperQuest - Convolutional Neural Net

[HyperQuest](https://bingcheng.openmc.cn/HyperQuest) is a program to learn about hyperparameters, developed for Stanford's [CS231n: Deep Learning for Computer Vision](http://cs231n.stanford.edu/). An open-source clone was created by [Bingcheng HU](https://bingcheng.openmc.cn/HyperQuest/about/), with [approval](https://github.com/bingcheng1998/HyperQuest/issues/1) from the co-creator of the original HyperQuest, [Linxi "Jim" Fan](https://jimfan.me).

Provided below is a copy of the [ConvNet](https://bingcheng.openmc.cn/HyperQuest/versions/ConvNet/) (convolutional neural network) example from the HyperQuest website.

* The model is provided a subset of the [Cifar-10 dataset](https://www.cs.toronto.edu/~kriz/cifar.html). Your goal is to train a convolutional neural network for classification on the dataset, and obtain as high validation accuracy (~0.7) as you can;
* In the first stage, you will choose the initial network configuration and then run the network;
* In the second stage, there are multiple useful quantities you should monitor during training of a neural network. The plots are the window into the training process and should be utilized to get intuitions about different [hyperparameter settings](https://bingcheng.openmc.cn/CS231n/neural-networks-3/#baby) and how they should be changed for more efficient learning.

<div id = 'form'></div>
<a type="button" href="javascript: submitForm()">Train Model</a>
<span id="acc"></span>
<p id="gradient_canvas"></p>
<div id="loss_chart" style="height: 300px; width: 100%;"></div>
<div id="train_and_vali_acc" style="height: 300px; width: 100%;"></div>

<script type="text/javascript" src='https://cdn.plot.ly/plotly-latest.min.js'></script>
<script type="text/javascript" src='https://bingcheng.openmc.cn/HyperQuest/convhtml/conv-latest.js'></script>
