![Piximi](./piximi-documentation/img/piximi-logo.svg)

# Contribute

Contributions to the documentation are welcome. To contribute, clone the repository, and follow the [instructions here](https://github.com/piximi/piximi/wiki/contribute#version-control) for commiting changes and submitting work.

## Suggesting edits
To make annotations on the webpage directly just highlight the text and annotate. You'll have to sign in/up for a [hypothes.is account](https://hypothes.is/login).

## Adding new pages
Create a markdown file for your page and add the filename to the _toc.yml file in the piximi-documentation folder. Push your changes to main and the website will be reloaded with your new page.

## Find icons 
https://fonts.google.com/icons?icon.query=settings

## Taking screenshots

If you'd like to use MacOS native tools, press `shift+command+4` and select the area of the screen to take a screenshot of. Open the resulting screenshot in Preview, and annotate using Tools -> annotate options.

Alternatively, for MacOS, use [Shottr](https://shottr.cc/). In the Shottr preferences, change the window screenshot background to `Transparent`. Take `Capture active windows` screenshots, which you can find in the Shottr menu bar icon > `... more` submenu. You can then add annotations to the screenshot in the popup, such as red rectangles to highlight buttons. `shift+command+S` to save to a custom directory.

## Making GIFs

The following steps assume you're on MacOS:

1. Use `QuickTimePlayer.app` to create a new screen recording; alternatively press `shift+command+5`, select "Record Selected Portion", set the recording area, and press "Record"
  - If cropping of the video is required, you can use `Davinci Resolve` from the App Store for free
    - `Quick Export` as H.264

2. Using [Gifski](https://gif.ski/), upload the video and convert to Gif

If you'd rather use the command line, instead of Gifski:

2. `brew install ffmpeg`

3. Then, run:
```
ffmpeg -i input.mov \
-vf "fps=10,scale=800:-1:flags=lanczos,split[s0][s1];\
[s0]palettegen=max_colors=128:reserve_transparent=0[p];\
[s1][p]paletteuse" \
-y output.gif
```
- Try to aim for GIF filesizes as small as possible so they load quickly. 
- `scale=800:-1` sets the width dimension to 800 px. `-1` automatically sets the height to maintain aspect ratio
- `palettegen=max_colors=128` controls the colors. Max available is 256