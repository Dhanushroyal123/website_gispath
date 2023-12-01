import { useState } from 'react'
import logo from '../../assets/logo.png'
import Hamburger from 'hamburger-react'
import MenuData from './menudata'

const Header = () => {
  const menuItems = [
    { id: 1, name: 'home', status: false },
    { id: 2, name: 'what we do', status: false },
    { id: 3, name: 'about us', status: false },
    { id: 4, name: 'careers', status: false },
    { id: 5, name: 'blog', status: false },
    { id: 6, name: 'contact', status: false },
  ]

  const [hoverBorder, setHoverBorder] = useState(menuItems)
  const [showMenu, setShowMenu] = useState(false)
  const [isOpen, setOpen] = useState(false)

  const [menuid, setMenuId] = useState('')

  const onMouse = (id) => {
    if (id !== 1 && id !== 6) {
      setMenuId(id)
      setShowMenu(true)
    }
    const newState = menuItems.map((each) => {
      if (each.id === id) {
        each.status = true
      }
      return each
    })
    setHoverBorder(newState)
  }

  const overMouse = (id) => {
    setShowMenu(false)
    const newState = menuItems.map((each) => {
      if (each.id === id) {
        each.status = false
      }
      return each
    })
    setHoverBorder(newState)
  }

  return (
    <>
      <div className='header'>
        <div className='logo'>
          <img id='logo_img' src={logo} alt='' />
        </div>
        <div className='between'></div>
        <div className='menu'>
          <ul>
            {hoverBorder.map((each) => {
              const { id, name, status } = each
              return (
                <li
                  id={id}
                  className='mitem'
                  onMouseEnter={() => onMouse(id)}
                  onMouseLeave={() => overMouse(id)}
                  style={{
                    borderBottom: status ? '3px solid red' : '3px solid white',
                    fontFamily: 'Geomanist, Arial, Helvetica, sans-serif',
                  }}
                >
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='hamburger-icon'>
          <Hamburger id='hg' toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        {showMenu ? <MenuData x_id={menuid} /> : ''}
      </div>
    </>
  )
}

export default Header
