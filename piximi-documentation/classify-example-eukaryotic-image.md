# Image Classification
### 1. Load images

To begin, we will load the images from an example dataset included in Piximi by pressing ![open](./icons/open-folder-icon.svg) `Open` in the top left. Select `Open example project` > `Open human U2OS-cells example project` to get started. Alternatively, if you would like to load your own images, press ![upload](./icons/cloud-upload-icon.svg) `Open image` in the top right.


```{figure} ./img/user-guide-open-img.png
---
name: open-img
---
Open the U2OS example dataset
```

### 2. Categorize images

In the `Categories` sub-menu on the right hand side you can see that there are already 3 classes defined for the U2OS example project. Click on the ![label](./icons/label-icon.svg) label to the left of these classes to turn on/off (![label](./icons/label-icon.svg)/![label](./icons/label-off-icon.svg)) the display of these images. The classes are:
- Unknown
  - This represents the uncategorized images. Piximi will predict which class these images belong to later
- Negative Control
- Positive Control

```{figure} ./img/user-guide-u2os-label-highlight.png
---
name: u2os-labels
---
Explore the category menu. Turn on/off (![label](./icons/label-icon.svg)/![label](./icons/label-off-icon.svg)) a particular category to show/hide only those images.
```

<!-- ```{margin} 
**Terminology**: We categorize into classes
``` -->

Single-click to select a 2-3 images from the unknown category that best fit the `Negative Control` category. Once selected, click `Categorize` in the top right and select `Negative Control`. Do the same for 2-3 `Positive Control` images.

```{admonition} How many images should I categorise?
:class: tip, dropdown
Should this info be added? Something like:
Click here for considerations when categorizing your images and deciding on how many images to add to each category.
```

### 3. Train model

Click on the `Classifier` button to open the sub-menu and then click on the `Fit` settings ![settings](./icons/settings-icon.svg) icon. Within the menu that opens, you can select various parameters to adjust model training. Open the `Dataset Settings` menu to find the `Train percentage option`. This value controls what percentage of the images you have annotated will be used to train the model in Piximi. The remainder will be used to test how well Piximi can classify images not previously seen. We will use the default for now.

```{figure} ./img/user-guide-u2os-fit-settings.png
---
name: u2os-fit-settings
---
Open the classifier settings.
```

In the top right, press the ![play-button](./icons/play-button-icon.svg) to begin training. Piximi will now look at the **training** subset of the images you have annotated and try to learn what links the input image to a particular class. Then, Piximi will apply what it has learned by examining the **testing** subset of images and compare the models answers to the image class.

```{figure} ./img/user-guide-run-fit.png
---
name: fit-settings
---
Explore classifier settings and then press ![play-button](./icons/play-button-icon.svg) to begin training.
```

At the bottom of the fit settings page you will see two graphs update as Piximi trains the model which show the accuracy and loss of the model over incrementing epochs.

```{figure} ./img/user-guide-accuracy-plot.png
---
name: epoch-accuracy-plot
---
TBC
```

```{admonition} What is an epoch?
:class: tip, dropdown
An epoch is a measure of how many times the entire training subset is studied by the deep learning model. As the number of epochs increases, the model optimizes itself to improve classification performance.

However, increasing the number of epochs does not necessarily lead to better results and can instead result in overfitting. Click here to read more about overfitting (needs link).
```

`Accuracy` is a measure of how well the model has performed and is calculated as the ratio between the number of correct predictions and the total number of predictions. In this case, `Accuracy` refers to the accuracy of the model at correctly determining the class of images in the **training** subset of images.

<!-- https://developers.google.com/machine-learning/crash-course/classification/accuracy -->

$$
    Accuracy = \frac{\text{Number of correct predictions}}{\text{Total number of predictions}}
$$

`Validation Accuracy` is the accuracy when the model examines the **testing** subset of the data. 

```{admonition} Validation accuracy vs accuracy
:class: tip, dropdown
If you notice that your `Validation accuracy` value decreases as epochs increase but your `Accuracy` measurement continues to increase, this means that your model is fitting to the training subset of data better but your model is losing the ability to accurately predict on new data.

This is a result of **overfitting** as your model begins to pick up features within your image, such as noise, that are not relevant to classification. In essence, overfitting is when the model memorizes the answer to a specific question, rather than determining the answer from scratch itself.
```

Loss is another metric that is calculated on the training and test subets of data and are depicted as loss and validation loss, respectively. Loss represents a summation of the errors the model has made during classification. 

You can now exit the `Fit` settings by clicking the ![arrow-back](./icons/arrow-back-icon.svg) in the top left.

```{figure} ./img/user-guide-exit-fit.png
---
name: fit-exit
---
Exit the fit settings menu.
```

<!-- ```{margin} An optional title
Diagnosing model underfitting and overfitting: https://machinelearningmastery.com/learning-curves-for-diagnosing-machine-learning-model-performance/

Discussion about train, validation and test sets: https://github.com/piximi/prototype/discussions/217

Piximi does not currently have a hold-out test-like set.
``` -->

### 4. Predict classes for unlabelled data

Once your model has been trained you can press ![label](./icons/label-icon.svg) Predict to run the trained model on the unannotated data. Once an image has been classified you will see the ![label](./icons/label-icon.svg) color on the image thumbnail update to that particular class.

```{figure} ./img/user-guide-u2os-run-predict.png
---
name: run-predict
---
TBC
```

Click ![chart](./icons/chart-icon.svg) Evaluate to see in-depth metrics for how the model performed on the data.

```{admonition} See also
:class: seealso
Link to our on guide, or a guide somewhere else. eg:

For further information on the evaluation metrics, see our evaluating a model guide.
```

```{admonition} Copyright
:class: seealso

The [BBBC016](https://bbbc.broadinstitute.org/BBBC016) images used here are licensed under a [Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/) by Ilya Ravkin.
```


