import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuItem, MenuList, Flex, Box, Spacer} from '@chakra-ui/react'
function NavBar() {
  return (
    <div>
      
        NavBar
        <Flex>
    <Box p='4'>
      <h3>brad</h3>
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
    <CartWidget/>
  </Box>
</Flex>
 
        

    </div>
  )
}

export default NavBar