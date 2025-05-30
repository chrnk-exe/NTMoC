import React from 'react';
import { Box } from '@mui/material';
import Latex from 'react-latex';
import Button from '@mui/material/Button';

// header - string, formulas - array<string>
// Тут header, состоящий из текста и возможно переменных и formulas - массив latex формул,
// возможно доказательство или вывод чего-либо
export default function CentralizedMultiFormula({
    header,
    formulas,
    aftertext,
    alignItems = 'center',
}) {
    return (
        <Box>
            <Latex>{`${header}`}</Latex>
            <Box
                pt={3}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                gap={1}
                alignItems={alignItems}>
                {formulas.map((formula, index) => (
                    <Button
                        key={index}
                        sx={{
                            bgcolor: '#e1f3e5',
                            textTransform: 'unset',
                            borderRadius: 2,
                            py: 1,
                            mx: 1.5,
                            px: 1.3,
                            color: 'unset',
                            fontSize: 'unset',
                            '& .MuiTouchRipple-child': {
                                backgroundColor: 'primary.main',
                            },
                        }}>
                        <Latex>{`$${formula}$`}</Latex>
                    </Button>
                ))}
            </Box>
            {aftertext && <Latex>{`, ${aftertext}.`}</Latex>}
        </Box>
    );
}
