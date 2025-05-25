import React from 'react';
import { Box, Stack } from '@mui/material';
import OutlinedFormula from '../../theory/common/OutlinedFormula';
import SimpleTextFormula from '../../theory/common/SimpleTextFormula';
import CentralizedMultiFormula from '../../theory/common/CentralizedMultiFormula';

const FastPowExample = () => {
  return (
    <Stack fontSize={18} alignSelf={'flex-start'} spacing={2}>
      <CentralizedMultiFormula
        header={'Пример вычисления $3^5 \\mod 7$'}
        formulas={[
          'a_0=5, b_0=3, c_0=1',
          '\\begin{aligned} a_1= Q_2(5) = 2, &\\ b_1=3^2\\mod7=2, &\\ c_1=1\\cdot3^{1}\\mod7=3 \\\\ a_2=Q_2(2) = 1, &\\ b_2=2^2\\mod7=4, &\\ c_2=3\\cdot2^{0}\\mod7=3 \\\\ a_3=Q_2(1) = 0, &\\ \\text{Результат: } R_7(4\\cdot3) = 5 \\end{aligned}',
        ]}
      />

      <OutlinedFormula
        description={'Итоговый результат'}
        formula={'R_m(b^a) = R_m(b_{\\text{final}} \\cdot c_{\\text{final}})'}
        aftertext={
          'Где $b_{\\text{final}}$ и $c_{\\text{final}}$ — значения после завершения цикла.'
        }
      />
    </Stack>
  );
};

export default FastPowExample;
