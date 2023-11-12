---
layout: post
title: >
  How to generate images with stable diffusion and a custom Gradio app interface
  for free
subtile: What I learned (so far) about stable diffusion
published: true
---

# Stable Diffusion and Customizing Gradio: A Comprehensive Guide

## Introduction

Stable diffusion is an exciting field in GenAI for generating all sorts of images, videos, but also to enhance your own picture. There are many many flavours of stable diffusion models (fine-tuned for a specific tasks, or one specific training images) and versions (v1, v2, XL, etc.). For this tutorial I will be using [Segmind Stable Diffusion](https://github.com/segmind/distill-sd) (SSD), a 50% smaller and faster stable diffusion that generates pics as good as the OG stable diffusion from [Stability AI](https://stability.ai/stable-diffusion/). Aditionally, I will use the HuggingFace implementation of [SSD](https://huggingface.co/segmind/SSD-1B) in a Pythob Notebook on [Google Colab](https://colab.research.google.com/) and prompt the SSD model plus display the generated the images in [Gradio](https://www.gradio.app/)


## Part 1: Understanding Stable Diffusion - a very high-level short introduction

### 1.1 What is Stable Diffusion?

Stable diffusion refers to the process in which particles or information gradually disperses in a medium while maintaining a steady state. This stable state is achieved when the rate of diffusion is uniform and consistent, preventing the formation of imbalances or irregularities. In the context of machine learning, stable diffusion helps in evenly distributing data points, ensuring that the model provides accurate predictions.

### 1.2 Many versions of stable diffusion there are

Stable diffusion plays a critical role in machine learning for the following reasons:
- Balances data distribution: Stable diffusion ensures that the data is equally distributed, preventing any class imbalance.
- Enhances model performance: A balanced data distribution helps in achieving better model performance and accuracy.
- Reduces overfitting: Stable diffusion prevents overfitting by avoiding the concentration of data in specific areas, ensuring that the model generalizes well.

### 1.2 Segmind Distilled Stable Diffusion (SSD)
This version of stable diffusion is a knowledge-distilled, smaller versions of Stable Diffusion. 
These distillation-trained models produce images of similar quality to the full-sized Stable-Diffusion model while being significantly faster and smaller.

## Stable Diffusion Lite: A Knowledge-Distilled Iteration

The current iteration of Stable Diffusion represents a knowledge-distilled, more compact rendition of its larger counterpart. These distilled models achieve image quality comparable to the full-sized Stable Diffusion model, but with notable improvements in terms of speed and resource efficiency.

**Knowledge-Distillation** training involves a process where a large teacher model imparts its wisdom to a smaller student model, step by step. In this analogy, a substantial teacher model is initially trained on extensive datasets. Subsequently, a smaller model undergoes training on a more modest dataset, with the goal of replicating the outputs of the larger model, in addition to conventional training on the dataset. .

#### Advantages

- **Up to 100% Faster Inferences:** The distilled models exhibit significantly faster inference times.
- **Up to 30% Lower VRAM Footprint:** Resource efficiency is enhanced with a reduced VRAM footprint.
- **Faster Dreambooth and LoRA Training:** Improved speed in Dreambooth and LoRA training processes.

#### Limitations

While promising, it's essential to acknowledge the early stage of the distilled models. The outputs may not yet meet high quality and accuracy standards which I can also confirm after playing with Stability Diffusion XL from Stability-AI as an example and just visually comparing the outputs for the same prompt.


## Part 2: Gradio Interface for Stable Diffusion
[Gradio](https://www.gradio.app/) is an open-source framework that allows users to create **customizable user interfaces for machine learning models.** In this section, we will discuss how to customize Gradio to visualize the outputs of stable diffusion. I personally don't like how the standard gradio interface looks like. Maybe orange is not my color? So I set out to modify the theme color, fonts and add some text and pics using HTML and CSS.

![Gradio Standard Look](/assets/img/gradio.png){: .mx-auto.d-block :}

### 2.1 Installing Gradio and getting the hang of it

Gradio continously updates their app so be careful what version you use. While writing this code they just updated to the version 4.2.0 and my code broke :). Take a look at the latest changes and if they are breaking ones in their [CHANGELOG](https://github.com/gradio-app/gradio/blob/main/CHANGELOG.md)

The tricky part was working with HTML and CSS to add my own custom changes. I fiddled a lot with the right changes and for the life of me I couldn't get the color of the background text to change to white.  

Besides their standard orange theme, Gradio offers a few other in-built [themes](https://www.gradio.app/main/docs/themes) in different colors and different fonts. However, I found the options quite limited. The good part is that you can directly test into the Gradio any changes you make to a theme and see how it looks like. Here is how that looks like: #todo insert pic

Many creative people created their own themes, ranging from anime girls to the popular "Dracula" theme, and deployed these on [Hugging Face Spaces](https://huggingface.co/spaces/gradio/theme-gallery). I selected the "JohnSmith9982/small_and_pretty" pretty theme because the green colors went well with my background picture which I added using a small custom CSS code. Both the theme and CSS code can be directly passed to`gradio.Blocks()`. Gradio's Blocks API serves as a low-level interface for crafting highly customizable web applications and demos entirely in Python. It surpasses the Interface class from Gradio in flexibility, offering control over component layout, event triggers for function execution, and data flows between inputs and outputs. Blocks also supports the grouping of related demos, such as through tabs.

#### Basic Usage

  1. Create a Blocks object.
  2. Use it as a context with the "with" statement.
  3. Define layouts, components, or events within the Blocks context.
  4. Finally, call the `launch()` method to initiate the demo.


Here is the code snippet that achieves that:

~~~
!pip install gradio
theme='JohnSmith9982/small_and_pretty'
css_code = """
.gradio-container {
    background: url('file=/content/drive/My Drive/gradient.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: white !important; /* Set text color to white */
}
footer {
    display: none !important;
}
"""

with gr.Blocks(theme=theme, css=css_code) as demo:
      ....
~~~

