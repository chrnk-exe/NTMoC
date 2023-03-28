import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Navigation from './Navigation';
import Button from '@mui/material/Button';
import {AppBar, Drawer} from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';

const menuWidth = '27vw';

export default function PrimarySearchAppBar({
	children,
}: {
	children: React.ReactNode;
}) {
	const [open, setOpen] = useState<boolean>(true);
	const drawerToggle = () => setOpen(prev => !prev);

	const navigate = useNavigate();

	return (
		<Box display={'flex'} flexGrow={1}>
			<Drawer
				variant="permanent" open={open} anchor={'left'}
				sx={{
					height: '100vh',
					zIndex: 100,
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: menuWidth,
						mt: 8,
						height: 'calc(100vh - 64px)',
						overflowX: 'hidden'
					},
					'& .MuiPaper-root::-webkit-scrollbar-thumb': {
						// bgColor: 'darkgrey',
						borderRadius: '5px'
					},
					'& .MuiPaper-root::-webkit-scrollbar' : {
						width: '10px',
						paddingLeft: '2px'
					}
				}}
				onClose={drawerToggle}>
				<Navigation />
			</Drawer>

			<AppBar component="nav" sx={{bgcolor: '#339353'}}>
				<Toolbar >
					<Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
						<FunctionsIcon fontSize={'large'}/>
						<Button
							sx={{color: '#FFFFF1', alignItems: 'center', display: 'flex', justifyContent: 'flex-start', p: 0}}
							onClick={() => navigate('/')}
						>
							<Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
								<Typography noWrap textAlign={'center'}
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
					ml: menuWidth,
					backgroundColor: theme =>
						theme.palette.mode === 'light'
							? theme.palette.grey[100]
							: theme.palette.grey[900],
					flexGrow: 1,
					overflow: 'auto',
					marginTop: 8,
				}}>
				{children}
			</Box>
		</Box>
	);
}
