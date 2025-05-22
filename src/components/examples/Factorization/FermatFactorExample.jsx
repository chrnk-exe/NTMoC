import React from 'react';
import { Stack } from '@mui/material';
import SimpleTextFormula from '../../theory/common/SimpleTextFormula';
import OutlinedFormula from '../../theory/common/OutlinedFormula';
import CentralizedMultiFormula from '../../theory/common/CentralizedMultiFormula';

const FermatFactorExample = () => {
    return (
        <Stack fontSize={18} spacing={2} alignSelf="flex-start">
            <SimpleTextFormula>
                Факторизация числа 5959 методом Ферма
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Исходное число'}
                formula={'n = 5959'}
            />

            <SimpleTextFormula>
                Начинаем с $y = ⌈√5959⌉ = 78$ и проверяем, является ли $y^2 - n$
                полным квадратом
            </SimpleTextFormula>

            <CentralizedMultiFormula
                header={'Последовательные шаги вычисления'}
                formulas={[
                    'y = 78: y^2 - n = 78^2 - 5959 = 6084 - 5959 = 125 \\text{ (не квадрат)}',
                    'y = 79: y^2 - n = 79^2 - 5959 = 6241 - 5959 = 282 \\text{ (не квадрат)}',
                    'y = 80: y^2 - n = 80^2 - 5959 = 6400 - 5959 = 441 = 21^2 \\text{ (квадрат!)}',
                ]}
                alignItems={'flex-start'}
            />

            <SimpleTextFormula>
                Найдены значения $x$ и $y$, которые удовлетворяют условию $x^2 -
                n = y^2$
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Результат'}
                formula={'x = 80, y = 21'}
            />

            <OutlinedFormula
                description={'Ответ'}
                formula={'p = x + y = 80 + 21 = 101, q = x - y = 80 - 21 = 59'}
            />

            <OutlinedFormula
                description={'Проверка'}
                formula={'101 \\cdot 59 = 5959'}
            />
        </Stack>
    );
};

export default FermatFactorExample;
