import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Navigation from './Navigation';
import Button from '@mui/material/Button';
import {AppBar, Drawer} from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";

const menuWidth = '27vw';

export default function PrimarySearchAppBar({children}) {
    const [open, setOpen] = useState(true);
    const drawerToggle = () => setOpen(prev => !prev);

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
                                <Typography noWrap textAlign={'center'}
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

            <Box height={'calc(100vh - 64px)'} width={1} mt={8}>
                <PanelGroup direction="horizontal">
                    <Panel defaultSize={28} minSize={20} maxSize={50}>
                        <Box
                            variant="permanent" open={open}
                            anchor={'left'}
                            sx={{
                                // height: '100vh',
                                height: 'calc(100vh - 64px)',

                                zIndex: 100,
                                boxSizing: 'border-box',
                                // width: 1,
                                // minWidth: 365,
                                overflowX: 'hidden',
                                '&::-webkit-scrollbar-thumb': {
                                    // bgColor: 'darkgrey',
                                    borderRadius: '5px'
                                },
                                '&::-webkit-scrollbar': {
                                    width: '5px',
                                    paddingLeft: '2px'
                                }
                            }}
                            onClose={drawerToggle}
                        >
                            <Navigation/>
                        </Box>
                    </Panel>
                    <PanelResizeHandle/>

                    <Panel minSize={20}>
                        <Box
                            component="main"
                            sx={{
                                // ml: menuWidth,
                                backgroundColor: theme =>
                                    theme.palette.mode === 'light'
                                        ? theme.palette.grey[100]
                                        : theme.palette.grey[900],
                                flexGrow: 1,
                                overflow: 'auto',
                                height: 'calc(100vh - 64px)',
                            }}>
                            {children}
                        </Box>
                    </Panel>
                </PanelGroup>
            </Box>

        </Box>
    );
}
