export default class PizzaServis {
    url = '/api/data/menu';

    getMenuItems = async () => {
        const response = await fetch(this.url, {
            mode: 'no-cors',
            method: "GET",
            headers: {
                 "Content-Type": "application/json",
                 "Access-Control-Allow-Origin": "*"
            }
        })

        
        if (!response.ok){
            throw new Error('Server Error');
        }
        
        const result = await response.json();
        return result;
        
    }
}