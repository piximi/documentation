# Hyperparameters

Hyperparameters are configuration variables that control the learning process for deep learning models in Piximi. When a model is trained on your data, the neural network can internally learn and update its **own** parameters to yield the desired output. However, hyperparameters cannot be estimated by the model itself from the training data and requires user intuition to set.

Determining the best hyperparameter for a given problem can be difficult to define as every problem is different. Below, we introduce the hyperparameters available in Piximi and offer some considerations in selecting a value. Ultimately, the goal of hyperparameter selection is to tune the hyperparameters that result in the best performing predictions on your data.

```{tip}
For an interactive example of how hyperparameter changes can influence classification, see the <a href="https://playground.tensorflow.org/" target="_blank">Tensorflow Playground example</a>.
```

## Hyperparameter selection

<!-- talk about observing hyperparameter changes and their sensitivity on training? ie. some hyperparameters may have a big impact, others not so much -->

Choosing the correct hyperparameters for your data can be tricky as different problems may require different hyperparameters. As a result, it can be hard to make strict hyperparameter recommendations, so the best method is to observe the influence hyperparameter changes have on the training of your own model and selecting those which give you the best performance. Below is a rough guide to give you a feeling for the magnitude of changes you should make when adjusting a hyperparameter. These recommendations are intended to provide a starting point to get familiar with how hyperparameter changes can impact model training.

> ***Optimization Algorithm***
> 
> Piximi supports multiple optimization algorithms that work in various ways and our recommendation to you is to explore them. If you'd like a brief description of what optimization algorithms do in general, see our [optimization algorithm description](hyperparameters:description:optimization-algorithms).

> ***Learning rate***
> 
> Typically, 3-fold changes in learning rate are a good starting point. For example, `0.01 >> 0.03` and so on. A sensible range for the learning rate is between slightly above 0 and 1.


> ***Loss Function***
> 
> Similar to the optimization algorithm hyperparameter, there are multiple loss functions to choose from. Play around with different loss functions to see if they improve your model. Check out the [loss function description](hyperparameters:description:loss-function) for a brief overview of how they work.

> ***Batch size***
> 
> Start with 2-fold changes in batch size. For example, `32 >> 64` or `32 >> 16`. The batch size should be at least 1. For more information, check out the [batch size description](hyperparameters:description:batch-size).

> ***Epochs***
> 
> Typically, selecting the largest number of epochs possible to train you model within a reasonable time-frame (eg. 20 minutes) is best.

## Hyperparameter descriptions

(hyperparameters:description:optimization-algorithms)=
### Optimization algorithms

Optimization algorithms are what update the internal parameters of the model automatically in response to its own performance. These algorithms will compare a prediction made by the model to the expected output and adjust model parameters to bring the predictions closer to the expected output. 

<a href="https://machinelearningmastery.com/tour-of-optimization-algorithms/" target="_blank">See here for a more in depth introduction to optimization algorithms</a>.

(hyperparameters:description:loss-function)=
### Loss function

The loss function calculates how well a model has performed by comparing the prediction made by the model and what was expected. In essence, a well performing model will output a lower number for the loss function, whereas a poor model will output a higher number. The loss function therefore tells us how well our model is performing at making predictions for a particular set of model parameters. The aforementioned optimization algorithms work to reduce the loss function and in turn lead to a better performing model.

<a href="https://machinelearningmastery.com/loss-and-loss-functions-for-training-deep-learning-neural-networks//" target="_blank">See here for a more in depth introduction to loss functions</a>.


### Learning rate

The learning rate is a value that determines by how much the model updates its internal parameters in response to the loss function.

(hyperparameters:description:batch-size)=
### Batch size

Batch size defines how many images the model will look at before updating its internal parameters. A batch size of 1 would mean that the model will look at one image, update its internal parameters on what links an image to a class, and then repeat this with the next image until all images have been analyzed.

```{admonition} How does the model update its internal parameters?
:class: tip, dropdown
At the end of each batch, the predictions the model has made are compared with the ground truth set by the user. During this process, the model can see how close its prediction were. This comparison allows for the model to calculate an error using the **loss function**, which the model then uses to update internal parameters to reduce this error. How this error is reduced by adjusting model parameters is defined by the **optimization algorithm** hyperparameter.
```

### Epochs

An epoch is a measure of how many times the entire training subset is studied by the deep learning model. However, increasing the number of epochs does not necessarily lead to better results and can instead result in overfitting. [Click here to read more about overfitting](https://en.wikipedia.org/wiki/Overfitting).




