// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React, {
    createContext,
    useContext,
    useState
} from 'react'

const noop = () => {}
const AuthContext = createContext({
    user: null,
    login: noop,
    logout: noop
})

const AuthProvider = props => {
    const [user, setUser] = useState(null)
    const login = user => setUser(user)
    const logout = () => setUser(null)

    return <AuthContext.Provider value={{
            user, login, logout
        }} {...props} />
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)
