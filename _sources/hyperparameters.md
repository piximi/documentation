# Hyperparameters

A hyperparameter are configuration variables that control the learning process for deep learning models in Piximi. When a model is trained on your data, the neural network can internally learn and update its **own** parameters to yield the desired output. However, hyperparameters cannot be estimated by the model itself from the training data and requires user intuition to set.

Determining the best hyperparameter for a given problem can be difficult to define as every problem is different. Below, we introduce hyperparameters in Piximi and some considerations in selecting a value. Ultimately, the goal of hyperparameter selection is to tune the hyperparameters that result in the best performing predictions.

## Optimization algorithms

Optimization algorithms are what update the internal parameters of the model automatically in response to its own performance. These algorithms will compare a prediction made by the model to the expected output and adjust model parameters to bring the predictions closer to the expected output. 

# Loss function

The loss function calculates how well a model has performed by comparing the prediction made by the model and what was expected. In essence, a well performing model will output a lower number for the loss function, whereas a poor model will output a higher number. The loss function therefore tells us how well our model is performing at making predictions for a particular set of model parameters. The aforementioned optimization algorithms work to reduce the loss function and in turn lead to a better performing model.

## Learning rate

The learning rate is a value that determines by how much the model updates its internal parameters in response to the loss function.

## Batch size

Batch size defines how many images the model will look at before updating its internal parameters. A batch size of 1 would mean that the model will look at one image, update its internal parameters on what links an image to a class, and then repeat this with the next image until all images have been analyzed.

*How does the model update its internal parameters?*
At the end of each batch, the predictions the model has made are compared with the ground truth set by the user. During this process, the model can see how close its prediction were. This comparison allows for the model to calculate an error using the **loss function**, which the model then uses to update internal parameters to reduce this error. How this error is reduced by adjusting model parameters is defined by the **optimization algorithm** hyperparameter.

## Epochs

An epoch is a measure of how many times the entire training subset is studied by the deep learning model. Increasing the number of epochs does not necessarily lead to better results and can instead result in overfitting. Click here to read more about overfitting (needs link).




