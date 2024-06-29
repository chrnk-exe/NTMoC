import React from 'react';
import {Box, Stack} from '@mui/material';
import Latex from "react-latex";


export default function LEulerTheory() {
	return (
		<Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>
			<Box lineHeight={2.3}>
				<Latex>{'Определение эль-функции Эйлера'}</Latex>
				<Box display={"inline"} mx={1.5} px={1} py={1} border={'1px gray solid'} width={"min-content"} my={22}>
					<Latex>{'$L(m)=M( \\varphi({p_i}^{a_i}), i \\in \\overline{1, n}) \\cdot [m > 1]+1 \\cdot [m=1]$'}</Latex>
				</Box>
				<Latex>{', где $m=\\prod_{i=1}^{n}p_{i}^{a_i}$,$\\enspace p_i\\in \\Bbb{P}_{\\N}$,$\\enspace a_i \\in \\N$'}</Latex>
				<Latex>{'.'}</Latex>
			</Box>
			<Box lineHeight={2}>
				<Latex>{'Обобщенная теорема Эйлера-Ферма'}</Latex>
				<Box display={"inline"} mx={1.5} px={1} py={0.7} border={'1px gray solid'} width={"min-content"} my={22}>
					<Latex>{'$a^{L(m)} \\stackrel{m}{\\equiv} 1$'}</Latex>
				</Box>
				<Latex>{'.'}</Latex>
			</Box>
			<Box lineHeight={2}>
				<Latex>{'Неравенство между фи- и эль-функциями Эйлера'}</Latex>
				<Box display={"inline"} mx={1.5} px={1} py={0.5} border={'1px gray solid'}>
					<Latex>{'$L(m)<\\varphi(m)$'}</Latex>
				</Box>
				<Latex>{'где 𝑚 не является примарным модулем или удвоенным нечетным примарным модулем'}</Latex>
			</Box>
		</Stack>
	)
}
