import React from 'react';
import { Stack } from '@mui/material';
import SimpleTextFormula from '../../theory/common/SimpleTextFormula';
import OutlinedFormula from '../../theory/common/OutlinedFormula';
import CentralizedMultiFormula from '../../theory/common/CentralizedMultiFormula';

const TonelliShanksExample = () => {
    return (
        <Stack fontSize={18} spacing={2} alignSelf="flex-start">
            <SimpleTextFormula>
                Рассмотрим пример решения сравнения с помощью алгоритма
                Тонелли-Шенкса
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Исходное сравнение'}
                formula={'x^2 \\equiv 10 \\pmod{13}'}
            />

            <SimpleTextFormula>
                Решим данное сравнение пошагово с помощью алгоритма
                Тонелли-Шенкса:
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Шаг 1. Выделение степени двойки'}
                formula={'13-1 = 12 = 2^2 \\cdot 3'}
            />

            <CentralizedMultiFormula
                header={'Находим $Q$'}
                formulas={[
                    'Q = \\frac{p-1}{2^S}',
                    'Q \\equiv \\frac{12}{2^2} \\equiv 3 \\pmod{13}',
                ]}
                alignItems={'flex-start'}
            />

            <OutlinedFormula
                description={'Шаг 2. Поиск квадратичного невычета'}
                formula={'2^2 \\text{ - квадратичный невычет по модулю } 13'}
            />

            <CentralizedMultiFormula
                header={'Полагаем'}
                formulas={['c \\equiv 2^3 \\pmod{13}']}
                alignItems={'flex-start'}
            />

            <CentralizedMultiFormula
                header={'Шаг 3. Вычисление начальных значений'}
                formulas={[
                    'R \\equiv 10^{\\frac{3+1}{2}} \\equiv 9.0',
                    't \\equiv 10^3 \\equiv 12',
                    'M = 2',
                ]}
                alignItems={'flex-start'}
            />

            <CentralizedMultiFormula
                header={'Шаг 4. Итерации'}
                formulas={[
                    't \\equiv 12 \\pmod{13}',
                    '\\text{Найдено } i \\equiv 1 \\text{ такое, что } 12^{2^1} \\equiv 1 \\pmod{13}',
                    'b \\equiv 8^{2^{2-1-1}} \\pmod{13} \\equiv 8 \\pmod{13}',
                    'R \\equiv 7 \\cdot 8 \\pmod{13} \\equiv 7 \\pmod{13}',
                    't \\equiv 1 \\cdot 8 \\cdot 8 \\pmod{13} \\equiv 1 \\pmod{13}',
                    'c \\equiv 8 \\cdot 8 \\pmod{13} \\equiv 12 \\pmod{13}',
                    'M \\equiv 1',
                ]}
                alignItems={'flex-start'}
            />

            <SimpleTextFormula>
                После нахождения первого решения $R = 7$, второе решение
                находится по формуле $p - R = 13 - 7 = 6$
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Ответ'}
                formula={'x \\equiv \\{7, 6\\} \\pmod{13}'}
            />

            <OutlinedFormula
                description={'Проверка'}
                formula={`7^2 \\equiv 49 \\equiv 10 \\pmod{13} \\\\
6^2 \\equiv 36 \\equiv 10 \\pmod{13}`}
            />
        </Stack>
    );
};

export default TonelliShanksExample;
