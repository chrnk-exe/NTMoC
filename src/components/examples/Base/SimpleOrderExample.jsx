import { Box } from '@mui/material'
import React from 'react'
import OutlinedFormula from '../../theory/common/OutlinedFormula'
import SimpleTextFormula from '../../theory/common/SimpleTextFormula'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const SimpleOrderExample = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'}
    sx={{width: 1}} fontSize={17} gap={0.5}>
        
        <SimpleTextFormula>Для вычисления порядка числа a по модулю m можно возводить это число во все числа от 1 до m. На каком значение будет равно 1 - это и будет являться показателем числа, причём показателем считается наименьшая степень</SimpleTextFormula>
        <SimpleTextFormula>Например, найдём показатель числа 7 по модулю 11</SimpleTextFormula>
        <SimpleTextFormula>$ 7 ^ 1 = 7 \mod 11$</SimpleTextFormula>
        <SimpleTextFormula>$ 7 ^ 2 = 5 \mod 11$</SimpleTextFormula>
        <SimpleTextFormula>$ 7 ^ 3 = 2 \mod 11$</SimpleTextFormula>
        <SimpleTextFormula>$ 7 ^ 4 = 3 \mod 11$</SimpleTextFormula>
        <SimpleTextFormula>$ 7 ^ 5 = 10 \mod 11$</SimpleTextFormula>
        <SimpleTextFormula>$ 7 ^ 6 = 4 \mod 11$</SimpleTextFormula>
        <SimpleTextFormula>$ 7 ^ 7 = 6 \mod 11$</SimpleTextFormula>
        <SimpleTextFormula>$ 7 ^ 8 = 9 \mod 11$</SimpleTextFormula>
        <SimpleTextFormula>$ 7 ^ 9 = 8 \mod 11$</SimpleTextFormula>
        <SimpleTextFormula>$ 7 ^ 10 = 1 \mod 11$</SimpleTextFormula>
        <SimpleTextFormula>Таким образом показателем числа 7 по модулю 11 - 10, то есть {'$P^{\\times}_{11}(7) = 10$'}</SimpleTextFormula>
        
        {/* Возможно тут понадобится фикс */}
        <Typography>
            Возводить число в степень по модулю можно с помощью <Link href='/fast_pow?args=10,7,11'>алгоритма быстрого возведения в степень</Link>
        </Typography>
    </Box>
  )
}

export default SimpleOrderExample