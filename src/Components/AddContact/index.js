import React, { useState } from "react";
import * as apiService from "../../apiService";
import "./AddContact.css";
import { Button, Alert } from "react-bootstrap";

function AddContact(props) {
	const {
		value: fullName,
		bind: bindFullName,
		reset: resetFullName,
	} = useInput("");
	const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
	const {
		value: phoneNumbers,
		bind: bindPhoneNumbers,
		reset: resetPhoneNumbers,
	} = useInputPhoneNumber([]);

	const [request, setRequest] = useState({});
	const [isValid, setValid] = useState(false);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const reqt = {
			email,
			fullName,
			phoneNumbers,
		};
		if (phoneNumbers) {
			var phoneRegEx = new RegExp(
				// eslint-disable-next-line
				`^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$`
			);
			for (var i = 0; i < phoneNumbers.length; i++) {
				phoneNumbers[i].match(phoneRegEx) ? setValid(true) : setValid(false);
			}

			if (isValid) {
				setRequest({
					reqt,
				});

				apiService.addContact(props.addContactEndpoint, reqt);
				resetEmail();
				resetFullName();
				resetPhoneNumbers();
			}
		}
	};

	return (
		<>
			<Alert key="request" variant="info">
				New Contact Details: {JSON.stringify(request)}
			</Alert>
			<form className="form-container" onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-3 col-md-4">
						<label htmlFor="subject">Full Name</label>
					</div>
					<div className="col-sm-3 col-md-6">
						<input
							id="name"
							type="text"
							{...bindFullName}
							required
							placeholder="Enter full name"
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-3 col-md-4">
						<label htmlFor="subject">Email (Optional)</label>
					</div>
					<div className="col-sm-3 col-md-6">
						<input
							id="email"
							type="text"
							{...bindEmail}
							placeholder="Enter email address"
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-3 col-md-4">
						<label htmlFor="subject">Phone Numbers</label>
					</div>
					<div className="col-sm-3 col-md-6">
						<textarea
							id="phoneNumber"
							{...bindPhoneNumbers}
							placeholder="Enter phone numbers"
							required
						/>
						<Alert key="errPhoneNum" variant="danger">
							Series of phone numbers should be comma separated (AU Format)
						</Alert>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<Button variant="secondary" className="px-5" href="/">
							Cancel
						</Button>
					</div>
					<div className="col-md-6">
						<Button variant="primary" className="px-5" type="submit">
							Save Changes
						</Button>
					</div>
				</div>
			</form>
		</>
	);
}

const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	return {
		value,
		setValue,
		reset: () => setValue(initialValue),
		bind: {
			value,
			onChange: (event) => {
				setValue(event.target.value);
			},
		},
	};
};

const useInputPhoneNumber = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	return {
		value,
		setValue,
		reset: () => setValue([]),
		bind: {
			value,
			onChange: (event) => {
				let con = event.target.value;
				let tempArr = [];
				if (con) {
					tempArr = con.split(",");
				}
				setValue(tempArr);
			},
		},
	};
};

export default AddContact;
