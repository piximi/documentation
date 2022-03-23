# Object Classification

Currently, Piximi can only classify at the image level. We are working on adding deep learning segmentation of cells which would enable users to classify individual cells or other segmentations, rather than at the whole image level. This approach will be useful for recording morphologies of cell subpopulations within larger a heterogenous population.

While we work on adding segmentation, it's currently possible to use CellProfiler to segment individual cells and create single cell cropped images using the CellProfiler module `SaveCroppedObjects`. These images of individual cells can be then be opened in Piximi and categorised.

<!-- ![cropped-object-create](./img/user-guide-creating-cell-objects.png) -->

### 1. Creating image crops of cells in CellProfiler

- Link to CellProfiler pipeline
- Link to example image dataset
- Brief walkthrough of getting the CellProfiler output
  1. Import images
  2. NamesAndTypes
  3. Run analysis
  4. Open cropped image folder in Piximi


### 2. Categorise training data


### 3. Train model


### 4. Predict classes for unlabelled images

