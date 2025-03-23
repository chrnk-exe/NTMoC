import { Box } from '@mui/material'
import React from 'react'
import OutlinedFormula from '../../theory/common/OutlinedFormula'
import SimpleTextFormula from '../../theory/common/SimpleTextFormula'

export default function PrimeRootExample () {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'}
        sx={{width: 1}} fontSize={17} gap={0.5}>

            <SimpleTextFormula>{'Первообразный корень по модулю $m$ — это такое число $g$, что его степени $g^1,g^2,…,g^{ϕ(m)}$ (где $ϕ(m)$ — функция Эйлера) дают все числа, взаимно простые с $m$, и все эти степени различны по модулю $m$.'}</SimpleTextFormula>

            {/* <SimpleTextFormula>Для вычисления этого корня можно воспользоваться следующим алгоритмом</SimpleTextFormula> */}

            <OutlinedFormula
                description={'Для вычисления первообразного корня по модулю необходимо найти такое число, отвечающее показателю q, равному значению функции Эйлера от этого модуля'}
                formula={'P^{\\times}_m(q) = \\varphi(m)'}
            />

            <SimpleTextFormula>А для нахождение всех корней необходимо перебрать все числа от 1 до m, далее найдём только один первообразный корень для модуля 7</SimpleTextFormula>

            <SimpleTextFormula>{'$m = 7,  \\varphi(m) = 6$'}</SimpleTextFormula>
            <SimpleTextFormula>Необходимо найти число, отвечающее порядку $\varphi(m) = 6 = 2 \cdot 3$ по модулю $7$</SimpleTextFormula>
            <SimpleTextFormula>Условние наличия решения - $q | L(m) $, где $L$ - эль-функция Эйлера</SimpleTextFormula>
            <SimpleTextFormula>Далее необходимо выбрать $a$, которое мы будем перебирать от 2 до $\varphi(m) = 6$ и вычислить {'$b \\equiv a^{\\frac{L(m)}{q}} \\neq 1 \\mod m$'}</SimpleTextFormula>
            <SimpleTextFormula>Если выполняется {'$c_i \\equiv b^{\\frac{q}{p_i}} \\neq 1 \\mod m$'} где $p_i$ - это элемент из множества чисел, получающихся после факторизации $\varphi(m)$ (2 и 3 в нашем случае, то есть собственные простые делители), то число $b$ отвечает показателю $q$, то есть $\varphi(m)$ </SimpleTextFormula>

            <OutlinedFormula
            description={'Вычислим значение b для a = 2'}
            formula={'b \\equiv2^{\\frac{6}{6}} \\equiv2 \\ne 1 '}
            />

            <OutlinedFormula
            description={'Вычислим значение b для a = 3'}
            formula={'b \\equiv3^{\\frac{6}{6}} \\equiv3 \\ne 1 '}
            aftertext={'Выполняется, продолжаем дальше'}
            />

            <OutlinedFormula
            description={'Вычисляем значение c'}
            formula={'c_0\\equiv 3^{\\frac{6}{2}} \\equiv 6 '}
            />

            <OutlinedFormula
            description={'Вычисляем значение c для следующего p'}
            formula={'c_1\\equiv 3^{\\frac{6}{3}} \\equiv 2 '}
            />

            <OutlinedFormula
            description={'Найдено подходящее значение!'}
            />
            <SimpleTextFormula>Показателю 6 отвечает число 3, значит оно - первообразный корень! Проверим это ниже:</SimpleTextFormula>

            <SimpleTextFormula>$3^1 \equiv 3 \pmod 7$</SimpleTextFormula>
            <SimpleTextFormula>$3^2 \equiv 2 \pmod 7$</SimpleTextFormula>
            <SimpleTextFormula>$3^3 \equiv 6 \pmod 7$</SimpleTextFormula>
            <SimpleTextFormula>$3^4 \equiv 4 \pmod 7$</SimpleTextFormula>
            <SimpleTextFormula>$3^5 \equiv 5 \pmod 7$</SimpleTextFormula>
            <SimpleTextFormula>$3^6 \equiv 1 \pmod 7$</SimpleTextFormula>

            <SimpleTextFormula>Как видно, 3 действительно является порождающим элементом а следовательно - первообразный корень!</SimpleTextFormula>
        </Box>
  )
};
