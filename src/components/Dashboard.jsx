import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Navigation from './Navigation';
import Button from '@mui/material/Button';
import {AppBar} from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import Advertising from "./Advertising";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';


const AD = true;

export default function Dashboard({children}) {
    const [open, setOpen] = useState(true);
    const drawerToggle = () => setOpen(prev => !prev);

    const [hoverState, setHoverState] = useState(false);
    const navigate = useNavigate();

    return (
        <Box display={'flex'} >
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
                    <Panel defaultSize={28} minSize={20} maxSize={50} style={{zIndex: 3}}>
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

                    <Panel minSize={20} height={'calc(100vh - 64px)'}>
                        <Box
                            component="main"
                            sx={{
                                backgroundColor: theme =>
                                    theme.palette.mode === 'light'
                                        ? theme.palette.grey[100]
                                        : theme.palette.grey[900],
                                overflowY: 'auto',
                                height: 'calc(100vh - 64px)',
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
