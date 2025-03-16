# Sigma-Web-Dev-Course
This repo is for adding source code for Sigma Web Development Course

## Day2
1. create index.html
2. create script.js
3. create style.css
4. load index.html in browser
5. add body in style.css
    body{
    background-color: red;
    color: white;
   }
6. To link css with html to show the background color and text color, add the link tag in head
    <link rel="stylesheet" href="style.css">
7. In script.js, add an alert
    alert("Welcome to Sigma Web Development Course")
8. Link js with html by adding script tag inside body
    <script src="script.js"></script>

## Day 3
Html has 2 kind of tags -
1. Meta - self closing tag {meta charset="UTF-8"}
2. body, head etc - Pair tags which need to be closed
<script src="script.js"></script>

## Day 4
Heading, Paragraph, Anchor tags and Links

Heading - use alt+shift+down arrow to copy above line and use alt and click sections in line as needed to update all lines together.

My Bookmarks - Learning

Main Bookmarks - Learning

Secondary Bookmarks - Learning

## Day 5
Image, List and Tables
body

    img src="image.png" alt="Train image"
    img width="230" height="230" src="image.png" alt="Train image"

    <table>

        <tr>

            <th>Train Name</th>

            <th>Train Number</th>

            <th>Train Type</th>

            <th>Train Route</th>

        </tr>

        <tr>

            <td>Shatabdi Express</td>

            <td>12002</td>

            <td>Superfast</td>

            <td>Delhi to Mumbai</td>

        </td>

    </table>

    <ul>

        <li>Shatabdi Express</li>

        <li>12002</li>

        <li>Superfast</li>

        <li>Delhi to Mumbai</li>

    </ul>

    <ol>

        <li>Shatabdi Express</li>

        <li>12002</li>

        <li>Superfast</li>

        <li>Delhi to Mumbai</li>

    </ol>

body

## Day 6 - SEO and Core Web Vitals in HTML

SEO - search engine optimization - Google ranks pages based on vitals after content which is the main component used by search engines. In case 2 web sites have same content then vitals help in ranking
Important Vitals
CLS - Cumulative layout shift (How much the page shifts while loading contents)
LCP - Largest contentful paint (how much time does the biggest element in page take to load)
FID - First input delay (Any input from user gets processed in how much time)

Lighthouse in browser can give a vitals report

Analyze in lighthouse for index.html

## Day 7 - Forms and Input tags
form action = post
Div, textbox, checkbox, radiobutton
textarea, options

## Day 8 - Inline and Block Elements
div, paragraph are block
span and anchor are inline

## Day 9 - Id and Classes in HTML
ID = Identity which is always unique
Class = Helps in classifying, same element can have multiple classes and same class can have multiple elements
Id and class are attributes for elements Div, span etc. elements in html
Id is also used for linking by using #id in the URL

## Day 10 - Audio, Video and Media in HTML
video src = "video.mp4" controls autoplay
autoplay,muted,loop, poster or thumbnail are some of the controls for video
Audio also has the same set of controls
Preload - none, auto,meta
svg image
iframe

## Day 11 - Semantic tags in HTML
Important for SEO
These tags help browsers and search engines about the content type and purpose. Also helps with accessibility.
If we do not use this also, it should not impact, just we want to make search engines better
header, footer, nav, article, section, aside, figure, main, time

## Day 12 - Exercise

you have 12 files ; 6 audio and 6 video
Design a website using HTML only which shows these 12 files
1.mp3, 2.mp3 .... 6.mp3
1.mp4, 2.mp4 .... 6.mp4
Use div to show all audio and use div to show all video
paragraph or list way is also OK

## Day 13 - Entities, Code tag and more
Entities are mainly meant for escaping html syntax
&lt;
&gt;
&npsp;
<pre></pre>
<backquote></backquote>
<code></code>
Canvas

## Day 14 - CSS - cascading style sheets
Selector
 #<title>CSS</title>
  # <style>
  #     div { ---------------------------------> selector
   #        color: red; ---------------------> declaration
   #        background-color: yellow
   #    }
   #</style>

## Day 15 - Inline, Internal and External CSS
Inline - <h1 style="color: yellow;background-color: red">Great learning</h1>
Avoid using it

