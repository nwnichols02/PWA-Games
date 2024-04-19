import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'


const MessageInput = ({
    send,
}: {
    send: (value: string) => void
}) => {

    const [value, setValue] = useState('');

    return (
        <>
            {/* <form> */}
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                placeholder='Type your message'
                value={value}
                onChange={(e: any) => setValue(e.target.value)}
            />
            <Button
                type="button"
                onClick={() => { send(value) }}
            >
                Send
            </Button>
            {/* </form> */}
        </>
    )
}

export default MessageInput