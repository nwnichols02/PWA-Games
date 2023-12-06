import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import { Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
export default function MenuAppBar() {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
                style={{
                    backgroundColor: 'white',
                    color: 'black'
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <ScoreboardIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sports Sweet
                    </Typography>
                        <div>
                            <Button 
                                style={{
                                    color: 'black',
                                    borderColor: 'black',
                                    marginRight: '1rem'
                                }}
                            >
                                Sign In
                            </Button>
                            <Button 
                                variant="contained"
                                style={{
                                    color: 'white',
                                    backgroundColor: 'black',
                                    borderColor: 'black',
                                }}
                            >
                                Sign Up &nbsp;
                                <EastIcon
                                    style={{
                                        color: 'white',
                                        fontSize: '1rem'
                                    }}
                                />
                            </Button>
                        </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}