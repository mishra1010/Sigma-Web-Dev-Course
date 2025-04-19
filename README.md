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

## Day 67 - JS Dom - Children, parent and Sibling nodes
we will check how to addess nodes, parents and siblings and how to access and change styles of these elements.

firstchild

lastchild

childnodes

document.body

document.body.chileNodes - NodeList(9) [text, div.container, text, script, text, comment, text, script, text]
document.body.childNodes[1].childNodes

NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

let cont = document.body.childNodes[1]
undefined
cont
<div class=​"container">​…​</div>​
cont.firstChild
#text
cont.firstElementChild
<div class=​"box">​Box1​</div>​

parent node

let cont = document.body.childNodes[1]
undefined
cont.lastElementChild.parentElement
<div class=​"container">​…​</div>​

PreviousElementsibling or PreviousSibling

child nodes of first element child

document.body.firstElementChild
<div class=​"container">​…​</div>​
document.body.firstChild.childNodes
NodeList []
document.body.firstElementChild.childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

if we need only elements

document.body.firstElementChild
<div class=​"container">​…​</div>​
document.body.firstElementChild.children
HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

if we have a table then we can do the following

document.body.childred[index]

then get all details regarding tables

 table.rows

## Day 68 - JS - select by Ids, classes and more

In JS, there are meny methods to search the DOM, like 

getelementbyID()

ElementbyclassName()

document.querySelector()

apply changes by class

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "red";

Now, apply changes by using id in html

 div id = "redbox" class="box">Deepak Mishra 

document.getElementById("redbox").style.backgroundColor = "red";

DOM elements are mostly used when the elements are closer to each other in the page like parent, sibling, child etc.

id is always unique

we can also use query selector to get the same background color for a box

document.querySelector(".box").style.backgroundColor = "green";

only matches the first selector and makes it green. if we want all boxes to be green then in that case -

document.querySelectorAll(".box") -> returns a html collection when we do console log and we cannot do a .style.background Color to set all boxes green as htmlcollection.style is not a valid one.

So, use for loop to access all the elements in the html collection


document.querySelectorAll(".box").forEach(e=>{
   e.style.backgroundColor = "green";


Get elements by tag name

document.getElementsByTagName("div")
HTMLCollection(7) [div.container, div.box, div.box, div.box, div#redbox.box, div.box, div.box, redbox: div#redbox.box]

Matches - returns if class or id matches for the element

Closest - checks parent or child and outputs nearest match

Contains

document.querySelector("body").contains(document.querySelector("container"))
false

document.querySelector("body").contains(document.querySelector(".container"))
true

## Javascript - Day 69, solving Day 65 exercise

Factorial problem solved in Day 69 folder

## Javascript - Day 70 Exercise

Given 5 boxes, assign a random background color to each box using Dom concepts

## Day 71 - Inserting and Removing elements from DOM using Javascript
This is useful while making single page applications or we want the work to be done without loading the page.

document.querySelector(".box")
<div class=​"box">​ Hey I am a Box ​</div>​
document.querySelector(".box").innerHTML
'\n            Hey I am a Box\n        '

document.querySelector(".container").innerHTML
'\n        <div class="box">\n            Hey I am a Box\n        </div>\n        <div class="box">i am box2</div>\n    '

document.querySelector(".container").innerText
'Hey I am a Box\ni am box2'

 outer html - we get the container and whatever is inside container

 document.querySelector(".container").outerHTML
'<div class="container">\n        <div class="box">\n            Hey I am a Box\n        </div>\n        <div class="box">i am box2</div>\n    </div>'

 document.querySelector(".container").tagName
'DIV'

tagName is used for Element and NodeName is used for any node like coment node or text node.

document.querySelector(".container").textContent
'\n        \n            Hey I am a Box\n        \n        i am box2\n    '

hasAttribute

hidden

getAttribute

attributes - gives all attributes

removeAttributes - removes Attributes mentioned in ()

document.designMode=on, use this to make any changes to the website

Data Attributes

data-createdby="Deep"

document.querySelector(".box").dataset

Insertion Methods in node

node.append()

prepend

before

after

Insert adjacent HTML/Text/Element

insertAdjacentHTML("afterend","<b>i am inserted after end </b>")
beforebegin
beforeend
afterbegin

Node Removal

ClassName and classList

document.querySelector(".container").classList
DOMTokenList ['container', value: 'container']

document.querySelector(".container").className
'container'

classList.add

classList.remove

classList.toggle()

## Day 72 - Solution for Exercise Day 70

Available in folder Day 72
done for generating random number from 0 to 255 with rgb function

Also generate random hex function by using tostring(16) to convert to hexa number to generate color

## Day 73 - Exercise to build dynamic website builder
create a website builder

HTML file should have cards
JS should add the following with help of function

function createCard(title,cname,views,monthsOld,duration,thumbnail){
    //Finish the function
}

createCard("Introduction to Backend | Sigma Web Dev video #2","sigma",560000,7,"31:22",<URL></URL>);

## Day 74 - Events, Event Bubbling, setInterval and setTimeout

Why are events important and why these are used so much?

Details around taking a mouse on an element, take out mouse from the element
click, double click elements

check browser events from MDN to see all events

//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent 

What is event bubbling?

When we click on child element, automatically parent elements are clicked and this is called event bubbling and if we want to stop this then we have to stop the propagation.
Use e.stopPropagation()

By this the event listener stops propagation.

Like we add event Listeners, we can also remove event Listeners. use handler to add multiple events and also handler helps to remove listeners.

Event object
event.type
event.clientx, clienty
event.target
setTimeout and set Interval

setInterval helps in repeating operations and clearInterval stops the setInterval process.
setTimeout - does the operation once and clearTimeout() - clears the timeout

## Day 75 - Javascript Callbacks and Promises

Callback functions are used once we want to call a function once a function executes. Callback function is a function passed in to another function as an argument, which is then invoked inside the outer function to complete or action.

Promises in Async Javascript

Javascript asynchronous nature shows how the script flow works and its not linear

lots of callback can create mess and hence leads to callback hell or callback doom. Hence, we use promises.

Solution to callback hell is promise. Promise is a promise of code execution. use .then and .catch to settle or reject it.

You can make your own promise as shown below but in most cases, its not needed

let prom1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log("Yes, i am done");
        resolve("Deepak");
    },1000);
})

