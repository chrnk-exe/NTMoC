import { Box } from '@mui/material'
import React from 'react'
import OutlinedFormula from '../../theory/common/OutlinedFormula'
import SimpleTextFormula from '../../theory/common/SimpleTextFormula'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const LEulerExample = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'}
    sx={{width: 1}} fontSize={17} gap={0.5}>
        
        <OutlinedFormula
          description={'Кратко формула L-функции Эйлера выглядит так'}
          formula={'L(m) = M(\\varphi(p_i^{a_i}), i \\in \\overline{1, n}))'}
          aftertext={'где $m$ - число, $M$ - Наименьшее общее кратное, $\\varphi$ - Фи-функция Эйлера, а $p_i^{a_i}$ - разложение $m$ на простые множители. В случае, если m = 1, то значение L-функции равно 1'}
        />

    <SimpleTextFormula>Например вычислим значение $L$-функции Эйлера от $44$ </SimpleTextFormula>
    <SimpleTextFormula>$44$ раскладывается на простые множители как $44 = 2^2 \cdot 11$ </SimpleTextFormula>
    <SimpleTextFormula>{'$L(44) = M(\\varphi(2^2), \\varphi(11))$'}</SimpleTextFormula>
    <SimpleTextFormula>{'$\\varphi(2^2) = 2^2 - 2^{2-1} = 4 - 2 = 2$  (по формуле $\\varphi(p^n) = p^n - p^{n-1}$)'}</SimpleTextFormula>
    <SimpleTextFormula>{'$\\varphi(11) = 10$'}</SimpleTextFormula>
    <SimpleTextFormula>$L(44) = M(2, 10) = 10$</SimpleTextFormula>
    <Typography>
        НОК необходимо найти по <Link href='/lcm?args=2,10'>по формуле НОК</Link>
    </Typography>
        
    </Box>
  )
}

export default LEulerExample