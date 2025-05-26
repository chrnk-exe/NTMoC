import React from 'react';
import { Stack, Typography, Divider } from '@mui/material';
import SimpleTextFormula from '../../theory/common/SimpleTextFormula';
import OutlinedFormula from '../../theory/common/OutlinedFormula';
import CentralizedMultiFormula from '../../theory/common/CentralizedMultiFormula';

const TonelliShanksExtExample = () => {
    return (
        <Stack fontSize={18} spacing={2} alignSelf="flex-start">
            <SimpleTextFormula>
                Рассмотрим примеры использования обобщённого алгоритма
                Тонелли-Шенкса для решения сравнений вида $x^n \equiv a \mod p$.
            </SimpleTextFormula>

            <Typography fontSize={20} fontWeight="bold">
                Одношаговый случай
            </Typography>

            <OutlinedFormula
                description={'Исходные данные'}
                formula={'x^3 \\equiv 22 \\mod 43'}
            />

            <SimpleTextFormula>
                В одношаговом случае решение находится непосредственно по
                формуле:
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Формула для одношагового случая'}
                formula={'x_0 = a^{\\frac{\\frac{p-1}{n}+1}{n}} \\mod p'}
                aftertext={
                    'где $a$ - правая часть сравнения, $p$ - модуль, $n$ - степень'
                }
            />

            <SimpleTextFormula>
                Подставляем значения и вычисляем:
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Вычисление решения'}
                formula={
                    'x_0 = 22^{\\frac{\\frac{43-1}{3}+1}{3}} \\equiv 39 \\mod 43'
                }
            />

            <OutlinedFormula
                description={'Ответ'}
                formula={'x = 39 \\mod 43'}
            />

            <OutlinedFormula
                description={'Проверка'}
                formula={'39^3 \\equiv 22 \\mod 43'}
            />

            <Divider sx={{ my: 2 }} />

            <Typography fontSize={20} fontWeight="bold">
                Двухшаговый случай (простой)
            </Typography>

            <OutlinedFormula
                description={'Исходные данные'}
                formula={'x^7 \\equiv 17 \\mod 53'}
            />

            <SimpleTextFormula>
                В этом случае $D(7, 52) = 1$, что означает простой двухшаговый
                случай.
            </SimpleTextFormula>

            <SimpleTextFormula>
                Для решения находим значение $q$:
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Вычисление параметра q'}
                formula={
                    'q = -(7 \\cdot ((53-1) // 7) + ((53-1) \\mod 7)) \\mod 7 = 2'
                }
            />

            <SimpleTextFormula>
                Затем находим решение по формуле:
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Вычисление решения'}
                formula={
                    'x_0 = 17^{\\frac{q \\cdot (p-1) + 1}{n}} \\equiv 29 \\mod 53'
                }
            />

            <OutlinedFormula
                description={'Ответ'}
                formula={'x = 29 \\mod 53'}
            />

            <OutlinedFormula
                description={'Проверка'}
                formula={'29^7 \\equiv 17 \\mod 53'}
            />

            <Divider sx={{ my: 2 }} />

            <Typography fontSize={20} fontWeight="bold">
                Двухшаговый случай (сложный)
            </Typography>

            <OutlinedFormula
                description={'Исходные данные'}
                formula={'x^3 \\equiv 15 \\mod 31'}
            />

            <SimpleTextFormula>
                Для решения необходимо найти значения $q_n$, $r_n$ и $q$:
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Вычисление параметра q_n'}
                formula={'q_n = (31-1) // 3 = 10'}
            />

            <OutlinedFormula
                description={'Вычисление параметра r_n'}
                formula={'r_n = (31-1) \\mod 3 = 1'}
            />

            <OutlinedFormula
                description={'Вычисление параметра q'}
                formula={'q = -(3 \\cdot 3 + 1)^{-1} \\mod 3 = 2'}
            />

            <SimpleTextFormula>Затем находим решение:</SimpleTextFormula>

            <OutlinedFormula
                description={'Вычисление решения'}
                formula={
                    'x_0 = 15^{\\frac{(31-1) \\cdot 2 + 1}{3}} \\equiv 23 \\mod 31'
                }
            />

            <OutlinedFormula
                description={'Ответ'}
                formula={'x = 23 \\mod 31'}
            />

            <OutlinedFormula
                description={'Проверка'}
                formula={'23^3 \\equiv 15 \\mod 31'}
            />

            <Divider sx={{ my: 2 }} />

            <Typography fontSize={20} fontWeight="bold">
                Многошаговый случай
            </Typography>

            <OutlinedFormula
                description={'Исходные данные'}
                formula={'x^3 \\equiv 7 \\mod 19'}
            />

            <SimpleTextFormula>
                В многошаговом случае алгоритм сложнее. Сначала вычисляем
                значение $c$:
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Вычисление параметра c'}
                formula={'c = 7^{\\frac{19-1}{3^2}} \\mod 19 = 11'}
            />

            <SimpleTextFormula>
                Находим первообразный корень $g = 2$ по модулю 19 и ищем
                значение $y$ методом перебора:
            </SimpleTextFormula>

            <CentralizedMultiFormula
                header={'Поиск $y$'}
                formulas={[
                    '2^{\\frac{19-1}{3} \\cdot 0} \\mod 19 \\neq 11',
                    '2^{\\frac{19-1}{3} \\cdot 1} \\mod 19 \\neq 11',
                    '2^{\\frac{19-1}{3} \\cdot 2} \\mod 19 = 11 \\implies y = 2',
                ]}
                alignItems={'flex-start'}
            />

            <SimpleTextFormula>
                {
                    'Начинаем многошаговый алгоритм Тонелли-Шенкса. Ищем решение в виде $x \\equiv a^\\alpha \\cdot g^\\beta \\mod 19$.'
                }
            </SimpleTextFormula>

            <SimpleTextFormula>
                {
                    'Начальные значения: $\\alpha = \\frac{m-1}{n^2} = 2$ (степень при основании 7) и $\\beta = \\frac{m-1}{n} \\cdot (-y) \\mod (m-1) = 6$ (степень при первообразном корне 2).'
                }
            </SimpleTextFormula>

            <SimpleTextFormula>
                {
                    'Проверяем условие выхода из цикла: $(\\alpha + 1) \\equiv 0 \\mod 3$. Так как $(2+1) \\equiv 0 \\mod 3$, условие выполнено.'
                }
            </SimpleTextFormula>

            <SimpleTextFormula>Вычисляем итоговый результат:</SimpleTextFormula>

            <OutlinedFormula
                description={'Итоговая формула'}
                formula={
                    'x \\equiv 7^{\\frac{\\alpha+1}{3}} \\cdot 2^{\\frac{\\beta}{3}} \\equiv 9 \\mod 19'
                }
            />

            <OutlinedFormula description={'Ответ'} formula={'x = 9 \\mod 19'} />

            <OutlinedFormula
                description={'Проверка'}
                formula={'9^3 \\equiv 7 \\mod 19'}
            />
        </Stack>
    );
};

export default TonelliShanksExtExample;
