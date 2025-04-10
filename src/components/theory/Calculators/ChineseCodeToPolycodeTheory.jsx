import React from 'react';
import { Box, Stack } from '@mui/material';
import OutlinedFormula from '../common/OutlinedFormula';
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';
import SimpleTextFormula from '../common/SimpleTextFormula';

const ChineseCodeToPolycodeTheory = () => {
    return (
        <Stack fontSize={18} alignSelf={'flex-start'} spacing={2}>
            <SimpleTextFormula>
                Система остаточных классов (СОК) — метод представления чисел
                через набор взаимно простых модулей, позволяющий эффективно
                выполнять арифметические операции.
            </SimpleTextFormula>

            <OutlinedFormula
                description={
                    'Китайский код (CC) числа $x$ по модулям $m = (m_1, ..., m_n)$'
                }
                formula={'CC_m(x) = (R_{m_1}(x), ..., R_{m_n}(x))'}
            />

            <OutlinedFormula
                description={'Модулярные операции в СОК'}
                formula={`
            CC_m(x \\circ y) = \\left( 
                R_{m_1}(x \\circ y), ..., R_{m_n}(x \\circ y) 
            \\right), \\quad \\circ \\in \\{+, -, \\times\\}
        `}
                aftertext={
                    'то есть буквально значение каждого остатка складывается/умножается/вычитается из значения по такому же остатку во втором числе'
                }
            />

            <CentralizedMultiFormula
                header={
                    'Исключение модуля $m_j$ из СОК - это поиск такого $y$, что:'
                }
                formulas={[
                    'y = Q_{m_j}\\left(x - R_{m_j}(x)\\right)',
                    "CC_{m \\setminus m_j}(x) = CC_{m'}(y), \\quad m' = (m_1, ..., m_{j-1}, m_{j+1}, ..., m_n)",
                ]}
            />

            <OutlinedFormula
                description={'Полиадический код (PC) числа $x$'}
                formula={`
            x = \\sum_{i=1}^n \\left( x_i \\prod_{j=1}^{i-1} m_j \\right), \\quad x_i \\in \\{0, ..., m_i-1\\}
        `}
            />

            <OutlinedFormula
                description={'Связь китайского и полиадического кодов'}
                formula={`
            [PC_m(x)]_{i+1} = [CC_{m_1\\backslash...\\backslash m_i}(x)]_1, \\quad [PC_m(x)]_1 = [CC_m(x)]_1
        `}
            />

            <OutlinedFormula
                description={'Сравнение чисел в СОК через полиадический код'}
                formula={`
            [PC_m(y)]_i = [PC_m(x)]_i \\ (i > k), \\ [PC_m(y)]_k < [PC_m(x)]_k \\implies y < x
        `}
            />

            <OutlinedFormula
                description={'Деление с остатком в СОК'}
                formula={`
            Q_b(a) = Q_c\\left(\\frac{a - R_b(a)}{b}\\right), \\quad c = D\\left(\\prod m_i, b\\right)
        `}
            />

            <SimpleTextFormula>
                СОК позволяет выполнять параллельные вычисления и избегать
                переполнений, что делает её перспективной для криптографии.
            </SimpleTextFormula>
        </Stack>
    );
};

export default ChineseCodeToPolycodeTheory;
