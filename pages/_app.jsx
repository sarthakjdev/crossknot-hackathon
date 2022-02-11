import '../styles/globals.css'
import MainLayout from '../src/components/layouts/main.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
