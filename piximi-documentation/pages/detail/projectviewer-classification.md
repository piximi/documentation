# Classification

Using Piximi, you can classify your images with either a pretrained classification model you upload, or from a model you trained from scratch using Piximi. Our goal is to make classification as easy as possible while exposing enough settings so that you can get precise and repeatable results.

```{admonition} Uploaded Models
:class: warning

Piximi uses TensorFlowJS under the hood for all DL tasks. Any model you upload must be a TFJS Saved Model.
```

## Overview

<img  class="theme-img dark-img content-img fig-315 fig-center" src=../../img/classifier/classifier-dark-section.webp>
<img  class="theme-img light-img content-img fig-315 fig-center" src=../../img/classifier/classifier-light-section.webp>

1. **Model I/O**: Load a model, or save the selected model.
2. **Model Selection**: Choose which model to use, or delete the selected model.
3. **Model Operations**: Fit, Predict and Evaluate the selected model.

## Task Selection

Switch between classification and segmentation tasks. The tasks will operate on the currently displayed Kind.

## Model I/O

Click **Load Model** to open the model loading dialog, or **Save Model** to save the selected model (this is only enabled once a model has been selected or trained). Saved models are also included whenever you save the project.

<img  class="theme-img dark-img content-img fig-600 fig-center" src=../../img/classifier/classifier-dark-load-model.webp>
<img  class="theme-img light-img content-img fig-600 fig-center" src=../../img/classifier/classifier-light-load-model.webp>

### Local Model Loading

**Model Types**

Tensorflow models can have either a Layers framework or a Graph framework. We need to know which your model is in order to upload it correctly.

**File Picker**

Open a file picker and select the model files you want to upload. Piximi requires a `[model].json` description file as well as one or more `[model].weights.bin` file(s).

Once you've confirmed the type and selected the files, click "Open Classification Model" to upload it.

### Remote Model Loading

**Model Types**

As above, choose whether the model uses the Layers or the Graph framework.

**Model URL**

Enter the URL access point for the remote model. If the model comes from TFHub (now absorbed into Kaggle), you must check the "From TFHub" box.

Once you've confirmed the type and entered the URL, click "Open Classification Model" to upload it.

## Model Selection

The drop-down lists the models available for the current Kind, along with **New Model**, which lets you train a model from scratch. Use the trash button to delete the selected model.

## Model Operations

### Fit

Clicking the _Fit_ button will open up a dialog displaying the configurable model settings. It has four tabs: **Hyperparameters**, **Training Plots**, **Model Summary** and **Model Runs Summary**.

<img  class="theme-img dark-img content-img" src=../../img/classifier/classifier-dark-fit-hyperparameters.webp>
<img  class="theme-img light-img content-img" src=../../img/classifier/classifier-light-fit-hyperparameters.webp>

#### Hyperparameters

1. **Dialog Tabs**: Switch between the settings, the training plots, the model summary and the summary of previous runs.

2. **Model Architecture and Name**

   Piximi offers training a model using two different architectures:
   - _SimpleCNN_: A simple convolutional neural-network consisting of a handful of processing layers.
   - _MobileNet_: Uses the popular MobileNet backbone for training the model.

   You can also change the name of the model before training. The name entered here will be the default filename when you save the classifier or the hyperparameters.

3. **Data Preprocessing Settings**

   These settings control how your data is processed prior to both their use in training and inference. They can be split into two groups of operations: _Image Augmentation_ and _Data Partitioning_.
   - Image Augmentation: These settings control the size and shape of the images you want to feed to the model, as well as defining if or how you would like to crop them.
   - Data Partitioning: These settings control how your data is split between training and validation for model training purposes.

4. **Optimization Settings**

   These settings dictate how the model will learn while it is being trained on your data, as well as the length of the training. They are broken up into two sections: _Training Strategy_ and _Optimization_.
   - Training Strategy: This section defines how long to train, and how many images will be in each batch for training.
   - Optimization: This section defines how the model calculates loss, how it corrects itself, and how often it checks.

   Once a model is trained, these settings can no longer be updated, in order to maintain reliability in the model. Use **Show Advanced** to reveal the remaining settings. For a detailed description of each hyperparameter and how they affect training, go to the [](../technical/hyperparameters.md) section of this documentation.

