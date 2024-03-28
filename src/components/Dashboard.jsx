import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Navigation from './Navigation';
import Button from '@mui/material/Button';
import {AppBar, Grow} from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import Advertising from "./Advertising";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import {Remove} from "@mui/icons-material";
import ClearIcon from '@mui/icons-material/Clear';
import {MenuList} from "../Calculators";


const AD = false;


export default function Dashboard({children}) {
    const [open, setOpen] = useState(true);
    const drawerToggle = () => setOpen(prev => !prev);

    const [hoverState, setHoverState] = useState(false);
    const navigate = useNavigate();

    const [storage, setStorage] = useState({});


    useEffect(() => {
        const handleStorage = () => {
            let temp_storage;
            try {
                let val = sessionStorage.getItem('solve_history')
                console.log(val)

                if (val) {
                    temp_storage = JSON.parse(val);
                } else {
                    temp_storage = []
                }
            } catch (e) {
                temp_storage = []
            }

            setStorage(temp_storage)
        }
        handleStorage();
        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)
    }, []);

    const clearStorage = () => {
        sessionStorage.removeItem('solve_history')
        setStorage([]);
    }

    function compareTimestamp(a, b) {
        if (a.timestamp < b.timestamp) {
            return -1;
        }
        if (a.timestamp > b.timestamp) {
            return 1;
        }
        return 0;
    }

    return (
        <Box display={'flex'}>
            <AppBar component="nav" sx={{bgcolor: '#339353'}}>
                <Toolbar>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={1} mx={1}>
                        <Box display={'flex'} alignItems={'center'}>
                            <FunctionsIcon fontSize={'large'}/>
                            <Button onClick={() => navigate('/')}>
                                <Typography color={'#FFFFF1'} noWrap>
                                    Теоретико числовые методы криптографии
                                </Typography>
                            </Button>
                        </Box>
                        <Button onClick={() => navigate('/discussion')} sx={{color: 'white'}}>
                            <ChatOutlinedIcon color={"secondary"} fontSize={'large'}/>
                            <Box pl={1}>
                                Обсуждения
                            </Box>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box width={1} mt={8}>
                <PanelGroup direction="horizontal">
                    <Panel defaultSize={26} minSize={20} maxSize={50} style={{zIndex: 3}}>
                        <Box
                            variant="permanent" open={open}
                            anchor={'left'}
                            sx={{
                                height: 'calc(100vh - 64px)',
                                zIndex: 100,
                                boxSizing: 'border-box',
                                backgroundColor: hoverState ? '#43be6d' : '#f5f5f5',
                                transition: 'all .2s linear',

                                '&::-webkit-scrollbar-thumb': {
                                    borderRadius: '5px',
                                    backgroundColor: 'inherit',
                                },
                                '&::-webkit-scrollbar': {
                                    paddingLeft: '2px',
                                    backgroundColor: hoverState ? 'white' : '#f5f5f5',
                                },
                                overflow: 'auto',

                                ':hover': {
                                    overflowY: 'auto',
                                },
                            }}
                            onClose={drawerToggle}
                        >
                            <Box
                                bgcolor={'white'}
                                onMouseEnter={e => setHoverState(true)}
                                onMouseLeave={e => setHoverState(false)}
                                sx={{
                                    minHeight: 'calc(100vh - 64px)',
                                }}
                            >
                                <Navigation/>
                            </Box>
                        </Box>
                    </Panel>
                    <PanelResizeHandle hidden={hoverState}/>

                    <Panel minSize={20}>
                        <Box display={"flex"} height={'calc(100vh - 64px)'}>
                            <Box
                                component="main"
                                width={1}
                                sx={{
                                    backgroundColor: theme =>
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[100]
                                            : theme.palette.grey[900],
                                    overflowY: 'auto',
                                    maxHeight: 'calc(100vh - 64px)',
                                    '&::-webkit-scrollbar-thumb': {
                                        borderRadius: '5px',
                                    },
                                    '&::-webkit-scrollbar': {
                                        width: '5px',
                                        paddingLeft: '2px',
                                    },
                                }}
                            >
                                {children}
                            </Box>
                            {
                                storage?.length > 0 &&
                                <Box
                                    width={90} mx={0.8}
                                    sx={{
                                        overflowY: 'auto',
                                        height: 'calc(100vh - 64px)',
                                        maxHeight: 'calc(100vh - 64px)',

                                        backgroundColor: theme =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[100]
                                                : theme.palette.grey[900],
                                    }}
                                >
                                    <Button
                                        sx={{p: 0}} fullWidth
                                        onClick={clearStorage}
                                    >
                                        <Box
                                            width={1} height={90}
                                            borderBottom={'2px solid #bbb'}
                                            display={"flex"} flexDirection={"column"}
                                            justifyContent={"center"} alignItems={"center"}
                                        >
                                            <ClearIcon
                                                fontSize={"large"} color={"error"}
                                            />
                                            <Box fontSize={14} textTransform={"capitalize"} lineHeight={1.1} color={'error.main'}>
                                                очистить историю
                                            </Box>
                                        </Box>
                                    </Button>
                                    {
                                        storage.sort(compareTimestamp).reverse().map((record, index) => {
                                                let alg = MenuList.find(
                                                    elem => elem.Routes.find(route => route.type === record.type)
                                                )
                                                return (
                                                    <Button
                                                        sx={{p: 0}} key={index} fullWidth
                                                        href={`/${record.type}?args=${record.args}`}
                                                    >
                                                        <Grow in={true}>
                                                            <Box
                                                                width={1} height={70}
                                                                borderBottom={'2px solid #ccc'}
                                                                display={"flex"} flexDirection={"column"}
                                                                justifyContent={"center"} alignItems={"center"}
                                                                gap={0.1}
                                                            >
                                                                <Box height={0.1}/>

                                                                <alg.icon fontSize={"large"} color={"primary"}/>
                                                                <Box>
                                                                    {new Date(record.timestamp).toLocaleTimeString('ru')}
                                                                </Box>
                                                            </Box>
                                                        </Grow>
                                                    </Button>
                                                )
                                            }
                                        )
                                    }
                                </Box>
                            }
                        </Box>
                    </Panel>
                    {
                        AD &&
                        <Panel defaultSize={10.5} style={{zIndex: 3}}>
                            <Advertising/>
                        </Panel>
                    }
                </PanelGroup>
            </Box>
        </Box>
    );
}
