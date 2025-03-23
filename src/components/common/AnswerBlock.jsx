import React, {useState} from 'react';
import {Box, Switch, FormGroup, FormControlLabel, Typography} from '@mui/material';
import AnswerItem from './AnswerItem';
import Button from "@mui/material/Button";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

const AnswerBlock = ({answer}) => {
    const [showDetails, setShowDetails] = useState(true);

    return answer && answer.length > 0 && (
        <Box width={1}>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <AnswerItem {...answer[0]} answer index={
                    <Box
                        fontSize={14} lineHeight={1.2} fontWeight={600}
                        // color={'#ff6c00'}
                        color={'primary.main'}
                    >
                        Быстрый Ответ
                    </Box>
                }/>
                {/*{*/}
                {/*    answer.length > 1 &&*/}
                {/*    <Box my={0.5} mt={1.5} display={"flex"} justifyContent={"center"} alignItems={"center"} width={1}>*/}
                {/*        {*/}
                {/*            showDetails ? (*/}
                {/*                <Button*/}
                {/*                    startIcon={<ArrowUpwardOutlinedIcon/>}*/}
                {/*                    onClick={e => setShowDetails(false)}*/}
                {/*                >*/}
                {/*                    Скрыть пошаговое решение*/}
                {/*                </Button>*/}
                {/*            ) : (*/}
                {/*                <Button*/}
                {/*                    startIcon={<ArrowDownwardOutlinedIcon/>}*/}
                {/*                    onClick={e => setShowDetails(true)}*/}
                {/*                >*/}
                {/*                    Показать пошаговое решение*/}
                {/*                </Button>*/}
                {/*            )*/}
                {/*        }*/}
                {/*    </Box>*/}
                {/*}*/}
                {
                    showDetails && answer.slice(1).map((item, index) =>
                        <AnswerItem key={index} index={index + 1} {...item} />
                    )
                }
            </Box>
        </Box>
    )
};

export default AnswerBlock;
