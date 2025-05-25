import React from 'react';
import { Box, Stack } from '@mui/material';
import OutlinedFormula from '../common/OutlinedFormula';
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';
import SimpleTextFormula from '../common/SimpleTextFormula';

export default function FastPowTheory() {
  return (
    <Stack fontSize={18} alignSelf={'flex-start'} spacing={2}>
      <SimpleTextFormula>
        Алгоритм быстрого возведения в степень по модулю позволяет эффективно
        вычислять $R_m(b^a)$ за счёт двоичного разложения показателя степени.
      </SimpleTextFormula>

      <OutlinedFormula
        description={'Рекуррентные формулы алгоритма'}
        formula={`
            \\begin{cases} 
            a_{i+1} = Q_2(a_i), & a_0 = a \\\\
            b_{i+1} = R_m(b_i^2), & b_0 = b, \\\\
            c_{i+1} = R_m(c_i \\cdot b_i^{R_2(a_i)}), & c_0 = 1.
            \\end{cases}
        `}
        aftertext={'$R_2(a_i)$ — остаток от деления $a_i$ на 2 (бит чётности).'}
      />

      <SimpleTextFormula>Алгоритм завершается при $a_N = 1$</SimpleTextFormula>

      <OutlinedFormula
        description={'Сложность алгоритма'}
        formula={'O(\\log a) \\text{ операций умножения по модулю } m'}
      />

      <SimpleTextFormula>
        Алгоритм используется в криптографии для вычислений в конечных полях
        (например, RSA, ECC).
      </SimpleTextFormula>
    </Stack>
  );
}
