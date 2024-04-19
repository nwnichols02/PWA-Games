import PlayerPill from '@/components/Atoms/PlayerPill.component'
import Timer from '@/components/Atoms/Timer.component'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'


const Home = () => {

    const [homeScore, setHomeScore] = useState(11)
    const [awayScore, setAwayScore] = useState(7)

    const [isActive, setIsActive] = useState<boolean>(false);

    const [open, setOpen] = useState(false);

    const [points, setPoints] = useState(0)
    const [ds, setDs] = useState(0)
    const [assists, setAssists] = useState(0)
    const [turnovers, setTurnovers] = useState(0)


    return (
        <>
            <Grid
                m={8}
            >
                <Card>
                    <Grid
                        container
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'space-evenly'}
                    >
                        <Grid>
                            <p className="text-sm text-muted-foreground p-2">Home</p>
                        </Grid>
                        <Grid>
                            <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-4">
                                Riverton
                            </h2>
                            <Box
                                display={'flex'}
                                flexDirection={'row'}
                                justifyContent={'space-evenly'}
                            >


                                <Box
                                    display={'flex'}
                                    flexDirection={'column'}
                                >
                                    <Button
                                        className='mb-2'
                                        onClick={() => setHomeScore(homeScore + 1)}
                                    >
                                        +
                                    </Button>
                                    <Button
                                        className='mb-4'

                                        variant={"outline"}
                                        onClick={() => setHomeScore(homeScore - 1)}
                                    >
                                        -
                                    </Button>

                                </Box>
                                <h1 className=" text-4xl font-extrabold tracking-tight lg:text-5xl flex justify-center p-4 ml-4">
                                    {homeScore}
                                </h1>
                            </Box>
                        </Grid>
                        <Grid>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%'
                                }}
                            >

                                <Timer
                                    isActive={isActive}
                                    initialMinutes={45}
                                />
                                <Button
                                    variant={isActive ? 'default' : "outline"}
                                    onClick={() => setIsActive(!isActive)}
                                >
                                    {isActive ? 'Pause' : 'Start'}
                                </Button>
                            </Box>
                        </Grid>

                        <Grid>
                            <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-4">
                                Bingham
                            </h2>
                            <Box
                                display={'flex'}
                                flexDirection={'row'}
                                justifyContent={'space-evenly'}
                            >

                                <h1 className=" text-4xl font-extrabold tracking-tight lg:text-5xl flex justify-center p-4 mr-4">
                                    {awayScore}
                                </h1>
                                <Box
                                    display={'flex'}
                                    flexDirection={'column'}
                                >
                                    <Button
                                        className='mb-2'
                                        onClick={() => setAwayScore(awayScore + 1)}
                                    >
                                        +
                                    </Button>
                                    <Button
                                        className='mb-4'

                                        variant={"outline"}
                                        onClick={() => setAwayScore(awayScore - 1)}
                                    >
                                        -
                                    </Button>

                                </Box>
                            </Box>
                        </Grid>
                        <Grid>
                            <p className="text-sm text-muted-foreground p-2">Away</p>

                        </Grid>
                    </Grid>
                </Card>

                {/* <Card
                    className="mt-4 w-[350px]"
                    style={{
                        width: '200px',
                        height: '75px'
                    
                    }}
                > */}
                <Grid
                    container
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-evenly'}
                >

                    <PlayerPill
                        name="Ceilidh Nichols"
                        avatarSRC="https://randomuser.me/api/port"
                    />
                    <PlayerPill
                        name="John Doe"
                        avatarSRC="https://randomuser.me/api/port"
                    />
                    <PlayerPill
                        name="John Doe"
                        avatarSRC="https://randomuser.me/api/port"
                    />
                    <PlayerPill
                        name="John Doe"
                        avatarSRC="https://randomuser.me/api/port"
                    />
                    <PlayerPill
                        name="John Doe"
                        avatarSRC="https://randomuser.me/api/port"
                    />
                    <PlayerPill
                        name="John Doe"
                        avatarSRC="https://randomuser.me/api/port"
                    />
                    <PlayerPill
                        name="John Doe"
                        avatarSRC="https://randomuser.me/api/port"
                    />
                    <PlayerPill
                        name="John Doe"
                        avatarSRC="https://randomuser.me/api/port"
                    />
                    <PlayerPill
                        name="John Doe"
                        avatarSRC="https://randomuser.me/api/port"
                    />
                    <PlayerPill
                        name="John Doe"
                        avatarSRC="https://randomuser.me/api/port"
                    />
                    <PlayerPill
                        name="John Doe"
                        avatarSRC="https://randomuser.me/api/port"
                    />
                    <PlayerPill
                        name="John Doe"
                        avatarSRC="https://randomuser.me/api/port"
                    />

                </Grid>

                <Button onClick={() => setOpen(!open)}>Open Drawer</Button>
                <Drawer open={open}>
                    <DrawerContent className="h-[60vh]">
                        <DrawerHeader className='flex row'>

                            <Avatar
                                className="w-32 h-32 mr-4"
                                src={"https://randomuser.me/api/port"}
                                alt={"John Doe"}
                            ><AvatarFallback>{"John Doe"
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}</AvatarFallback></Avatar>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    width: '100%'
                                }}
                            >
                                <DrawerTitle className='mt-2'>{"John Doe"}</DrawerTitle>
                                <DrawerTitle className='mt-2'>#16</DrawerTitle>
                                <DrawerDescription className='mt-2'>Handler</DrawerDescription>
                            </Box>
                        </DrawerHeader>
                        {/* <DrawerDescription className='mt-2'>Some Description</DrawerDescription> */}

                        <Box>
                            <Card className='m-8'>
                                <Grid
                                    container
                                    display={'flex'}
                                    flexDirection={'row'}
                                    justifyContent={'space-evenly'}
                                >
                                    <Grid>
                                        <Box
                                            display={'flex'}
                                            flexDirection={'column'}
                                            justifyContent={'center'}
                                            alignItems={'center'}
                                        >
                                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-4">
                                                {points}
                                            </h1>
                                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
                                                Points
                                            </h4>
                                            <Box sx={{ mt: 2 }} >
                                                <Button
                                                    className=''

                                                    variant={"outline"}
                                                    onClick={() => setPoints(points - 1)}
                                                >
                                                    -
                                                </Button>
                                                <Button
                                                    className='ml-8 mb-4'
                                                    onClick={() => setPoints(points + 1)}
                                                >
                                                    +
                                                </Button>
                                            </Box>
                                        </Box>

                                    </Grid>
                                    <Grid>
                                        <Box
                                            display={'flex'}
                                            flexDirection={'column'}
                                            justifyContent={'center'}
                                            alignItems={'center'}
                                        >
                                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-4">
                                                {ds}
                                            </h1>
                                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
                                                Defense (D's)
                                            </h4>
                                            <Box sx={{ mt: 2 }} >
                                                <Button
                                                    className=''

                                                    variant={"outline"}
                                                    onClick={() => setDs(ds - 1)}
                                                >
                                                    -
                                                </Button>
                                                <Button
                                                    className='ml-8 mb-4'
                                                    onClick={() => setDs(ds + 1)}
                                                >
                                                    +
                                                </Button>
                                            </Box>
                                        </Box>

                                    </Grid>
                                    <Grid>
                                        <Box
                                            display={'flex'}
                                            flexDirection={'column'}
                                            justifyContent={'center'}
                                            alignItems={'center'}
                                        >
                                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-4">
                                                {assists}
                                            </h1>
                                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
                                                Assists
                                            </h4>
                                            <Box sx={{ mt: 2 }} >
                                                <Button
                                                    className=''

                                                    variant={"outline"}
                                                    onClick={() => setAssists(assists - 1)}
                                                >
                                                    -
                                                </Button>
                                                <Button
                                                    className='ml-8 mb-4'
                                                    onClick={() => setAssists(assists + 1)}
                                                >
                                                    +
                                                </Button>
                                            </Box>
                                        </Box>

                                    </Grid>
                                    <Grid>
                                        <Box
                                            display={'flex'}
                                            flexDirection={'column'}
                                            justifyContent={'center'}
                                            alignItems={'center'}
                                        >
                                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-4">
                                                {turnovers}
                                            </h1>
                                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
                                                Turn Overs
                                            </h4>
                                            <Box sx={{ mt: 2 }} >
                                                <Button
                                                    className=''

                                                    variant={"outline"}
                                                    onClick={() => setTurnovers(turnovers - 1)}
                                                >
                                                    -
                                                </Button>
                                                <Button
                                                    className='ml-8 mb-4'
                                                    onClick={() => setTurnovers(turnovers + 1)}
                                                >
                                                    +
                                                </Button>
                                            </Box>
                                        </Box>

                                    </Grid>

                                </Grid>
                            </Card>
                        </Box>


                        <DrawerFooter>
                            <Button onClick={() => setOpen(!open)}>Close</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

            </Grid >
        </>
    )
}

export default Home