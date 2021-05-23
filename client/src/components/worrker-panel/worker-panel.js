import React, {Component} from 'react';
import CardWorker from '../cardWorker/cardWorker';
import PizzaServis from '../../services/order-service';


const services = new PizzaServis();

class WorkerPanel extends Component {
    state ={
        orders: [],
    }

    async componentDidMount() {
        await services.getAllOrders()
        .then(res => this.setState({orders: res.reverse()}))
    }

    async componentWillUpdate() {
        await services.getAllOrders()
        .then(res => this.setState({orders: res.reverse()}))
    }

    render() {
        return(
            <>
                <div className='worker'>
                    <div  className='container'>
                        <div className='worker__title'>Обработка зкаказов</div>
                        <div className='worker__block'>
                            {
                                this.state.orders.map(order => {
                                    return <CardWorker order={order}/>
                                })
                            }
                            
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default WorkerPanel;