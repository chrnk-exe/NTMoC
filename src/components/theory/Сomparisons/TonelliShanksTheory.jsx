import React from 'react';
import { Stack, Typography } from '@mui/material';
import SimpleTextFormula from '../common/SimpleTextFormula';
import OutlinedFormula from '../common/OutlinedFormula';
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';

const TonelliShanksTheory = () => {
    return (
        <Stack fontSize={18} spacing={2} alignSelf="flex-start">
            <Typography fontSize={'1.2em'} fontWeight={'bold'}>
                Алгоритм Тонелли-Шенкса
            </Typography>

            <OutlinedFormula
                description={
                    'Алгоритм Тонелли-Шенкса предназначен для решения сравнения вида'
                }
                formula={'x^2 \\equiv n \\pmod{p}'}
                aftertext={
                    'где $p$ — простое число, $n$ — целое число, не кратное $p$. То есть находит квадратные корни по модулю простого числа'
                }
            />

            <Typography fontSize={18} fontWeight="bold">
                Критерий разрешимости:
            </Typography>
            <OutlinedFormula
                description={'Условие разрешимости'}
                formula={'\\gcd(a, m-1) \\mid ind_g b \\mod{m}'}
                aftertext={'где $g$ - первообразный корень по модулю $m$'}
            />

            <SimpleTextFormula>
                Другими словами, если $d = \gcd(a, m-1)$, то сравнение разрешимо
                в том случае, когда дискретный логарифм {'$ind_g b \\mod{m}$'}
                делится на $d$.
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Алгоритмическая проверка разрешимости'}
                formula={'ind_g b \\mod{m} \\equiv 0 \\pmod{\\gcd(a, m-1)}'}
            />

            <Typography fontSize={18} fontWeight="bold">
                Входные данные:
            </Typography>

            <SimpleTextFormula>$p$ — нечётное простое число</SimpleTextFormula>

            <SimpleTextFormula>
                $n$ — целое число, являющееся квадратичным вычетом по модулю $p$
            </SimpleTextFormula>

            <SimpleTextFormula>
                Другими словами, символ Лежандра {'$(\\frac{n}{p})=1$'}.
            </SimpleTextFormula>

            <SimpleTextFormula>
                Символ Лежандра {'$(\\frac{n}{p})$'} определяется следующим
                образом:
            </SimpleTextFormula>

            <SimpleTextFormula>
                {'$(\\frac{n}{p})=1$'}, если $n$ является квадратичным вычетом
                по модулю $p$ ({'$a^{\\frac{p-1}{2}} \\equiv 1 \\mod p$'}), но
                при этом не делится на $p$.
            </SimpleTextFormula>

            <SimpleTextFormula>
                {'$(\\frac{n}{p})=0$'} если $a$ делится на $p$.
            </SimpleTextFormula>
            <SimpleTextFormula>
                {'$(\\frac{n}{p})=-1$'} если $a$ является квадратичным невычетом
                по модулю $p$.
            </SimpleTextFormula>

            <Typography fontSize={18} fontWeight="bold">
                Результат работы алгоритма:
            </Typography>

            <SimpleTextFormula>
                вычет $R$, удовлетворяющий сравнению{' '}
                {'$R^2 \\equiv n \\mod{p}$'}
            </SimpleTextFormula>

            <Typography fontSize={18} fontWeight="bold">
                Шаги алгоритма:
            </Typography>

            <SimpleTextFormula>
                1. Выделим степени двойки из $p-1$, то есть пусть $p-1=2^S·Q$,
                где $Q$ нечётно, $S ≥ 1$.
            </SimpleTextFormula>

            <OutlinedFormula
                description={
                    '2. Если $S=1$, то есть $p \\equiv 3\\mod 4$, тогда решение'
                }
                formula={'$R \\equiv \\pm n^{\\frac{p+1}{4}} \\mod{p}$'}
            />

            <SimpleTextFormula>
                3. Для $S ≥ 2$ продолжаем алгоритм:
            </SimpleTextFormula>

            <OutlinedFormula
                description={
                    '4. Выберем произвольный квадратичный невычет $z$, то есть символ'
                }
                formula={'$(\\frac{z}{p})=-1$'}
            />

            <OutlinedFormula
                description={'5. Положим'}
                formula={'$c \\equiv z^Q \\mod p$'}
            />

            <CentralizedMultiFormula
                header={'6. Пусть также'}
                formulas={[
                    '$R \\equiv n^{\\frac{Q+1}{2}} \\mod p$',
                    '$t \\equiv n^Q \\mod p$',
                    '$M=S$',
                ]}
                alignItems={'flex-start'}
            />

            <Typography fontSize={18} fontWeight="bold">
                Основной цикл алгоритма:
            </Typography>

            <SimpleTextFormula>
                1. Если $t \equiv 1 \mod p$, то алгоритм возвращает $R$.
            </SimpleTextFormula>

            <OutlinedFormula
                description={
                    '2. В противном случае находим наименьшее i, такое, что'
                }
                formula={'$t^{2^i} \\equiv 1 \\mod p$'}
                aftertext={'при условии 0 < i < M.'}
            />

            <OutlinedFormula
                description={'3. Пусть'}
                formula={'$b \\equiv c^{2^{M-i-1}} \\mod p$'}
            />

            <CentralizedMultiFormula
                header={'4. Положим'}
                formulas={[
                    '$R \\equiv R·b \\mod p$',
                    '$t \\equiv t·b² \\mod p$',
                    '$c \\equiv b² \\mod p$',
                    '$M := i$',
                ]}
                alignItems={'flex-start'}
            />
            <SimpleTextFormula>
                5. Возвращаемся к началу цикла.
            </SimpleTextFormula>

            <SimpleTextFormula>
                После нахождения решения сравнения $R$ второе решение сравнения
                находится как $p-R$.
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Сложность алгоритма'}
                formula={'O(\\log^2 p)'}
            />

            <SimpleTextFormula>
                Этот алгоритм эффективнее метода перебора при больших значениях
                модуля p.
            </SimpleTextFormula>
        </Stack>
    );
};

export default TonelliShanksTheory;
