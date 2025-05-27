import React, { useEffect, useState } from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import { CustomTextField } from '../common/CustomTextField';
import SimpleTextFormula from '../../../theory/common/SimpleTextFormula';

const RhoPollardFactInput = ({ updateArgs }) => {
    const [module, setModule] = useState(8051);
    const [freeVar, setFreeVar] = useState(1);
    const [x0, setX0] = useState(2);

    useEffect(() => {
        updateArgs([freeVar, module, x0]);
    }, [freeVar, module, x0]);

    return (
        <Stack spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center">
                <SimpleTextFormula>$m = $</SimpleTextFormula>
                <CustomTextField value={module} setValue={setModule} />
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
                <SimpleTextFormula>$f(x) = x² \ +$</SimpleTextFormula>
                <CustomTextField value={freeVar} setValue={setFreeVar} />
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
                <SimpleTextFormula>$x_0 = $</SimpleTextFormula>
                <CustomTextField value={x0} setValue={setX0} />
            </Stack>
        </Stack>
    );
};

export default RhoPollardFactInput;
