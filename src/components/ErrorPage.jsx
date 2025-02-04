import React from 'react';
import { Box, Typography } from '@mui/material';

//               ..,,:::;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;::1ffLLLLLLLLLLL
//              ..,,::;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;::::iiiiiiii;ii11ttttttttt
//           .,,,:;;;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:. ,:;iiiiiiiiiiiii;;;;;;;;;;
//         .,..,:;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:. ,t1iiiiiiiiiiiiiiiiiiiiiiiii
//            :iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;,  ;C00L1iiiiiiiiiiiiiiiiiiiiiii
//           :iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;,  :tG0000Gfiiiiiiiiiiiiiiiiiiiiii
// ::::::,,..;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:. ,tG00000000Liiiiiiiiiiiiiiiiiiiii
// ;;;;iiii::iiiiiiiiiiiiiiiiiiiii;iiiiiiiiii;.  ;C00000000000C1iiiiiiiiiiiiiiiiiii
// 11i;::;i;;iiiiiiiiiiiiiiii;;;iiii;iiiiii;,  :f0Ct11fC0000000G1;iiiiiiii;;;;i:;ii
// 11111i;:;iiiiiiiiiiiiiiiiiiiiiiii:;iii;,  ,tG00i,. .,iL000000L,:iii;;;;itLCf:ii;
// 1111111i:;iiiiiiiiiiiiiiiiiiii;;iii;:,..,:t0000t,    .:L0000C;,,;;;ifCG88@@L:;;:
// 11111111i;iiiiiiiiiiiiiiiiiiiiiii;;;:::;ii;f000Gt:.. .:f000L;,::;tG8@@@@88Gt:;;i
// 11111111i;iiiiiiiiiiiiiiiiiiiiiii,.:,::;;ii;f0000Cft1tLG0Gf::,,iC8@@8@80CC0C;iii
// 11111111;;iiiiiiiiiiiiiiiiiiii;,.  :;;:;:;ii;1C00000000GLi::,iC8@88@80CG8@@81;;i
// 1111iii;;iiiiiiiiiiiiiiiiiii;,  ..:iiii;:;iii;itCGGGCLti;:::f8@888@8CC8@@@@@8L1i
// 1111;;;;;;;;iiiiiiiiiiiiii;.  .iLCt;;ii;;iiiiii;;i;:::,:::;L8@888@0L0@@@@@@@@8Gf
// 1111111i;;:;iiiiiiiiiiii;,  .1C0000Gt;;iiiiiiiiiii;:;;;;;;G@8888@GC8@@@@@@@8GG08
// 111111i;;;;:iiiiiiiiiii:.  :LGLLLCG00C1;;iiiiiiiiiiiiii;iG@888@@CC@@@@@@@0CG8@@@
// i1111111111;;iiiiiiiii:  .1GL;,..,iL000Li;iiiiiiiiiiii;i0@888@@0C@@@@@@8CC8@@@@@
// .,;i11111111;;iiiiiii:  ;L001,    .:f000Gi:iiiiiiiii;;;C@8888@@@@@@@@8GC8@@@@@@@
//    .,:;iiiii;:;iiiii:  iGG00L:.    .;G000L,;iiii;::::::C8@@8@@@@@@@@0C0@@@@@@@@@
//         ..... .:iiii: .tGGG00L1;,..,iGGGGf.:;iii;,..,. .:f88@@@@@@@CC8@@@@@@@@@@
//                 :iii;.:;tGGGG00GCLffCGGGL:,:iiii;..f0i    L@@@@@@@@8@@@@@88@@@@@
//                  ,:ii;ii;1LGGGGG00GGGGGf;::;ii;;, ;8t.    f@@@@@@@@@@@@@@@8@@@@@
//                    ,;iiiii;1LGGGGGGGGLi,:;:;i1tfi .:      C@@@@@@@@@8GLC8@@@@@@@
//                     .:iiiii;i1fLCCCCt:,:;;:1C08@0i:::::;;i0@@@@@@@0LiiG@@@@@@@@@
//                       ,;iiiiii;iii;:,:;;;;t8@@8@@@88888@@@@@8088G1::f8@@@@@@@@@@
//                        .:iiiiiiii;;;;iii;f8@@@@@@@@@@@@@@@@@@8Gi,,t08G0@@@@@@@@@
//                          ,;iiiiiiiiiiii;i8@80GG@@@@@@@@@@@@@@8t:1G80G88888@@@@@@
//                           .:iiiiiiiiiii;180CC0@@@@@@@@@@@@@@@CL08008@@888@@@@@@@
//                             :iiiiiiiiii;;CG88@@@@@8GG0@@@@@@@@@@@@@888@@@@@@@@@@
//                             ,iiiiiiii;:::0@@8@@8GGG0@@@@@@888@@@@@@@@@@@@@@@@@@@


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
				<Typography sx={{my: 6, whiteSpace: 'pre-line'}} variant={'body1'} align={'center'}>
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

