import Auth0Provider from './../providers/Auth0Provider'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
  <Auth0Provider>
    <Component {...pageProps} />
  </Auth0Provider>)
}

export default MyApp
