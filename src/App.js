import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function App() {
	return (
		<>
			<NavBar />
			<Switch>
				<Route exact path="/" render={() => <Home />} />
				<Route path="/destination" render={() => <Destination />} />
				<Route path="/crew" render={() => <Crew />} />
				<Route path="/technology" render={() => <Technology />} />
			</Switch>
		</>
	);
}

export default App;
