// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React, {
    createContext,
    useContext,
    useState
} from 'react'

/*  An authentication context that will provide
    an authenticated user name to downstream
    components. Public API should only need
    to leverage useAuth
*/

export const AuthContext = createContext()

export const AuthConsumer = AuthContext.Consumer

function AuthProvider(props) {
    const [user, setUser] = useState('guest')
    const [isAuth, setIsAuth] = useState(false)
    const login = (user) => {
        setUser(user)
        setIsAuth(true)
    }
    const logout = () => {
        setUser('guest')
        setIsAuth(false)
    }
    return <AuthContext.Provider value={{
            user, isAuth, login, logout
        }} { ...props } />
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)
