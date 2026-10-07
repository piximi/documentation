# Annotation Tools

The Image Viewer's annotator has nine tools for creating annotations, a selection tool for picking them out again, and three ways of combining a new shape with an annotation that is already there. Each is shown below on a nucleus of the [Translocation Tutorial](../tutorial/translocation_tutorial.md) example project.

Whichever tool you use, a finished shape is not saved right away: the confirm bar appears at the bottom of the canvas (see [Confirming and Editing Annotations](imageviewer.md)) and the shape is saved when you click **Confirm** or press `enter`. New annotations go into the kind and category selected in the **Annotations** drawer, so create a kind first if the project has none.

## Combining annotations

Draw a shape that overlaps an existing annotation, then choose what to do with the two on the confirm bar. The result is previewed on the canvas, and nothing changes until you confirm.

If the new shape overlaps more than one annotation, the bar says so and you click the annotations you want to act on.

### Combine

<img class="theme-img dark-img content-img" alt="Combining a new shape with an annotation" src="../../img/annotation-tools/annotation-tools-dark-combine.webp">
<img class="theme-img light-img content-img" alt="Combining a new shape with an annotation" src="../../img/annotation-tools/annotation-tools-light-combine.webp">

```{div} tutorial-caption
**Combine** merges the new shape and the annotation it overlaps into a single annotation.
```

### Subtract

<img class="theme-img dark-img content-img" alt="Subtracting a new shape from an annotation" src="../../img/annotation-tools/annotation-tools-dark-subtract.webp">
<img class="theme-img light-img content-img" alt="Subtracting a new shape from an annotation" src="../../img/annotation-tools/annotation-tools-light-subtract.webp">

```{div} tutorial-caption
**Subtract** removes the area of the new shape from the annotation it overlaps. No new annotation is created.
```

### Intersect

<img class="theme-img dark-img content-img" alt="Intersecting a new shape with an annotation" src="../../img/annotation-tools/annotation-tools-dark-intersect.webp">
<img class="theme-img light-img content-img" alt="Intersecting a new shape with an annotation" src="../../img/annotation-tools/annotation-tools-light-intersect.webp">

```{div} tutorial-caption
**Intersection** keeps only the region where the new shape and the annotation overlap.
```

## Selection tool

![selection tool](../../img/icons/icon-dark-tool-selection.webp)![selection tool](../../img/icons/icon-light-tool-selection.webp) **Selection Tool** (`shift` + `S`): click an annotation to select it, and click it again to deselect it. Click and drag a box to select every annotation inside it. Selected annotations are highlighted, and are the ones the **Delete**, **Categorize** and **Export** actions of the Annotations drawer apply to.

<img class="theme-img dark-img content-img" alt="Selecting annotations with the selection tool" src="../../img/annotation-tools/annotation-tools-dark-selection.webp">
<img class="theme-img light-img content-img" alt="Selecting annotations with the selection tool" src="../../img/annotation-tools/annotation-tools-light-selection.webp">

```{div} tutorial-caption
Click annotations to select them one at a time, or drag a box around several.
```

## Rectangular annotation

![rectangle](../../img/icons/icon-dark-tool-rectangle.webp)![rectangle](../../img/icons/icon-light-tool-rectangle.webp) **Rectangle** (`shift` + `R`): Click and drag from one corner to the opposite corner, or click the two corners.

<img class="theme-img dark-img content-img" alt="The rectangle tool in use" src="../../img/annotation-tools/annotation-tools-dark-rectangle.webp">
<img class="theme-img light-img content-img" alt="The rectangle tool in use" src="../../img/annotation-tools/annotation-tools-light-rectangle.webp">

```{div} tutorial-caption
The rectangle tool.
```

## Elliptical annotation

![ellipse](../../img/icons/icon-dark-tool-ellipse.webp)![ellipse](../../img/icons/icon-light-tool-ellipse.webp) **Ellipse** (`shift` + `E`): Click and drag across the bounding box of the ellipse, or click twice.

<img class="theme-img dark-img content-img" alt="The ellipse tool in use" src="../../img/annotation-tools/annotation-tools-dark-ellipse.webp">
<img class="theme-img light-img content-img" alt="The ellipse tool in use" src="../../img/annotation-tools/annotation-tools-light-ellipse.webp">

```{div} tutorial-caption
The ellipse tool.
```

## Polygonal annotation

![polygon](../../img/icons/icon-dark-tool-polygon.webp)![polygon](../../img/icons/icon-light-tool-polygon.webp) **Polygon** (`shift` + `P`): Click to place each corner of the shape. Click the first corner again to close it.

