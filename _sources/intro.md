
# Images to Discovery

Piximi is an application that runs entirely from your browser and requires no installation and minimal setup. Our vision for Piximi is to provide an intuitive application for the annotation, segmentation, classification and measurement of images. In this current release, Piximi allows users to annotate specific regions of your images, such as nuclei, and can also use deep learning to classify your images into distinct groups.

<!-- ![piximi-workflow](./img/piximi-workflow.png) -->


<a class='piximi-btn' href="https://www.piximi.app/" target="_blank"><img class="text-img" src="./img/piximi_logo_icon.png">  Launch Piximi here</a>

```{admonition} Known issues
:class: warning

Piximi is an active work in progress. [Click here to see the known issues we're working on](work-in-progress).
```


## The Piximi Annotator

![intro-annotator](./img/intro-annotator.png)

The annotator within Piximi allows you to intuitively create annotations on your image of choice using a variety of tools. These tools include manual pen annotations in addition to more automatic methods with quick annotation. The Piximi annotator also works with **multichannel** and **multiplane** images, both of which can be easily selected to make sure that annotations are placed where they need to be. In future releases, we aim to also include z-plane interpolation to make annotating in 3D even easier.

## The Piximi Classifier

By using deep learning, Piximi can classify images of a variety of subject matter, such as bacteria, cultured cells, insects and more. The power of deep learning is applied upon a small number of images that have been categorized by the user in Piximi which then gives the computer a starting point on understanding what a particular category of image looks like. For example, the user can teach the computer what cells in G1, S, G2 or M-phases of the cell cycle look like. These user-made categorizations are then intensely examined by the deep learning model within Piximi through a process known as training. During this training process, the deep learning model finds patterns in the data in order to link the input (an image added by the user) to an output (the category, or class, defined by the user). The trained deep learning model can then predict on uncategorized images and determine which class they belong to. In the aforementioned example, this would determine which stage of the cell cycle a particular cell is in without relying on user input.

Ultimately, Piximi offers users a way to have a highly customizable method of classifying large image sets across a range of subject matter by learning from annotations made by the user.

## Piximi Next Steps

Piximi is a work in progress and currently features an image annotator and deep learning-based classification of images. The ultimate aim of Piximi is to provide users with an intuitive application for the annotation, segmentation, classification and measurement of information present in images. In this phase of Piximi, we have released the annotator and classifier as these are important first steps in preparing to add the segmentation and measurement functionalities.

We are developing Piximi in the open. If you have any features that you think that you would like to see in Piximi, please create a discussion in [our Piximi Github repo](https://github.com/piximi/piximi/discussions).

<!-- Table on contents directive prints the ToC -->
<!-- ```{tableofcontents}
``` -->
