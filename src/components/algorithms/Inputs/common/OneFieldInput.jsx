import React, {useEffect, useState} from 'react';
import {Box, TextField} from '@mui/material';
import {CustomTextField} from "./CustomTextField";


export default function OneFieldInput({updateArgs}) {
    const [A, setA] = useState(4980);

    useEffect(() => {
        updateArgs([A])
    }, [A]);

    return (
        <CustomTextField value={A} setValue={setA}/>
    );
}
