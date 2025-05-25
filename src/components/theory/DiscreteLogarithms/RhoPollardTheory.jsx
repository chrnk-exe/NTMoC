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

            <CentralizedMultiFormula
                header={
                    'Подробнее следует указать следующую последовательность шагов'
                }
                formulas={[
                    '$y = a^ub^v$',
                    '$a^x=b \\pmod p$',
                    '$y = a^ua^vx = a^{u+vx}$',
                    '$ind_a(y) = u+vx$',
                ]}
                alignItems={'flex-start'}
            />
            {/* <OutlinedFormula
                description={'Условия завершения алгоритма'}
                formula={
                    '$f(y_1) \\equiv f(y_2) \\pmod p \\Rightarrow u_1+v_1x \\equiv u_2+v_2x \\pmod{p-1}$'
                }
                aftertext={
                    'где $ind_a(f(y_i)) \\equiv u_i+v_ix \\pmod{p-1}, i \\in \\{1,2\\}$'
                }
            /> */}
            <SimpleTextFormula>
                Далее возможно применить модификацию Флойда для поиска цикла и
                мы получим следующее выражение
            </SimpleTextFormula>
            <SimpleTextFormula>
                {`$
                \\begin{cases}
                (u,v) \\in N^2_{(1..p-1)} \\\\
                w_{k+1} = \\left[
                    \\begin{aligned} 
                        w_k + 1, x_k < \\frac{p-1}{2} \\\\
                        w_k + x, x_k \\geq \\frac{p-1}{2} \\\\
                    \\end{aligned}, w_1 = u+vx
                    \\right. \\\\
                z_{k+1} = \\left[
                    \\begin{aligned}
                        z_k + 2, f(y_k) < \\frac{p-1}{2}, y_k < \\frac{p-1}{2} \\\\
                        z_k + 2x, f(y_k) \\geq \\frac{p-1}{2}, y_k \\geq \\frac{p-1}{2} \\\\
                        z_k + 1 + x, иначе
                    \\end{aligned}, z_1 = w_1
                    \\right. \\\\
                x_{k+1} = f(x_k), x_1 = a^ub^v \\\\
                y_{k+1} = f(f(y_k)), y_1 = x_1 \\\\
                \\end{cases}
                $`}
            </SimpleTextFormula>
            <SimpleTextFormula>
                здесь {'$z_{k+1}$'} и {'$w_{k+1}$'} - это линейные функции от
                решения $x$ исходного сравнения.
            </SimpleTextFormula>
            <SimpleTextFormula>
                Алгоритм завершается, когда найдётся $k$, для которого
                {'$x_{k+1} = y_{k+1}$'}.
            </SimpleTextFormula>
            <SimpleTextFormula>
                Искомый логарифм $x$ находится как решение линейного сравнения{' '}
                {'$w_{k+1} \\equiv z_{k+1} \\mod{p-1}$'}
            </SimpleTextFormula>

            <SimpleTextFormula>
                В случае, если
                {
                    '$P^{\\times}_{\\frac{p-1}{2}}(a) > Q_{\\gamma}(p-1), где \\ \\gamma=D(u_i-u_j, p-1)$'
                }
                следует изменить значения $u$ и $v$
            </SimpleTextFormula>
        </Stack>
    );
};

export default RhoPollardTheory;
