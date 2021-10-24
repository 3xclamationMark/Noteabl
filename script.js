var numNotes = 1;

function getText(){
	if(numNotes<=10){
		var noteTitle = document.getElementById('note-take__title').value;
		var noteContent = document.getElementById('note-take__content').value;

		var newNoteBox = document.createElement('div');
		newNoteBox.className = 'note-store__box';
		newNoteBox.id = numNotes;
		document.getElementById('note-store').appendChild(newNoteBox);

		var noteBoxTitle = document.createElement('h4');
		noteBoxTitle.className = 'note-store__text';
		noteBoxTitle.innerHTML = noteTitle;

		var noteBoxContent = document.createElement('p');
		noteBoxContent.className = 'note-store__text';
		noteBoxContent.innerHTML = noteContent;

		var deleteButton = document.createElement('img');
		deleteButton.className = 'note-store__img';
		deleteButton.src = 'https://image.flaticon.com/icons/png/512/1214/1214428.png';
		deleteButton.alt = 'delete button';

		switch(numNotes) {
			case 1:
				document.getElementById('1').appendChild(noteBoxTitle);
				document.getElementById('1').appendChild(noteBoxContent);
				document.getElementById('1').appendChild(deleteButton);
				break; 
			case 2:
				document.getElementById('2').appendChild(noteBoxTitle);
				document.getElementById('2').appendChild(noteBoxContent);
				break; 
			case 3:
				document.getElementById('3').appendChild(noteBoxTitle);
				document.getElementById('3').appendChild(noteBoxContent);
				break; 
			case 4:
				document.getElementById('4').appendChild(noteBoxTitle);
				document.getElementById('4').appendChild(noteBoxContent);
				break; 
			case 5:
				document.getElementById('5').appendChild(noteBoxTitle);
				document.getElementById('5').appendChild(noteBoxContent);
				break; 
			case 6:
				document.getElementById('6').appendChild(noteBoxTitle);
				document.getElementById('6').appendChild(noteBoxContent);
				break; 
			case 7:
				document.getElementById('7').appendChild(noteBoxTitle);
				document.getElementById('7').appendChild(noteBoxContent);
				break; 
			case 8:
				document.getElementById('8').appendChild(noteBoxTitle);
				document.getElementById('8').appendChild(noteBoxContent);
				break; 
			case 9:
				document.getElementById('9').appendChild(noteBoxTitle);
				document.getElementById('9').appendChild(noteBoxContent);
				break; 
			case 10:
				document.getElementById('10').appendChild(noteBoxTitle);
				document.getElementById('10').appendChild(noteBoxContent);
				break;
		}

		numNotes++;
	} else{
		alert('You have reached the max num of notes.');
	}
}

/*
	//when noteIsClicked, run(done)
	function done(){
		note.background-color: light-green;
	}
*/
