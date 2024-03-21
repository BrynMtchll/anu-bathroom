import React from "react"

import { AppBar, Typography, Box, Toolbar } from "@mui/material"

import NavbarItem from "components/NavbarItem"


const Navbar = () => {
  return (
    <AppBar 
    sx={{
      bgcolor: 'background.default', 
      borderBottom: '1px solid black',
      boxShadow: 'none',
      }}>
      <Toolbar>
        <NavbarItem>
          Home
        </NavbarItem>
        <NavbarItem>
          About
        </NavbarItem>
        <NavbarItem>
          Survey
        </NavbarItem>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar