# Segmentation

The image segmentation module allows researchers to quickly identify cells or nuclei by selecting pre-trained segmentation models. Users can choose a model from the available options and apply it to images that are opened and selected.

```{admonition} Cellpose: Remote Computation
:class: warning

All of the models run locally on your own device **EXCEPT** the Cellpose model. This has to do with the difficulty converting the Cellpose model, which utilized many custom functions, to a usable TFJS model. To get around this, we connect to the [BioEngine](https://aicell.io/project/bioengine/), maintained by the [AICell Lab](https://aicell.io/), server to run this model. It is possible that the server may stop responding and you will get an error during inference. If this happens you may just need to wait a little while for the server to reboot and try again.
```

## Overview

<img  class="theme-img dark-img content-img" src=../../img/project-viewer/segmenter/segmentation-section-dark.png>
<img  class="theme-img light-img content-img" src=../../img/project-viewer/segmenter/segmentation-section-light.png>

<br/>
<br/>

1. Task Selection
2. Model I/O
3. Model Description
4. Model Operations

## Task Selection

Switch between classification and segmentation tasks. The tasks will operate on the currently displayed Kind.

## Model I/O

### Model Selection

<img  class="theme-img dark-img content-img" src=../../img/project-viewer/segmenter/load-seg-dark.png>
<img  class="theme-img light-img content-img" src=../../img/project-viewer/segmenter/load-seg-light.png>

<br/>
<br/>

**1. Model Selection**

Piximi provides several segmentation models to choose from:

- Cellpose (remote)
- Stardist (fluo, VHE)
- Gland Segmentation
- COCO-SSD

More informatino about the models can be found in the [Segmentation Tutorial](pages/tutorial/segmentation-tutorial.html#load-models).

**2. Model Details**

Displays information about the model, its sources, the Kind output, and a potential use-case.

## Model Description

Display the name of the currently selected model, as well as the name of the Kind of object it identifies.

## Model Operations

### Fit

We are currently working on support for training a segmentation model.

### Predict

Clicking the _Predict_ button will begin running inference on the images/object of the displayed Kind, using the selected model. A new Kind will be created and populated with the identified objects.

### Evaluate

Since we do not support segmentation model training at this time, there is nothing to evaluate.

See our [Segmentation Tutorial](../../pages/tutorials/segmentation-tutorial.md) for usage information.
