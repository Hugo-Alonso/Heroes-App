import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
    logged: false,
}

export const AuthProvider = ({ children }) => {

    const [ authtate, dispatch ] = useReducer( authReducer, initialState );

    return (
        <AuthContext.Provider value={{ }}>
            { children }
        </AuthContext.Provider>
    )
}
