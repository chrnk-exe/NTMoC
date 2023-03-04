import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
    Box,
    Collapse,
    List,
    ListItemButton,
} from '@mui/material';

import RemoveIcon from '@mui/icons-material/Remove';
import CalculateIcon from '@mui/icons-material/Calculate';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import {MenuList} from '../Calculators';

const Navigation = () => {
    const [open, setOpen] = useState<boolean[]>(Array(MenuList.length).fill(false));
    const handleClick = (chosenList: number) => setOpen(prevState => prevState.map(
        (listItem, index) => index === chosenList
            ? !listItem : listItem
    ));
    const navigate = useNavigate();
    return (
        <List sx={{mt: 1, pb: 3}}>
            {
                MenuList.map((list, index) =>
                    <React.Fragment key={index}>
                        <ListItemButton onClick={() => handleClick(index)} sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            px: 3, py: 1.5,
                        }}>
                            <Box display={"flex"} gap={2.5} alignItems={"center"}>
                                <CalculateIcon fontSize={"large"} color={"primary"} />
                                <Typography
                                    maxWidth={'21vw'}
                                    fontSize={'1.2em'}>
                                    {list.title}
                                </Typography>
                            </Box>
                            {open[index] ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemButton>
                        <Collapse in={open[index]} timeout="auto" unmountOnExit>
                            {list.Routes.map((route, index) => (
                                <List key={index} component="div" disablePadding>
                                    <ListItemButton
                                        sx={{p: 0.5, pl: 4}}
                                        onClick={() => navigate(`/app${route.link}`)}>
                                        <Box display={"flex"} gap={3}>
                                            <RemoveIcon/>
                                            <Typography
                                                component="div"
                                                maxWidth={'20vw'}
                                                fontSize={'1.1em'}
                                                sx={{
                                                    display: {
                                                        xs: 'none',
                                                        sm: 'block',
                                                    },

                                                }}>
                                                {route.title}
                                            </Typography>
                                        </Box>
                                    </ListItemButton>
                                </List>
                            ))}
                        </Collapse>
                    </React.Fragment>
                )
            }
        </List>
    );
};

export default Navigation;
