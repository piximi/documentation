# Measurements

While sometimes, the goal of an experiment is just to find objects or to classify images and/or objects, other times, we want to go deeper and learn more about the images and/or objects we care about. This is where *Measurements* come in.

Right now, Piximi supports two broad classes of measurements - intensity measurements, which work for images OR objects, and shape/geometry measurements, which work for objects alone. More categories of measurements will be rolling out in time - stay tuned!

Measurements are available from the ![Measurements](./icons/ruler-icon.svg) icon in the top bar of Piximi.

Measurements are created in individual tables - each table is specific to one "kind" - either images or a type of segmented object (such as cells). You can create as many tables as you like. 
Each table has measurements broken down by *Splits* - essentially, what are the different conditions in this experiment (if any) and how should we parse them? Each table has its own set of splits, which you can adjust at any time.

# Creating Measurements in Piximi

1. Click the [Measurements](./icons/ruler-icon.svg) icon in the top bar of Piximi.

2. Click the `+` button next to the word `Tables` to create a new measurement table. You can make as many tables as you like, to express different images or objects, broken down by different subsets.

```{figure} ./img/measurement-walkthrough/measure-00-pre-measurement.png
---
name: measurement-00-table-plus
scale: 50%
---
The `+` button at the top of the Tables menu allows you to add a new table
```

3. Select a `kind` you'd like to make measurements of. Reminder, `kind`s include the images, as well as any objects you created via segmentation or annotation.

```{figure} ./img/measurement-walkthrough/measure-01-create-table.png
---
name: measure-01-create-table
scale: 50%
---
Select what kind of measurement table you'd like to make
```

4. Piximi will begin to calculate metrics in the background. Depending on the number of examples present in that `kind`, this may take a few minutes - an indicator will show you the progress made.

```{figure} ./img/measurement-walkthrough/measure-02-spin-while-creating-table.png
---
name: measure-02-spin-while-creating-table
scale: 50%
---
The circular indicator next to `Tables` indicates how far through measurement generation Piximi is. Make sure to keep the Piximi window open (consider moving it into its own tab) to let calculations continue!
```

5. Once the initial pre-calculations are done, you can select which measurements you'd like to make, as well as how you'd like to subset "split" the data (currently by `Category` or by `Partition`; if you only have one category, tha's fine, but you do have to click something here!). As before, this will take some time, so just leave the Piximi tab open and the circular indicator will let you know how long this is going to take.

```{figure} ./img/measurement-walkthrough/measure-03-select-splits-and-measurements.png
---
name: measure-03-select-splits-and-measurements
scale: 50%
---
Select the split or splits you want to measure for each table, as well as the measurements you want for that table. Just like during table creation, a circular indicator next to the word `Measurements` will tell you how far along Piximi is at generating your measurements.
```

6. Once your measurements have been generated, they will appear in the main area in a data grid! In the grid, you can see the measurement name, the subset (or `Split`) of the data represented, and the Mean, Median, and Standard deviation of the data for that feature in that subset.

```{figure} ./img/measurement-walkthrough/measure-04-data-grid.png
---
name: measure-04-data-grid
---
The Piximi data grid
```

7. If you'd like to plot data in Piximi, simply navigate to the data grid containing the data you want to plot and hit the Plots tab at the top. You can make as many plots as you would like by hitting the `+` button on the plots tab. Plots can also be exported by saving to PNG. Piximi includes several plot types, including scatter plots, swarm plots, and histograms.

```{figure} ./img/measurement-walkthrough/measure-05-scatter.png
---
name: measure-05-scatter
scale: 50%
---
Scatter plots generated in Piximi can have X, Y, and Size measurements selected; they can also show colors according to the selected splits (with many colormaps to choose from). Note the "Save to PNG" button in the bottom right!
```

```{figure}  ./img/measurement-walkthrough/measure-06a-swarm-no-category.png
---
name: measure-06a-swarms
scale: 50%
---
Swarm plots can be shown on their own...
```

```{figure} ./img/measurement-walkthrough/measure-06b-swarm-with-category.png
---
name: measure-06b-swarms
scale: 50%
---
... or with a summary boxplot overlaid.
```

```{figure} ./img/measurement-walkthrough/measure-07-histogram.png
---
name: measure-07-histogram
scale: 50%
---
You can choose to represent your data as a histogram, with a custom number of bins.
```

If you want to do further analyses of your data (and you should)!, you can export your data tables from the measurements menu  - this will let you do whatever downstream analysis you like. 

```{figure} ./img/measurement-walkthrough/measure-08-export-measurements.png
---
name: measure-08-export-measurements
scale: 50%
---
Piximi lets you export your data to outside programs
```
