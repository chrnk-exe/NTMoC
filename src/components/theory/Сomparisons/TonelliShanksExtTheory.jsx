import React from 'react';
import { Stack, Typography, Link } from '@mui/material';
import SimpleTextFormula from '../common/SimpleTextFormula';
import OutlinedFormula from '../common/OutlinedFormula';
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';

const TonelliShanksExtTheory = () => {
    return (
        <Stack fontSize={18} spacing={2} alignSelf="flex-start">
            <SimpleTextFormula>
                Обобщённый алгоритм Тонелли-Шенкса предназначен для решения
                сравнения вида $x^n \equiv a \mod p$, где $n$ - простое число
            </SimpleTextFormula>

            <SimpleTextFormula>
                Основная идея алгоритма заключается в том, чтобы найти такие
                числа $b$ и $t$, что {'$b^{nt} \\equiv a \\mod p$'}, тогда $x_0
                \equiv b^t \mod p$
            </SimpleTextFormula>

            <SimpleTextFormula>
                Случай составного $n$ с помощью замены переменных сводится к
                случаю с простым $n$.
            </SimpleTextFormula>

            <SimpleTextFormula>
                В случае, когда $D(n, p − 1) = 1$ сравнение $x^n \equiv a \mod
                p$ имеет ровно 1 решение и согласно теореме Эйлера-Ферма,
                {'$a^{p-1} \\equiv 1 \\mod p$'}
            </SimpleTextFormula>

            <SimpleTextFormula>
                В случае, когда{' '}
                {'$D(n, p − 1) = n \\in \\mathbb{P}_{\\mathbb{N}}$'} сравнение
                $x^n \equiv a \mod p$ имеет ровно $n$ решений тогда и только
                тогда, когда {'$a^{\\frac{p-1}{n}} \\equiv 1 \\mod p$'}
            </SimpleTextFormula>

            <Typography fontSize={18} fontWeight="bold">
                Критерий разрешимости
            </Typography>

            <OutlinedFormula
                description={
                    'Критерий разрешимости степенного двучленного сравнения по модулю $p \\in \\mathbb{P}_{\\mathbb{N}}$'
                }
                formula={`\\exists x \\in \\mathbb{Z} x^n \\equiv a \\mod p \\leftrightarrow 
                    \\begin{cases}
                    d | ind_g a, g \\in PR(\\mathbb{Z}^*_p), \\\\
                    d = D(n, p-1)
                    \\end{cases}
                    `}
                aftertext={
                    'где $d$ - число решений СДС, если решение существует'
                }
            />

            <Typography fontSize={18} fontWeight="bold">
                Алгоритм
            </Typography>

            <SimpleTextFormula>
                Далее алгоритм работает в зависимости от случая:
            </SimpleTextFormula>

            <Typography fontSize={18} fontWeight="bold">
                Одношаговый случай
            </Typography>

            <OutlinedFormula
                description={'Пусть'}
                formula={'a^{\\frac{p-1}{n}} \\equiv 1 \\mod p \\ (*)'}
            />

            <CentralizedMultiFormula
                header={'Возможны случаи'}
                formulas={[
                    'n \\mid (\\frac{p-1}{n} + 1)',
                    'n \\nmid (\\frac{p-1}{n} + 1)',
                ]}
                alignItems={'flex-start'}
            />

            <OutlinedFormula
                description={'Если'}
                formula={
                    'n \\mid (\\frac{p-1}{n} + 1) \\leftrightarrow \\exists t \\in \\mathbb{N}, \\frac{p-1}{n} + 1 = nt'
                }
                aftertext={'то домножим (*) на $a$'}
            />

            <SimpleTextFormula>
                Тогда{' '}
                {'$a^{\\frac{p-1}{n}+1} \\equiv a^{nt} \\equiv a \\mod p$'},
                откуда $x_0 = a^t \\mod p$
            </SimpleTextFormula>

            <Typography fontSize={18} fontWeight="bold">
                Двухшаговый случай
            </Typography>

            <OutlinedFormula
                description={'Если'}
                formula={'n \\nmid (\\frac{p-1}{n} + 1)'}
            />

            <SimpleTextFormula>
                {
                    'Пусть $n \\nmid \\frac{p-1}{n+1}$, тогда $n | \\frac{p-1}{n}$, либо $n \\nmid \\frac{p-1}{n}$.'
                }
            </SimpleTextFormula>

            <SimpleTextFormula>
                {'Пусть $R_n(\\frac{p-1}{n}) = r > 0$'}
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Тогда:'}
                formula={
                    'a^{\\frac{p-1}{n}} \\equiv a^{n\\cdot Q_n \\frac{p-1}{n}+r} \\equiv 1 \\mod p'
                }
            />

            <OutlinedFormula
                description={'Найдем $q$ такое, что:'}
                formula={'q^n \\cdot Q_n\\frac{p-1}{n} + r \\equiv -1 \\mod n'}
            />

            <SimpleTextFormula>
                {
                    'Тогда $q^n \\cdot Q_n\\frac{p-1}{n} + r = nt - 1$ и сравнение (*) следует возвести в степень $q$ и после домножить на $a$.'
                }
            </SimpleTextFormula>

            <SimpleTextFormula>
                {
                    'Если $D(n, p-1) = 1$, то $r = R_n(p-1)$, т.е. в таких случаях решение всегда двухшаговое.'
                }
            </SimpleTextFormula>

            <Typography fontSize={18} fontWeight="bold">
                Многошаговый случай
            </Typography>

            <SimpleTextFormula>
                {'Пусть $p = kn^s + 1$, где $k \\perp n$ и $s \\geq 2$.'}
            </SimpleTextFormula>

            <SimpleTextFormula>
                {
                    'Вычислим $c = R_p(a^{\\frac{p-1}{n^2}})$. Случай $c = 1$ рассмотрен ранее, поэтому пусть $c \\neq 1$.'
                }
            </SimpleTextFormula>

            <SimpleTextFormula>
                {
                    'При простом $n$ это в точности означает, что порядок числа $c$ по модулю $p$ равен $n$.'
                }
            </SimpleTextFormula>

            <SimpleTextFormula>
                {
                    'Требуется найти представление числа $c$ в виде степени первообразного корня $g$ по модулю $p$.'
                }
            </SimpleTextFormula>

            <OutlinedFormula
                description={
                    'То есть, требуется решить относительно $y$ сравнение'
                }
                formula={'g^{\\frac{p-1}{n}y} \\equiv c \\mod p'}
            />

            <SimpleTextFormula>
                {
                    'Тогда $c^{-1} \\equiv g^{-y\\frac{p-1}{n}} \\mod p$ и сравнение $a^{\\frac{p-1}{n^2}} \\equiv c \\mod p$ равносильно:'
                }
            </SimpleTextFormula>

            <OutlinedFormula
                description={'этому сравнению'}
                formula={
                    'a^{\\frac{p-1}{n^2}}g^{-y\\frac{p-1}{n}} \\equiv 1 \\mod p'
                }
            />

            <SimpleTextFormula>
                {
                    'При больших $n$ сложность обобщенного алгоритма Тонелли-Шенкса сравнима со сложностью задачи дискретного логарифмирования.'
                }
            </SimpleTextFormula>
        </Stack>
    );
};

export default TonelliShanksExtTheory;
