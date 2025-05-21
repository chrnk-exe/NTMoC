import React, { useEffect, useState } from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import { CustomTextField } from '../common/CustomTextField';
import SimpleTextFormula from '../../../theory/common/SimpleTextFormula';

const RhoPollardFloydInput = ({ updateArgs }) => {
    const [module, setModule] = useState(2474);
    const [freeVar, setFreeVar] = useState(3);
    const [x0, setX0] = useState(5);
    const [y0, setY0] = useState(5);

    useEffect(() => {
        updateArgs([freeVar, module, x0, y0]);
    }, [freeVar, module, x0, y0]);

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

            <Stack direction="row" spacing={2} alignItems="center">
                <SimpleTextFormula>$y_0 = $</SimpleTextFormula>
                <CustomTextField value={y0} setValue={setY0} />
            </Stack>
        </Stack>
    );
};

export default RhoPollardFloydInput;
