function Nav(props) {
    console.log(props)
  return (
    <nav>
        <ul>
            <li><a href="#inicio">{props.menu[0].nombre}Inicio</a></li>
            <li><a href="#nosotros">{props.menu[1].nombre}Nosotros</a></li>
            <li><a href="#servicios">{props.menu[2].nombre}Servicios</a></li>            
            <li><a href="#Contacto">{props.menu[3].nombre}Contacto</a></li>
        </ul>
    </nav>
  )
}

export default Nav