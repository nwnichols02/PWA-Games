import { Paper, Button } from '@mui/material'
import React from 'react'

const Home = () => {
    return (
        <div>
            <Paper elevation={2} sx={{height: '300vh'}}>
                <h1>The best way<br/>to manage<br/>your team.</h1>
                <p>Join over 1 million teams who are already using Sports Sweet.</p>
                <Button>Get Started</Button>

            </Paper>

        </div>
    )
}

export default Home