prom1.then((a) => {
    console.log(a);
})

.then -> resolve

.catch -> reject

finally - performs necessary cleanups, like close all files which were opened.

Promises chaining - pass result of one promise to another. pass the result through the chain of then handlers

if p is a promise
p.then(handle1)
p.then(handle2)
p.then(handle3)

all the above handles with run independently

Promise.all - waits for all promises to be resolved or returns error

Promise.allsettled - resolved or rejected, all promises status is received

Promise.race - whichever resolves faster will be the outcome result

Promise.any - waits for first promise to be resolved (not rejected)

Promise.resolve

Promise.reject

## Day 76 - Async/Await and Fetch API in JS

In all big code bases we would see Async/await functionality used in JS. How this makes easier while dealing with promises.
Callback - passing a function as argument in another function and calling it inside the function
Promise - promise of code execution

//How to wait to execute the promise and then execute the next prints
//executes when promise is fulfilled after line 16
// data.then((v) => {
//     console.log(data);
    
//     console.log("process data");
// })

//Now we would see aync await way to wait for promise, mark function as async which will make it run in background

//if we need to wait for the async function to complete, we can use await keyword and then line 17 and 18 will execute

//await can only be used in async function and hence we will create one more function and call it from there

Better to use async, await than using .then()

Settle means resolve or reject

resolve means promise has settled successfully
reject means promise has not settled successfully

## Day 77 - Exercise Day 73 solution

Solution is in folder Day 77

In index.html design the view for 1 card and then in JS, design the card for next runs to be created dynamically

## Day 78 - Exercise - Async JS

Hackers Terminal
 Create a hacking simulator which has green background and it shows these messages with randon delay of 1 to 7 seconds
    
    Initializing Hacking....

    Reading Files...

    Password files detected...

    Sending all passwords and personal files to server...

    Cleaning up...

    The three dots must blink so that it looks like a real terminal

## Day 79 - JS Error handling with try catch

How to handle errors in Javascript

throw customerrors

and use try and catch to handle errors. Try and catch work synchronously

Finally is executed all times. example - clean up resources . This is helpful in case of functions as no code block runs after return statement in function in try or catch block

## Day 80 - JS Classes & Objects
classes, objects and constructors

JS objects come with prototype object which has lots of additional properties by default

let obj = {
    a: 1,
    b: "Deepak"
}

console.log(obj);

x.__proto__ = animal - is a prototype object

Prototype mainly helps with inheritance. We cannot just work with prototypes. We would need to create classes when we want to do proper object oriented programming.

Animal Constructor is initiated
a.eats()
Animal eats
undefined
a.run
undefined

