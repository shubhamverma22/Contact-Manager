import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
	//console.log("Props are:", props.contacts);
	// console.log(props.contacts.data);
	//const dataArr = props.contacts.data;

	// dataArr.map((c) => console.log(c));
	// //props.contacts.data.map((data) => console.log("Data is :", data));

	//const { id } = props.contacts.data;
	// props.contacts.data.map((c) => {
	// 	console.log(c);
	// });

	// console.log(typeof props.contacts.data);
	// Object.entries(props.contacts.data).map(([key, value]) => {
	// 	console.log(key, value);
	// });

	const deleteContactHandler = (id) => {
		props.getContactId(id);
	};

	const renderContactList = props.contacts.map((contact) => {
		return (
			<ContactCard
				contact={contact}
				clickHandler={deleteContactHandler}
				key={contact.id}
			/>
		);
	});
	return (
		<div class="main" style={{ marginTop: "50px" }}>
			<h2>
				Contact List
				<Link to="/add">
					<button
						style={{
							marginLeft: "75%",
						}}
						className="ui button blue right"
					>
						Add Contact
					</button>
				</Link>
			</h2>
			<div className="ui celled list">{renderContactList}</div>
		</div>
	);
};

export default ContactList;
