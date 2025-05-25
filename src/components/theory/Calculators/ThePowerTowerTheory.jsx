import React from 'react';
import { Box, Stack } from '@mui/material';
import OutlinedFormula from '../common/OutlinedFormula';
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';
import SimpleTextFormula from '../common/SimpleTextFormula';

const ThePowerTowerTheory = () => {
    return (
        <Stack fontSize={18} alignSelf={'flex-start'} spacing={2}>
            <SimpleTextFormula>
                Теорема Эйлера-Ферма — фундаментальный результат теории чисел,
                который помогает работать с большими степенями и их остатками по
                модулю.
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Теорема Эйлера-Ферма (основная формула)'}
                formula={
                    'a^{\\varphi(m)} \\equiv 1 \\pmod{m} \\quad \\text{если} \\quad a \\perp m'
                }
                aftertext={
                    'где φ(m) — функция Эйлера (количество чисел от 1 до m-1, взаимно простых с m)'
                }
            />

            <SimpleTextFormula>
                Для простого модуля p (частный случай теоремы Ферма):
                {'$a^{p-1} \\equiv 1 \\pmod m$'} если a не делится на p.
            </SimpleTextFormula>

            <CentralizedMultiFormula
                header={'Следствия теоремы:'}
                formulas={[
                    'a^{-1} \\equiv a^{\\varphi(m) - 1} \\pmod m',
                    'a^b \\equiv a^{R_{\\varphi(m)}(b)}',
                ]}
            />

            <SimpleTextFormula>
                Именно следствие 2 позволяет вычислять степенные башни
                эффективнее
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Выведем второе следствие'}
                formula={'a^b \\equiv a^{R_{\\varphi(m)}(b)}'}
            />

            <CentralizedMultiFormula
                header={'Разделим $b$ на $\\varphi (m)$'}
                formulas={[
                    'a^b \\equiv a^{R_{\\varphi(m)}(b)}',
                    'b = k \\cdot \\varphi(m) + r',
                ]}
            />

            <SimpleTextFormula>
                $k$ - целая часть от деления на {'$\\varphi(m)$'} а $r$ -
                остаток от деления, то есть {'$r = R_{\\varphi(m)}(b)$'}
            </SimpleTextFormula>

            <CentralizedMultiFormula
                header={'Подставим и применим теорему Эйлера-Ферма'}
                formulas={[
                    'a^b \\equiv a^{k \\cdot \\varphi(m) + r } \\equiv (a^{\\varphi(m)})^k \\cdot a^r',
                    '(a^{\\varphi(m)})^k \\cdot a^r \\equiv 1^k \\cdot a^r',
                    'a^b \\equiv 1^k \\cdot a^r \\equiv a^{R_{\\varphi(m)}(b)}',
                ]}
                aftertext={'Что и требовалось доказать'}
            />

            <SimpleTextFormula>
                Этот метод особенно полезен в криптографии, где часто приходится
                работать с очень большими степенями.
            </SimpleTextFormula>
        </Stack>
    );
};

export default ThePowerTowerTheory;
