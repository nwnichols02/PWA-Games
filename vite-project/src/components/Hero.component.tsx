import './Hero.component.css';
import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';

const Hero = () => {
    return (
        <section style={{ backgroundImage: "url('nereus-assets/img/bg/pattern1.png')" }}>
            <Container maxWidth="lg">
                <Box textAlign="center" pb={12}>
                    <Typography variant="h2" color="black" gutterBottom className="hero-header new">
                        Sports management<br /><span style={{ backgroundClip: 'text', color: '#24242424', border: 'black', fontSize: '24px' }}>
                            {/* <s style={{ opacity: "0.7" }}>disorganized</s>
                            <br />
                            <s style={{ opacity: "0.7" }}>disorganized</s>
                            <br />
                            <s style={{ opacity: "0.7" }}>expensive</s>
                            <br /> */}
                        </span>
                        <span style={{ backgroundClip: 'text', color: 'black', border: 'black' }}><Typography variant='h2'><strong>reimagined</strong></Typography></span>
                    </Typography>
                    <Box maxWidth="3xl" mx="auto">
                        <Typography variant="h6" color="textSecondary" gutterBottom>
                            Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                        </Typography>
                        <img src="https://images.unsplash.com/photo-1511285605577-4d62fb50d2f7?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="home" style={{ width: '50%', maxHeight: '50%', objectFit: 'cover', padding: '3rem' }} />
                        <Box display="flex" justifyContent="center">

                            <Button variant="contained" color="primary" style={{ marginRight: '1rem' }} type="button" id="HELLO">
                                Start free trial
                            </Button>
                            <Button variant="contained" color="secondary">
                                Learn more
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" height="100%">
                            <Box my="auto">
                                <Container maxWidth="sm">
                                    <Typography variant="h3" color="primary" gutterBottom className="hero-header">
                                        Lorem ipsum
                                    </Typography>
                                    <Typography variant="h3">
                                        dolor sit amet, consectetur.
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus.
                                    </Typography>
                                    <Box mt={3}>
                                        <Button variant="contained" color="secondary" fullWidth className="newest hero-header">
                                            Action
                                        </Button>
                                        <Typography component="a" color="primary">
                                            Link Default
                                        </Typography>
                                    </Box>
                                </Container>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="home" style={{ width: '100%', maxHeight: '100%', objectFit: 'cover', overflow: 'hidden', display: 'flex', gridTemplateRows: '1fr', gridTemplateColumns: '1fr', gridAutoFlow: 'column dense', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', position: 'static', border: '1px solid black', borderRadius: '10px', boxShadow: '-3.86px 1.04px 57px 49px black' }} />            </Grid>
                </Grid>

            </Container>
        </section>
    );
};

export default Hero;