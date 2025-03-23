import { Box } from '@mui/material'
import React from 'react'
import OutlinedFormula from '../../theory/common/OutlinedFormula'
import SimpleTextFormula from '../../theory/common/SimpleTextFormula'


export default function GcdExample() {
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
                Найдём $D(12, 16)$ с помощью классического алгоритма Евклида
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Шаг 1. $16 > 12$'}
                formula={'D(12, 16) = D(12, 16 - 12) = D(12, 4)'}
            />

            <OutlinedFormula
                description={'Шаг 2. $12 > 4$'}
                formula={'D(12, 4) = D(12 - 4, 4) = D(8, 4)'}
            />

            <OutlinedFormula
                description={'Шаг 3. $8 > 4$'}
                formula={'D(8, 4) = D(8 - 4, 4) = D(4, 4)'}
            />

            <OutlinedFormula
                description={'Шаг 4. Числа равны'}
                formula={'D(4, 4) = 4'}
            />

            <SimpleTextFormula>
                {'Ответ: $\\boxed{D(12, 16) = 4}$'}
            </SimpleTextFormula>

        </Box>
    )
}
