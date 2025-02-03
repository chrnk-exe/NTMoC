import React from 'react';
import {Box, Stack} from '@mui/material';
import Latex from "react-latex";
import OutlinedFormula from "../common/OutlinedFormula";
import CentralizedMultiFormula from "../common/CentralizedMultiFormula";


export default function AddDoubleTheory() {

    const alg_lines = [
        'a_{i+1}=Q_2(a_i)',
        'b_i\'=2b_i',
        'b_{i+1}=b_i\'-m \\cdot [b_i\' ≥ m]',
        'c_i\'=c_i + b_i \\cdot R_2(a_i)',
        'c_{i+1}=c_i\'-m \\cdot [c_i\' ≥ m]',
    ]
    return (
        <Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>
            <OutlinedFormula
                description={'Произведение чисел по модулю - решение задачи вида'}
                formula={'x=a \\cdot b\\ (mod\\ m)'}
            />
            <CentralizedMultiFormula
                header={'Для вычисления используются следующие реккурентные формулы'}
                formulas={[
                    `\\begin{cases} ${alg_lines.join(', \\\\')} \\\\ \\end{cases}\\,`,
                ]}
            />

            <Box pb={2} alignSelf={"center"}>
                <Latex>
                    {`где $[P]= \\left[ \\begin{array}{ccc} 1,\\ true\\ \\ \\\\0,\\ false \\end{array} \\right.
                    \\ P\\ -$ некоторый предикат, $\\ a_0=1,\\ b_0=b,\\ c_0=0$`}
                </Latex>
            </Box>
            <Box>
                <Latex>{'Ассоциативность позволяет существенно сократить количество применений операции $«∗»$ с $O(n)$ до $O(log\\ n)$.\n'}</Latex>
            </Box>
            <Box pt={1}>
                <Latex>
                    {`Для построения алгоритмов сложения и умножения в кольце остатков 
                    без использования деления с остатком используются следующие утверждения:`}
                </Latex>
            </Box>

            <CentralizedMultiFormula
                header={'Для вычисления используются следующие реккурентные формулы'}
                formulas={[
                    `\\begin{cases} Q_b(a+bc)=Q_b(a)+c,\\\\ R_b(a+bc)=R_b(a); \\end{cases}\\,`,
                    `R_c(a+b)=R_c(R_c(a)+R_c(b));`,
                    `R_c(a\\cdot b)=R_c(R_c(a)\\cdot R_c(b));`,
                    `R_c(b^a)=R_c((R_c(b))^a).`,
                ]}
            />
        </Stack>
    )
};