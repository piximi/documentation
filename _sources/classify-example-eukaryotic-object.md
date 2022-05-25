# Object Classification

Currently, Piximi can only classify entire images. We are working on adding deep learning based segmentation that would enable users to classify individual cells or other segmented regions of interest within an image. This approach will be useful for recording phenotypes of cell subpopulations within a larger, heterogenous population, for example.

While we work on adding segmentation, it's currently possible to use CellProfiler to segment individual cells and create single cell cropped images. These images of individual cells can be then be opened in Piximi and then categorized.

The following example will demonstrate how the image crops for the Piximi `U2OS Cell Crops` example project were made using CellProfiler. The images we will use to recreate this dataset are from the [BBBC013 cytoplasm-nucleus translocation dataset](https://bbbc.broadinstitute.org/BBBC013) from the Broad Bioimage Benchmark Collection. Within this dataset, a cytoplasmic GFP signal is considered as positive and a nuclear GFP signal as negative. The CellProfiler pipeline used in the following example can be {download}`downloaded here <downloads/BBBC013-translocation-crop.cppipe.zip>`, but this guide will walk you through how to create the pipeline from scratch. 

## Create cell crops with CellProfiler

For this example, we will create a CellProfiler pipeline that will first identify nuclei using the `IdentifyPrimaryObjects` module, followed by cell identification with the `IdentifySecondaryObjects` module. Following this, we will then create a multichannel RGB image with DNA colored blue and GFP colored green. Finally, these mulltichannel RGB images will be cropped based on the previously identified cell object using the `SaveCroppedObjects` module. 

### 1. Import images

To begin, drag and drop your images into the `Images` input module of CellProfiler.

```{figure} ./img/user-guide-images-input-view.png
---
name: images-input-view
---
Drag and drop your images into the `Images` input module. 
```

Next, select appropriate rules to categorize your files in the `NamesAndTypes` input module. For images that contain `Channel2` in their filename, assign the name `rawDNA`. For images that contain `Channel1` in their filename, assign the name `rawGFP`.

```{figure} ./img/user-guide-names-and-types-view.png
:class: img-shadow
---
name: NamesAndTypes-view
---
Within the `NamesAndTypes` module, assign appropriate names for the DNA and GFP channels. 
```

### 2. IdentifyPrimaryObjects

Then, add a `IdentifyPrimaryObjects` module and set `rawDNA` as the input image. Name this primary object `Nuclei`. Adjust the parameters accordingly so an appropriate segmentation is achieved while using test mode. 


```{figure} ./img/user-guide-identify-primary-object-view.png
---
name: IdentifyPrimaryObjects-view
---
Add a IdentifyPrimaryObjects module and adjust the parameters to achieve adequate object segmentation of the `rawDNA` image.
```

### 3. IdentifySecondaryObjects

Add a `IdentifySecondaryObjects` module and select `rawGFP` as the input image and `Nuclei` as the input objects. Name this Secondary object `Cells`. Since the cytoplasmic signal is inconsistent between cells and can therefore not be used to determine cytoplasmic segmentation, we will use the `Distance - N` method to identify secondary objects, with a distance of `10`. 

```{figure} ./img/user-guide-identify-secondary-object-view.png
---
name: IdentifySecondaryObjects-view
---
Add a IdentifySecondaryObjects module using the `rawGFP` as an input image and `Nuclei` as in input object.
```

### 4. GrayToColor

Now, we will create a multichannel RGB image using the input `rawDNA` and `rawGFP` images. Add a `GrayToColor` module and select `rawGFP` to be colored green and `rawDNA` to be colored blue. Name the output image `GFPandDNA`.

```{figure} ./img/user-guide-color-to-gray-view.png
---
name: ColorToGray-view
---
Add a ColorToGray module and set the `rawGFP` as green and `rawDNA` as blue.
```

### 5. SaveCroppedObjects

Next, add a `SaveCroppedObjects` module and select the `Cells` objects from `IdentifySecondaryObjects`. For the `Image` setting, select `GFPandDNA` created by the `ColorToGray` module. It is this image that will be cropped to individual `Cells` objects. Select an appropriate directory to save your cropped images. 

```{figure} ./img/user-guide-save-cropped-objects-view.png
---
name: SaveCroppedObjects-view
---
Add a SaveCroppedObjects module and select your desired `Object` and the `Image` to crop.
```

Finally, run the analysis within CellProfiler by pressing the `Analyze images` button in the bottom left of the main CellProfiler window. 


### 6. Next steps

Now that you have cropped images of your cells, you can follow the [image classification guide](classify-example-eukaryotic-image.md) and adjust it to accommodate your image crops. The crops of the [BBBC013 dataset](https://bbbc.broadinstitute.org/BBBC013) represents a 3-class problem: `NuclearGFP`, `CytoplasmicGFP` and `NoGFP`. When categorizing your images into these distinct categories, explore how categorizing more images into each of these classes can impact training performance. 

```{admonition} Copyright
:class: seealso

The [BBBC013](https://bbbc.broadinstitute.org/BBBC013) images used here are licensed under a [Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/) by Ilya Ravkin.
```
