import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "./api/contacts";
import "./App.css";
import AddContact from "./Components/AddContact";
import ContactDetails from "./Components/ContactDetails";
import ContactList from "./Components/ContactList";
import Header from "./Components/Header";

function App() {
	// const LOCAL_STORAGE_KEY = "Contacts";
	const [contacts, setContacts] = useState([]);

	//retrieve contacts
	const retrieveContacts = async () => {
		const response = await api.get("/contacts");
		return response.data;
	};
	//TODO:   Create Contact
 	//props comes from child to parent:- we get contact from AddContact Component as we return values
	const addContactHandler = async (contact) => {
		//console.log(contact);
		const request = {
			id: uuid(),		//assign id to every individual users
			...contact,		//by loading the contact array
		};
		const response = await api.post("/contacts", request);
		console.log(response.data);
		//setContacts([...contacts, { id: uuid(), ...contact }]); //update contact list with their unique id's
		setContacts([...contacts, response.data]);
	};
	//TODO:		Delete Contact
	const removeContactHandler = async (id) => {
		await api.delete(`/contacts/${id}`);
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});
		setContacts(newContactList);
	};
	//To retrive contacts on webpage
	useEffect(() => {
		// const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		// if (retriveContacts) setContacts(retriveContacts);
		const getAllContacts = async () => {
			const allContacts = await retrieveContacts();
			if (allContacts) setContacts(allContacts);
		};
		getAllContacts();
	}, []);

	//To set the contacts to localStorage
	// useEffect(() => {
	// 	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	// }, [contacts]);

	return (
		<div className="ui container">
			<Router>
				<Header />
				<Switch>
					<Route
						exact
						path="/"
						render={(props) => (
							<ContactList
								{...props}
								contacts={contacts}
								getContactId={removeContactHandler}
							/>
						)}
					></Route>
					<Route
						exact
						path="/add"
						render={(props) => (
							<AddContact {...props} addContactHandler={addContactHandler} />
						)}
					></Route>
					<Route path="/contact/:id" component={ContactDetails} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
