import React, { useState } from "react";
import { render } from "react-dom";

function AddContact(props) {
	const [values, setValues] = useState({
		name: "",
		email: "",
	});
	const { name, email } = values;

	const changeHandler = (name) => (event) => {
		event.preventDefault();
		setValues({ ...values, [name]: event.target.value });
	};
	const onSubmit = (event) => {
		event.preventDefault();
		if (name === "" || email === "") {
			alert("All Fields are Mandatory!");
			return;
		} else {
			//this is how we send props from child to parent
			props.addContactHandler(values);
			setValues({ ...values, name: "", email: "" });
			console.log(values);
			//console.log(props);
			//To redirect to home page
			props.history.push("/");
		}
	};
	return (
		<div className="ui main">
			<h2>Add Contact</h2>
			<form className="ui form">
				<div className="field">
					<label>Name</label>
					<input
						type="text"
						value={name}
						placeholder="Enter Name here"
						onChange={changeHandler("name")}
					/>
				</div>
				<div className="field">
					<label>Email</label>
					<input
						type="text"
						placeholder="Enter Email Here"
						value={email}
						onChange={changeHandler("email")}
					/>
				</div>
				<button className="ui button blue" onClick={onSubmit}>
					Add Contact
				</button>
			</form>
		</div>
	);
}

export default AddContact;