we can set a lot of properties in a class

Method overriding
super keyword

Static Methods - directly called from class
getters and setters - implemented

Not much used in JS - Object oriented programming

instanceOf

l instanceof Animal
true
l instanceOf Lion
VM584:1 Uncaught SyntaxError: Unexpected identifier 'instanceOf'
l instanceof Lion
true

## Day 81 - Exercise Day 78 solution

Async/Await
solution in Day 81 folder

## Day 82 - Advanced JS

Destructuring

 let [x, y, ...rest] = [1, 5,7,2,8,4]; // ... destructuring
    console.log(x,y, rest);

     //object destructuring
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }
    let {a, b} = obj; // means take out a,b from this object
    console.log(a,b);

Spread operator

   let arr = [2,4,6];
    console.log(sum(arr[0], arr[1], arr[2]));
//or spread operator
    console.log(sum(...arr));
})()

//spread operator

function sum(a,b,c){
    return a+b+c;
}

special case - const arr = [1,2,6]
const obj = {...arr} - this gives {0:1, 1:2, 2:6}

IIFE

function had to be declared as async to use await sleep. else it was throwing error

(async function main(){
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);
})()

Hoisting - Hoisting refers to the process whereby the interpreter appears to move the declarations to the top of the code before execution

variables can thus be referenced before they are declared in JS. 
Only applicable for var and not in case of let or const

works for functions as well

hello("x")

function hello(name){
    ... => works
}

Block, function, global scope

variables declared in a block are scoped to that block and same goes for function and if declared outside then its global and can be accessed by all.

## Day 83 - JS Interview questions

Problems -

1. Magical sorting hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JS function that takes an array of student names and assigns them to one of the 4 houses. (Gryffindor(length less than 6), Hufflepuff(length less than 8), Ravancalw(length less than 12), or Slytherin(length greater than or equal to 12)) based on length of their names


2. The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

3. The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

4. The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

5. The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

6. The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

7. The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

8. Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

9. The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

10. The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

11. The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

12. The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

13. The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

14. The Window Scroller: You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.

Exercise 7:

a = {"x": 1, "y": 2}
{x: 1, y: 2}
JSON.stringify(a)
'{"x":1,"y":2}'
localStorage.setItem("guys", JSON.stringify(a))
undefined
localStorage.getItem("guys")
'{"x":1,"y":2}'
JSON.parse(localStorage.getItem("guys")
VM600:1 Uncaught SyntaxError: missing ) after argument list
JSON.parse(localStorage.getItem("guys"))
{x: 1, y: 2}

## Day 84 - Spotify clone

1. check spotify site, background color is black
2. There are 2 sections in the site. Top spotify is a svg, find it by using shift alt i and click arrow in the bottom menu. then copy the svg code for spotify and add it in svg file along with html, css files
3. then open in live server svg file won't load and hence get the svg spec added which is xmlns="http://www.w3.org/2000/svg"
4. Next is - we will comment the svg code and create 2 divs left and right and then create utility css-
5. Utility css has all the utility styles needed like border, margin, padding, flex, justify-center etc
6. Identify color of boxes and update the same in left and right boxes along with containers
7. create margin and padding for all along with font family
8. Use invert in utility to change color from black to white
9. copy all svg files like home, search, library
10. get robotica font from google, import statement and then add font-family in * for all in css
11. get the element from the footer, use AI to remove all classes and put in footer
12. give absolute position for footer and relative for library with height of library as 80vh

Right panel Design and Code for spotify




## Day 85 - Backend, Node.js and npm

Install node js
node --version
npm --version

npm init in the folder
give details and finally give yes
use npm to download and run projects using node

nodejs.tutorials

express js is a middleware

## Day 86 - commonjs vs Ecmascript

Node js has 2 modes in which we can create projects

1. ECMAscript
2. Commonjs

Go to project folder and initialize npm project

npm init -y

Install express modules

npm i express jsonwebtoken dotenv

npm install --global nodemon

nodemon main.js

nvm - node version manager

nvm use 16

nvm install 15

import modules with require - commonjs and synchronous - const { createServer } = require('node:http'); - remove module from type in package.json

import modules with export and import and type module - ECMA Script (ES6 module) and asynchronous - import http from "http"

We can use the export in modules as well in browser by using html

when we use require, node js creates a function in background with __dirname, __filename as arguments and we can use these values.

## Day 87 - working with files:fs and path modules
fs module - how to use to read files
how to use promises to read and write a file or from file
callback hell

const fs = require("fs");

