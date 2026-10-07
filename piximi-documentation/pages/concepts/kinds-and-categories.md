# Kinds and Categories

If using objects in Piximi, it's helpful to understand how Piximi groups objects, which are first into *kinds* and then into *categories*.

## Kinds

You can think of kinds as different, well, kinds of objects! A project where you are annotating tissue regions, cells, and nuclei could therefore have 3 "kinds" - one for regions, one for cells, and one for nuclei. Running a new segmentation model in Piximi will create a new "kind" automatically. All objects in a kind by default start off in the "Unknown" category.

## Categories

Categories are special in Piximi because they are the data structure that is used by the classifier - they let you break a "kind" of object (like cells) into multiple categories (like "MarkerAPositive" and "MarkerANegative"). If you want to train a deep learning classifier on objects in Piximi, it can only be for one "kind" at a time, so all objects must be the same kind but different categories.

## How do I decide what's a kind and what's a category?

Say I want to find all the cells in a field of view - some are mitotic and some are interphase. Should those be two different kinds or two different categories?

It's really up to you! The most critical point is whether or not you want to identify all the objects together and sub-classify them using a deep learning classifier - in that case, you should make them all the same Kind and then make two Categories for "Mitotic" and "Interphase". 

If you aren't using the classifier, it mostly doesn't matter, but may vary by the segmentation approach you are taking - if the model you're using finds both kinds of things, you might as well treat them as the same kind and then just divide them into categories. If it only finds one of those groups well with a given set of segmentation settings (or annotation approaches), you might think about making them different kinds in two different segmentation passes. Neither option is wrong if you aren't using the classifier!
