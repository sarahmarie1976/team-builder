import React, { useState } from "react";


const NewForm = props => {
  // console.log("this is our props",props);
  const [note, setNote] = useState({
		fname: '',
		lname: '',
		email: '',
		role: '',
		body: '',
	});


  // onChange Handeler to control inputs 
  const handleChanges = e => {
    setNote({...note, [e.target.name]: e.target.value}) 
    // above is a computed property name this is to control both the title and the body
    // this helps so the title and the body don't override each other
    console.log(note);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewNote(note);
    // passing in our state which is our props  called 'note'
    setNote({ fname: '', lname: '', email: '', role: '', body: '' });
    // this is emptying out the title and body after submitting as empty strings again
  };

  // we added the sumbForm to handle how the form is being processed 
  //  event is for stopping the default on the form so we can handle when it submits
  // this stops the page to go blank when you hit the button

  return (
		// onSubmit should always be on the form not the button
		// onSubmit controls the form not just the button

		<form onSubmit={submitForm}>
			<label htmlFor="fname">First Name</label>
			<input
				id="fname"
				type="text"
				name="fname"
				onChange={handleChanges}
				placeHolder="First Name"
				value={note.fname}
				// value={note.title} is bringing our variable submitForm (setNote) back to empty strings
			/>

			<label htmlFor="lname">Last Name</label>
			<input
				id="lname"
				type="text"
				name="lname"
				onChange={handleChanges}
				placeHolder="Last Name"
				value={note.lname}
				// value={note.title} is bringing our variable submitForm (setNote) back to empty strings
			/>

			<label htmlFor="exampleEmail">Email</label>
			<input
				type="email"
				name="email"
				id="exampleEmail"
				onChange={handleChanges}
				placeholder="Email"
				value={note.email}
			/>

			<label htlmFor="role">Role</label>
			<select id="role" name="role" value={note.role} onChange={handleChanges}>
				<option>Select</option>
				<option value="Android Developer">Android Developer</option>
				<option value="iOS Developer">iOS Developer</option>
				<option value="BackEnd Developer">BackEnd Developer</option>
				<option value="FrontEnd Developer">FrontEnd Developer</option>
				<option value="Full Stack Developer">Full Stack Developer</option>
				<option value="Data Science">Data Science</option>
			</select>

			<label htmlFor="note">Note</label>
			<textarea
				id="note"
				name="body"
				onChange={handleChanges}
				value={note.body}
				// value={note.body} is bringing our variable submitForm (setNote) back to empty strings
			/>
			<button type="submit">Add Comment</button>
		</form>
	);
};

export default NewForm;
