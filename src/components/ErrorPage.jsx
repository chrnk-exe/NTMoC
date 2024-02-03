import React from 'react';
import { Box, Typography } from '@mui/material';


export default function ErrorPage() {
	return (
		<Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
			width: 1,
			height: 0.9
		}}>
			<Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} padding={20}>
				<Typography variant={'h2'} align={'center'}>
					Не лезь блять,
				</Typography>
				<Typography sx={{mt: 3}} variant={'body1'} align={'center'}>
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

				<Box
					mt={4}
					component={'img'}
					src={'https://www.ttelegraf.ru/wp-content/uploads/2022/08/medved-fotostok-e1660887476383.jpg'}
					width={500}
					height={"auto"}
				>
				</Box>
			</Box>
		</Box>
	);
};

