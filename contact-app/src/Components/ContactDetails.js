import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactDetails = (props) => {
	const { name, email } = props.location.state.contact;
	return (
		<div style={{ marginTop: "100px" }} className="main">
			<div className="ui card centered">
				<div className="image">
					<img src={user} alt="user" />
				</div>
				<div className="content">
					<div className="header">{name}</div>
					<div className="description">{email}</div>
				</div>
			</div>
			<div className="center-div">
				<Link to="/">
					<button className="ui button blue center">Back to</button>
				</Link>
			</div>
		</div>
	);
};

export default ContactDetails;
