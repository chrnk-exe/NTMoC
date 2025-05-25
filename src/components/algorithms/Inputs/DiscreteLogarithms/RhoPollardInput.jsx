import React, { useEffect, useState } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { CustomTextField } from '../common/CustomTextField';

export default function RhoPollardInput({ updateArgs }) {
    const [FreeVar, setFreeVar] = useState(64);
    const [degreeBasis, setDegreeBases] = useState(10);
    const [Module, setModule] = useState(107);
    const [u, setU] = useState(2);
    const [v, setV] = useState(2);

    useEffect(() => {
        updateArgs([FreeVar, Module, degreeBasis, u, v]);
    }, [FreeVar, Module, degreeBasis, u, v]);

    return (
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <Box position={'relative'}>
                <Typography
                    color={'gray'}
                    sx={{
                        fontSize: '1em',
                        position: 'absolute',
                        right: -10,
                        top: -25,
                    }}>
                    {'𝑥'}
                </Typography>
                <CustomTextField
                    value={degreeBasis}
                    setValue={setDegreeBases}
                />
            </Box>
            <Typography fontSize={'1em'} color={'gray'} px={0.3}>
                {'≡'}
            </Typography>
            <Box position={'relative'}>
                <CustomTextField value={FreeVar} setValue={setFreeVar} />
            </Box>
            <Typography fontSize={'1em'} color={'gray'} pl={0.7}>
                {'('}
            </Typography>
            <Typography
                fontSize={'0.95em'}
                fontStyle={'italic'}
                pl={0.2}
                pr={0.4}
                color={'gray'}>
                {'mod '}
            </Typography>
            <CustomTextField value={Module} setValue={setModule} />
            <Typography fontSize={'1em'} color={'gray'} pl={0.2}>
                {'),'}
            </Typography>
            <Typography
                fontSize={'0.95em'}
                fontStyle={'italic'}
                pl={0.2}
                pr={0.4}
                color={'gray'}>
                {'u = '}
            </Typography>
            <CustomTextField value={u} setValue={setU} allowZero />
            <Typography
                fontSize={'0.95em'}
                fontStyle={'italic'}
                pl={0.2}
                pr={0.4}
                color={'gray'}>
                {'v = '}
            </Typography>
            <CustomTextField value={v} setValue={setV} allowZero />
        </Stack>
    );
}