console.log(fs);

JS also gives a functionality to use fs with promises to avoid callback hell as shown in main.js
lets implement mainpromise.js

import fs from "fs/promises";

path , path functions by doing console.log(path), then extname, basename, join()

## Day 88 - Introduction to Express js

Why to use express?
it's a web framework for making websites. HTTP package has limited capabilities, like we cannot serve static files, security needs to be implemented from scratch, get/post need custom code, how to manage server. So Express framework is there

use nodemon

nodemon main.js - watches for any changes and restarts server

install express
npm i express --- install 

check express documentation and get hello world code

if we put endpoints as following, then we will have so many

app.get('/blog/intro-to-js', (req,res) => {
    res.send('Hello intro-to-js!')
})
app.get('/blog/intro-to-python', (req,res) => {
    res.send('Hello intro-to-python!')
})

Better to use express js as we can use variables

app.get('/blog/:slug', (req,res) => {
    res.send(`Hello ${req.params.slug}`)
})

params, query

do a console.log(req) -> we get all params, queries, headers

http://localhost:3000/blog/intro-to-py?mode=dark&region=in
[Object: null prototype] { slug: 'mysite' } -> param
[Object: null prototype] { mode: 'dark' } -> query

static files

app.use(express.static('public')) -- put files in public folder to show, folder name can be anything.

## Day 89 - Response, request and routers in Express

Get, post, put requests 

Get - basic request to get details from a server

POST - for sensitive data, files, content of page - sent to server using post

chaining of requests

individual requests -
app.get('/', (req, res) => {
    console.log('GET request received')
    res.send('Hello World!!!! Get')
})

app.post('/', (req, res) => {
    console.log('POST request received')
    res.send('Hello World!! Post')
})

app.put('/', (req, res) => {
    console.log('PUT request received')
    res.send('Hello World!! Put')
})

chain requests

app.get('/', (req, res) => {
    console.log('GET request received')
    res.send('Hello World!!!! Get')
}).post('/', (req, res) => {
    console.log('POST request received')
    res.send('Hello World!! Post')
}).put('/', (req, res) => {
    console.log('PUT request received')
    res.send('Hello World!! Put')
})

serving HTML files - All real world projects need to serve html
app.use(express.static('public')); - this is a middleware which serves html files

we also have res.download(), res.end(), .json(), .jsonp, .redirect(), .render(), .send(), .sendFile(), .sendStatus()

create templates folder and add index.html file here


Installing Postman - download and use to test all api requests, we need not write code for every tests.

Express Router - Helps to organize files like main.js for endpoints
more endpoints would be organized properly
helps to make routes at a central place

## Day 90 - Middlewares in Express JS

npm init -y

npm i express@4

nodemon

Any request goes to middleware first and then goes to next methods of the api

request -> middleware -> Handler matches -> response

Middleware modifies the request, gets request, executes and then any apis

if we do not mention next in middleware then our request gets stuck. if response is sent once then work of middleware is over and no next steps get executed
We can have multiple middlewares and pass the control amongst these
order is important in middleware
Why middleware?
helps in logging, cookie validation, login etc.

Types -
Application level
Router level
Error handling
Builtin
Third party - parser

## Day 91 - Exercise 15 - Clear the clutter

Details are mentioned in index.js

## Day 92 - ejs template engine in Express

npm init -y
npm i express@4

Template engine - EJS -> helps to show content in the html file from the api responses. show variables inside the bootstrap html templates

check page for ejs usage with express

1. set view engine - ejs or pug or template engine handlebars
2. Use res.render
3. pass variables res.render("templates/blogpost.html", {blogTitle: blogTitle, blogContent: blogContent});
4. rename templates folder with views as this is the folder which needs to be there
5. change index.html to index.ejs
6. In main.js render index
7. load localhost:3000
8. we see siteName variable name but not value
9. so, we need to add <%= siteName %> for getting the value
10. how to pass objects? we can declare an array variable and then get it printed in the ejs page by passing value
<%= arr[0] %>
11. We can include navbar by using navbar.js and include in other ejs pages
12. we can add headers and footers in all pages

How to make great websites?
Use bootstrap - get helloworld with cdn and then navbar


## Day 93 - Day 91 Exercise solution

// You have to write a Node.js program to clear clutter inside a directory and organize the contents of that directory in to different folders.

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. Deep.zip
// 5. Mani.zip
// 6. cat.jpg

//this
//jpg/name.jpg, jpg/cat.jpg
//png/name.png
//zip/Deep.zip, zip/mani.zip

