import React from 'react';
import {Box, Stack} from '@mui/material';
import Latex from "react-latex";
import OutlinedFormula from "../common/OutlinedFormula";


export default function InverseTheory() {
	return (
		<Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>
			<OutlinedFormula
				description={'Найдем число обратное к числу $a$ по модулю $m$.'}
			/>
			<OutlinedFormula
				description={'Обратный элемент в кольце остатков находится из уравнения'}
				formula={'1=ax-m\\cdot Q_m(ax)'}
				aftertext={'где $x$ и $Q_m(ax)$ - неизвестные'}
			/>
			<OutlinedFormula
				description={'Уравнение разрешимо тогда и только тогда, когда'}
				formula={'D(a,m)=1'}
				aftertext={'где $x$ и $Q_m(ax)$ - неизвестные'}
			/>
		</Stack>
	)
}
