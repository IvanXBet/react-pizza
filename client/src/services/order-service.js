export default class PizzaServis {
    url = '/api/data/order';

    postOrder = async (body) => {
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                 "Content-Type": "application/json;charset=utf-8",
                 "Access-Control-Allow-Origin": "*"
            }
        })
        
        const result = await response.json();
        return result;
        
    }
    getAllOrders = async () => {
        const response = await fetch('/api/data/allOrders', {
            mode: 'no-cors',
            method: "GET",
            headers: {
                 "Content-Type": "application/json",
                 "Access-Control-Allow-Origin": "*"
            }
        })
        
        const result = await response.json();
        return result;
    }

    changeStatus = async (body) => {
        console.log(body)
        const response = await fetch('/api/data/changestatus', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                 "Content-Type": "application/json;charset=utf-8",
                 "Access-Control-Allow-Origin": "*"
            }
        })
        
        const result = await response.json();
        return result;
    }
}