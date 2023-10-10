import { Route, Switch } from "wouter"
import HomePage from "./../pages/homePage"
import AboutMePage from "./../pages/acercaDeMiPage"
import TecnologyPage from "./../pages/tecnologiaPage"
import HeaderComponent from "./components/header/HeaderComponent"
import NavbarButtoms from "./components/nav/navbar"
import ErrorPage from "../pages/ErrorPage"
import { AnimatePresence } from "framer-motion"
import { useSetLocation } from "../hooks/useSetLocation"


function App() {

  const { location } = useSetLocation()

  return (
    <main className='container mx-auto h-screen relative p-2'>
      <HeaderComponent />
      <NavbarButtoms />
      <section className=" overflow-y-auto mt-4 overflow-x-auto">
        <AnimatePresence mode="wait">
          <Switch location={location} key={location}>
            <Route component={HomePage} path="/" />
            <Route component={AboutMePage} path="/acerca" />
            <Route component={TecnologyPage} path="/tecnologia" />
            <Route><ErrorPage /></Route>
          </Switch>
        </AnimatePresence>
      </section>

    </main>


  )
}

export default App