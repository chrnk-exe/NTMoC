import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';
import OutlinedFormula from '../../theory/common/OutlinedFormula';
import SimpleTextFormula from '../../theory/common/SimpleTextFormula';
import CentralizedMultiFormula from '../../theory/common/CentralizedMultiFormula';

const GelfondShanksLogarithmExample = () => {
    return (
        <Stack fontSize={18} alignSelf={'flex-start'} spacing={2}>
            <SimpleTextFormula>
                Вычислим следующим дискретный логарифм:{' '}
                {'$4^x \\equiv 16 \\pmod {29}$'}
            </SimpleTextFormula>
            <SimpleTextFormula>
                Вычислим $e$: {'$e = [\\sqrt {29}] + 1 = 6$'}
            </SimpleTextFormula>
            <SimpleTextFormula>
                Вычислим $a^e$: {'$a^e \\equiv 6^4 \\equiv 7 \\pmod {29}$'}
            </SimpleTextFormula>
            <CentralizedMultiFormula
                header={'Вычислим $c_1$ и $d_1$'}
                formulas={[
                    '$c_1 \\equiv 7^1 \\equiv 7 \\pmod {29}$',
                    '$d_1 \\equiv 16 \\cdot (4^1) \\equiv 6 \\pmod {29}$',
                ]}
                alignItems="flex-start"
            />

            <CentralizedMultiFormula
                header={'Вычислим $c_2$ и $d_2$'}
                formulas={[
                    '$c_2 \\equiv 7^2 \\equiv 20 \\pmod {29}$',
                    '$d_2 \\equiv 16 \\cdot (4^2) \\equiv 24 \\pmod {29}$',
                ]}
                alignItems="flex-start"
            />
            <CentralizedMultiFormula
                header={'Вычислим $c_3$ и $d_3$'}
                formulas={[
                    '$c_3 \\equiv 7^3 \\equiv 24 \\pmod {29}$',
                    '$d_3 \\equiv 16 \\cdot (4^4) \\equiv 9 \\pmod {29}$',
                ]}
                alignItems="flex-start"
            />

            <SimpleTextFormula>
                Найдено совпадение! $c_3 \equiv d_2$
            </SimpleTextFormula>
            <SimpleTextFormula>
                Вычислим дискретный логарифм:
                {'$x \\equiv ey−z \\equiv 6⋅3−2 \\equiv 16 \\pmod {28}$'}
            </SimpleTextFormula>
            <Typography>
                Проверить можно с помощью{' '}
                <Link href="/fast_pow?args=16,4,29">
                    алгоритма быстрого возведения в степень
                </Link>
            </Typography>
        </Stack>
    );
};

export default GelfondShanksLogarithmExample;
