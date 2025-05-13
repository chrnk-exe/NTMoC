import React, { useEffect, useState } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { CustomTextField } from '../common/CustomTextField';

export default function RhoPollardInput({ updateArgs }) {
    const [FreeVar, setFreeVar] = useState(16);
    const [degreeBasis, setDegreeBases] = useState(4);
    const [Module, setModule] = useState(29);

    useEffect(() => {
        updateArgs([FreeVar, Module, degreeBasis]);
    }, [FreeVar, Module, degreeBasis]);

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
                <CustomTextField value={degreeBasis} setValue={setFreeVar} />
            </Box>
            <Typography fontSize={'1em'} color={'gray'} px={0.3}>
                {'≡'}
            </Typography>
            <Box position={'relative'}>
                <CustomTextField value={FreeVar} setValue={setDegreeBases} />
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
                {')'}
            </Typography>
        </Stack>
    );
}