<img class="theme-img dark-img content-img" alt="The polygon tool in use" src="../../img/annotation-tools/annotation-tools-dark-polygon.webp">
<img class="theme-img light-img content-img" alt="The polygon tool in use" src="../../img/annotation-tools/annotation-tools-light-polygon.webp">

```{div} tutorial-caption
The polygon tool.
```

## Pen annotation

![pen](../../img/icons/icon-dark-tool-pen.webp)![pen](../../img/icons/icon-light-tool-pen.webp) **Pen** (`shift` + `F`): Paint the annotation by dragging. Click the tool again to open its slider, which sets the size of the brush.

<img class="theme-img dark-img content-img" alt="The pen tool in use" src="../../img/annotation-tools/annotation-tools-dark-pen.webp">
<img class="theme-img light-img content-img" alt="The pen tool in use" src="../../img/annotation-tools/annotation-tools-light-pen.webp">

```{div} tutorial-caption
The pen tool.
```

## Lasso annotation

![lasso](../../img/icons/icon-dark-tool-lasso.webp)![lasso](../../img/icons/icon-light-tool-lasso.webp) **Lasso** (`shift` + `L`): Drag to draw a freehand outline around the object. When you let go, the outline is closed.

<img class="theme-img dark-img content-img" alt="The lasso tool in use" src="../../img/annotation-tools/annotation-tools-dark-lasso.webp">
<img class="theme-img light-img content-img" alt="The lasso tool in use" src="../../img/annotation-tools/annotation-tools-light-lasso.webp">

```{div} tutorial-caption
The lasso tool.
```

## Magnetic annotation

![magnetic](../../img/icons/icon-dark-tool-magnetic.webp)![magnetic](../../img/icons/icon-light-tool-magnetic.webp) **Magnetic** (`shift` + `M`): Click on the edge of an object to start, then move along the edge: the line snaps to it. Click to fix the line where you are, and click the starting point to close the outline.

<img class="theme-img dark-img content-img" alt="The magnetic tool in use" src="../../img/annotation-tools/annotation-tools-dark-magnetic.webp">
<img class="theme-img light-img content-img" alt="The magnetic tool in use" src="../../img/annotation-tools/annotation-tools-light-magnetic.webp">

```{div} tutorial-caption
The magnetic tool.
```

## Color annotation

![color](../../img/icons/icon-dark-tool-color.webp)![color](../../img/icons/icon-light-tool-color.webp) **Color** (`shift` + `C`): Press in the middle of the object, then drag away from where you pressed: the further you drag, the more of the surrounding area of similar color is filled. Let go when the fill covers the object.

<img class="theme-img dark-img content-img" alt="The color tool in use" src="../../img/annotation-tools/annotation-tools-dark-color.webp">
<img class="theme-img light-img content-img" alt="The color tool in use" src="../../img/annotation-tools/annotation-tools-light-color.webp">

```{div} tutorial-caption
The color tool.
```

## Quick annotation

![quick annotation](../../img/icons/icon-dark-tool-quick.webp)![quick annotation](../../img/icons/icon-light-tool-quick.webp) **Quick Annotation** (`shift` + `Q`): Move the pointer over the image and the tool highlights the region it predicts there. Click to accept it, or press and drag to add together the regions you pass over. Click the tool again to open its slider, which sets the size of the prediction.

<img class="theme-img dark-img content-img" alt="The quick annotation tool in use" src="../../img/annotation-tools/annotation-tools-dark-quick.webp">
<img class="theme-img light-img content-img" alt="The quick annotation tool in use" src="../../img/annotation-tools/annotation-tools-light-quick.webp">

```{div} tutorial-caption
The quick annotation (aka superpixel) tool.
```

## Threshold annotation

![threshold](../../img/icons/icon-dark-tool-threshold.webp)![threshold](../../img/icons/icon-light-tool-threshold.webp) **Threshold** (`shift` + `T`): Drag a box around the region to threshold. Click the tool again to open its slider, then move it to change the sensitivity and see what is picked up. The generated mask is saved as a single annotation.

<img class="theme-img dark-img content-img" alt="The threshold tool in use" src="../../img/annotation-tools/annotation-tools-dark-threshold.webp">
<img class="theme-img light-img content-img" alt="The threshold tool in use" src="../../img/annotation-tools/annotation-tools-light-threshold.webp">

```{div} tutorial-caption
The threshold tool.
```
