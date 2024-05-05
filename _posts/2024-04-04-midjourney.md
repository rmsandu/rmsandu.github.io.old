---
layout: post
title: Easy Image Generation with Midjourney 
subtitle: Can you actually use Midjourney to design useful images?
cover-img: /assets/img/cover_mj_post_youaremystar.png
thumbnail-img: /assets/img/thumbnail_ai.png
tags: [genai, midjourney,photos, dalle]
published: true
---

To be honest, I was never interested in trying Midjourney - sure you can create cool pics, but what could I use them for? After all, I live in a small apartment, and our walls already full of originally painted art that we received as gifts from friends or trifted (sorry, no Bansky here).

That's until I had to teach people with no AI or Tech experience to use Midjourney in a useful way (that could potentially generate payable skills). Now after using it for quite time I have to honestly tell you that I have major doubts about those clickbaity titles from Youtube or Instagram cretors that claim you can become a millionaire overnight with MJ design (can I call it MJ and not Midjourney? Or am I infringing some Spiderman copywright?). That being said I still learnt a lot of handy tricks for dealing with Midjourney and controlling the output.


## Creating incredibly realistic photos with Midjourney using camera settings for portraits and landscapes

I find that Midjourney is incredibly good at generating realistic photos. I seriously cannot tell the difference. Especially when all the settings of a professional camera are specified you can get mind-blowing results (National Geographic here I come!). To get a realistic looking photo I suggest always using the option `Raw`. You can permanently turn this on in `\settings`. Another tip is to start your prompt like this `\prompt: a realistic photograph of...`. I also had succesful results adjusting the `stylize`parameter, usually to higher values.

Here are some of type of cameras and lenses you can use:
- Canon EOS-1D X Mark III: Flagship DSLR with exceptional speed, image quality, and durability. Canon EF 24-70mm f/2.8L II USM Lenses
- Nikon D6: Nikon's top-tier DSLR offering advanced autofocus and performance. E.g. Nikon AF-S NIKKOR 70-200mm f/2.8E FL ED VR
- Sony A1: Mirrorless powerhouse with high-speed shooting and 8K video capabilities. E.g. Sony FE 16-35mm f/2.8 GM: Fujifilm GF 110mm f/2 R LM WR
- Fujifilm GFX 100: Medium format camera with 102MP sensor for ultra-high resolution images.
- Leica M10-R: Iconic rangefinder camera. E.g. Leica APO-Summicron-M 50mm f/2 ASPH

You can also choose the depth of field (which I believe makes the most difference in the final output):
- f/1.4: Large aperture for low-light situations and shallow depth of field.
- f/2.8: Common aperture for fast lenses, providing good lowlight performance and subject isolation.
- f/5.6: Mid-range aperture for sharp images, balancing depth of field and light-gathering capabilities.
- f/8: Often considered the sweet spot for many lenses, delivering sharp images and increased depth of field.
- f/16: Small aperture for deep depth of field, ideal for landscapes and group shots.

Here some images I generated using the following prompt `\prompt a photograph of a majestic deer in the mountain wilderness in Scotland, etc, camera, aperture, lenses` with various camera settings:

{% include image-gallery.html folder="assets/uploads/album" %}


For portraits, writing `\prompt portrait photography` and specifiny the lighting are key for success. For example use soft, natural light for flattering portraits or usesoftbox to mimic natural light. You can try toxperiment with different lighting directions: front light for clarity, side light for depth, or backlight for drama. Use a wide aperture to create a shallow depth of field, which makes the eyes stand out and choose lens that offer a flattering perspective; typically, an 85mm or 50mm lens works well for portraits.I only tried generating portraits of women and in my opinion (see below), half of them were too sexual.

![Portraits of Women Generated with Midjourney](/assets/img/portrait_women.png){: .mx-auto.d-block :}


## Limitations of Midjourney

- If you have a very specific request from a client, company etc., get ready to strugle back & forth with the prompting and variations until you will probably consume all your credits.
- Midjourney still strugles with the laws of physics and counting (see my photo with the egg)
- Text is very hard to correctly generate, especially long sentences. Stick to a few simple words.
- Vary region is still quite buggy - if the region is not big enough it's not going to change anything. If your prompt for the vary region differs too much from the original content of the photo, again nothing will be generated
- Photos of women are uncessarily sexual or sensual (IN MY OPINION). Every time I tried to generate a photograph of a woman she had a cleavage. Like why?
- Refernce URL of other photos doesn't work well, at least not at scaling what you are trying to reference.
