import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuItem, MenuList, Flex, Box, Spacer} from '@chakra-ui/react'
function NavBar() {
  return (
    <div>
        <Flex>
    <Box p='4'>
      <Link to={"/"}>
      <h3>brad</h3>
      </Link>
    </Box>
  
  <Spacer />
  <Menu>
    <MenuButton >
    Productos
     </MenuButton>
  <MenuList>
    <MenuItem>Hombre</MenuItem>
    <MenuItem>Mujer</MenuItem>
    <MenuItem>Accesorios</MenuItem>
  </MenuList>
</Menu>
  <Spacer/>

  <Box p='4'>
  <Link to={"/Cart"}>
    <CartWidget/>
  </Link>
  </Box>
</Flex>
 
        

    </div>
  )
}

export default NavBar