# Suggesting edits
To make annotations on the webpage directly just highlight the text and annotate. You'll have to sign in/up for a [hypothes.is account](https://hypothes.is/login).

# Adding new pages
Create a markdown file for your page and add the filename to the _toc.yml file in the piximi-documentation folder. Push your changes to main and the website will be reloaded with your new page.

# Find icons 
https://fonts.google.com/icons?icon.query=settings

# Making GIFs

The following steps assume you're on MacOS:

1. `brew install ffmpeg`
2. Use `QuickTimePlayer.app` to create a new screen recording
   1. If cropping of the video is required, you can use `Davinci Resolve` from the App Store for free
      1. `Quick Export` as H.264
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


https://superuser.com/questions/556029/how-do-i-convert-a-video-to-gif-using-ffmpeg-with-reasonable-quality


