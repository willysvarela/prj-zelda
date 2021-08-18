import React from 'react'
import PropTypes from 'prop-types'
import { Auth0Provider as Auth0 } from "@auth0/auth0-react"

const Auth0Provider = ({children}) => {
    return (
        <Auth0
            domain="dev-n0h9ka39.us.auth0.com"
            clientId="Mqzi159XExsrHv2qUoBIMrIjWTF9As2G"
            redirectUri="http://localhost:3000"
        >
            {children}
        </Auth0>
    )
}

Auth0Provider.propTypes = {
    children: PropTypes.element
}

export default Auth0Provider
