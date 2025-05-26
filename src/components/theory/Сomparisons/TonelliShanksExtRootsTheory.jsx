import React from 'react';
import { Stack } from '@mui/material';
import SimpleTextFormula from '../common/SimpleTextFormula';
import OutlinedFormula from '../common/OutlinedFormula';
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';

const TonelliShanksExtRootsTheory = () => {
    return (
        <Stack fontSize={18} spacing={2} alignSelf="flex-start">
            <SimpleTextFormula>
                Пусть $x_0$ - корень степенного двучленного сравнения по
                простому модулю $p$. Тогда можно найти остальные корни сравнения
                по лемме о связи корней СДС:
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Основная формула'}
                formula={`x_0^n = a \\mod p \\implies 
                    \\begin{cases}
                    x_i^n = a \\mod p \\\\
                    x_i = x_0 \\cdot \\delta^i \\mod p \\\\
                    i \\in \\overline{0, n-1}
                    \\end{cases}`}
                aftertext={`где $P^{\\times}_p(\\delta) = n$ - любое число, имеющее порядок $n$ по модулю $p$`}
            />
        </Stack>
    );
};

export default TonelliShanksExtRootsTheory;
