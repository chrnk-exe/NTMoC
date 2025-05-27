import React from 'react';
import { Stack } from '@mui/material';
import SimpleTextFormula from '../common/SimpleTextFormula';
import OutlinedFormula from '../common/OutlinedFormula';
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';

const RhoPollardFactTheory = () => {
    return (
        <Stack fontSize={18} spacing={2}>
            <SimpleTextFormula>
                Ро-метод Полларда - это вероятностный алгоритм факторизации,
                основанный на парадоксе дней рождения и поиске циклов в
                последовательности.
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Используется полиномиальная функция'}
                formula={'f(x) = x^2 + c \\pmod{m}'}
                aftertext={'где $c$ - константа, обычно равная 1'}
            />

            <OutlinedFormula
                description={
                    'Классический алгоритм следует следующим реккурентным соотношениям'
                }
                formula={`
                    \\begin{cases}
                    x_{i+1} = f(x_i) \\\\
                    d_{i,j} = D(m, x_{i+1} - x_j), j \\in \\overline{1, i}
                    \\end{cases}`}
                aftertext={'где $y_1 = x_1$'}
            />

            <OutlinedFormula
                description={'Алгоритм находит нетривиальный делитель, когда'}
                formula={'1 < d_{i,j} < m'}
            />

            <SimpleTextFormula>
                Завершение алгоритма произойдет в случае, если одновременно{' '}
                {'$x_{i+1} \\equiv x_j \\mod p$'}
                при некоторых 𝑖 и 𝑗, и {'$x_{i+1} \\neq x_j \\mod q$'} для всех
                нетривиальных делителей 𝑞|𝑚, отличных от 𝑝|𝑚.
            </SimpleTextFormula>

            <OutlinedFormula
                description={
                    'Количество шагов, при котором вероятность успеха не менее $\\frac{1}{2} равно$'
                }
                formula={'O(\\sqrt{p})'}
                aftertext={
                    'поскольку наибольший делитель $m$ не превосходит $[\\sqrt{m}]+1$ и отображение $f$ является одновремнно отображением, заданным на всех $\\mathbb{Z}_s, s \\in d(m)$'
                }
            />

            <SimpleTextFormula>
                Алгоритм особенно эффективен для чисел, у которых есть
                относительно небольшие простые делители.
            </SimpleTextFormula>
        </Stack>
    );
};

export default RhoPollardFactTheory;
