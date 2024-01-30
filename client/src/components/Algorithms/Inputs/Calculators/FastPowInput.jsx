import React, {useEffect, useState} from 'react';
import {Box, TextField, Button} from '@mui/material';

export default function FastPowInput({updateArgs}) {
    const [A, setA] = useState(4980);
    const [B, setB] = useState(816);
    const [m, setM] = useState(816);

    useEffect(() => {
        updateArgs([A, B, m])
    }, [A, B, m]);

    return (
        <Box>
            <TextField
                sx={{bgcolor: '#FFFFF1'}}
                type="number"
                label="A"
                value={A}
                onChange={e => setA(+e.target.value)}
            />
            <TextField
                sx={{bgcolor: '#FFFFF1'}}
                label="B"
                type="number"
                value={B}
                onChange={e => setB(+e.target.value)}
            />
            <TextField
                sx={{bgcolor: '#FFFFF1'}}
                label="m"
                type="number"
                value={m}
                onChange={e => setM(+e.target.value)}
            />
        </Box>
    );
}
