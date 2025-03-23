import { Box } from '@mui/material'
import React from 'react'
import OutlinedFormula from '../../theory/common/OutlinedFormula'
import SimpleTextFormula from '../../theory/common/SimpleTextFormula'


export default function ExtGcdExample() {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
            sx={{ width: 1 }}
            fontSize={17}
            gap={1}
        >

            <SimpleTextFormula>
                {'Решим уравнение $D(12, 16) = 12 \\cdot x + 16 \\cdot y$ с помощью расширенного алгоритма Евклида'}
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Шаг 1. Входные параметры'}
                formula={
                    'r_0 = 12,\\quad s_0 = 1,\\quad t_0 = 0\\\\\n' +
                    'r_1 = 16,\\quad s_1 = 0,\\quad t_1 = 1'
                }
            />

            <OutlinedFormula
                description={'Шаг 2. Вычислим'}
                formula={
                    'q_2 = Q_{16}(12) = 0\\\\\n' +
                    'r_2 = r_0 - q_2 \\cdot r_1 = 12 - 0 \\cdot 16 = 12\\\\\n' +
                    's_2 = s_0 - q_2 \\cdot s_1 = 1 - 0 \\cdot 0 = 1\\\\\n' +
                    't_2 = t_0 - q_2 \\cdot t_1 = 0 - 0 \\cdot 1 = 0'
                }
            />

            <OutlinedFormula
                description={'Шаг 3. Вычислим'}
                formula={
                    'q_3 = Q_{12}(16) = 1\\\\\n' +
                    'r_3 = r_1 - q_3 \\cdot r_2 = 16 - 1 \\cdot 12 = 4\\\\\n' +
                    's_3 = s_1 - q_3 \\cdot s_2 = 0 - 1 \\cdot 1 = -1\\\\\n' +
                    't_3 = t_1 - q_3 \\cdot t_2 = 1 - 1 \\cdot 0 = 1'
                }
            />

            <OutlinedFormula
                description={'Шаг 4. Вычислим'}
                formula={
                    'q_4 = Q_{4}(12) = 3\\\\\n' +
                    'r_4 = r_2 - q_4 \\cdot r_3 = 12 - 3 \\cdot 4 = 0\\\\\n' +
                    's_4 = s_2 - q_4 \\cdot s_3 = 1 - 3 \\cdot (-1) = 4\\\\\n' +
                    't_4 = t_2 - q_4 \\cdot t_3 = 0 - 3 \\cdot 1 = -3'
                }
            />

            <OutlinedFormula
                description={'Ответ'}
                formula={'D(12, 16) = r_3 = 4 = 12 \\cdot (-1) + 16 \\cdot 1'}
            />

            <SimpleTextFormula>
                {'Полученное разложение: $\\boxed{4 = 12 \\cdot (-1) + 16 \\cdot 1}$'}
            </SimpleTextFormula>

        </Box>
    )
}
