import { Box } from '@mui/material'
import React from 'react'
import OutlinedFormula from '../../theory/common/OutlinedFormula'
import SimpleTextFormula from '../../theory/common/SimpleTextFormula'


export default function BinGcdExample() {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
            sx={{ width: 1 }}
            fontSize={17}
            gap={0.5}
        >

            <SimpleTextFormula>
                Найдём $D(12, 16)$ с помощью бинарного алгоритма Евклида
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Шаг 1. Оба числа чётные'}
                formula={'D(12, 16) = 2 \\cdot D(6, 8)'}
            />

            <OutlinedFormula
                description={'Шаг 2. Оба снова чётные'}
                formula={'D(6, 8) = 2 \\cdot D(3, 4)'}
            />

            <OutlinedFormula
                description={'Шаг 3. 3 нечётное, 4 чётное'}
                formula={'D(3, 4) = D(3, 2)'}
            />

            <OutlinedFormula
                description={'Шаг 4. 3 нечётное, 2 чётное'}
                formula={'D(3, 2) = D(3, 1)'}
            />

            <OutlinedFormula
                description={'Шаг 5. Оба нечётные'}
                formula={'D(3, 1) = D((3 - 1)/2, 1) = D(1, 1)'}
            />

            <OutlinedFormula
                description={'Шаг 6. Завершение'}
                formula={'D(1, 1) = 1'}
            />

            <OutlinedFormula
                description={'Шаг 7. Восстановление степени двойки'}
                formula={'D(12, 16) = 2^2 \\cdot 1 = 4'}
            />

            <SimpleTextFormula>
                {'Ответ: $\\boxed{D(12, 16) = 4}$'}
            </SimpleTextFormula>

        </Box>
    )
}
