import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ContactTable(props) {
	const headers = props.data.displayContactDetails;
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
							<th key={headers.length}>Edit Contact</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((r) => (
							<tr key={r.id}>
								<td key={r.fullName}>{r.fullName}</td>
								<td key={r.email}>{r.email ? r.email : "---"}</td>
								<td key={r.phoneNumbers}>{r.phoneNumbers.join(" || ")}</td>
								<td key={"btn-edit"}>
									<Link
										className="btn btn-success px-4 align-items-center"
										to={{ pathname: `/contactDetails`, state: { r } }}
									>
										Edit Details
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
				<Button variant="primary" className="px-4">
					Add new contact
				</Button>
			</div>
		</>
	);
}
