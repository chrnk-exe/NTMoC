import React from 'react';
import { Box, Typography } from '@mui/material';


export default function ErrorPage() {
	return (
		<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
			<Box
				display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} px={20}
				pt={10}
			>
				<Box
					top={10}
					component={'img'}
					position={"absolute"}
					src={'bear.jpg'}
					height={'100vh'}
					sx={{opacity: 0.2}}
					zIndex={0}
				/>

				<Typography variant={'h2'} align={'center'}>
					<span style={{fontWeight: 300, paddingRight: 20}}>
						404.
					</span>
					Не лезь глупец,
				</Typography>
				<Typography sx={{my: 6}} variant={'body1'} align={'center'}>
					— Не вмешивайся, глупец, дурак, недоделка. Ты что, не понимаешь? Отойди, вернись обратно. Неужели тебе не ясно?
					— Она тебя атакует, опасно.
					— АААА!
					— Ой!
					— Ой, ой!
					— Карамба!
					— Проклятье! Ох!
					— ААА!
					— (Звуки издевательства)
					— УУА-А-АААА!
					— О, проклятье!
					— (Безумный смех до конца видео)
					— Попади ей, не дай отстать.
					— Как же ей попасть? Глупец!
					— Пойдем, поддержи меня.
					— Ай, больно!
					— Дай палку, поддержи меня!
					— Ай, это больно!
					— Ты что, сошел с ума?
					— Проклятье!
					— Недотрога! Глупец!
					— Безмозглая тварь!
					— Остановись...
				</Typography>
				{/*<Latex>{'$$ 1\\ watt = 1\\ W = {1\\ joule \\over 1\\ second} = J/s = 1\\ J s^{-1} $$'}</Latex>*/}
				{/*<Latex displayMode={true}>{String.raw`$$x_1,_2 = {-b \pm \sqrt{b^2-4ac} \over 2a}$$`}</Latex>*/}

			</Box>
		</Box>
	);
};

