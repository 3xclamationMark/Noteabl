# Noteable
A simple note taking website

[![Run on Repl.it](https://repl.it/badge/github/3xclamationMark/Noteable)](https://repl.it/github/3xclamationMark/Noteable)

# Creating a note taking app (noteabl):

## Idea: 
To make a simple note taking app, simlar to google keep, but simpler. The website will be made in greyscale, then I will add functionality, then I will add color.

## To-Do:
	* Add content to the header
	* Make the notes open when clicked
	* Add the ability to delete a note
	* Prevent empty notes from being created
	* Make them save to local storage, then reappear when the page is reopened
	* Change fonts
	* Add color and a dark mode
___

### Log
**25/7/21:**  Created the header area, and created the note taking box (the box to write your note in). Added styles such as the styling of the button and text areas.

**26/7/21:** Customised the scrollbar to look cleaner. Gave title should have a character limit of 50 letters, and the text of 700 characters. Made the note taking area slightly narrower.

**27/7/21:** Created the boxes to hold the saved notes using flexbox. Made their shadow grow when they are hovered on, as if they are coming closer to the screen. Made the cursor on hover a pointer, as they will later be clickable, to lead to another page. Realised the animation wasn't needed, so removed it. Made the 'save note' functional, so that when you type something in and press save, it creates a new note with your text. However, when you add multiple notes, the text is added onto the first note, instead of onto the new one. This is because I can't find a way to give each new div a different id, meaning they all have the same id.

**28/7/21:** Created some switch-case statements, changing the id of the element the new elements are appended to each time. This is hopefully only a temporary solution, as it is very inefficient, and means there is a limit on the amount of notes that can be written (which is currently 10).

Added word wrap to the note-store box, as before if you added a long string with no gaps, it would continue outside of the box. Fixed box sizing. Changed the font.

**29/7/21:** Add the name of the site to the header.
