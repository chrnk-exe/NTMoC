import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
    Box,
    Collapse,
    List,
    ListItemButton, Stack, Tooltip,
} from '@mui/material';

import RemoveIcon from '@mui/icons-material/Remove';
import CalculateIcon from '@mui/icons-material/Calculate';



import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import {MenuList} from '../Calculators';


import FunctionsIcon from '@mui/icons-material/Functions';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import {useParams} from "react-router";

const Navigation = () => {
    const [open, setOpen] = useState(Array(MenuList.length).fill(true));

    const {type} = useParams();

    const handleClick = (chosenList) => setOpen(
        prevState => prevState.map(
            (listItem, index) => index === chosenList ? !listItem : listItem
        )
    );

    const navigate = useNavigate();

    return (
        <List sx={{pt: 0.7, pb: 3}} maxH>
            {
                MenuList.map((list,index) =>
                    <React.Fragment key={index}>
                        <ListItemButton
                            onClick={() => handleClick(index)}
                            sx={{
                                display: 'flex', justifyContent: 'space-between', px: 3, py: 1.5,
                            }}
                        >
                            <Box display={'flex'} gap={2.5} alignItems={'center'}>
                                <list.icon fontSize={'large'} color={'success'}/>
                                <Typography maxWidth={'21vw'} fontSize={'1.2em'}>
                                    {list.title}
                                </Typography>
                            </Box>
                            {open[index] ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemButton>
                        <Collapse in={open[index]} timeout="auto" unmountOnExit
                        >
                            <Box mb={1}>
                                {
                                    list.Routes.map((alg, index) => (
                                        <List key={index} component="div" disablePadding>
                                            <ListItemButton

                                                selected={type === alg.type}
                                                sx={{
                                                    p: 0.5, pl: 4,
                                                    "&.Mui-selected": {
                                                        backgroundColor: '#efefef',
                                                        ':hover': {
                                                            backgroundColor: '#efefef',
                                                        }
                                                    },
                                                }}
                                                onClick={() => navigate(`/${alg.type}`)}
                                            >
                                                <Box display={'flex'} gap={3}>
                                                    {/*<RemoveIcon/>*/}

                                                    <Stack
                                                        display={"flex"} justifyContent={"flex-start"} alignItems={"center"}
                                                        direction={'row'} width={68} spacing={0.25}
                                                    >
                                                        <Tooltip title={`Calc: ${alg.Input ? 'Есть' : 'Нет'}`}>
                                                            <FunctionsIcon sx={{
                                                                color: alg.Input ? '#3f51b5' : '#999',
                                                                transform: 'scale(0.9)'
                                                            }}/>
                                                        </Tooltip>
                                                        <Tooltip title={`Теория: ${alg.Theory ? 'Есть' : 'Нет'}`}>
                                                            <LibraryBooksOutlinedIcon sx={{
                                                                color: alg.Theory ? '#4caf50' : '#999',
                                                                transform: 'scale(0.9)'
                                                            }}/>
                                                        </Tooltip>
                                                        <Tooltip title={`Пример: ${alg.Example ? 'Есть' : 'Нет'}`}>
                                                            <ImageOutlinedIcon sx={{
                                                                color: alg.Example ? '#ff9800' : '#999',
                                                                transform: 'scale(0.9)'
                                                            }}/>
                                                        </Tooltip>

                                                    </Stack>


                                                    <Typography
                                                        // maxWidth={'20vw'}
                                                        fontSize={18}
                                                    >
                                                        {alg.title}
                                                    </Typography>
                                                </Box>
                                            </ListItemButton>
                                        </List>
                                    ))
                                }
                            </Box>
                        </Collapse>
                    </React.Fragment>
                )
            }
        </List>
    );
};

export default Navigation;
