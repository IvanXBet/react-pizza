import {useState, useCallback, useEffect} from 'react';

export const useAuth = () => {
    
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);

    const login = useCallback( (jwtToken, id, name) => {

        setToken(jwtToken)
        setUserId(id)
        setUserName(name)

        const auth = true;

        localStorage.setItem('userData', JSON.stringify({
            auth:auth, userName:name, userId:id, token:jwtToken
        }))

    }, [])

    const logout = useCallback(() => {

        setToken(null)
        setUserId(null)
        setUserName(null)

        localStorage.removeItem('userData')

    }, [])
    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'))
        if(data && data.token) {
            login(data.token, data.userId, data.userName)
        }
    }, [login])

    

    return {login, logout, token, userId, userName}
}





