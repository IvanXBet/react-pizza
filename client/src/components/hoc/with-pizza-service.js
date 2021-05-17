import React from 'react';
import PizzaServiceContext from '../context/pizza-service-context';

const WithPizzaService = () => (Wrapped) => {
    return (props) => {
        return (
            <PizzaServiceContext.Consumer>
                {
                    (pizzaService) => {
                        return (
                            <Wrapped {...props} PizzaService={pizzaService}/>
                        )
                    }
                }
            </PizzaServiceContext.Consumer>
        )
    }
}

export default WithPizzaService;