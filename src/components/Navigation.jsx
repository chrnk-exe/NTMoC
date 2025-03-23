import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
    Box,
    Collapse,
    List,
    ListItemButton, Stack, Tooltip,
} from '@mui/material';


import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import {MenuList} from '../Calculators';


import FunctionsIcon from '@mui/icons-material/Functions';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import {useParams} from "react-router";

const Navigation = ({mobile}) => {
    const [open, setOpen] = useState(Array(MenuList.length).fill(true));

    const {type} = useParams();

    const handleClick = (chosenList) => setOpen(
        prevState => prevState.map(
            (listItem, index) => index === chosenList ? !listItem : listItem
        )
    );

    const navigate = useNavigate();

    return (
        <List sx={{pt: 0.7, pb: 3}}>
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
                                <Typography maxWidth={'21vw'} fontSize={18}>
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
                                                disabled={alg.disable}
                                                selected={type === alg.type}
                                                sx={{
                                                    borderBottom: mobile ? '1px solid #ccc' : 'none',
                                                    py: mobile ? 2 : 1,
                                                    px: 0.5, pl: 4,
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
                                                        <Tooltip title={`Ввод: ${alg.Input ? 'Есть' : 'Нет'}`}>
                                                            <FunctionsIcon sx={{
                                                                color: alg.Input ? '#3f51b5' : '#999',
                                                                transform: 'scale(0.9)'
                                                            }}/>
                                                        </Tooltip>
                                                        <Tooltip title={`Теория: ${alg.Theory ? 'Есть' : 'Нет'}`}>
                                                            <LibraryBooksOutlinedIcon sx={{
                                                                color: alg.Theory ? '#ff9800' : '#999',
                                                                transform: 'scale(0.9)'
                                                            }}/>
                                                        </Tooltip>
                                                        <Tooltip title={`Пример: ${alg.Example ? 'Есть' : 'Нет'}`}>
                                                            <ImageOutlinedIcon sx={{
                                                                color: alg.Example ? '#4caf50' : '#999',
                                                                transform: 'scale(0.9)'
                                                            }}/>
                                                        </Tooltip>
                                                    </Stack>

                                                    <Typography
                                                        // maxWidth={'20vw'}
                                                        fontSize={mobile ? 20 : 17}
                                                        sx={{pr: 3}}
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
