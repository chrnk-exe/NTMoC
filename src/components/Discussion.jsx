import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Divider, Stack, TextField} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useBaseSolveMutation, useGetMessages, useSendMessage} from "../store/services/api";
import {json} from "react-router";
import Copyright from "./Copyright";

export default function Discussion() {
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const [nameError, setNameError] = useState(false);
    const [textError, setTextError] = useState(false);

    const [messages, setMessages] = useState([]);

    const updateMessagesList = () => {
        fetch('api/discussion/list/').then(data => data.json()).then(json => setMessages(json));
    }

    const sendMessage = async () => {
        if (!name || !text) {
            if (!name) {
                setNameError(true);
            }
            if (!text) {
                setTextError(true);
            }
        } else {
            await fetch("api/discussion/create/", {
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                method: 'POST', body: JSON.stringify({name, text})
            })
            updateMessagesList();
        }
    }

    useEffect(() => {
        updateMessagesList()
        const interval = setInterval(updateMessagesList, 5 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box m={3}>
            <Stack spacing={3}>
                <Stack spacing={2} direction={"row"}>
                    <Stack spacing={3} width={350}>
                        <TextField
                            error={nameError}
                            sx={{height: 40}}
                            label="Имя" variant="outlined" value={name}
                            onChange={e => {
                                setNameError(false);
                                setName(e.target.value);
                            }}
                            InputProps={{style: {fontSize: 16}}}
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                        <Button
                            variant={"outlined"} sx={{height: 1}} disabled={nameError || textError}
                            onClick={sendMessage}
                        >
                            Отправить
                        </Button>
                    </Stack>
                    <TextField
                        error={textError}
                        value={text} size={"small"}
                        onChange={e => {
                            setTextError(false);
                            setText(e.target.value);
                        }}
                        // InputProps={{style: {fontSize: 15}}}
                        // InputLabelProps={{style: {fontSize: 16}}}
                        label="Сообщение" variant="outlined" multiline rows={4} fullWidth
                    />
                </Stack>
                <Divider sx={{m: 0, p: 0}}/>
                <Stack spacing={1} maxHeight={'calc(100vh - 325px)'} overflow={'auto'} pb={2} mt={0} >
                    {
                        messages?.map((message, index) =>
                            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                <Box color={'gray'} fontSize={14} pr={0.8}>
                                    {new Date(message.created_at).toLocaleString('ru')}
                                </Box>
                                <Box border={'1px solid green'} borderRadius={3} p={0.7}>
                                    {message.name}
                                </Box>
                                <Box>
                                    :
                                </Box>
                                <Box>
                                    {message.text}
                                </Box>
                            </Stack>
                        )
                    }
                </Stack>
            </Stack>
            <Copyright color={'gray'}/>
        </Box>
    )
}