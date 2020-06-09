import React from "react";

const Forms = props => {
  return (
		<div className="note-list">
			{props.notes.map((note) => (
				<div className="note" key={note.id}>
					<h2>{note.fname}</h2>
					<h2>{note.lname}</h2>
					<h2>{note.email}</h2>
					<h2>{note.role}</h2>
					<p>{note.body}</p>
				</div>
			))}
		</div>
	);
};

export default Forms;

