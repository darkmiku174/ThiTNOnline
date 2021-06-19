import "./App.css";
import Header from "./components/GlobalComponents/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Component } from "react";
import routes from './routes';

class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<section
					className="main-content"
					style={{ width: "90%", margin: "0 auto" }}
				>
					<div className="App">
						{this.showContentMenus(routes)}
					</div>
				</section>

			</Router>
		);
	}

	showContentMenus = (routes) => {
		var result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}
						render={route.render}
					/>
				);
			});
		}
		return <Switch>{result}</Switch>;
	}


}

export default App;
