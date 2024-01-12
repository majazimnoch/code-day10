# Button that runs away from you - a page asking out for a date - JS

## Intro
This is the tenth project of my 30-day coding challenge. The project includes following tech stuff: HTML, CSS, JavaScript.

## Idea
The goal was to make a page with a button that a user cannot click, as it 'runs away' from the mouse click. As the Valentine's Day season is approaching, I made it themed for a date invitation. So ironically the user cannot not agree to the proposition. 

## Breaking down the code
It doesn't look like complicated effect, however, it requires quite advanced JS code. This time I followed the tutorial by <a href="https://www.youtube.com/watch?v=UiA4X60Qe1E"> Web Dev Simplified </a> YT channel. However, as I designed the page to be a "date asking out page" I used some other JS tricks to make my idea looking as intended. 
I also added gifs from <a href="https://giphy.com/"> Giphy </a> page. Two different giphs, before clicking 'Yes' and after clicking 'Yes'.

After user clicks 'Yes', I hide both buttons by adding 'display: 'none'. I use `replaceChild` method twice: to show two different gifs, and two different paragraphs. The `replaceChild` method is a DOM (Document Object Model) method in JavaScript that is used to replace a child node within a parent node with a new node. It's commonly used to update or modify the content of a webpage dynamically.

## Demo
Click <a href="https://date-me-love.netlify.app/"> here </a>.