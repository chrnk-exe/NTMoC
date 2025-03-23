import {Box, Link, Stack} from '@mui/material'
import React from 'react'
import OutlinedFormula from '../../theory/common/OutlinedFormula'
import SimpleTextFormula from '../../theory/common/SimpleTextFormula'
import Typography from "@mui/material/Typography";


export default function ExtBinGcdExample() {
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
                {'Решим $D(12, 16)$ с помощью расширенного бинарного алгоритма Евклида'}
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Шаг 1. Инициализация'}
                formula={
                    'a_0 = 12 = a \\cdot 1 + b \\cdot 0\\\\\n' +
                    'b_0 = 16 = a \\cdot 0 + b \\cdot 1'
                }
            />

            <SimpleTextFormula>
                {'Удалим общую степень двойки: $g = 2^2 = 4$'}
            </SimpleTextFormula>

            <SimpleTextFormula>
                {'Далее работаем с $a = 3$, $b = 4$'}
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Шаг 2. Делим $b = 4$ на 2'}
                formula={
                    'b_1 = 2,\\quad \\gamma_1 = 0,\\ \\delta_1 = 1\\\\\n' +
                    '\\text{чётное } \\Rightarrow \\gamma_1 = 0,\\ \\delta_1 = 1 \\Rightarrow \\text{делим\\ напрямую}'
                }
            />

            <OutlinedFormula
                description={'Шаг 3. Делим $b = 2$ на 2'}
                formula={
                    'b_2 = 1,\\quad \\gamma_2 = 0,\\ \\delta_2 = 1\\\\\n' +
                    '\\text{чётное } \\Rightarrow делим\\ напрямую'
                }
            />

            <OutlinedFormula
                description={'Шаг 4. $a = 3$, $b = 1$ (оба нечётные)'}
                formula={
                    'a \\gets (a - b)/2 = 1\\\\\n' +
                    '\\alpha = 1 - 0 = 1,\\quad \\beta = 0 - 1 = -1'
                }
            />

            <OutlinedFormula
                description={'Шаг 5. $a = b = 1$ — завершение'}
                formula={'D(3, 4) = 1'}
            />

            <OutlinedFormula
                description={'Шаг 6. Восстановим степень двойки'}
                formula={'D(12, 16) = 4 \\cdot 1 = 4'}
            />

            <OutlinedFormula
                description={'Полученное разложение'}
                formula={'4 = 12 \\cdot (-1) + 16 \\cdot 1'}
            />

            <SimpleTextFormula>
                {'Ответ: $\\boxed{4 = 12 \\cdot (-1) + 16 \\cdot 1}$'}
            </SimpleTextFormula>

        </Box>
    )
}
