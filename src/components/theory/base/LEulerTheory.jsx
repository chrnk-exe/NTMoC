import React from 'react';
import {Box, Stack} from '@mui/material';
import Latex from "react-latex";
import OutlinedFormula from "../common/OutlinedFormula";


export default function LEulerTheory() {
	return (
		<Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>
			<OutlinedFormula
				description={'Определение эль-функции Эйлера'}
				formula={'L(m)=M( \\varphi({p_i}^{a_i}), i \\in \\overline{1, n}) \\cdot [m > 1]+1 \\cdot [m=1]'}
				aftertext={'где $m=\\prod_{i=1}^{n}p_{i}^{a_i}$,$\\enspace p_i\\in \\Bbb{P}_{\\N}$,$\\enspace a_i \\in \\N$'}
			/>
			<OutlinedFormula
				description={'Обобщенная теорема Эйлера-Ферма'}
				formula={'a^{L(m)} \\stackrel{m}{\\equiv} 1'}
			/>
			<OutlinedFormula
				description={'Неравенство между фи- и эль-функциями Эйлера'}
				formula={'L(m)<\\varphi(m)'}
				aftertext={'где $m$ не является примарным модулем или удвоенным нечетным примарным модулем'}
			/>
		</Stack>
	)
}
