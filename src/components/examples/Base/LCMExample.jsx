import { Box } from '@mui/material'
import React from 'react'
import OutlinedFormula from '../../theory/common/OutlinedFormula'
import SimpleTextFormula from '../../theory/common/SimpleTextFormula'


const LCMExample = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'}
    sx={{width: 1}} fontSize={17} gap={0.5}>
        
        <OutlinedFormula
          description={'Для вычисления НОК необходимо воспользоваться следующей формулой, выведенной из связи НОК и НОД'}
          formula={'M(a,b) = \\frac{ab}{D(a,b)}'}
        />

        <OutlinedFormula
          description={'Стоит отметить, что в случае НОК от 3 и более аргументов можно воспользоваться свойствами ассоциативности'}
          formula={'M(a,b,c) = M(M(a,b),c) = M(a, M(b,c))'}
        />

        <SimpleTextFormula>Вычислим НОК для следующих чисел: $12, 18, 25$</SimpleTextFormula>
        <SimpleTextFormula>$M(12, 18, 25) = M(M(12,18), 25)$</SimpleTextFormula>
        <SimpleTextFormula>{'$M(12, 18) = \\frac{12 \\cdot 18}{D(12, 18)} = \\frac{12 \\cdot 18}{6} = 36$'}</SimpleTextFormula>
        <SimpleTextFormula>$M(12, 18, 25) = M(M(12,18), 25) = M(36, 25)$</SimpleTextFormula>
        <SimpleTextFormula>{'$M(36, 25) = \\frac{36 \\cdot 25}{D(36, 25)} = \\frac{36 \\cdot 25}{1} = 900$'}</SimpleTextFormula>
        <SimpleTextFormula>$M(12, 18, 25) = M(M(12,18), 25) = M(36, 25) = 900$</SimpleTextFormula>

        <SimpleTextFormula>Также можно пойти и другим путём</SimpleTextFormula>
        <SimpleTextFormula>$M(12, 18, 25) = M(12, M(18, 25))$</SimpleTextFormula>
        <SimpleTextFormula>{'$M(18, 25) = \\frac{18 \\cdot 25}{D(18, 25)} = \\frac{18 \\cdot 25}{1} = 450$'}</SimpleTextFormula>
        <SimpleTextFormula>$M(12, 18, 25) = M(12, M(18, 25)) = M(12, 450)$</SimpleTextFormula>
        <SimpleTextFormula>{'$M(12, 450) = \\frac{12 \\cdot 450}{D(12, 450)} = \\frac{12 \\cdot 450}{6} = 900$'}</SimpleTextFormula>
        <SimpleTextFormula>$M(12, 18, 25) = M(12, M(18, 25)) = M(12, 450) = 900$</SimpleTextFormula>

        <OutlinedFormula
          description={'Таким образом НОК 12, 18, 25 равен'}
          formula={'M(12,18,25) = M(36,25) = M(12, 450) = 900'}
        />

    </Box>
  )
}

export default LCMExample