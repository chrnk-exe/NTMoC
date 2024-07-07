import React from 'react';
import {Stack} from '@mui/material';
import CentralizedMultiFormula from "../components/CentralizedMultiFormula";
import OutlinedFormula from "../components/OutlinedFormula";
import SimpleTextFormula from "../components/SimpleTextFormula";


export default function LCMTheory() {
    return (
        <Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>
            <SimpleTextFormula>НОК - Наименьшее общее кратное - это наименьшее число, которое делится без остатка на каждое из двух или более заданных чисел.</SimpleTextFormula>

            <OutlinedFormula
                description={'Множество натуральных чисел, кратных числу $a$'}
                formula={'a\\mathbb{N} = \\{ab|b\\in\\mathbb{N}\\}'}/>

            <OutlinedFormula
                description={'Множество общих кратных задаётся как'}
                formula={'M_{a,b} = a\\mathbb{N} \\cap b\\mathbb{N}'}/>

            <OutlinedFormula
                description={'Наименьшее общее кратное из этих двух определений'}
                formula={'M(a,b) = m \\in M_{a,b} \\iff \\forall x \\in M_{a,b}\\ m|x'}
                aftertext={'$m$ - минимальное число, принадлежащее множеству натуральных множителей чисел $а$ и $b$ такое, что любое число из этого множества делится на $m$ (”$m|x$” - $m$ делит $x$)'}/>


            <OutlinedFormula
                description={'НОК однороден'}
                formula={'M(ca,cb)=c \\cdot M(a,b)'}/>


            <OutlinedFormula
                description={'Связь НОД и НОК'}
                formula={'M(a,b) \\cdot D(a,b) = a \\cdot b'}/>

            <OutlinedFormula
                description={'Таким образом НОК находится как'}
                formula={'M(a,b) = \\frac{ab}{D(a,b)}'}/>

            <CentralizedMultiFormula
                header={'Для нахождения НОК или НОД множества чисел необходимо воспользоваться ассоциативностью НОК или НОД'}
                formulas={[
                    'D(a_1,a_2,...,a_{n-1}) = D(D(a_1,a_2,...,a_{n-1}),a_n)',
                    'M(a_1,a_2,...,a_{n-1}) = M(M(a_1,a_2,...,a_{n-1}),a_n)'
                ]}
            />

        </Stack>
    )
}
