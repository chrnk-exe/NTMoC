import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';
import OutlinedFormula from '../../theory/common/OutlinedFormula';
import SimpleTextFormula from '../../theory/common/SimpleTextFormula';
import CentralizedMultiFormula from '../../theory/common/CentralizedMultiFormula';

const ThePowerTowerExample = () => {
    return (
        <Stack fontSize={18} alignSelf={'flex-start'} spacing={2}>
            <SimpleTextFormula>
                Вычислим следующую степенную башню: {'$R_{17}(31^{57^7})$'}
            </SimpleTextFormula>
            <CentralizedMultiFormula
                header={'Приведём выражение'}
                formulas={[
                    '$R_{17}(31^{57^7})$',
                    '$R_{17}(31^{R_{\\varphi(17)}(57^7)})$',
                    '$\\varphi(17) = 16$',
                    '$R_{17}(31^{R_{16}(57^{R_{\\varphi(16)}(7)})})$',
                    '$\\varphi(16) = 8$',
                    '$R_8(7) = 7$',
                    '$R_{17}(31^{R_{16}(57^{7})})$',
                    '$R_{16}(57^7) = 7$',
                    '$R_{17}(31^7) = 6$',
                    '$R_{17}(31^{57^7}) = 6 $',
                ]}
                alignItems="flex-start"
            />

            {/* Возможно тут понадобится фикс */}
            <Typography>
                Возводить число в степень по модулю можно с помощью{' '}
                <Link href="/fast_pow?args=57,7,16">
                    алгоритма быстрого возведения в степень
                </Link>
            </Typography>
        </Stack>
    );
};

export default ThePowerTowerExample;
