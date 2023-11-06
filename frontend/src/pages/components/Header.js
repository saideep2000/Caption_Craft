import React, {useState} from 'react'

import AppBar from '@mui/material/AppBar';
import { Button, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import DrawerComp from './DrawerComp';
import IconMini from './IconMini';
import { useNavigate } from 'react-router-dom';

const pages = ["Craft", "Posts", "Messages", "Profile", "Settings", "Help"]

function Header() {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();
    const handleLogin = () => {
        try {
        navigate('/Login');
        } catch (error) {
        // Handle errors such as invalid login credentials
        console.error('Login failed:', error);
        }
    }
    const handleSignUp = () => {
        try {
        navigate('/SignUp');
        } catch (error) {
        // Handle errors such as invalid login credentials
        console.error('Login failed:', error);
        }
    }
  return (
    <React.Fragment>
        <AppBar sx = {{background : "black"}}>
            <Toolbar>
                {
                    isMatch ? (
                        <>
                            <DrawerComp/>
                            <IconMini sx={{ flexGrow: 0, mr: 'auto', ml: 'auto' }}/>
                        </>
                    ) : (
                        <>
                            <Tabs textColor='inherit' value = {value} onChange={(e,value) => setValue(value)} indicatorColor='white'>
                                {
                                    pages.map((page,index) => (
                                        <Tab key = {index} label = {page}/>
                                    ))
                                }
                            </Tabs>
                            <IconMini sx={{ ml : "215px"}}/>
                            <Button sx = {{
                                marginLeft : "auto", background : "white", color : "#3c3c3c", mr : "10px", 
                                '&:hover': {
                                    color : "white",
                                    backgroundColor: 'green',
                                  },
                            }} varaint = "conatined" onClick={handleLogin}
                            > Login </Button>
                            <Button sx = {{
                                marginLeft : "5 px", background : "white", color : "#3c3c3c",
                                '&:hover': {
                                    color : "white",
                                    backgroundColor: 'green',
                                  },
                                }} varaint = "conatined" onClick={handleSignUp}
                                > Signup </Button>
                        </>
                    )
                }
                
            </Toolbar>
            
        </AppBar>
    </React.Fragment>

  )
}
export default Header