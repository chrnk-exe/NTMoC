import React from 'react';
import {Stack} from '@mui/material';
import CentralizedMultiFormula from "../common/CentralizedMultiFormula";
import OutlinedFormula from "../common/OutlinedFormula";


export default function OrderTheory() {
    return (
        <Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>
            <OutlinedFormula
                description={'Показателем или мультипликативным порядком, целого числа $a$ по модулю $m$ называется ' +
                    'наименьшее положительное целое число $l$, такое, что'}
                formula={'a^l \\equiv 1 \\pmod{m}'}/>

            <OutlinedFormula
                description={'Определение'}
                formula={'P^{\\times}_m(a) = min\\{n \\in \\N |\\ a^n \\equiv 1\\pmod{m}\\}'}/>

            <OutlinedFormula
                description={'Независим от представителя класса вычетов'}
                formula={'a \\equiv b \\pmod{m} \\implies P^{\\times}_m(a) = P^{\\times}_m(b)'}/>

            <OutlinedFormula
                description={'Мультипликативен'}
                formula={'c = P^{\\times}_m(a), d=P^{\\times}_m(b), c \\bot d \\implies P^{\\times}_m(ab)=cd'}/>

            <OutlinedFormula
                description={'Кратные порядка'}
                formula={'a^k \\equiv 1 \\pmod{m} \\implies P^{\\times}_m(a) | k'}/>

            <CentralizedMultiFormula
                header={'Правило вычисления порядка от известной величины, где $D(b, P^{\\times}_m(a))$ - НОД показателя $a$ и $b$'}
                formulas={[
                    'P^{\\times}_m(a^b) = \\frac{P^{\\times}_m(a)}{D(b, P^{\\times}_m(a))}'
                ]}/>

            <CentralizedMultiFormula
                header={'Для упрощения восприятия показатель числа $а$ заменяют переменной $c$'}
                formulas={[
                    'P^{\\times}_m(a^b) = \\frac{c}{D(b, c)},\\ c = P^{\\times}_m(a))'
                ]}/>

        </Stack>
    )
}
