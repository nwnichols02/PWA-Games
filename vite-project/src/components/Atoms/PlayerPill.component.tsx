import React from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'
import { Box } from '@mui/material'
import { Avatar, AvatarFallback } from '../ui/avatar'

interface PlayerPillProps {
    name: string;
    avatarSRC?: string;
    avatarFallback?: string;
}

const PlayerPill = (props: PlayerPillProps) => {
    const { name, avatarSRC, avatarFallback } = props

    return (
        <Card className="mt-4 w-[250px] h-[100px]"
            onClick={() => console.log('clicked')}
        >
            <CardHeader>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >
                    <Avatar
                        className="w-12 h-12 mr-4"
                        src={avatarSRC}
                        alt={name}
                    ><AvatarFallback>{name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}</AvatarFallback></Avatar>
                    <CardTitle>{name}</CardTitle>
                </Box>
            </CardHeader>
        </Card>
    )
}

export default PlayerPill