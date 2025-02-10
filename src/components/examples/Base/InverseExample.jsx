import { Box } from '@mui/material'
import React from 'react'
import OutlinedFormula from '../../theory/common/OutlinedFormula'

const InverseExample = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'}
    sx={{width: 1}} fontSize={17} gap={0.5}>
        
        <OutlinedFormula
          description={'Например обратным для 3 по модулю 7 будет число 5, так как'}
          formula={'3 \\cdot 5 \\equiv 1 \\pmod 7 (3 \\cdot 5 = 15; 15 \\pmod 7 \\equiv 1)'}
        />

        
    </Box>
  )
}

export default InverseExample