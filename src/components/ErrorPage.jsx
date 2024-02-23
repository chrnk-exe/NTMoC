import React from 'react';
import { Box, Typography } from '@mui/material';


export default function ErrorPage() {
	return (
		<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
			<Box
				display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} px={20} pt={10}
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
					Не лезь блять,
				</Typography>
				<Typography sx={{my: 6}} variant={'body1'} align={'center'}>
					дебил сука ебаный. Ты чё, хххуёл, я те сказали что ли? Залезь, наххуй, нака обратно, блядь! Дебил, блядь.
					— Она тебя сожрёт, блядь. Нахуй ты б?..
					— АААА!
					— Бллядьс!
					— ЁЁЁЁ!
					— Су-ка! Ебан...
					— ААА!
					— (Крехтя) блядь.
					— УУА-А-АААА!
					— Да бляяядь, сука!
					— (Безумный смех до конца видео)
					— Ёбни ей, нахуй.
					— Да как ей ёбнуть? Блядь, дебил, сука, ты, еблан.
					— Ебашь ей в глаз, в глаз хуярь!
					— УААА! УААА! ААА!
					— Палку, палку давай!
					— А! Ай, блядь!
					— Палку давай, блядь! Дебил ебучий, с-с-сука ты!
					— Ты чё, охуел?
					— Ебан ты, да ты...
					— Ублюдок, блядь.
					— Сука, ебан косоголовый, блядь! Тупорылая залупа, блядь.
					— На...
				</Typography>
				{/*<Latex>{'$$ 1\\ watt = 1\\ W = {1\\ joule \\over 1\\ second} = J/s = 1\\ J s^{-1} $$'}</Latex>*/}
				{/*<Latex displayMode={true}>{String.raw`$$x_1,_2 = {-b \pm \sqrt{b^2-4ac} \over 2a}$$`}</Latex>*/}

			</Box>
		</Box>
	);
};

