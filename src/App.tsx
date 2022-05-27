import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import { HomePage,User_RegisterPage,User_SignInPage,Rider_RegisterPage,Rider_SignInPage,DetailPage } from "./pages";

function App() {
	return (
		<div className={styles.App}>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/user_register" component={User_RegisterPage}/>
					<Route path="/user_signIn" component={User_SignInPage}/>
					<Route path="/rider_register" component={Rider_RegisterPage}/>
					<Route path="/rider_signIn" component={Rider_SignInPage}/>
					<Route path="/detail/:touristRouteId" component={DetailPage}/>
					<Route render={() => <h1>404 页面去火星了</h1>}/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
