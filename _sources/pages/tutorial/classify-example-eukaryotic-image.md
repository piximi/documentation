# Image Classification

## 1. Load images

To begin, we will load the images from an example dataset included in Piximi. On the start screen, click `Open Example Project` and select `Human U2OS-cells example project`. If you already have a project open, you can reach the same list through ![open](../../img/icons/open-folder-icon.svg) `Open` > `Project` > `Load Example`. Alternatively, if you would like to load your own images, go to `Open` > `Image`.

The images correspond to U2OS cells co-expressing arrestin-GFP and an orphan GPCR. Upon receptor stimulation arrestin-GFP is recruited to the plasma membrane and eventually endocytosed resulting in vesicle like structures.

<img  class="theme-img dark-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-dark-open-example.webp>
<img  class="theme-img light-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-light-open-example.webp>

```{div} tutorial-caption
Open the U2OS example dataset
```

## 2. Categorize images

The `Categories` list on the left hand side shows that there are already 3 classes defined for the U2OS example project, along with the number of images in each. A handful of images have already been categorized for you; the rest are still `Unknown`. The classes are:

- Unknown
  - This represents the uncategorized images. Piximi will predict which class these images belong to later
- Positive Control (GRK)
  - Images in which the GFP forms vesicle-like structures
- Negative Control (Untreated)
  - Images in which the GFP is spread throughout the cytoplasm

````{div} fig-float fig-wrap
<img  class="theme-img dark-img content-img fig-315" src=../../img/eukaryotic-classification/eukaryotic-classification-dark-categories.webp>
<img  class="theme-img light-img content-img fig-315" src=../../img/eukaryotic-classification/eukaryotic-classification-light-categories.webp>

```{div} tutorial-caption
Explore the Categories list. The number next to each category is how many images it holds.
```
````

To turn on/off the display of images under a given label, click on the ![sort-filter icon](../../img/icons/icon-dark-sort-filter.webp)![sort-filter icon](../../img/icons/icon-light-sort-filter.webp) `Sort | Filter` icon above the images, open `Category Filters`, and click a category to move it between `Visible` and `Filtered`. Categories in the `Filtered` box are hidden from the grid; click the ✕ on its chip to show it once more.

<img  class="theme-img dark-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-dark-category-filters.webp>
<img  class="theme-img light-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-light-category-filters.webp>

```{div} tutorial-caption
Hide the Unknown images by moving the Unknown category to Filtered.
```

Ensure no images are currently selected by clicking the ![deselect-all icon](../../img/icons/icon-dark-deselect-all.webp)![deselect-all icon](../../img/icons/icon-light-deselect-all.webp) `Deselect` icon. Then, single-click to select 2-3 images from the unknown category that best fit the `Negative Control (Untreated)` category. Once selected, click the ![categorize icon](../../img/icons/icon-dark-categorize.webp)![categorize icon](../../img/icons/icon-light-categorize.webp) `Categorize` icon in the top right of the image grid and select `Negative Control (Untreated)`. Do the same for 2-3 `Positive Control (GRK)` images.

<img  class="theme-img dark-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-dark-categorize.webp>
<img  class="theme-img light-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-light-categorize.webp>

```{div} tutorial-caption
Select a few images, then choose the category to assign them to.
```

<!-- ```{admonition} How many images should I categorize?
:class: tip, dropdown
Should this info be added? Something like:
Click here for considerations when categorizing your images and deciding on how many images to add to each category.
``` -->

## 3. Train model

Click on the `Classification` button under `Learning Task` then proceed to customize the settings for model fitting by clicking the `Fit` button. Within the dialog that opens, you can select various parameters to adjust model training. Under `Data Preprocessing Settings`, the `Training Percentage` field (found under `Data Partitioning`) controls what fraction of the images you have categorized will be used to train the model in Piximi. The remainder will be used to test how well Piximi can classify images not previously seen. We will use the default for now.

<img  class="theme-img dark-img content-img fig-315 fig-center" src=../../img/eukaryotic-classification/eukaryotic-classification-dark-fit-button.webp>
<img  class="theme-img light-img content-img fig-315 fig-center" src=../../img/eukaryotic-classification/eukaryotic-classification-light-fit-button.webp>

```{div} tutorial-caption
Select the Classification task and open the classifier settings with Fit.
```

In the bottom right, click the ![play-button](../../img/icons/play-button-icon.svg) `Fit Classifier` button to begin training. Piximi will now look at the **training** subset of the images you have categorized and try to learn what links the input image to a particular class. Then, Piximi will apply what it has learned by examining the **validation** subset of images and compare the models answers to the image class.

