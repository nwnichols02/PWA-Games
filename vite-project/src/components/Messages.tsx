import React from 'react'

interface IProps {
    messages: any[];
}
const Messages = (props: IProps) => {
    const { messages } = props;
    console.log(messages);
    return (
        <>
            {messages.map((message, index) => <li key={index}>{message}</li>)}
        </>
    )
}

export default Messages