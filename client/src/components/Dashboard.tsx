import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Navigation from './Navigation';
import Button from '@mui/material/Button';
import {AppBar, Drawer, Icon} from "@mui/material";
import FunctionsIcon from '@mui/icons-material/Functions';

export default function PrimarySearchAppBar({
	children,
}: {
	children: React.ReactNode;
}) {
	const [open, setOpen] = useState<boolean>(true);
	const drawerToggler = () => setOpen(prev => !prev);

	const navigate = useNavigate();

	return (
		<Box display={'flex'} sx={{ flexGrow: 1 }}>
			<Drawer
				variant="permanent" open={open} anchor={'left'}
				sx={{
					height: '100vh',
					zIndex: 123
				}}
				onClose={drawerToggler}>
				<Toolbar
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-end',
						px: [1],
					}}>
				</Toolbar>
				<Navigation />
			</Drawer>

			<AppBar component="nav">
				<Toolbar >
                    <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                        <Icon fontSize={"large"}>
                            <FunctionsIcon fontSize={"large"}/>
                        </Icon>
                        <Button variant='outlined'
                                sx={{color: '#FFFFF1', alignItems: 'center', display: 'flex', justifyContent: 'flex-start', p: 0}}
                                onClick={() => navigate('/app')}

                        >
                            <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                                <Typography noWrap textAlign={"center"}
                                            sx={{color: '#FFFFF1', alignItems: 'center', display: 'flex', justifyContent: 'flex-start'}}
                                >
                                    Теоретико числовые методы криптографии
                                </Typography>
                            </Box>
                        </Button>
                    </Box>
				</Toolbar>
			</AppBar>

			<Box
				component="main"
				sx={{
					backgroundColor: theme =>
						theme.palette.mode === 'light'
							? theme.palette.grey[100]
							: theme.palette.grey[900],
					flexGrow: 1,
					// height: 'calc(100vh - 8px)',
					overflow: 'auto',
					marginTop: 8,
				}}>
				{children}
			</Box>
		</Box>
	);
}
