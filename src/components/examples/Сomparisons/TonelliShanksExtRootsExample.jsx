import React from 'react';
import { Stack, Typography, Link } from '@mui/material';
import SimpleTextFormula from '../../theory/common/SimpleTextFormula';
import OutlinedFormula from '../../theory/common/OutlinedFormula';
import CentralizedMultiFormula from '../../theory/common/CentralizedMultiFormula';

const TonelliShanksExtRootsExample = () => {
    return (
        <Stack fontSize={18} spacing={2} alignSelf="flex-start">
            <SimpleTextFormula>
                Рассмотрим пример нахождения всех корней сравнения с
                использованием обобщённого алгоритма Тонелли-Шенкса.
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Исходные данные'}
                formula={'x^7 \\equiv 6 \\mod 197'}
                aftertext={'известно одно решение $x_0 = 148$'}
            />

            <SimpleTextFormula>
                Чтобы найти все корни сравнения степени n, нам нужно найти число
                δ, имеющее порядок n по модулю p, и затем вычислить все корни по
                формуле: $x_i = x_0 · δ^i \mod p,\ где \ i = 0, 1, ..., n-1$
            </SimpleTextFormula>

            <SimpleTextFormula>
                Находим $δ$ - число, с показателем $n = 7$ по модулю $m = 197$
            </SimpleTextFormula>

            <SimpleTextFormula>
                $δ = 104$, так как $104^7 ≡ 1 \mod 197$
            </SimpleTextFormula>

            <Typography>
                Найти число, отвечающее заданному показателю можно с помощью{' '}
                <Link href="/order_number?args=7,197">
                    соответствующего алгоритма{' '}
                </Link>
            </Typography>

            <CentralizedMultiFormula
                header={'Вычисляем все корни'}
                formulas={[
                    'x_0 = 148 \\ (исходный \\ корень)',
                    'x_1 = 148 · 104^1 ≡ 26 \\mod 197',
                    'x_2 = 148 · 104^2 ≡ 143 \\mod 197',
                    'x_3 = 148 · 104^3 ≡ 97 \\mod 197',
                    'x_4 = 148 · 104^4 ≡ 41 \\mod 197',
                    'x_5 = 148 · 104^5 ≡ 127 \\mod 197',
                    'x_6 = 148 · 104^6 ≡ 9 \\mod 197',
                ]}
                alignItems={'flex-start'}
            />

            <SimpleTextFormula>
                Таким образом, мы нашли все 7 корней данного сравнения,
                используя одно известное решение и число $δ$, имеющее порядок 7
                по модулю 197.
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Ответ'}
                formula={'x ∈ {9, 26, 41, 97, 127, 143, 148} \\mod 197'}
            />

            <OutlinedFormula
                description={'Проверка'}
                formula={
                    '9^7 ≡ 26^7 ≡ 41^7 ≡ 97^7 ≡ 127^7 ≡ 143^7 ≡ 148^7 ≡ 6 \\mod 197'
                }
            />
        </Stack>
    );
};

export default TonelliShanksExtRootsExample;