Internal -<h2> Inrternal CSS</h2> -------> body
head ------ <style>
        h2{
            color: blue;
            background-color: yellow;
        }
    </style>

    We can do bulk edits here as compared to inline css. We need external css as we do not want too much css in html file if our program grows
Less change and small files
External - 

Production application

## Day 17 - CSS Selectors MasterClass
Element Selector - All elements like div, h1, h2 etc get the same css applied
Better to use Class Selectors, id selectors
Class Selector - instead of element, uses class. Ex - red
 .red{
            color: blue
        }
    </style>
</head>
<body>
    <div class = "red">
        I am a div
    </div>

Id selector
#green{
            color: green;
        }

         <div id = "green">
        I am another div
    </div>

Child Selector
div > p{
    color: x;
    background-color: xx;
}
Descendant Selector
div  p{
    color: x;
    background-color: xx;
}

Universal Selector
*{
    margin:0;
    padding: 0;
}

Pseudo Selector
    a:visited{
            color: red;
        }
        a:link{
            color: greenyellow;
        }
        a:active{
            background-color: purple;
        }
        div:hover{
            background-color: blue;
        }

    
https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbTVoYmVIdWxTS2pkczEzQW5pR19aT2NoekhKUXxBQ3Jtc0trSEk3eTVxajM3cGFuallpRGNYZEYtektvMDhRTjVHNThTMTJrOTY4RVdRQVBCT25vMHo4V2FQX1o4alV2ME5FWEZMZWd6VmttNkxxM2RuSTBYWnZ1bEl2WmJJa0ZENXB1Mzh6T0RReW9jV3Y0aHozWQ&q=https%3A%2F%2Fweb.dev%2Flearn%2Fcss%2Fpseudo-classes&v=1cEG1T8beO4

## Day 18 - CSS Box Model - Margin, Padding & Borders
Everything is a box in CSS
Outside your content, we have padding and then margin and then border
if we have height as 200 and then we also mention box size, the the height 200 will be padding+border+height = 200, else 200

Margin Collapse -
if we have 2 boxes with same margin then the gap between boxes is applied once as per margin and if margin is 30 and 20 for boxes respectively then 30px is the gap between box1 and box2

## Day 19 - CSS Fonts, text and color properties
  p{
            font-family: 'Courier New', Courier, monospace;
            font-style: italic;
            font-weight: bold;
        }
        h1{
            font-family: 'Times New Roman', Times, serif;
        }

we can also import font family in to our style tags from google with the URL for fonts or get the exact way to use it by using font-family declaration.
Explore in google fonts

font-size: 

check default font-size by doing F12-> Computed, it would show 32px for h1
font-family: 'Courier New', Courier, monospace;
            /*font-style: italic;
            font-weight: bold;*/
            font-size: 20px;
            line-height: 4;
            letter-spacing

Text properties
               text-transform: uppercase;
            text-decoration: underline;
            text-decoration-color: red;
            text-decoration-style: dotted
        }
        text-decoration-thickness:7px
        text-indent:
        text-overflow: clip or ellipses
        text-align: center

Color properties
Available colors in css can be found at https://codepen.io/web-dot-dev/pen/ZELGraM
Ways to show color -
1. Color keywords
2. Hex Color code
3. RGB - A is alpha which is for opacity
4. RGBA
5. HSL - ghue, saturation, lightness
 /*color: red*/
            /*color: #0BEE0B;*/
            /*color: rgb(114, 156, 55);*/
            color: rgba(156, 97, 55, 0.336);
            color: hsl(120, 100%, 50%);

## Day 20 - Exercise

## Day 21 - CSS Sprcificity & Cascade
Assume that we have an element that has been styled in 2 ways through CSS. So, we have used 2 types of selectors to style it.
1. Universal
2. h1 class
Example

![alt text](images/image.png)

![alt text](images/image-1.png)
How would we ensure which one gets applied? This is where specificity plays a role and we would see the rules.
CSS has cascade algorithm which helps in deciding.
All class selectors will have same priority and the last one would get applied

![alt text](images/image-2.png)

In case we use different selectors, which one gets applied in that case?
It is based on specificity, which selector is more specific?
inline is considered as highest priority.
Then it's id selector which is taken as next highest priority
Then class or attribute selector, then element and then universal

![alt text](images/image-3.png)


Inline > ID> Class or Attribute > Element > Universal

![alt text](images/image-4.png)

For overriding inline style, we add !important, then this would apply.

How to calculate specificity?

