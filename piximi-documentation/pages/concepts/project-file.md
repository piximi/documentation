# Saving and exporting data from Piximi

Piximi saves data as a project file that is a zipped `.zarr`, which allows you to easily return to your progress or share it with others. This allows Piximi to support reproducible science workflows.

Generally speaking, the project files are NOT intended for human exploration - at least, they are not optimized for it. You can export the following things from Piximi in the following ways:

- Trained classifiers can be exported after training in the main [project viewer window](../detail/projectviewer-classification.md)
- Segmentations (whether created in Piximi or manual) can be exported in the [image viewer window](../detail/imageviewer-tools-annotation.md)
- Measurement CSVs and plots can be exported in the [measurements window](../detail/measurements-viewer.md)