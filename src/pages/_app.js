import '@/styles/globals.css'
import Header from './header'
import Menu from './menu'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.css'

export default function App({ Component}) {
  return <>
    <Header />
    <Menu />
    <Component />
    <Footer />
  </>
}
