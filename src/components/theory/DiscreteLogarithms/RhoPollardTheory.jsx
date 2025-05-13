import React from 'react';
import { Stack } from '@mui/material';
import SimpleTextFormula from '../common/SimpleTextFormula';
import OutlinedFormula from '../common/OutlinedFormula';
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';

const RhoPollardTheory = () => {
    return (
        <Stack fontSize={18} spacing={2}>
            <SimpleTextFormula>
                Ро-алгоритм Полларда основан на парадоксе дней рождения, который
                утверждает, что в относительно небольшой группе людей
                вероятность того, что два человека родились в один день,
                значительно выше, чем кажется интуитивно (например, уже в группе
                из 23 человек вероятность выше 50%). Таким образом, в
                ро-алгоритме используется идея случайного блуждания и поиска
                циклов (повторений), позволяющая найти совпадения значительно
                быстрее, чем простым перебором.
            </SimpleTextFormula>
            <SimpleTextFormula>
                Одним из важнейшим для понимания идеи ро-методов Полларда
                является следующий факт:
            </SimpleTextFormula>
            <SimpleTextFormula>
                Пусть{' '}
                {
                    '$f \\in map(\\mathbb{Z}_m)$, $g(f,x,k)=f(...f(f(x))) - k$ раз'
                }
                , тогда в силу конечности {'$\\mathbb{Z}_m$'} у отображения $g$
                при некотором $k$ найдётся неподвижная точка $x$
            </SimpleTextFormula>
            <SimpleTextFormula>
                Другими словами, если мы будем брать значения функции $f$
                многократно, то наступит момент, когда она начнет повторяться.
            </SimpleTextFormula>
            <SimpleTextFormula>
                Из парадокса дней рождения следует, что с вероятностью, не менее
                {'$\\frac{1}{2}$'} такая точка найдётся уже при{' '}
                {'$k = O(\\sqrt(m))$'}
            </SimpleTextFormula>
            <OutlinedFormula
                description={
                    'Для дискретного логарифмирования используется следующее отображение'
                }
                formula={
                    'f(y) = R_p(ay) \\cdot [y < \\frac{p-1}{2}] + R_p(by) \\cdot [y \\geq \\frac{p-1}{2}]'
                }
            />
            <SimpleTextFormula>
                Здесь $R_p(x)$ — это остаток от деления $x$ на $p$.
            </SimpleTextFormula>
            <SimpleTextFormula>
                Пусть {'$ x \\equiv ind_ab \\pmod{p-1}, y=a^ub^v$'} тогда
            </SimpleTextFormula>
            <SimpleTextFormula>
                {`$ind_a(f(y)) \\equiv \\left[
                \\begin{aligned} 
                    1 + u + v \\cdot x, R_p(a^ub^v) < \\frac{p-1}{2} \\\\ 
                    u + (v + 1) \\cdot x, R_p(a^ub^v) \\geq \\frac{p-1}{2} 
                    \\end{aligned}
                    \\right.
                    \\pmod{p-1}$`}
            </SimpleTextFormula>
            <SimpleTextFormula>
                Таким образом, для нахождения $x$ достаточно найти такие $u$ и
                $v$, что
            </SimpleTextFormula>
            <SimpleTextFormula></SimpleTextFormula>
        </Stack>
    );
};

export default RhoPollardTheory;
