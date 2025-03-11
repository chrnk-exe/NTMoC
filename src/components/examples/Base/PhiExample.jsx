import { Box } from '@mui/material'
import React from 'react'
import SimpleTextFormula from '../../theory/common/SimpleTextFormula'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import OutlinedFormula from '../../theory/common/OutlinedFormula'
import CentralizedMultiFormula from '../../theory/common/CentralizedMultiFormula'

const varphiExample = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'}
    sx={{width: 1}} fontSize={17} gap={0.5}>
        
        <SimpleTextFormula>Для вычисления фи-функции Эйлера используется следующий алгоритм:</SimpleTextFormula>
        
        <OutlinedFormula
            description={'Если n разложено на простые множители'}
            formula={'n=p_1^{k_1} \\cdot p_2^{k_2} \\cdot ... \\cdot p_m^{k_m}'}
        />


        <CentralizedMultiFormula
            header={'То функция Эйлера приводится к следующему виду'}
            formulas={[
                '\\varphi(n) = \\varphi(p_1^{k_1} \\cdot p_2^{k_2} \\cdot ... \\cdot p_m^{k_m}) = \\varphi(p_1^{k_1}) \\cdot \\varphi(p_2^{k_2}) \\cdot ... \\cdot \\varphi(p_m^{k_m}) = ',
                '\\ = p_1^{k_1 - 1}(p_1 - 1) \\cdot p_2^{k_2 - 1}(p_2 - 1)  \\cdot ... \\cdot p_m^{k_m - 1}(p_m - 1) =',
                '\\ = p_1^{k_1}(1 - \\frac{1}{p_1}) \\cdot p_2^{k_2}(1 - \\frac{1}{p_2})  \\cdot ... \\cdot p_m^{k_m}(1 - \\frac{1}{p_m}) =',
                '\\ = n \\cdot (1 - \\frac{1}{p_1}) \\cdot (1 - \\frac{1}{p_2}) \\cdot ... \\cdot (1 - \\frac{1}{p_m})'
            ]}
        />

        <SimpleTextFormula>Стоит также отметить, что свойство мультипликативности работает из-за того что {'$p_a^{k_a} \\perp p_b^{k_b}$'}</SimpleTextFormula>

        <OutlinedFormula
            description={'Таким образом формула Эйлера вычисляется следующим образом'}
            formula={'\\varphi(n) = n \\cdot (1 - \\frac{1}{p_1}) \\cdot (1 - \\frac{1}{p_2}) \\cdot ... \\cdot (1 - \\frac{1}{p_m})'}
        />

        <SimpleTextFormula>В конкретном данном калькуляторе реализован алгоритм, приведённый ниже, реализации могут быть различны на различных платформах</SimpleTextFormula>
        <SimpleTextFormula>Также стоит отметить, что сложность вычисления напрямую зависит от сложности факторизации $n$, 
            для чего используются различные алгоритмы, приведённые в соответсвующей секции</SimpleTextFormula>
        
        <SimpleTextFormula>Вычислим быстро значение $\varphi(28)$, $n = 28$</SimpleTextFormula>
        <SimpleTextFormula>Начнём перебор чисел от 2 до $\sqrt(n)$, который будет меняться в ходе работы. </SimpleTextFormula>

        <SimpleTextFormula>Ключевой момент этого условия заключается в том, что после удаления всех степеней делителя $i$ из $n$, оставшееся $n$ уже не делится на $i$. Это значит, что:</SimpleTextFormula>
            

        <SimpleTextFormula>Если $i$ был делителем исходного $n$, то после обработки $i$ он больше не будет делителем нового $n$.</SimpleTextFormula>

        <SimpleTextFormula>Таким образом, условие {'$i∗i<=n$'} продолжает работать корректно, так как мы всегда проверяем делители для текущего значения $n$, а не исходного.</SimpleTextFormula>

        <SimpleTextFormula>Пусть n = 28, i = 2</SimpleTextFormula>
        <SimpleTextFormula>28 делится на 2, значит убираем все степени числа 2 из 28, чтобы получить первое выражение в скобках</SimpleTextFormula>

        <SimpleTextFormula>Таким образом $n = 28 \div 2 = 14 \div 2 = 7$</SimpleTextFormula>
        <OutlinedFormula 
            description={'Выполним умножение и получим первое значение result'}
            formula={'result = 28 - \\frac{28}{2} = 14'}
        />
        <SimpleTextFormula>Стоит отметить, что выражения {'$28 - \\frac{28}{2}$'} и {'$28 \\cdot (1 - \\frac{1}{2})$'} равносильны</SimpleTextFormula>
        <SimpleTextFormula>{'$3^2 > \\sqrt(7)$ - выходим из цикла перебора i'}</SimpleTextFormula>
        <SimpleTextFormula>Похоже $n$ ещё больше 1, а значит осталась последнее выражение в скобках! Тем самым: </SimpleTextFormula>
        <SimpleTextFormula>{'$\\varphi(28) = 14 - \\frac{14}{7} = 12$'} </SimpleTextFormula>
    </Box>
  )
}

export default varphiExample