import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Forms from './components/Forms';
import NewForm from './components/NewForm';
// import './styles.scss';
import './index.css';

function App() {
	const [notes, setNotes] = useState([
		{
			id: 1,
			fname: 'Sarahmarie',
			lname: 'Hollenstein',
			email: 'abc@email.com',
			role: "Full Stack Developer",
			body:
				"React is fun! ",
		},
	]);

	const addNewNote = (note) => {
		const newNote = {
			id: Date.now(),
			// Date.now() In built function in JS this gives the current date
			//up to the millisecond
			fname: note.fname, // (both title and body) has note from the variable
			lname: note.lname,
			email: note.email,
			role: note.role,
			body: note.body, // addNewNote -- note is like props
		};

		setNotes([...notes, newNote]); // this is our spread to add more information {object}
	};

	return (
		<div className="App">
			<h1>Lambda Survey Form</h1>
			<NewForm addNewNote={addNewNote} />
			{/* passing our function as a prop {addNewNote} */}
			<Forms notes={notes} />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
