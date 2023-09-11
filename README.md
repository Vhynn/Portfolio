# My Portfolio

This is a portfolio website built from 'create react app' to display some of the things I've painted / made. Also this whole project was made with the intention of learning React and a component library, in this case I'm using MUI. This website also uses fslightbox, a component for displaying images in a 'lightbox' type display.

The website itself is currently being hosted through AWS and can be visited at www.vhyn.dev

## Planned Changes
- I would like to add a gallery for some of the 3d sculpting / modelling I have been doing, with how I've set everything up it should be simple to just add a gallery in the .json data and upload relevant pictures to AWS

- Currently the website is a single page with content that changes, however I have not implemented a system that will allow  'back page' and 'formward page' to work intuitively and I would like to change this

- I would like to refactor the components and styling, I have ended up not using MUI very much and the limitations of the library's components ended up frustrating me and led me to write some, uhh, ugly styling.
  - Furthermore the code isn't super consistant or readable currently so I would like to write a sort of 'formatting guide' for my code to follow in an attempt to fix this.

## Functionality

The website is pretty simple as it is really just an image gallery. The tabs at the top will navigate to different galleries sorted by subject. Each gallery is a set of images and each image in a gallery can be clicked to view a larger version of the image housed in a lightbox as well as other images of the same subect that are not viewable from outside of the lightbox. The mobile version of the site is very similar, the only difference is that at the top of the page has two buttons instead of tabs. Then button on the left titled 'Galleries' will open a drawer from the left of the screen that houses the various tabs. The button on the left titled 'About Me' will open a drawer from the right of the screen that houses the about me section.

## Design decisions

I know that most of the time the 'about me' section or a menu bar sits on the left of the screen with content being served on the right, I have intentionally not done this. The reason is that unlike a stie with more complexity and navigation necessary, my site is really just a collection of galleries and I wanted the first thing someone focused on to be the gallery itself as opposed to a menu or about me section. On the web version the about me section is permanantly on the screen which might be odd compared to just having it be a seperate page but 1: I just don't have that much to say about myself, and 2: I didn't like how just a full screenwidth gallery looked, it was too plain/empty feeling.

I tried out two different Lightbox components, the fist was lightbox.js and I really liked the presentation of it and it had a nice magnifying glass built in, however I couldn't easily figure out how to have only one picture of the gallery visible outside of the lightbox and it didn't seem to support captions (which I intend to add at some point) so I looked into other lightbox componenets. The second one I tried was fslightbox which worked well and I was able to pretty quickly figure out how to implement it in the way I wanted, also it supports captions.

The mobile version was made after the web version. Working off the web version I knew the about me section would just be stored in a collapsable drawer so I first wanted to figure out how I would organise the tabs. My first thought was to just have the tabs be scrollable at the top, but when actually looking at the site on a mobile display the tabs felt cluttered and confused. My next thought was to try vertical tabs and in my head it looked good, but, once implemented the tabs were waaaay too wide and left no room for the actual pictures. Since I was already going to put the 'about me' in a drawer I figured I could just have the tabs in a similar drawer that would expand from the other side of the screen.

On the full sized screen version of the site I wanted to imply that the images were click-able, my first thought was to try and use a radial transparent mask that would disappear when an image was hovered over. It looked goofy and bad. Then I thought about having the imaged look like they were lifting off the page when hovered over, I tried putting the images in MUI Paper components and having the elevation of the paper change, this was all too much and things were looking bad again so instead I had the images transform to a slightly larger size just with CSS. I liked how this was looking but I felt like it wasn't quite enough still so I also set the images to be slightly transparent unless hovered over and these two things together had the effect I was looking for.