![alt text](images/image-5.png)

![alt text](images/image-6.png)
a is element, specificity =1
harryclass = 10
rohan-class = 10
href is attribute selector = 10
hover is pseudo class = 10

## Day 22 - CSS Sizing Units - px, rem, em, vh, vw, % and more

   container{
        box-sizing: border-box;
        border: 2px solid black;
        /*width: 2048px; *//*width of the box in pixel*/
       /* width: 100vw; *//*width of the box in pixel*/
       width: 80vw;
       margin: 23px auto;
        background-color: aquamarine;
        height: 80vh;
    }

vh, vw, px, rem (root element), em (parent element)

container{
        box-sizing: border-box;
        border: 2px solid black;
        /*width: 2048px; *//*width of the box in pixel*/
       /* width: 100vw; *//*width of the box in pixel*/
       width: 80vw;
       margin: 23px auto;
        background-color: aquamarine;
        height: 80vh;
        font-size: 18px;
    }
    .container p{
        font-size: 2rem;
    }

vmin, vmax - depends on the device orientation
min-height

% - not used at all places. vh and vw are used in most cases. where parent's width is set then use %

## Day 23 CSS Display Property
what is display property and how to change it using css?
in html we have inline and block elements.
For div with class box, its a block element but to make it inline we have to put inline in css box class
With inline margin, padding does not apply on the top and hence we have to use display: inline-block

Display:none -- to remove the element from display completely
visibility: hidden - space will remain in page but the element will be hidden

Flexbox - 
display:flex;
justify-content: center;
inline-flex brings all elements in sameline

Grid - also a display property

## Day 24 CSS Shadows and Outlines
How to give shadows and outliers?
box shadow
 .box{
            border: 2px solid black;
            padding: 34px;
            box-shadow: 5px 15px 5px #70a711;
        }
    </style>
</head>
<body>
    <div class="box">
        I am a box
    </div>

text-shadow


        .box{
            border: 2px solid black;
            padding: 34px;
            box-shadow: 5px 15px 5px #70a711;
        }
        .text-element{
            text-shadow: 2px 2px 2px #ff0000;
        }
    

    div class="box"
        I am a box
    /div>
    p class="text-element"
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum itaque velit incidunt quod, blanditiis, optio, totam voluptatum minus doloribus dolore modi deleniti?
    /p

border, outline and outline-offset
![alt text](images/image7.png)

## Day 25 Styling lists using CSS
How to style lists - ol and ul?
 nav ul li{
            list-style: devanagari;
            list-style-type:"१"; 
            background-color: bisque;
            list-style-position: inside;
            border: 2px solid black;
        }
     nav
        ul
            li>Homeli
            li>Aboutli
            li>Contactli
        ul
    nav   

    /* list-style: devanagari; */
    /* list-style-type: "१"; */
    /* background-color: bisque; */
    /* list-style-position: inside; */
    /* border: 2px solid black;

    Apply the following
        list-style: none; in li
        padding: 23px; in li

        and display: flex in ul

        we get horizontal nav bar

## Day 26 CSS Overflow property
we have a box and content is more than the box can handle, then overflow happens.
            width: 20vw;
            height: 10vh;
            border: 2px solid black;
            overflow: scroll;

overflow can be auto for detecting if a scroll is needed then it would show.

white-space: nowrap; - keeps horizontal scroll
text-overflow: ellipsis; - adds ellipsis in text
overflow-x:hide;
overflow-y:auto
overflow: scroll hidden - for x and y together

## Day 27 Exercise 20 solution
  p
            background-color: blue;
            color: white;
        
        div p:first-child
            background-color: yellow;
            color: red;
        
        /* Here if we want to not give any style for paragraph first then we can give the following style
        div p:not(:first-child){
            background-color: blue;
            color: white;
        } */

## Day 28 CSS position property
Position is static by default and we cannot use top, left or right with this as it won't make any changes.
To make use of top, letf, right or z-index, we use 
position:relative;

position:absolute; - box or any other element searches for nearest parent which is positioned and then aligns based on the parent.
position:fixed; - element gets fixed and does not move even if we scroll down or up
position:sticky; - it sticks to a position and all other elements would be aligning based on this element, eg- while we scroll.
transform, filter or perspective properties can also make an element appear as positioned
transform: translate(0);
filter:invert(0);
perspective:0em;