5. **Export Hyperparameters**: Click on the **Export Hyperparameters** button to download a `.json` file with the model's settings.

6. **Fit Classifier**: When you are ready to train the classifier, click this button. It will be replaced with a progress indicator depicting the number of epochs completed. A warning icon next to the button alerts you to any issues that are currently blocking training; hover over it to see the issue.

#### Training Plots

Displays the model's performance from epoch to epoch. Monitoring the training history can help identify common model fitting difficulties such as overfitting.

<img  class="theme-img dark-img content-img" src=../../img/classifier/classifier-dark-fit-training-plots.webp>
<img  class="theme-img light-img content-img" src=../../img/classifier/classifier-light-fit-training-plots.webp>

- **Accuracy Plot**: The change in accuracy for the _training_ and _validation_ sets per epoch. Generally, higher is better.
- **Loss Plot**: The change in loss for the _training_ and _validation_ sets. Generally, lower is better.

#### Model Summary

Displays the model's summary, detailing each layer, and a way to export this information.

<img  class="theme-img dark-img content-img" src=../../img/classifier/classifier-dark-fit-model-summary.webp>
<img  class="theme-img light-img content-img" src=../../img/classifier/classifier-light-fit-model-summary.webp>

- **Summary Table**: For each layer in the model, displays its output shape, number of parameters, and whether it is trainable (not frozen).
- **Export Model Summary**: Exports the model summary as a `.csv` file.

#### Model Runs Summary

Lists every training run of the selected model.

<img  class="theme-img dark-img content-img" src=../../img/classifier/classifier-dark-fit-runs-summary.webp>
<img  class="theme-img light-img content-img" src=../../img/classifier/classifier-light-fit-runs-summary.webp>

- **Run table**: For each run, shows when it started, what triggered it (e.g. a fresh model or continued training), the random seed, the number of epochs and the final loss and accuracy. Click **View** to see the hyperparameters used for that run.
- **Export Runs Summary**: Exports the table of runs.

### Predict

Clicking the _Predict_ button will begin running inference on the unlabeled images/objects of the displayed Kind, using the selected model. Predicted categories are shown in the grid but are not applied until you accept them.

<img  class="theme-img dark-img content-img fig-315 fig-float" src=../../img/classifier/classifier-dark-predict-options.webp>
<img  class="theme-img light-img content-img fig-315 fig-float" src=../../img/classifier/classifier-light-predict-options.webp>

**Clear Predictions**

Reset the project to before the predictions were made.

**Accept Predictions**

Confirm the predicted categories. Once accepted you won't be able to revert to a state before they were categorized, so to prevent accidental acceptance we require users to press and hold the button.

### Evaluate

Clicking the _Evaluate_ button will open a dialog with the evaluation result of the current run, along with the previous runs for which evaluation has been done.

<img  class="theme-img dark-img content-img" src=../../img/classifier/classifier-dark-evaluate.webp>
<img  class="theme-img light-img content-img" src=../../img/classifier/classifier-light-evaluate.webp>

**Select Run**

Use the pager at the top right of the dialog to view the current evaluated run, or select a previously evaluated run. A warning icon appears when a run's validation set differs from the previous run's, since differences in the metrics may then reflect the data rather than the model.

**Confusion Matrix**

Displays the result of the validation set predictions. Ideally you want it to resemble an _identity matrix_ where the values on the diagonal are maximized and the surrounding values are zero. This would mean that the model accurately predicted the classes of the validation set.

**Evaluation Metrics**

Displays some averaged evaluation metrics for the run:

- Accuracy
- Cross Entropy
- Precision
- Recall
- F1-Score

See our [image classification tutorial](../../pages/tutorials/classify-example-eukaryotic-image.md)
and [object classification tutorial](../../pages/tutorials/create-cell-crops-with-cellprofiler.md) for usage information.
