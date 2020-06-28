import React from "react";
import Table from "react-bootstrap/Table";
import "./ContactList.css";
import { Button, Alert } from "react-bootstrap";

export default function ContactTable(props) {
	const headers = props.data.displayContactDetails;
	const maxColumnSpan = headers.length;
	const rows = props.data.contacts;
	return (
		<>
			<div className="container m-12">
				<Table responsive striped bordered hover>
					<thead>
						<tr>
							{headers.map((h, i) => (
								<th key={i}>{h}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{rows && rows.length > 0 ? (
							rows.map((r, i) => (
								<tr key={r.id}>
									<td key={i}>{r.fullName}</td>
									<td key={i}>{r.email ? r.email : "---"}</td>
									<td key={i}>
										{r.phoneNumbers && r.phoneNumbers.join(" || ")}
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colspan={maxColumnSpan}>
									<Alert key="no-content" variant="info">
										No Content
									</Alert>
								</td>
							</tr>
						)}
						<tr>
							<td colSpan={maxColumnSpan} className="align-contents">
								<Button variant="primary" className="px-4" href="/addContact">
									Add new contact
								</Button>
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</>
	);
}
