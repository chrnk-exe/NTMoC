import React from 'react';
import {Box, Stack} from '@mui/material';
import Latex from "react-latex";


export default function LCMTheory() {
    return (
        <Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>
            <Box display={"inline-block"} alignItems={"center"}>
                <Latex>{'НОК - Наименьшее общее кратное - это наименьшее число, которое делится без остатка на каждое из двух или более заданных чисел..'}</Latex>
            </Box>

            <Box lineHeight={2}>
                <Latex>{'Множество натуральных чисел, кратных числу $a$:'}</Latex>
                <Box display={"inline"} mx={1.5} px={1} py={0.5} border={'1px gray solid'} width={"min-content"} my={22}>
                    <Latex>{'$a\\mathbb{N} = \\{ab|b\\in\\mathbb{N}\\}$'}</Latex>
                </Box>
            </Box>

            <Box lineHeight={2}>
                <Latex>{'Множество общих кратных задаётся как'}</Latex>
                <Box display={"inline"} mx={1.5} px={1} py={0.5} border={'1px gray solid'}>
                    <Latex>{'$M_{a,b} = a\\mathbb{N} \\cap b\\mathbb{N}$'}</Latex>
                </Box>
            </Box>

            <Box lineHeight={2}>
                <Latex>{'Наименьшее общее кратное из этих двух определений:'}</Latex>
                <Box display={"inline"} mx={1.5} px={1} py={0.5} border={'1px gray solid'}>
                    <Latex>{'$M(a,b) = m \\in M_{a,b} \\iff \\forall x \\in M_{a,b}\\ m|x$'}</Latex>
                </Box>
                <Latex>{'$m$ - минимальное число, принадлежащее множеству натуральных множителей чисел $а$ и $b$ такое, что любое число из этого множества делится на $m$ (”$m|x$” - $m$ делит $x$)'}</Latex>
            </Box>

            <Box lineHeight={2}>
                <Latex>{'НОК однороден:'}</Latex>
                <Box display={"inline"} mx={1.5} px={1} py={0.5} border={'1px gray solid'}>
                    <Latex>{'$M(ca,cb)=c \\cdot M(a,b)$'}</Latex>
                </Box>
            </Box>

            <Box lineHeight={2}>
                <Latex>{'Связь НОД и НОК:'}</Latex>
                <Box display={"inline"} mx={1.5} px={1} py={0.5} border={'1px gray solid'}>
                    <Latex>{'$M(a,b) \\cdot D(a,b) = a \\cdot b$'}</Latex>
                </Box>
            </Box>

            <Box lineHeight={2}>
                <Latex>{'Таким образом НОК находится как:'}</Latex>
                <Box display={"inline"} mx={1.5} px={1} py={0.5} border={'1px gray solid'}>
                    <Latex>{'$M(a,b) = \\frac{ab}{D(a,b)}$'}</Latex>
                </Box>
            </Box>

            <Box lineHeight={2}>
                <Latex>{'Для нахождения НОК или НОД множества чисел необходимо воспользоваться ассоциативностью НОК или НОД:'}</Latex>
                <Box display={"inline"} mx={1.5} px={1} py={0.5} border={'1px gray solid'}>
                    <Latex>{'$D(a_1,a_2,...,a_{n-1}) = D(D(a_1,a_2,...,a_{n-1}),a_n)$'}</Latex>
                </Box>
                <Box display={"inline"} mx={1.5} px={1} py={0.5} border={'1px gray solid'}>
                    <Latex>{'$M(a_1,a_2,...,a_{n-1}) = M(M(a_1,a_2,...,a_{n-1}),a_n)$'}</Latex>
                </Box>
            </Box>

        </Stack>
    )
}
