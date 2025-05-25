import React from 'react';
import { Stack } from '@mui/material';
import SimpleTextFormula from '../common/SimpleTextFormula';
import OutlinedFormula from '../common/OutlinedFormula';
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';

const RhoPollardFloyd = () => {
    return (
        <Stack fontSize={18} spacing={2}>
            <SimpleTextFormula>
                Ро-метод Полларда с модификацией Флойда - это вероятностный
                алгоритм факторизации, основанный на парадоксе дней рождения и
                поиске циклов в последовательности.
            </SimpleTextFormula>

            <SimpleTextFormula>
                Основная идея алгоритма заключается в том, что если мы имеем
                составное число m, то существует нетривиальный делитель d, и
                последовательность значений по модулю d будет иметь цикл
                значительно меньшей длины, чем последовательность по модулю m.
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Используется полиномиальная функция'}
                formula={'f(x) = x^2 + c \\pmod{m}'}
                aftertext={'где $c$ - константа, обычно равная 1'}
            />

            <SimpleTextFormula>
                Модификация Флойда для поиска цикла использует две
                последовательности:
            </SimpleTextFormula>

            <CentralizedMultiFormula
                header={'Последовательности Флойда'}
                formulas={['x_{i+1} = f(x_i)', 'y_{i+1} = f(f(y_i))']}
                aftertext={'где $y_1 = x_1$'}
            />

            <SimpleTextFormula>
                Алгоритм находит нетривиальный делитель, когда:
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Условие нахождения делителя'}
                formula={'1 < d = \\gcd(|x_i - y_i|, m) < m'}
            />

            <SimpleTextFormula>
                Если d = m, то алгоритм не смог найти нетривиальный делитель, и
                нужно попробовать другое начальное значение или другую константу
                c.
            </SimpleTextFormula>

            <SimpleTextFormula>
                Рекуррентные соотношения выглядят следующим образом:
            </SimpleTextFormula>
            <SimpleTextFormula>
                {`$\\begin{cases} 
                x_{i+1} = f(x_i) \\\\ 
                y_{i+1} = f(f(y_i)) \\\\
                d_i = D(|x_{i+1} - y_{i+1}|, m)
                \\end{cases}$`}
            </SimpleTextFormula>

            <SimpleTextFormula>
                А изначальные $x_0$ и $y_0$ выбираются произвольно, $c$ - тоже!
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Сложность алгоритма'}
                formula={'O(\\sqrt{p})'}
                aftertext={'где p - наименьший простой делитель числа m'}
            />

            <SimpleTextFormula>
                Алгоритм особенно эффективен для чисел, у которых есть
                относительно небольшие простые делители.
            </SimpleTextFormula>
        </Stack>
    );
};

export default RhoPollardFloyd;
