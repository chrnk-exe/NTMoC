import React from 'react';
import {Stack} from '@mui/material';
import OutlinedFormula from "../common/OutlinedFormula";
import SimpleTextFormula from '../common/SimpleTextFormula';
import {Typography, Link} from '@mui/material'


export default function InverseTheory() {
	return (
		<Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>
			<OutlinedFormula
				description={'Найдем число обратное к числу $a$ по модулю $m$.'}
			/>

			<OutlinedFormula
				description={'Обратный элемент в кольце остатков находится из уравнения'}
				formula={'1=ax-m\\cdot Q_m(ax)'}
				aftertext={'где $x$ и $Q_m(ax)$ - неизвестные, $Q_m(ax)$ - целая часть от деления $ax$ на $m$'}
			/>

			<SimpleTextFormula>Способ нахождения неизвестных $x$ и $Q_m(ax)$ - расширенный классический алгоритм Евклида</SimpleTextFormula>

			<Typography>
                *Расширенный алгоритм Евклида представлен <Link href='/ext_gcd'> в соответсвующем разделе</Link> 
            </Typography>

			<OutlinedFormula
				description={'Уравнение разрешимо тогда и только тогда, когда'}
				formula={'D(a,m)=1'}
				aftertext={'где $x$ и $Q_m(ax)$ - неизвестные'}
			/>
		</Stack>
	)
}
