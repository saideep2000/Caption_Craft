import React, {useState} from 'react'

import AppBar from '@mui/material/AppBar';
import { Button, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import DrawerComp from './DrawerComp';
import IconMini from './IconMini';

const pages = ["Mid Journey", "Posts", "Messages", "Profile", "Settings", "Help"]

function Header() {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
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
                            <IconMini sx={{ flexGrow: 0, mr: 'auto', ml: 'auto' }}/>
                            <Button sx = {{marginLeft : "auto", background : "white", color : "#3c3c3c", mr : "10px"}} varaint = "conatined"> Login </Button>
                            <Button sx = {{marginLeft : "5 px", background : "white", color : "#3c3c3c"}} varaint = "conatined"> Signup </Button>
                        </>
                    )
                }
                
            </Toolbar>
            
        </AppBar>
    </React.Fragment>

  )
}
export default Header