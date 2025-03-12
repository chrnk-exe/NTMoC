import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import Latex from "react-latex";
import OutlinedFormula from "../common/OutlinedFormula";
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';
import Link from '@mui/material/Link'
import SimpleOrderExample from '../../examples/Base/SimpleOrderExample';
import SimpleTextFormula from '../common/SimpleTextFormula';


export default function OrderNumberTheory() {
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

            <SimpleTextFormula>
                Для поиска поиска числа, отвечающего заданному показателю используется вероятностный алгортим типа Лас-Вегас,
                то есть результат гарантированно верен, но количество раундов, то есть количество выборов случайных $x$ и последющих вычислений по алгортиму 
                проверки $C(x)$ - случайно.
            </SimpleTextFormula>

            <SimpleTextFormula>{'Задача - найти число, отвечающее порядку $q = \\prod^n_{i=1}p_i^{d_i}$'} (разложение на простые) по модулю $m$, причём $q | L(m)$ (условие разрешимости)</SimpleTextFormula>

            <SimpleTextFormula>{'Следующий шаг - вычисляем $b \\equiv a^{\\frac{L(m)}{q}} \\neq 1 \\mod m $ (если $b \\equiv 1 \\mod m $, то это $a$ не подходит), где $a$ выбирается либо случайно, либо перебором'}</SimpleTextFormula>

            <SimpleTextFormula>{'Следующий шаг - вычисляем $c_i \\equiv b^{\\frac{q}{p_i} \\neq 1 \\mod m}$ для всех $p_i \\in d_{\\mathbb{P}_\\mathbb{N}}(q)$, где $d_{\\mathbb{P}_\\mathbb{N}}(q)$ - собственные (отличные от 1 и q) простые делители q. Если для всех $p_i$ это выполняется (то есть $c_i \\neq 1 \\mod m$), то $q$ - показатель числа $b$, то есть $P^{\\times}_m(b) = q$, и мы нашли число, отвечающее порядку $q$! '}</SimpleTextFormula>       
        
        </Stack>
    )
}
