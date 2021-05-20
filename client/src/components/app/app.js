import React, {Component} from 'react';
import MainPage from '../pages/MainPage';
import CartPage from '../pages/CartPage';
import ProfilPage from '../pages/ProfilPage';
import CheckoutPage from '../pages/CheckoutPage';
import ReadyPage from '../pages/ReadyPage';
import AdminPage from '../pages/AdminPage';
import WorkerPage from '../pages/WorkerPage';
import AdminAuth from '../admin-auth/admin-auth';
import {Switch, Route} from 'react-router-dom';
import { useDispatch, useSelector, connect } from 'react-redux';
import {useRealodOrder} from '../../hooks/relodOrder.hook';
import {reloadOrder} from '../../actions/index';

import '../../css/app.scss';


class App extends Component {

	state = {
		profil: false,
	}

	async componentDidMount() {
		const order = [];
		let status;
		let totalInfo = {
			totalPrice: 0,
            totalQuantity: 0,
		}
		
		
		if(localStorage.getItem('dateOrder') === null) {
			
			status = false
			const payload = {order, status, totalInfo}
			await this.props.reloadOrder(payload);
			
		} else {
			const order = JSON.parse(localStorage.getItem('dateOrder'))
			totalInfo = JSON.parse(localStorage.getItem('totalInfo'))
			status = true
			const payload = {order, status, totalInfo}
			await this.props.reloadOrder(payload);
		}


		if(localStorage.getItem('userData') == undefined) {
			return;
		} else {
			if(JSON.parse(localStorage.getItem('userData')).auth == true) {
				this.setState({profil: true});
			}
		}

	}

	

	render() {
		const profilContent = this.state.profil ? <Route path='/profil' exact><ProfilPage/></Route> : null

		return (
				<div className="app">
					<Switch>
						<Route path='/' exact><MainPage /></Route>
						<Route path='/cart' exact><CartPage/></Route>
						{profilContent}
						<Route path='/checkout' exact><CheckoutPage/></Route>
						<Route path='/ready' exact><ReadyPage/></Route>
						<Route path='/admin' exact> <AdminPage/> </Route>
						<Route path='/worker' > <WorkerPage/> </Route>
						<Route path='/authadmin' exact><AdminAuth/></Route>
						<Route exact><MainPage/></Route>
					</Switch>
				</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
		orderItems: state.orderItems,
       
    }
} 
const mapDispatchToProps = {
    reloadOrder,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



// const App = () => {

// 	return (
// 		<div className="app">
// 			<Switch>
// 				<Route path='/' exact><MainPage /></Route>
// 				<Route path='/cart' exact><CartPage/></Route>
// 				<Route path='/profil' exact><ProfilPage/></Route>
// 				<Route exact><MainPage/></Route>
// 			</Switch>
// 		</div>
// 	);
// }

// export default App;

// reloadOrder = async () => {
// 	const arr = [];
// 	console.log(localStorage.getItem('dateOrder'))
// 	if(localStorage.getItem('dateOrder') == null) {
// 		console.log(arr)
// 		this.props.reloadOrder(arr);
		
// 	} else {
// 		const order = JSON.parse(localStorage.getItem('dateOrder'))
// 		console.log(order)
// 		this.props.reloadOrder(order);
		
// 	}
// }