## Day 29 - Exercise 3
Solve ![alt text](image8.png)

## Day 30 CSS Variables
we can declare variables in css and use it in various classes by declaring
root variables
 :root
            --color: blue;
            --seccolor: rgb(131, 114, 151);
            --defpad: 34px;
        
Usage
   .nav
            /*background-color: aqua;*/
            background-color: var(--color);
        
        ul
            display: flex;
        
        ul li
            list-style: none;
            padding: var(--defpad);
            border: 2px solid var(--seccolor);
        
        ul li:first-child
            --color: rgba(156, 151, 101, 0.5);
            background-color: var(--color);
        
        .container
           /* background-color: burlywood;*/
              background-color: var(--seccolor);

we can store any properties in variables and then call that variable. example - color, padding, opacity etc.

## Day 31 CSS Media Queries

Media Queries are helpful in making our websites responsive for any devices.
Examples
 media screen and (orientation: landscape){
            body{
                border: 2px solid purple;
            }
        }
        media only screen and (max-width: 455px){
            body{
                background-color: red;
            }

## Day 32 - Exercise 3 Solution
Solution available in Day 32 folder

## Day 33 - Exercise 4
Multi Color Website
Design a navbar and after that make a stylesheet where on changing a variable, the color contrast should change. So, we need to do a
multicolor navbar using css variables.

## Day 34 - CSS Float and Clear
Float and clear are less used since Flex has been introduced but it is important to understand what they are.
float: left or right -> puts an image or content on left or right
clear: will not allow the image to show up in the right or left if given clear:both
Not recommended for use bot clear and float for modern websites. Flexbox is used.
Overflow can be removed by using display: flow-root. There are other ways as well.

## Day 35 - More on Selectors
 /* .box:first-child
            background-color: red;
        
       /* .box::first-line
            color:yellowgreen
        
        apply inside boxes
        .boxes *
            color: blue;
            border: 2px solid red;
        
        attribute selector and grouping of selectors
        p, a, .box, [data-color="primary"]
            background-color: yellow;
         .box:nth-child(odd)
            background-color: yellow;

        .box:nth-last-child(1)
            background-color: yellow;
        
        .boxes::after
            content: "I am after content";
            color: blue;
         .boxes::before
            content: "I am before content";
            color: red;

        selection{
            background-color: yellow;
        box::first-letter{
            color: peru;
            
        input::placeholder
            color: rgb(138, 142, 154);
            font-size: 20px;
        
## Day 36 - Exercise Day 33 Solution
Create a multicolor website which can change color using CSS variables
solution available in Day 36 folder

## Day 37 - Exercise
Design Layout
Screen -> Navbar
2 boxes below navbar with background color in main box and the 2 boxes
1 rectangle with text - Welcome to this Express Course
below this put an icon
when you scroll, the icon and nav bar should remain in their positions
Footer
![alt text](images/image9.png)

## Day 38 - CSS Flexbox
History - Earlier we were using float, position and it was difficult to bring a div at the center for devs, hence we needed a mechanism to have content at the sides and center in the layout. So, flexbox was added.
display flex means now we can use the properties of flexbox
It aligns elements from left to right by default.
bring items to center by using justify-content:center
To bring items vertically center - use align-item: center
Most of the times, above is used in projects
flex-end - takes elements to end, there are other properties in justify-content
Changing align-items - flex-start, flex-end, center etc.

Concepts -
1. Flex direction - by default left to right
2. can be changes to top to bottom
for arranging items in columns - we use Flex-direction: column
justify-content: center brings items to center based on main axis
we have main-start, main-end in case of left to right (row) and top to bottom (column)

Flex-Wrap : when we give lots of elements it would lead to overflow, flex-wrap helps in wrapping the content to below row or another column.
align-content: center is used when we have multiple lines in row when items are wrapped.
align-item is used when we have only one line.
It is important to understand the container properties and item properties. All above were container properties
Item properties are -
order
default order is 0 and higher order comes at the end
flex-grow
flex-shrink
align-self - owberwrite particular item alignment

## Day 39 - CSS Grid
One of the ways to make a layout as floats and positioning are confusing and there are scenarios where css grid can be directly applied.
display: grid
and then we can define the number of col and rows
Grid line is all line which are there based on the number of cells
Grid cell - one cell in the grid
Grid Track - space between 2 grid lines
Grid Area - any area inside the grid, if we take 2 lines in horizontal and 2 lines in vertical, its called grid area

![alt text](images/image10.png)

Grid lines are numbered. and we can also give names instead of numbers if needed

Another way to use Grids is via Grid Template Areas by naming
![alt text](images/image11.png)

frunit - fr is a unit which is used in grid. Instead of px we can use fr
which means if width is 80vw, then 1fr 1fr 1fr would divide the available width as 1/3 for each portion.
gap - creates gaps in the grids for row and col
justify-items:center
align-items: center ----> needs height to be declared
minmax
place-content: center puts all the grids in center (works as both justify and align content)
justify-content (width), align-content (height) is applicable when container is larger than the grid and then grid moves
if we want to move content within cells, then use align-items, justify-items

## Day 40 - Exercise Day 37 sol
solution available in Day 40 folder

## Day 41 - Exercise 6 using Flexbox
Design website Navbar using Flexbox from UltraEdit website

## Day 42 - CSS transforms masterclass
1. 2D Transforms - inc scale, translate, rotate, 
2. 3D Transforms

![alt text](images/image12.png)

![alt text](images/image13.png)

            /*transform: rotate(45deg);*/
           /* transform: rotate(0.25turn);*/
            transform: rotateZ(95deg);
            transform: scale(1.6)
            transform: scaleY(1.6)
            transform: scale3d(1.6)
            transform: skew(5deg) -> skew cannot happen in Zaxis
            transform: translateX(10%)
            transform: translateY(10%)
            transform-origin: -(0 -0) use along with transform: rotate(30deg)

## Day 43 - Solution for Exercise 6 - Navbar using flexbox
solution available in Day 43 folder

## Day 44 - Design the Grid Exercise
   <!-- Design the body of this website
     https://www.ultraedit.com/downloads/ultraedit-download-thank-you/-->
     Design using CSS Grid

## Day 45 - CSS Transition Property

Moving from one property to another smoothly is done by transition.
we click on side bar, is it better if side bar loads smoothly or just like that. This is where CSS transition is used

if we put the following for a box in a container, the translation happens but it is not smooth. So, we are going to make it smooth.
translate{
            transform: translateX(50%) translateY(50%)
        }

so, we will use transition which is made up of 4 properties.
transition-property
transition-duration
transition-timing-function
transition-delay

transition-property: transform; or use all
            transition-duration: 3s;
            transition-timing-function: ease-in-out;
            transition-delay: 1s;

we can also use - transition: all 3s ease-in-out 1s; this includes all properties at once

## Day 46 - CSS Animations

Similar to transitions but it helps in changing more properties and when and how properties can be used
For animations - we use key frames

.box{
            background-color: aqua;
            height: 45px;
            width: 34px;
            animation: name duration timing-function delay iteration-count direction fill-mode;
        }
        @keyframes deepakKaAnimation{
            from{

            }
            to{
                transform: translateX(1000px)
            }
        }

For simple functionality - use transitions. Animations can be used for complex or repeatable activities

we can give properties one by one or we can also give in the following way -
animation: name duration timing-function delay iteration-count direction fill-mode;

animation: fill-mode - used for animations which are repeatable
animation-fill-mode: backwards; - repeats as needed and then retains the form

We can use one animation to animate multiple properties. Multiple animations can also be used

## Day 47 - Exercise Day 44 solution
Using grid to design ultraedit website body

## Day 48 - Exercise 
Use animation or transition to bounce the red ball

## Day 49 - CSS Object-fit and Object-cover
sometimes we have to keep an image inside a container so that the aspect ratio is maintained and image completely fits
in the container
So, we use Object-fit and Object-cover
object-fit: contain or cover - helps to contain an image in a box but truncates to manage aspect ratio
if we want to truncate a selected part then we have to give object-position
object-position: top right -> shows everything available in top right and cuts other positions.

We have an option to give background-image in container instead of giving the image in the body.
background-position
background-repeat
background-clip

## Day 50 - CSS Filters
Brightness, contrast, inverting an image are some of CSS filters

      img{
            filter:blur(5px);
        }
        .img1{
            filter: brightness(60%);
        }
        .img2{
            filter: brightness(150%);
        }
        .img3{
            filter: contrast(250%);
            filter: grayscale(100%);
        }

## Day 51 - Exercise Day 48 solution
solution is in Day 51

## Day 52 - Figma basics

## Day 53 - Netflix clone project
Dev in progress in Day 53

## Day 54 - Javascript Introduction
how to call JS from html
script src="script.js"

## Day 55 - JS variables, data types and objects
var, let , const

Var should not be used always and we use let
variables are case sensitive
var x
var y
var 55a -> is not possible

var is globally scoped while let and const are block scoped
const cannot be changed once declared

Objects and Primitive data types
primitive data types - Null, Number, String, Symbol, Undefined, Boolean, BigInt
typeof null is a object as it's declared as object when JS started and there are lots of dependencies on this, hence it was never changed to null.

Object - key/value pair combination
let o = {
    "name": "X";
    "job code": 200
}

## Day 56 - JS conditionals
== -> checks value
=== -> checks type and value
? -> ternary operator
Multiline comment  /* */ or // -> select ctrl and fwd slash for a number of rows in vs code
if
else if
else

a = 15;
 b = 6;
let c = a>b ? (a-b) : (b-a);
console.log(c);

/* translates to
 if (a>b){
    let c = a+b;
 }
 else{
    let c = a-b;
 }
 */

 ## Day 57 - JS loops
 Automate repeatitive tasks
 for, forin, forof, while, dowhile

 ## Day 58 - JS Functions
 When we have repeatitive code, then we package code in functions. We can also pass arguments with the help of functions.
 pass arguments
 return result
 if we pass undefined in arguments, we get NAN in result. NAN is not a number
 arrow function

 function invocation or execution

 ## Day 59 - Exercise
 Make a faulty calculator

This faulty calculator does the following -
1. It takes 2 numbers as input from user
2. It persorms wrong operatios as follows -
+ -> -
* -> +
- -> /
/ -> **

It performs wrong operations 10% of the times

## Day 60 - JS Strings
string - uppercase, lower case
find particular character occurence
array index out of biunds is shown as Undefined here. so its called a forgiving language. if we miss ";", then also it does not error out.
Template literal
Escape sequence \n \t
Strings are immutable. string cannot be changed when already declared in memory. Always new strings are created
charAt()
indexOf()
toUpper()
toLower()
slice()
startsWith()
endsWith()

## Day 61 - solution of Day 59
we can use ${eval('${a} ${c} ${b}')}
available in Day 61 folder

## Day 62 - Exercise - Business Name generator
Create a business name generator by combining list of adjectives and shop name and another word
Adjectives
crazy
amazing
fire

shop name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
Example - crazy engine hub

do not use arrays

## Day 63 - Javascript Arrays
store multiple values under one variable
add elements to array which changes the length of the array
print specific values of array. arr[2]
We can also change values at specific index in an array but in case of strings we cannot do this as strings are immutable
Arrays are mutable and they have lots of methods.
typeof array is object
arr.pop(2) -> pops out second index element
arr.shift() removes element in front
delete deletes the specific index element
concat() concatenates arrays
arr.concat(a1,a2) -> returns a new array
sort() -> sorts
splice(1,3,222,333) -> helps to remove 1 and 2 index and add 222 and 333to the array in these indexes
slice() -> slices out a piece from an array
reversearray

for
foreach
forin
forof
map
reduce
filter
Array.from("Test")

## Day 64 - solution for Day 62 exercise
Available in folder 64
use if and else with random for soncatenating the 3 names
use object for production grade solution where we can use keys and values 

## Day 65 Exercise
Write a program to calculate factorial of a number using reduce and for loops
6! = 6*5*4*3*2*1
use for and reduce

## Day 66 - Document Object Model in JS
Tree like structure representation for JS Dom and advantages of the same
DOM - Document object Model
BOM - Browser object Model
Window is the global object which has DOM, BOM and Javascript core
This helps us to target elements using javascript and then perform any actions
DOM - Mapping of the entire document in to an object which gives you all the content of the page. DOM represents the page content as Html.
BOM - Apart from document if we have to work with any other elements then BOM provides the additional objects to be used.

window
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
window.document - gives the document
window.document.body - gives the body
select any element in the page and try to do a $0 in console, you will be able to refer the object. This is from BOM
$0.style.backgroundColor = "green"

Document -> Root Element
Root Element -> Element Head, Element body
Element Head -> Element Title -> Title
Element body -> Element h1 -> text, Element p->text