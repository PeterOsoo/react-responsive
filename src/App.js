import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home"

const App = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</React.Fragment>
	)
}

export default App
