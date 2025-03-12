import { Box } from '@mui/material'
import React from 'react'
import OutlinedFormula from '../../theory/common/OutlinedFormula'
import SimpleTextFormula from '../../theory/common/SimpleTextFormula'
import {Typography, Link} from '@mui/material'

const OrderNumberExample = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'}
        sx={{width: 1}} fontSize={17} gap={0.5}>

            <SimpleTextFormula>Найдём число, отвечающее показателю $6$ по модулю $21$</SimpleTextFormula>

            <SimpleTextFormula>{'$m = 21$,  $P^{\\times}_{21}(b) = 6$'}</SimpleTextFormula>
            <SimpleTextFormula>Необходимо найти число, отвечающее порядку $6 = 2 \cdot 3$ по модулю $21$</SimpleTextFormula>
            <SimpleTextFormula>Условние наличия решения - $q | L(m) $, где $L$ - эль-функция Эйлера</SimpleTextFormula>
            <SimpleTextFormula>{'$L(21) = 6$'}</SimpleTextFormula>
            <Typography>
                *Найти значение Эль функции Эйлера можно с помощью  <Link href='/l_euler?args=21'>соответствющего алгоритма</Link>
            </Typography>
            <SimpleTextFormula>Далее необходимо выбрать $a$, которое мы будем перебирать от $2$ до $6$ и вычислить {'$b \\equiv a^{\\frac{L(m)}{q}} \\neq 1 \\mod m$'}</SimpleTextFormula>

            <OutlinedFormula
            description={'Вычислим значение b для a = 2'}
            formula={'b \\equiv2^{\\frac{6}{6}} \\equiv2 \\ne 1 \\mod 21 '}
            />

            <OutlinedFormula
            description={'Вычисляем значение c'}
            formula={'c_0\\equiv 2^{\\frac{6}{2}} \\equiv 8 \\mod 21 '}
            />

            <OutlinedFormula
            description={'Вычисляем значение c для следующего p'}
            formula={'c_1\\equiv 2^{\\frac{6}{3}} \\equiv 4 \\mod 21 '}
            />

            <OutlinedFormula
            description={'Найдено подходящее значение!'}
            />
            <SimpleTextFormula>Показателю $6$ отвечает число $2$. Проверим это ниже</SimpleTextFormula>

            <SimpleTextFormula>{'$2^1 \\equiv 2 \\pmod {21}$'}</SimpleTextFormula>
            <SimpleTextFormula>{'$2^2 \\equiv 4 \\pmod {21}$'}</SimpleTextFormula>
            <SimpleTextFormula>{'$2^3 \\equiv 8 \\pmod {21}$'}</SimpleTextFormula>
            <SimpleTextFormula>{'$2^4 \\equiv 16 \\pmod {21}$'}</SimpleTextFormula>
            <SimpleTextFormula>{'$2^5 \\equiv 32 \\equiv 11 \\pmod {21}$'}</SimpleTextFormula>
            <SimpleTextFormula>{'$2^6 \\equiv 64 \\equiv 1 \\pmod {21}$'}</SimpleTextFormula>

            <SimpleTextFormula>Как видно, $2$ в $6$ степени действительно равно $1$ по модулю $21$ и это минимальная степень, при которой это так!</SimpleTextFormula>
        </Box>
  )
}

export default OrderNumberExample