solution available in Day 93

## Day 94 - Mongo DB and Mongo DB Compass

Install Mongo DB
Install Mongo compass
Install vscode extension for mongodb
generate records in gpt
create a playground
Insert many records in to Mongodb

## Day 95 - CRUD operations in MongoDB

How to do CRUD operations via code

let a = db.courses.find({price: {$gt: 20000}})
console.log(a.count())
console.log(a)
db.courses.updateOne({price: 21000}, {$set: {price:30000}})
db.courses.deleteOne({price: 19000})

## Day 96 - Installing Mongoose & Using it with Express

Mongoose - MongoDB ODM - we will see why we will be using this
helps with typecasting, helps in providing a schema based solution where it becomes easier for query building, validation and typecasting

Advantage of using Mongoose instead of using raw package - //explore https:npmjs.com/package/mongodb

Mongoose makes big application building easier due to functionalities it provides.

Does type validations

find data
app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    console.log(todo)
  res.json({title: todo.title, desc: todo.desc})
})

create Todo.js, export, import in main.js
add the above get function to pull data
create object to create a data in database

## Day 97 - Exercise to create Dummy Data

Dummy Data Generator

//Generate a dummy data in this format in a collection called employeed in a db called company

// {
//     name:"Deepak",
//     salary: 45000000,
//     language: "Python",
//     city: "New Delhi",
//     isManager: true

// }

//generate 10 such records when a buton called generate data is clicked!

//create an Express app with mongoose to achieve it

//Everytime the button is clicked, you should clear the collection

## Day 98 - Tailwind CSS in one video
used to build css faster, just a way to write CSS

https://play.tailwindcss.com/

inpm init -y
npm install -D tailwindcss // -D helps in getting and installing this package as a dev dependency
npx tailwindcss init -- does not work
npx tailwindcss-cli@latest init -p ------ works

input.css-
@tailwind base;
@tailwind components;
@tailwind utilities;

modify content in tailwind config file and 
then
//watch tailwind files
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch -- does not work
npm i vite ---- for local server

npx tailwindcss-cli -i ./src/input.css -o ./src/output.css --watch - generates output.html - This command checks input file and the content there along with utility classes in index.html to ensure bundle size is less

## Day 99 - Exercise Day 97 solution

Dummy data generator

00:00:35 🚀 Setting Up the Project
- Demonstrates setting up a Node.js project using npm, initializing, and installing Express.
- Discusses the importance of using a specific version of Express for the course continuity.
00:02:12 🎨 Using EJS with Express
- Shows how to incorporate EJS as a templating engine in the Express setup.
- Guides on creating a 'views' folder and installing EJS for rendering templates.
00:04:12 🛠️ Enhancing Front-end with Bootstrap
- Describes using Bootstrap for quick UI development, emphasizing its efficiency.
- Explains adding components like buttons and containers to improve application design.
05:13 📸 Image and Script Integration
- Discussion on adding images and basic script functionality,
- Added image placeholder and addressed initial visual display,
- Implemented a script to react to button clicks.
06:22 🔄 API and Event Handling
- Set up an event listener to handle button clicks generating data via API,
- Demonstrated checking button functionality with console logs,
- Began preparing an asynchronous function to manage JSON data retrieval.
08:03 🗄️ Database Connection and Model Setup
- Discussed setting up a connection to a local MongoDB database,
- Explained creating a Mongoose model for employee data,
- Used boilerplate code to define schema with fields: name, salary, language, city, etc.
10:33 🧑‍💼 Module Export and Import for Employees
- Discusses use of `module.exports` to structure the employee module,
- Introduces a method to loop and create employee data for testing purposes,
- Explanation includes setting up a loop to create data multiple times.
12:10 🛠️ Error Handling and Debugging in Node.js
- Confronts a server crash issue due to incorrect usage of `async` and `await`,
- Solves a problem with Mongoose where `await` usage outside a sync function caused errors.
13:34 🌐 Generating Random Employee Data
- Successfully generates and verifies documents within MongoDB,
- Demonstrates how console logging varies between backend and frontend environments.
14:27 📊 Creating Random Data Arrays
- Sets up arrays with random names and cities to simulate diverse employee data,
- Begins constructing a utility function to handle random data selection for testing scenarios.
15:47 🎲 Handling Randomized Data Generation
- Discussion on generating random numbers and using them in a dataset.
- Implementation of a random number function that picks random elements from an array,
- Application of `Math.random` and `Math.floor` to ensure integers are generated for salaries within a specific range.
18:18 🔄 Adjustments and Debugging
- Making necessary corrections to the code to ensure proper random data generation and troubleshooting errors.
- Addressing incorrect salary generation issue by adjusting the random multiplication factor,
- Ensuring `isManager` boolean toggle works as intended by adjusting the random threshold.
18:59 🗑️ Collection Management

