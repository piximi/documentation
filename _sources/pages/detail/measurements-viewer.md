# Measurements Viewer

The annotator in Piximi can quickly create annotations for your **multichannel** and **multiplane** images. Below is a showcase of some of the different annotation tools that Piximi offers.

## Table Creation and Measurement Selection

<img class="theme-img dark-img content-img" src=../../img/measurements-viewer/measurements-viewer-actionbar-dark.webp>
<img class="theme-img light-img content-img" src=../../img/measurements-viewer/measurements-viewer-actionbar-light.webp>

<br/>
<br/>

**1. Table Creation**

Click in the "+" button to create a new measurement group based on one of the Kinds in the project.

**2. Split Selection**

Select the splits yout want to use for the measurements. The splits dictate how the measurements are grouped for statitical analysis (i.e. calculating the mean intensity over all the imges in the **training** partition).

**3. Measurement Selection**

Measurements are separated into two sections; **Intensity** and **Object Geometry**.

_Intensity Measurements_

These measurements are performed for whole images, as well as image crops for annotated objects and include:

- _Total Intensity_: Cummulative sum of the intensity values of each pixel.
- _Mean Intensity_: The mean of the pixel intensities.
- _Standard Deviation_: The std of the pixel intensities.
- _MAD_: The median adjusted deviation of the pixel intensities of the image.
- _Minimum Intensity_: The minimum intensity of the pixels in the image.
- _Maximum Intensity_: The maximum intensity of the pixels in the image.
- _Lower Quartile_: The value of the intensity for which 25% of the pixel intensities are lower.
- _Upper Quartile_: The value of the intensity for which 75% of the pixel intensities are lower.

_Object Geometry Measurements_

These measurements are perfomres on the object masks, and are not available for the **Image** Kind.

- _Area_: The area of the annotation mask.
- _Bounding-Box Area_:the area of the annotation's bounding-box
- _Perimeter_: The perimeter of the annotation mask.
- _Extent_: The ratio of bounding-box area to mask area.
- _Equivalent Diameter_: The diameter of a perfect circle whose area is equivalent to the area of the annotation.
- _Diameter of Equal Perimeter (PED)_: The diameter of a circle whose perimeter is equal to that of the annotation's.
- _Sphericity_: The extent to which an annotation is perfectly spherical. Ranges from 0 (irregularly shaped) to 1 (spherical)
  = _Compactness_: The degree to which objects are compact. Circles will be the most compact with a value of 1, with the value increasing with increasing shape irregularity.

## Measurements Data Grid

<img class="theme-img dark-img content-img" src=../../img/measurements-viewer/measurements-viewer-table-tab-dark.webp>
<img class="theme-img light-img content-img" src=../../img/measurements-viewer/measurements-viewer-table-tab-light.webp>

<br/>
<br/>

**1. Display Tabs**

Switch views between the data grid and the measurement plots.

**2. Data Grid**

- _Measurement Name_: Name of the measurement.
- _Split_: The split which the measurement results are analysed over.
- _Mean_: The mean values over all the measurement values in the split.
- _Median_: The median values over all the measurement values in the split.
- _Standard Deviation_:The standard deviation over all the measurement values in the split.

## Measurements Plots

<img class="theme-img dark-img content-img" src=../../img/measurements-viewer/measurements-viewer-plot-tab-dark.webp>
<img class="theme-img light-img content-img" src=../../img/measurements-viewer/measurements-viewer-plot-tab-light.webp>

<br/>
<br/>

**1. Plot Controls**

- _Plot Type_: The type of plot to use: Histogram, Scatter, Beeswarm
- _Color Scheme_: The color scheme of the plot.
- _x-Axis_: The measurement used for the x-axis.
- _y-Axis_: The measurement used for the y-axis.
- _Size_: The measurement used for the size mapping.
- _Color_: The split type used for color mapping (by-category or by-partition)
- _Number of Bins_: Number of binds to use in the histogram plot.
- _Swarm Group_: The split type used for swarm grouping (by-category or by-partition)

| Plot Name | Color Scheme | x-Axis       | y-Axis       | Size         | Color        | Num. Bins    | Swarm Group  |
| --------- | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Histogram | Configurable | Configurable | N/A          | N/A          | N/A          | Configurable | N/A          |
| Scatter   | Configurable | Configurable | Configurable | Configurable | Configurable | N/A          | N/A          |
| Beeswarm  | Configurable | N/A          | Configurable | N/A          | N/A          | N/A          | Configurable |

**2. Plot Container**

Displays the current plot.

**3. Plot Tabs**

Switch between multiple active plots. Click on the tab title to update the name of the plot, or click on the "X" button to remove the plot.

**4. Create New Plot**

Create a new plot

**5. Save Plot**

Save the currently viewd plot as a `.png` file.
