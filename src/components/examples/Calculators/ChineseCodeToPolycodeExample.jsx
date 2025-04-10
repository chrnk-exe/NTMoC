import React from 'react';
import { Box, Stack } from '@mui/material';
import OutlinedFormula from '../../theory/common/OutlinedFormula';
import SimpleTextFormula from '../../theory/common/SimpleTextFormula';
import CentralizedMultiFormula from '../../theory/common/CentralizedMultiFormula';

const ChineseCodeToPolycodeExample = () => {
    return (
        <Stack fontSize={18} alignSelf={'flex-start'} spacing={2}>
            <SimpleTextFormula>
                Преобразование китайского кода CC(1,2,3,4) в полиадический код
                по модулям 2,3,5,7
            </SimpleTextFormula>

            <OutlinedFormula
                description={
                    'Обратные элементы для исключения модулей посчитаем заранее'
                }
                formula={`
            \\begin{aligned}
            2^{-1} \\mod (3,5,7) &= [2,3,4] \\\\
            3^{-1} \\mod (5,7) &= [2,5] \\\\
            5^{-1} \\mod 7 &= 3
            \\end{aligned}
        `}
            />

            <OutlinedFormula
                description={'Таблица преобразования'}
                formula={`
            \\begin{array}{|c|c|c|c|c|}
            \\hline
            i & CC_m & PC_i & \\text{Разность} & \\text{Частное} \\\\
            \\hline
            0 & (1,2,3,4) & 1 & (0,1,2,3) & (2,1,5) \\\\
            1 & (2,1,5) & 2 & (0,4,3) & (3,1) \\\\
            2 & (3,1) & 3 & (0,5) & 1 \\\\
            3 & (1) & 1 & - & - \\\\
            \\hline
            \\end{array}
        `}
            />

            <SimpleTextFormula>
                Проясним некоторые преобразования:
            </SimpleTextFormula>
            <SimpleTextFormula>
                В первой строчке объявляем шаг ($i$) и изначальное значение
                $CC_m$
            </SimpleTextFormula>
            <SimpleTextFormula>
                Далее по связи полиадического и китайского кодов объявляем $PC_1
                = 1$, то есть первый элемент $CC_m$
            </SimpleTextFormula>
            <SimpleTextFormula>
                Далее высчитываем разницу: {'($x - R_{m_j} (x)$)'} - то есть
                выполняем модулярную операцию вычитания для каждого элемента
            </SimpleTextFormula>
            <SimpleTextFormula> $ 1 - 1 = 0 \mod 2$</SimpleTextFormula>

            <SimpleTextFormula>$2 - 1 = 1 \mod 3$ </SimpleTextFormula>
            <SimpleTextFormula>$3 - 1 = 2 \mod 5$ </SimpleTextFormula>
            <SimpleTextFormula>$4 - 1 = 3 \mod 7$ </SimpleTextFormula>

            <SimpleTextFormula>
                Далее высчитываем частное для элементов кроме исключаемого
                модуля, для этого нужно УМНОЖИТЬ на обратный элемент этому
                модулю, а эти модули мы посчитали в начале.
            </SimpleTextFormula>
            <SimpleTextFormula>$1 \cdot 2 = 2 \mod 3$ </SimpleTextFormula>
            <SimpleTextFormula>$2 \cdot 3 = 1 \mod 5$ </SimpleTextFormula>
            <SimpleTextFormula>$3 \cdot 4 = 5 \mod 7$ </SimpleTextFormula>

            <SimpleTextFormula>
                Набор $(2,1,5)$ является следующим $CC_m$ с исключённым модулем
                2 и все операции дальше аналогичны.
            </SimpleTextFormula>
            <SimpleTextFormula>
                Итоговый полиадический код:{' '}
                {'$PC_{(2, 3, 5, 7)}(x) = [1,2,3,1]$'}
            </SimpleTextFormula>
        </Stack>
    );
};

export default ChineseCodeToPolycodeExample;
