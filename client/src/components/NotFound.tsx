import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';
import classes from '../styles/NotFound.module.sass';

const NotFound = () => {

	const [timer, setTime] = useState(5);
	const startTimer = () => {
		let timeout = timer;
		const MyTimer = setInterval(() => {
			timeout -= 1;
			if(timeout === 0)clearInterval(MyTimer);
			setTime(timeout);
		}, 1000);
	};

	useEffect(() => {
		startTimer();
	}, []);

	return (
		<Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
			height: '90vh',
			width: '100vw',
			fontSize: '2em'
		}}>
			<Box>
				<CircularProgress size={140} color="success" variant="determinate" value={timer * 20}/>
				<Box marginTop={'10px'}>Page not found. Redirect in: {timer} seconds</Box>
				{
					timer === 0 ? <Navigate to={'/'} replace/> : null
				}
				<Link replace to={'/'}>Click here to redirect now</Link>
			</Box>
		</Box>
	);
};

export default NotFound;