import Head from 'next/head'
import Image from 'next/image'
import { useAuth0 } from '@auth0/auth0-react'

export default function Home() {
  const {user, loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
    <button className="btn btn-primary">DaisyUI Button</button>
      <span>{isLoading? "carregando" : "foi"}</span>
    {!isAuthenticated && <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log In</button>}
    {isAuthenticated && (
      <div>

      <button className="btn btn-primary" onClick={() => logout({returnTo: 'http://localhost:3000'})}>Log Out</button>
      <span>{user.email}</span><span>{user.name}</span>
      </div>
    )}

    </div>
  )
}
