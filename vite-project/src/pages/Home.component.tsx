import { Button, Paper, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero.component'

const Home = () => {
    const [messages, setMessages] = useState("");
    const [socketMessages, setSocketMessages] = useState([]);



    useEffect(() => {
        const socket = new WebSocket('ws://localhost:3002');

        socket.addEventListener('message', (event) => {
            console.log('Message from server: ', event.data);
        });


    }, []);

    const socket = new WebSocket('ws://localhost:3002');
    socket.addEventListener('open', (event) => {
        console.log('Connected to the server');
        socket.send('Hello, server!');
    });

    socket.addEventListener('message', (event) => {
        console.log('Message from server: ', event.data);
    });
    const handleChange = (data) => {
        console.log(data)
        setMessages(data);
    }

    function sendMessage(e) {
        e.preventDefault();
        if (!messages && messages !== "") return;
        socket.send(messages);
        setMessages('')
    }

    const handleSubmit = (e) => {
        sendMessage(e);
    }

    socket.addEventListener("message", ({ data }) => {
        console.log(data)
        setSocketMessages(data);
    });

    return (
        <div>
            <Paper elevation={0} sx={{ height: '300vh' }}>
                {/* <Grid container>
                    <Paper elevation={0} sx={{ height: '100%', width: '100%', backgroundColor: 'transparent', borderRadius: '15px', padding: '2rem', margin: '' }} >
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>

                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                    <Typography variant="h3" component="div" gutterBottom>
                                        The best way <br /> to manage your team.
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        <p>Join over 1 million teams who are already using Sports Sweet.</p>
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Button
                                            variant='contained'
                                            sx={{ mr: 2, mt: 2}}
                                        >
                                            Try for free
                                        </Button>
                                        <Button
                                            variant='outlined'
                                            sx={{ mt: 2}}
                                        >
                                            Get Started
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ justifyContent: 'flex-end' }}>
                                <img src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="home" style={{ maxWidth: '900px', maxHeight: '500px', objectFit: 'cover' }} />
                            </Grid>
                        </Box>
                    </Paper>
                </Grid> */}
                WebSocket
                <form>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder='Type your message' onChange={(e) => handleChange(e.target.value)} />
                    <Button onSubmit={(e: any
                    ) => { handleSubmit(e); e.preventDefault() }} type="submit">Send</Button>
                </form>
                <ul id="messages">
                    {socketMessages.map((message, index) => <li key={index}>{message}</li>)}
                </ul>

                <Hero />
            </Paper>
        </div>
    )
}

export default Home