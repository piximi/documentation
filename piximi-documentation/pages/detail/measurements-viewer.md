# Measurements Viewer

The Measurements Viewer lets you measure the images and objects in your project, summarize the results in tables, and visualize them in plots. It operates on every image/object of the chosen **Kind**, so no selection is needed in the Project Viewer: click **Measure** at the top of the Project Viewer to open it.

## Table Creation and Measurement Selection

<img class="theme-img dark-img content-img fig-315 fig-float" src=../../img/measurements-viewer/measurements-viewer-dark-drawer.webp>
<img class="theme-img light-img content-img fig-315 fig-float" src=../../img/measurements-viewer/measurements-viewer-light-drawer.webp>

**1. Create Table**

Click **Add Table**, then choose one of the project's Kinds. Each table measures all of the items belonging to that Kind (the **Image** kind measures whole images). Tables appear as tabs along the top of the viewer, and can be renamed or deleted from their tab.

**2. Object Measurements**

Geometry measurements performed on the object masks. They are not available for the **Image** Kind.

- _Area_: The area of the annotation mask.
- _Bounding-Box Area_: The area of the annotation's bounding box.
- _Perimeter_: The perimeter of the annotation mask.
- _Extent_: The ratio of mask area to bounding-box area.
- _Equivalent Diameter_: The diameter of a circle whose area is equal to the area of the annotation.
- _Diameter of Equal Perimeter (PED)_: The diameter of a circle whose perimeter is equal to that of the annotation.
- _Radius_: The radius of the annotation.
- _Sphericity_: How close the annotation is to a perfect circle. Ranges from 0 (irregular) to 1 (circular).
- _Compactness_: How compact the object is. A circle is the most compact, with a value of 1; the value increases as the shape becomes more irregular.
- _Center of Mass (X, Y)_: The coordinates of the object's center of mass.

**3. Intensity Measurements**

Performed on whole images, as well as on the image crops of annotated objects:

- _Total_: The cumulative sum of the pixel intensities.
- _Mean_ and _Median_: The mean and median pixel intensity.
- _Std_: The standard deviation of the pixel intensities.
- _MAD_: The median absolute deviation of the pixel intensities.
- _Min Value_ and _Max Value_: The lowest and highest pixel intensity.
- _Lower Quartile_ and _Upper Quartile_: The intensities below which 25% and 75% of the pixels fall.

Tick a group to select all of its measurements, or expand it to pick individual ones.

## Table View

<img class="theme-img dark-img content-img" src=../../img/measurements-viewer/measurements-viewer-dark-table-tab.webp>
<img class="theme-img light-img content-img" src=../../img/measurements-viewer/measurements-viewer-light-table-tab.webp>

1. **Table Tabs**: Switch between the measurement tables you have created.
2. **Table | Plot View**: Switch between the data grid and the measurement plots.
3. **Export**: Download the table as a `.csv` file (or, in the plot view, save the plot as a `.png`).
4. **Split Options**: Choose how the measurements are grouped (see below).
5. **Data Grid**: One row per measurement, with:
   - _Count_: The number of items measured.
   - _Mean_, _Median_ and _Std Dev_: Statistics over those items.

### Split Options

By default the statistics are computed over every item in the Kind. Use the **Split Options** to break them down by one or more dimensions:

- **Category**: The category of each item.
- **Partition**: The training partition of each item (training, validation, or unassigned).
- **Image**: The image an object belongs to (for object Kinds).

Drag a dimension from **Available Dimensions** into **Column Grouping** to create a pivot table with one set of columns per value. The order of the dimensions matters: the first dimension is the outermost grouping. Drag a dimension back to remove it.

<img class="theme-img dark-img content-img" src=../../img/measurements-viewer/measurements-viewer-dark-table-pivot.webp>
<img class="theme-img light-img content-img" src=../../img/measurements-viewer/measurements-viewer-light-table-pivot.webp>

## Plot View

<img class="theme-img dark-img content-img" src=../../img/measurements-viewer/measurements-viewer-dark-plot-tab.webp>
<img class="theme-img light-img content-img" src=../../img/measurements-viewer/measurements-viewer-light-plot-tab.webp>

**1. Plot Controls**

- _Plot_: The type of plot: Histogram, Scatter, or Beeswarm.
- _Color Theme_: The color scheme of the plot.
- _X-axis_ / _Y-axis_: The measurements used for each axis.
- _Size_: The measurement used for the size of the marks.
- _Color_: The split (category or partition) used to color the marks.
- _Number of Bins_ and _Show Bin Label_: Histogram options.
- _Swarm Group_: The split (category or partition) used to group a beeswarm plot.

| Plot Name | Color Theme  | x-Axis       | y-Axis       | Size         | Color        | Num. Bins    | Swarm Group  |
| --------- | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Histogram | Configurable | Configurable | N/A          | N/A          | N/A          | Configurable | N/A          |
| Scatter   | Configurable | Configurable | Configurable | Configurable | Configurable | N/A          | N/A          |
| Beeswarm  | Configurable | N/A          | Configurable | Configurable | N/A          | N/A          | Configurable |

**2. Plot**

Displays the current plot.

**3. Plot Tabs**

Switch between multiple plots. Click the **+** at the end of the tab bar to create a new plot, click a tab's title to rename it, and use the **x** to remove it.

**4. Save Plot**

Save the current plot as a `.png` file.
