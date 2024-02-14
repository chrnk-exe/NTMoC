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


const AD = true;

export default function Dashboard({children}) {
    const [open, setOpen] = useState(true);
    const drawerToggle = () => setOpen(prev => !prev);

    const [hoverState, setHoverState] = useState(false);
    const navigate = useNavigate();

    return (
        <Box display={'flex'} flexGrow={1}>
            <AppBar component="nav" sx={{bgcolor: '#339353'}}>
                <Toolbar>
                    <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                        <FunctionsIcon fontSize={'large'}/>
                        <Button
                            sx={{
                                color: '#FFFFF1',
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                p: 0
                            }}
                            onClick={() => navigate('/')}
                        >
                            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                                <Typography
                                    noWrap textAlign={'center'}
                                    sx={{
                                        color: '#FFFFF1',
                                        alignItems: 'center',
                                        display: 'flex',
                                        justifyContent: 'flex-start'
                                    }}
                                >
                                    Теоретико числовые методы криптографии
                                </Typography>
                            </Box>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box width={1} mt={8}>
                <PanelGroup direction="horizontal">
                    <Panel defaultSize={28} minSize={20} maxSize={50}>
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
                                    width: '5px',
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
                        <Panel defaultSize={10.5}>
                            <Box pl={1} ml={2}>
                                {
                                    [...Array(40)].map(x =>
                                        <Box fontSize={16} fontWeight={600} color={'gray'}>
                                            Реклама &nbsp;&nbsp;&nbsp;Реклама
                                        </Box>
                                    )
                                }
                            </Box>
                        </Panel>
                    }
                </PanelGroup>
            </Box>
        </Box>
    );
}
