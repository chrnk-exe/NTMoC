import React from 'react';
import { Stack, Typography, Link } from '@mui/material';
import SimpleTextFormula from '../../theory/common/SimpleTextFormula';

const RhoPollardExample = () => {
    return (
        <Stack fontSize={18} alignSelf={'flex-start'} spacing={2}>
            <SimpleTextFormula>
                Решим задачу дискретного логарифмирования с помощью ро-метода
                Полларда.
            </SimpleTextFormula>
            <SimpleTextFormula>
                Здесь будет размещен пример решения.
            </SimpleTextFormula>
            <Typography>
                Проверить можно с помощью{' '}
                <Link href="/fast_pow?args=5,2,11">
                    алгоритма быстрого возведения в степень
                </Link>
            </Typography>
        </Stack>
    );
};

export default RhoPollardExample;
