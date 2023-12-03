import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <>
    <nav>
        <a href="./index.html">
            <div style={{background:'url(./header_logo.png) center center/ cover',height:'100%',width:'21.4vw',maxWidth:'17rem'}}>
            </div>
        </a>
        <form>
            <fieldset>
                <input type="search" placeholder="Eso lo que querés... buscalo acá"/>
                <button type="button" style={{background:'url(./magnifying-glass-solid.svg) center center / 47.8% 66% no-repeat white',width:'3rem'}}>
                </button>
            </fieldset>
        </form>
        <ul>
            <li><a href=""><span>Bienvenida/o Usuario</span></a></li>
            <li><a href=""><div style={{background:'url(./heart.svg) center center/ cover',height:'1.9rem',width:'2rem'}}></div></a></li>
            <li><a href=""><CartWidget/></a></li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar