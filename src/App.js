import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Destination from "./components/Destination";

function App() {
	return (
		<>
			<NavBar />
			<Switch>
				<Route exact path="/" render={() => <Home />} />
				<Route path="/destination" render={() => <Destination />} />
			</Switch>
		</>
	);
}

export default App;
