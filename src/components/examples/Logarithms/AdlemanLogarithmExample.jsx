import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';
import OutlinedFormula from '../../theory/common/OutlinedFormula';
import SimpleTextFormula from '../../theory/common/SimpleTextFormula';
import CentralizedMultiFormula from '../../theory/common/CentralizedMultiFormula';

const AdlemanLogarithmExample = () => {
    return (
        <Stack fontSize={18} alignSelf={'flex-start'} spacing={2}>
            <SimpleTextFormula>
                Решим задачу дискретного логарифмирования с помощью алгоритма
                Адлемана: {'$4^x \\equiv 13 \\pmod {31}$'}
            </SimpleTextFormula>

            <SimpleTextFormula>
                1. Выберем факторную базу {'$\\mathcal{F} = \\{2, 3, 5\\}$'}
            </SimpleTextFormula>

            <SimpleTextFormula>
                2. Начнем собирать соотношения:
            </SimpleTextFormula>

            <CentralizedMultiFormula
                header={'Соотношение 1: выберем $s_1 = 5$ и вычислим $t_1$'}
                formulas={['t_1 \\equiv 4^5 \\equiv 5 \\pmod {31}']}
                alignItems="flex-start"
            />

            <SimpleTextFormula>
                {'$t_1 = 5 = 5^1$, значит $5 \\equiv s_1 \\pmod {30}$'}
            </SimpleTextFormula>

            <OutlinedFormula formula={'\\log_4 5 \\equiv 5 \\pmod {30}'} />

            <CentralizedMultiFormula
                header={'Соотношение 2: выберем $s_2 = 7$ и вычислим $t_2$'}
                formulas={['t_2 \\equiv 4^7 \\equiv 8 \\pmod {31}']}
                alignItems="flex-start"
            />

            <SimpleTextFormula>
                {
                    '$t_2 = 8 = 2^3$, значит $7 \\equiv 3 \\cdot \\log_4 2 \\pmod {30}$'
                }
            </SimpleTextFormula>

            <OutlinedFormula
                formula={'\\log_4 2 \\equiv 7/3 \\equiv 19 \\pmod {30}'}
            />

            <CentralizedMultiFormula
                header={'Соотношение 3: выберем $s_3 = 11$ и вычислим $t_3$'}
                formulas={['t_3 \\equiv 4^{11} \\equiv 15 \\pmod {31}']}
                alignItems="flex-start"
            />

            <SimpleTextFormula>
                {
                    '$t_3 = 15 = 3 \\cdot 5$, значит $11 \\equiv \\log_4 3 + \\log_4 5 \\pmod {30}$'
                }
            </SimpleTextFormula>

            <SimpleTextFormula>
                {'Подставим уже известный $\\log_4 5 = 5$:'}
            </SimpleTextFormula>

            <OutlinedFormula
                formula={'\\log_4 3 \\equiv 11 - 5 \\equiv 6 \\pmod {30}'}
            />

            <SimpleTextFormula>
                3. Теперь найдем {'$\\log_4 13$'}. Выберем случайное {'$s = 4$'}{' '}
                и вычислим:
            </SimpleTextFormula>

            <OutlinedFormula
                formula={
                    't \\equiv 13 \\cdot 4^4 \\equiv 13 \\cdot 16 \\equiv 22 \\pmod {31}'
                }
            />

            <SimpleTextFormula>
                {'$22 = 2 \\cdot 11$, но 11 не входит в нашу факторную базу.'}
            </SimpleTextFormula>

            <SimpleTextFormula>Попробуем с {'$s = 9$'}:</SimpleTextFormula>

            <OutlinedFormula
                formula={
                    't \\equiv 13 \\cdot 4^9 \\equiv 13 \\cdot 16 \\cdot 4^5 \\equiv 22 \\cdot 5 \\equiv 18 \\pmod {31}'
                }
            />

            <SimpleTextFormula>{'$18 = 2 \\cdot 3^2$'}</SimpleTextFormula>

            <SimpleTextFormula>
                {'Теперь можем найти дискретный логарифм:'}
            </SimpleTextFormula>

            <OutlinedFormula
                formula={
                    '\\log_4 13 \\equiv \\log_4 2 + 2 \\cdot \\log_4 3 - 9 \\pmod {30}'
                }
            />
            <OutlinedFormula
                formula={
                    '\\log_4 13 \\equiv 19 + 2 \\cdot 6 - 9 \\equiv 19 + 12 - 9 \\equiv 22 \\pmod {30}'
                }
            />

            <SimpleTextFormula>{'Ответ: $x = 22$'}</SimpleTextFormula>

            <Typography>
                Проверить можно с помощью{' '}
                <Link href="/fast_pow?args=22,4,31">
                    алгоритма быстрого возведения в степень
                </Link>
            </Typography>
        </Stack>
    );
};

export default AdlemanLogarithmExample;
