import React from 'react';
import {Box, Typography} from '@mui/material';
import Latex from 'react-latex';


const MainPage = () => {
    return (
        <Box
            display={'flex'} justifyContent={'center'} alignItems={'center'}
            sx={{
                width: 1,
                height: 0.9,
                // backgroundImage: 'url(Abros.jpg)'
            }}>
            <Box
                component={'img'}
                position={"absolute"}
                src={'Abros.jpg'}
                width={3/5}
                sx={{opacity: 0.5}}
                zIndex={1}
                height={"auto"}
            />
            <Box zIndex={2} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} width={700}>
                <Typography variant={'h2'} align={'center'}>
                    CryptoMath -
                </Typography>
                <Typography variant={'h2'} align={'center'}>
                    making math simpler!
                </Typography>
                <Typography sx={{mt: 4}} variant={'body1'} align={'left'} lineHeight={1.8}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Здесь вы можете решить различные математические задачи, тесно связанные с современными задачами
                    криптографии,
                    погрузиться в мир теоретико числовых методов и проверить свои собственные знания и умения, пользуясь
                    нашими идеальными калькуляторами, позволяющими вычислить многие непонятные вещи, объяснить те или
                    иные вещи
                    и погрузить вас в мир целых чисел!
                </Typography>

                {/*<Latex>{'$$ 1\\ watt = 1\\ W = {1\\ joule \\over 1\\ second} = J/s = 1\\ J s^{-1} $$'}</Latex>*/}
                {/*<Latex displayMode={true}>{String.raw`$$x_1,_2 = {-b \pm \sqrt{b^2-4ac} \over 2a}$$`}</Latex>*/}
            </Box>
        </Box>
    );
};

export default MainPage;
