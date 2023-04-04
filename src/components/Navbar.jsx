import React from 'react'
import {AppBar,Link, Toolbar, Grid, Box, List, ListItem} from "@mui/material"
import logo from "../assests/logo.jpeg";


const Navbar = () => {
  return (
 
 <AppBar  position="static" sx={{background:"#fa8072"}}>
    <Toolbar>
        <Grid container   >
            <Grid item xs={2} p={2} >
            <Link href="/">
                 <Box
                  component="img"
                  sx={{ height: 100 }}
                  alt="Logo"
                  src={logo}
                 />
            </Link>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8} >
              <List sx={{ display:"flex", flexDirection:"row", pt:5}}>
                <ListItem><Link href="/"  underline="none" color="black" fontSize={24}>Home</Link></ListItem>
                <ListItem><Link href="/animalmate" underline="none" color="black" fontSize={24} >Mate</Link></ListItem>
                <ListItem><Link href="/aboutus" underline="none" color="black" fontSize={24}>About</Link></ListItem>
                <ListItem><Link href="/contact" underline="none" color="black" fontSize={24}>Contact</Link></ListItem>
                <ListItem><Link href="/ligin" underline="none" color="black" fontSize={24}>Login</Link></ListItem>
                <ListItem><Link href="/signup" underline="none" color="black" fontSize={24}>Sign Up</Link></ListItem>
              </List>
            </Grid>
        </Grid>
        
    </Toolbar>
 </AppBar>

  )
}

export default Navbar