Here’s a step-by-step guide to complete the project in the Day 99 folder:

1. Set Up the Project
Ensure you have Node.js and MongoDB installed on your system.
Navigate to the Day 99 folder in your terminal:
2. Install Dependencies
Install the required Node.js packages:
3. Set Up MongoDB
Start your MongoDB server if it’s not already running:
Open the MongoDB shell and create the company database:
4. Create the Employee Model
Ensure you have a models folder with a file named employee.js inside it.
Define the Employee schema in models/employee.js:
5. Set Up the Views
Create a views folder in the Day 99 directory.
Inside the views folder, create a file named index.ejs:
6. Run the Application
Start the server:
You should see the message:
7. Test the Application
Open your browser and navigate to:
You should see the welcome message and a link to generate random employee data.
8. Generate Random Employee Data
Click the "Generate Random Employee Data" link or visit:
This will:
Clear the employees collection in the company database.
Generate 10 random employee records.
Log the generated records in the terminal.
9. Verify the Data in MongoDB
Open the MongoDB shell and check the employees collection:
10. Enhance the Application (Optional)
Display the generated employee data on the /generate page by passing the data to the index.ejs file:
Update the index.ejs file to display the employee data:
Summary of Key Files:
main.js: Handles routes and server setup.
models/employee.js: Defines the Employee schema.
views/index.ejs: Displays the data.

npm init -y
npm i express@4
npm i ejs
npm i mongoose
nodemon main.js

## Day 100 - Exercise Use tailwindcss to show a card

![alt text](images/image14.png)

Design layout.png using node.js and tailwind.css

## Day 102 - Exercise Day 100

Design layout.png using node.js and tailwind.css
Design Card 
Day 73 has similar card without tailwindcss


## Day 103 - Hosting

Deploy apps in cloud data center in specific regions
Shared Hosting
Dedicated Hosting
Managed Hosting

npm i dotenv --- creates a .env file where we can store creds, env variables
accessing secret - require('dotenv').config()

apache is used to host website
copy html file in var/www/html folder
access by using ip


## Day 104 Hosting an Express App on ubuntu VPS uning Hostinger

1. Get a linux machine server in hostinger
2. Install nodejs and build essentials apt-get install -y nodejs , apt-get install build-essential
3. create a sample node.js app
4. Install pm2 and launch your app
5. Install nginx and add necessary configurations
6. Test and restart nginx

## Day 105 - What is React and Why use React?

We have a plain html file with 3 boxes and apply style on the same.
3 boxes with different contents. Now if we want to change content of 3 boxes in certain amount of time, then we will apply JS setTimeout() to change the innerHTML by using document.querySelector

What react says here is to create a variable and update this variable. No need for innerHTML and all. This can be done by using state concept in react which we will see later.

With react - code can be broken down in to modular components. Like we can make a navbar (component) once and not make it again and again, reuse it across.
1. We can use states, once we update variables it can be used across
2. We can define components and use these as props (variables in react) across 

React is a library written in JS. check the withoutreact html file where we write eventlistener inside a script to get the value of counter and click on button to increment the counter.

React says not to write html and use JSX
create react app - npx create-react-app with-react
we get an npm project with base react modules and we need to build on top of this
npm start --- starts a server where react app can be rendered
variable which can be used in dom and also can be changed is called state

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <div className="value">{value}</div>
      <button onClick = {() =>{setValue(value+1)}}>Click me</button>
    </div>
  );
}

Components
Install extension ES7 React/Redux/GraphQL/React-Native snippets
ES7+ React/Redux/React-Native snippets
create navbar component and use it in the app at various places
Type rafce to get react arrow function export component
Create component navbar,js
import component in App.js
Use component in App.js
We can also pass data in components by using props

const Navbar = (props) => {
  return (
    <div>
      <div className="logo">{props.logoText}</div>

App.js
  <Navbar logoText="CWH" />

  1. We can use states to update state variables
  2. We can split our app into multiple components and reuse those components
  3. React uses a virtual DOM to efficiently update the UI which is better than updating content using DOM manipulation
  4. Debugging and maintenance is easy

  ## Day 106 - Components, props and JSX in React
  