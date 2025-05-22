import React from 'react';
import { Stack } from '@mui/material';
import SimpleTextFormula from '../../theory/common/SimpleTextFormula';
import OutlinedFormula from '../../theory/common/OutlinedFormula';
import CentralizedMultiFormula from '../../theory/common/CentralizedMultiFormula';

const FermatFactorEtuExample = () => {
    return (
        <Stack fontSize={18} spacing={2} alignSelf="flex-start">
            <SimpleTextFormula>
                Факторизация числа 5959 методом Ферма
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Исходное число'}
                formula={'n = 5959'}
            />

            <SimpleTextFormula>
                Значение функции f(x,y,z) равно 124, пересчитываем следующее
                значение опираясь на свойства
            </SimpleTextFormula>

            <CentralizedMultiFormula
                header={'Последовательные шаги вычисления'}
                formulas={[
                    'f(x,y+1,z) = 124 - 2(1+1) - 1 = 121, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 121 - 2(2+1) - 1 = 116, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 116 - 2(3+1) - 1 = 109, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 109 - 2(4+1) - 1 = 100, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 100 - 2(5+1) - 1 = 89, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 89 - 2(6+1) - 1 = 76, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 76 - 2(7+1) - 1 = 61, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 61 - 2(8+1) - 1 = 44, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 44 - 2(9+1) - 1 = 25, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 25 - 2(10+1) - 1 = 4, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 4 - 2(11+1) - 1 = -19, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x+1,y,z) = -19 + 2(78+1) + 1 = 138, \\text{ увеличиваем } x \\text{ на } 1',
                    'f(x,y+1,z) = 138 - 2(12+1) - 1 = 113, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 113 - 2(13+1) - 1 = 86, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 86 - 2(14+1) - 1 = 57, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 57 - 2(15+1) - 1 = 26, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 26 - 2(16+1) - 1 = -7, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x+1,y,z) = -7 + 2(79+1) + 1 = 152, \\text{ увеличиваем } x \\text{ на } 1',
                    'f(x,y+1,z) = 152 - 2(17+1) - 1 = 117, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 117 - 2(18+1) - 1 = 80, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 80 - 2(19+1) - 1 = 41, \\text{ увеличиваем } y \\text{ на } 1',
                    'f(x,y+1,z) = 41 - 2(20+1) - 1 = 0, \\text{ увеличиваем } y \\text{ на } 1',
                ]}
                alignItems={'flex-start'}
            />

            <SimpleTextFormula>
                Найдены значения x и y, которые удовлетворяют условию f(x,y,z) =
                0
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Результат'}
                formula={'x = 80, y = 21'}
            />

            <OutlinedFormula
                description={'Ответ'}
                formula={'p = 101, q = 59'}
            />

            <OutlinedFormula
                description={'Проверка'}
                formula={'101 \\cdot 59 = 5959'}
            />
        </Stack>
    );
};

export default FermatFactorEtuExample;
