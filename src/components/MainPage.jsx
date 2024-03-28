import React from 'react';
import {Box, Typography} from '@mui/material';
import Latex from 'react-latex';
import Copyright from "./Copyright";


const MainPage = () => {
    return (
        <Box
            display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={"column"}
            sx={{width: 1, height: 0.9}} position={"relative"}
        >
            {/*<Box*/}
            {/*    component={'img'}*/}
            {/*    position={"absolute"}*/}
            {/*    src={'Abros.jpg'}*/}
            {/*    sx={{opacity: 0.5}}*/}
            {/*    zIndex={1}*/}
            {/*    height={"100vh"}*/}
            {/*    top={30}*/}
            {/*/>*/}
            <Box zIndex={2} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
                 width={'40vw'}
            >
                <Typography variant={'h2'} align={'center'}>
                    CryptoMath -
                </Typography>
                <Typography variant={'h2'} align={'center'}>
                    make cryptography simple!
                </Typography>
                <Typography sx={{mt: 5}} fontSize={17} align={'left'} lineHeight={1.8}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Добро пожаловать на CryptoMath – ваш надежный партнер в мире криптографии и математики!
                </Typography>
                <Typography sx={{mt: 1}} variant={'body1'} align={'left'} lineHeight={1.8}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Наши онлайн
                    калькуляторы и теоретические материалы помогут вам глубже понять основные алгоритмы и методы,
                    лежащие в основе криптографии. Мы предлагаем не только теоретические сведения, но и практические
                    примеры, чтобы помочь вам применить полученные знания на практике. Узнайте больше о шифровании,
                    дешифровании и многом другое на CryptoMath – вашем источнике для изучения криптографии.
                </Typography>

                {/*<Latex>{'$$ 1\\ watt = 1\\ W = {1\\ joule \\over 1\\ second} = J/s = 1\\ J s^{-1} $$'}</Latex>*/}
                {/*<Latex displayMode={true}>{String.raw`$$x_1,_2 = {-b \pm \sqrt{b^2-4ac} \over 2a}$$`}</Latex>*/}
            </Box>
            <Box position={"absolute"} bottom={0}>
                <Copyright simple/>
            </Box>
        </Box>
    );
};

export default MainPage;
