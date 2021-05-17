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
}