import React from 'react';
import {Box} from '@mui/material';
import Latex from "react-latex";

// header - string, formulas - array<string>
// Тут header, состоящий из текста и возможно переменных и formulas - массив latex формул,
// возможно доказательство или вывод чего-либо
export default function CentralizedMultiFormula({header, formulas}) {
    return (
        <Box>
            <Latex>{`${header}`}</Latex>
            <Box pt={2} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={1} alignItems={'center'}>
                {formulas.map((formula, index) => (
                    <Box key={index}>
                        <Latex>{`$${formula}$`}</Latex>
                    </Box>

                ))}
            </Box>
        </Box>
    )
}