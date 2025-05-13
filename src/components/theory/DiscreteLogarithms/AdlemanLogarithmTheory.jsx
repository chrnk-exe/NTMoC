import React from 'react';
import { Stack, List, ListItem } from '@mui/material';
import SimpleTextFormula from '../common/SimpleTextFormula';
import OutlinedFormula from '../common/OutlinedFormula';
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';

const AdlemanLogarithmTheory = () => {
    return (
        <Stack fontSize={18} spacing={2}>
            <SimpleTextFormula>
                При решении задач факторизации и дискретного логарифмирования
                активно используются понятия факторной базы и гладких чисел.
            </SimpleTextFormula>

            <SimpleTextFormula>
                Факторная база — это множество простых чисел, которые
                используются для разложения других чисел.
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Факторная база'}
                formula={
                    'B(p) = \\{ q \\in \\mathbb{P}_{\\mathbb{N}} \\mid q \\leq p \\}'
                }
            />

            <SimpleTextFormula>
                Здесь факторная база состоит из всех простых чисел, не
                превышающих заданное число p.
            </SimpleTextFormula>

            <SimpleTextFormula>
                p-гладкие числа — это такие натуральные числа, которые могут
                быть полностью разложены на простые множители из факторной базы,
                ограниченной сверху числом p.
            </SimpleTextFormula>

            <OutlinedFormula
                description={'p-гладкие числа'}
                formula={
                    'S(r) = \\{ n \\in \\mathbb{N} \\mid n = \\prod p_i^{a_i}, p_i \\in B(r) \\}'
                }
            />

            <SimpleTextFormula>
                Другими словами, число является p-гладким, если все его простые
                множители не превосходят заданное число p.
            </SimpleTextFormula>

            <SimpleTextFormula>Пример:</SimpleTextFormula>
            <CentralizedMultiFormula
                header={'Примеры 5-гладких чисел'}
                formulas={[
                    '12 = 2^2 \\cdot 3',
                    '20 = 2^2 \\cdot 5',
                    '45 = 3^2 \\cdot 5',
                ]}
            />

            <SimpleTextFormula>
                Алгоритм опирается на понятие факторной базы и гладких чисел.
            </SimpleTextFormula>
            <SimpleTextFormula>
                Мы выбираем небольшую факторную базу простых чисел $B(r)$, и
                пытаемся представить числа в виде произведения этих простых
                множителей.
            </SimpleTextFormula>
            <SimpleTextFormula>
                Чем проще разложить числа на множители из факторной базы, тем
                легче будет решать линейные уравнения, которые возникают в
                процессе работы алгоритма.
            </SimpleTextFormula>
        </Stack>
    );
};

export default AdlemanLogarithmTheory;
