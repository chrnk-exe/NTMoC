import React, {useEffect, useState} from 'react';
import {Box, TextField, Typography} from '@mui/material';

export default function KaratsubaInput({updateArgs}) {
    const [A, setA] = useState(4980);
    const [B, setB] = useState(816);

    useEffect(() => {
        updateArgs([A, B])
    }, [A, B]);

    const inputHandler = (e, setFunction) => {
        let {value} = e.target;
        value = (+value).toString().slice(0, 5);
        setFunction(+value);
    };

    return (
        <Box>
            <TextField
                type={'number'}
                variant={'standard'}
                value={A === 0 ? '' : A}
                onChange={(e) => inputHandler(e, setA)}
                error={A === 0}
                InputProps={{
                    inputProps: {max: 99999, style: {textAlign: 'center', fontSize: '1.5em'}}
                }}
                sx={{

                    width: (A.toString().length * 15 + 15).toString() + 'px',
                }}
            />
            <Typography fontSize={'1.5em'} sx={{mx: 1}}>
                {'×'}
            </Typography>
            <TextField
                type={'number'}
                variant={'standard'}
                value={B === 0 ? '' : B}
                onChange={(e) => inputHandler(e, setB)}
                error={B === 0}
                InputProps={{
                    inputProps: {max: 99999, style: {textAlign: 'center', fontSize: '1.5em'}}
                }}
                sx={{

                    width: (B.toString().length * 15 + 15).toString() + 'px',
                }}
            />
        </Box>
    )
}