import React from 'react';
import { Stack } from '@mui/material';
import SimpleTextFormula from '../common/SimpleTextFormula';
import OutlinedFormula from '../common/OutlinedFormula';
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';

const FermatFactorEtuTheory = () => {
    return (
        <Stack fontSize={18} spacing={2} alignSelf="flex-start">
            <SimpleTextFormula>
                Пусть нечетное число $𝑧$ требуется разложить на множители.
            </SimpleTextFormula>
            <SimpleTextFormula>
                Пусть {'$f(x, y, z) = x^2 - y^2 - z$'}, тогда при
                {'$f(x, y, z) = 0$'} имеем {'$𝑧 = x^2 − 𝑦^2$'}.
            </SimpleTextFormula>
            <CentralizedMultiFormula
                header={'Алгоритм использует свойства'}
                formulas={[
                    '$f(x + 1, y, z) = f(x, y, z) + 2x + 1$',
                    '$f(x, y + 1, z) = f(x, y, z) - 2y - 1$',
                ]}
                alignItems={'flex-start'}
            />
            <SimpleTextFormula>
                Если {'$f(x,y,z) > 0$'} то {'$y \\leftarrow y+1$'}, а если{' '}
                {'$f(x,y,z) < 0$'}, то {'$x \\leftarrow x+1$'}.
            </SimpleTextFormula>
            <SimpleTextFormula>
                Начальные значения: {'$x = \\lceil \\sqrt{z} \\rceil$'}
                {'$y = 1$'}. Алгоритм завершается, когда {'$f(x,y,z) = 0$'}.
            </SimpleTextFormula>
        </Stack>
    );
};

export default FermatFactorEtuTheory;
