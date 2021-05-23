export default class PizzaServis {
    
    getMenuItems = async () => {
        const response = await fetch('/api/data/menu', {
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

    addCard = async (body) => {
        console.log(body)
        const response = await fetch('/api/data/addcard', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                 "Content-Type": "application/json"
            }
        })

        
        const result = await response.json();
        return result;
        
    }
}