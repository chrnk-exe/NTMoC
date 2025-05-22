import React from 'react';
import { Stack } from '@mui/material';
import SimpleTextFormula from '../common/SimpleTextFormula';
import OutlinedFormula from '../common/OutlinedFormula';
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';

const FermatFactorTheory = () => {
    return (
        <Stack fontSize={18} spacing={2} alignSelf="flex-start">
            <SimpleTextFormula>
                Метод факторизации Ферма — это алгоритм разложения на множители
                нечётного составного числа n, основанный на представлении
                нечётного числа в виде разности двух квадратов.
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Основная идея метода'}
                formula={'n = x^2 - y^2 = (x + y)(x - y)'}
            />

            <SimpleTextFormula>
                Если $n = pq$, где $p$ и $q$ — простые числа, то:
            </SimpleTextFormula>

            <CentralizedMultiFormula
                header={'Формулы для нахождения множителей'}
                formulas={['p = x + y', 'q = x - y']}
                alignItems={'flex-start'}
            />

            <SimpleTextFormula>
                Алгоритм работает следующим образом:
            </SimpleTextFormula>

            <CentralizedMultiFormula
                header={'Шаги алгоритма'}
                formulas={[
                    '1. \\text{ Начинаем с } x = \\lceil\\sqrt{n}\\rceil',
                    '2. \\text{ Вычисляем } y^2 = x^2 - n',
                    '3. \\text{ Если } y^2 \\text{ является полным квадратом, то } y = \\sqrt{y^2}',
                    '4. \\text{ Иначе увеличиваем } x \\text{ на 1 и повторяем шаг 2}',
                    '5. \\text{ Когда найдены } x \\text{ и } y, \\text{ вычисляем } p = x + y \\text{ и } q = x - y',
                ]}
                alignItems={'flex-start'}
            />

            <SimpleTextFormula>
                Метод эффективен, когда множители числа $n$ близки друг к другу.
                В худшем случае, когда $n$ является произведением двух простых
                чисел, одно из которых близко к {'$\\sqrt{n}$'}, а другое близко
                к $n$, метод может работать очень долго.
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Сложность алгоритма'}
                formula={'O(\\sqrt{n}) \\text{ в худшем случае}'}
            />
        </Stack>
    );
};

export default FermatFactorTheory;
