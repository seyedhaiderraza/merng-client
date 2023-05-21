import React, {useContext, useState } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/Auth'
function MenuBar() {
    const {user, login, logout} = useContext(AuthContext)
    const pathname = window.location.pathname
    const path =pathname==='/'?'home':pathname.substring(1)
    //when we goto certain path such as /login it doesn't highlights the menubar link corresponding to login or etc so we did default aactivestate to route path in url
    const [activeItem, setActiveItem] = useState(path)
    const handleItemClick = (e, { name }) => setActiveItem(name)

    const menuBar = user? (  <Menu pointing secondary size='massive' color="teal">
    <Menu.Item name = 'home' active={activeItem==='home'} onClick={handleItemClick} as={Link} to="/"/>
    <Menu.Menu position='right'>
         <Menu.Item name = 'logout'  onClick={logout} as={Link} to="/login"/>
    </Menu.Menu>
</Menu>)

    :
    (  <Menu pointing secondary size='massive' color="teal">
    <Menu.Item name = 'home' active={activeItem==='home'} onClick={handleItemClick} as={Link} to="/"/>
    <Menu.Menu position='right'>
         <Menu.Item name = 'login' active={activeItem==='login'} onClick={handleItemClick} as={Link} to="/login"/>
         <Menu.Item name = 'register' active={activeItem==='register'} onClick={handleItemClick} as={Link} to="/register"/>
    </Menu.Menu>
</Menu>)
        return menuBar
    }

export default MenuBar