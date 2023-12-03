import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

const App = () => {
  return (
    <>
    <header>
      <NavBar/>
    </header>
    <ItemListContainer greeting="Pronto estare en linea"/>
    </>
  )
}

export default App