<img  class="theme-img dark-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-dark-fit-dialog.webp>
<img  class="theme-img light-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-light-fit-dialog.webp>

```{div} tutorial-caption
Explore classifier settings and then press Fit Classifier to begin training.
```

While Piximi trains the model, the dialog switches to the `Training Plots` tab, where two graphs update to show the accuracy and loss of the model over incrementing epochs.

<img  class="theme-img dark-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-dark-training-plots.webp>
<img  class="theme-img light-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-light-training-plots.webp>

```{div} tutorial-caption
Training history of a classifier model for the U2OS example dataset.
```

```{admonition} What is an epoch?
:class: tip, dropdown
An epoch is a measure of how many times the entire training subset is studied by the deep learning model. As the number of epochs increases, the model optimizes itself to improve classification performance.

However, increasing the number of epochs does not necessarily lead to better results and can instead result in overfitting. Click here to read more about overfitting (needs link).
```

`Accuracy` is a measure of how well the model has performed and is calculated as the ratio between the number of correct predictions and the total number of predictions. In this case, `Accuracy` refers to the accuracy of the model at correctly determining the class of images in the **training** subset of images.

<!-- https://developers.google.com/machine-learning/crash-course/classification/accuracy -->

```{math}
:label: accuracy_equation
Accuracy = \frac{\text{Number of correct predictions}}{\text{Total number of predictions}}
```

`Validation Accuracy` is the accuracy when the model examines the **validation** subset of the data.

```{admonition} Validation accuracy vs accuracy
:class: tip, dropdown
If you notice that your `Validation accuracy` value decreases as epochs increase but your `Accuracy` measurement continues to increase, this means that your model is fitting to the training subset of data better but your model is losing the ability to accurately predict on new data.

This is a result of **overfitting** as your model begins to pick up features within your image, such as noise, that are not relevant to classification. In essence, overfitting is when the model memorizes the answer to a specific question, rather than determining the answer from scratch itself.
```

Loss is another metric that is calculated on the training and validation subsets of data and are depicted as loss and validation loss, respectively. Loss represents a summation of the errors the model has made during classification.

The dialog also has a `Model Summary` tab, describing the layers of the trained model, and a `Model Runs Summary` tab, which compares the runs you have trained. You can now exit the `Fit Model` dialog by clicking the ![close](../../img/icons/close-icon.svg) in the top right of the dialog.

<img  class="theme-img dark-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-dark-fit-exit.webp>
<img  class="theme-img light-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-light-fit-exit.webp>

```{div} tutorial-caption
Exit the fit settings dialog.
```

<!-- ```{margin} An optional title
Diagnosing model underfitting and overfitting: https://machinelearningmastery.com/learning-curves-for-diagnosing-machine-learning-model-performance/

Discussion about train, validation and test sets: https://github.com/piximi/prototype/discussions/217

Piximi does not currently have a hold-out test-like set.
``` -->

## 4. Predict classes for unlabelled data

Once your model has been trained you can click ![chart](../../img/icons/chart-icon.svg) `Evaluate` to see in-depth metrics on how well the model performed, including a confusion matrix of the model's predictions against the true categories.

<img  class="theme-img dark-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-dark-evaluate.webp>
<img  class="theme-img light-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-light-evaluate.webp>

```{div} tutorial-caption
Evaluate the trained model.
```

You can then click ![label](../../img/icons/label-important-icon.svg) `Predict` to run the trained model on the uncategorized data. Once an image has been classified you will see the ![label](../../img/icons/label-icon.svg) color on the image thumbnail update to that particular class. At this stage, you may inspect the predicted classes and either accept the predictions by clicking and holding ![check-icon](../../img/icons/check-icon.svg) `Accept Predictions (Hold)` or reject them by clicking ![close](../../img/icons/close-icon.svg) `Clear Predictions`. Depending on the performance of the model, categorizing further images based on the predictions and/or adjusting the `Fit` settings may be desired.

<img  class="theme-img dark-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-dark-predict.webp>
<img  class="theme-img light-img content-img" src=../../img/eukaryotic-classification/eukaryotic-classification-light-predict.webp>

```{div} tutorial-caption
Predict the class of unknown images using your trained model.
```

```{admonition} Copyright
:class: seealso

The [BBBC016](https://bbbc.broadinstitute.org/BBBC016) images used here are licensed under a [Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/) by Ilya Ravkin.
```
