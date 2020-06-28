import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ContactList from "./Components/ContactList/ContactList";
import NoMatch from "./Components/NoMatch";
import AddContact from "./Components/AddContact";

function App() {
	return (
		<div>
			<Header />
			<div className="content">
				<Switch>
					<Route exact path="/contacts">
						<ContactList apiEndpoint={`/`} />
					</Route>
					<Route path="/addContact">
						<AddContact apiEndpoint={`/contact`} />
					</Route>
					<Route path="*">
						<NoMatch />
					</Route>
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

export default App;
