export default class PizzaServis {

    loginAdmin = async (body) => {
        const response = await fetch('/api/data/loginadmin', {
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