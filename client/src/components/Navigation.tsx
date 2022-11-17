import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Collapse,
	List,
	// ListItem,
	ListItemButton,
	// ListItemIcon,
	ListItemText,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { CalculatorRoutes } from '../Calculators';

const Navigation = () => {
	const [open, setOpen] = useState<boolean>(false);
	const handleClick = () => setOpen(prev => !prev);
	const navigate = useNavigate();
	return (
		<List>
			<ListItemButton onClick={handleClick}>
				<ListItemText primary="Калькуляторы" />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				{CalculatorRoutes.map((route, index) => (
					<List key={index} component="div" disablePadding>
						<ListItemButton
							sx={{ p: 0.5, pl: 4 }}
							onClick={() => navigate(`/app${route.link}`)}>
							<ListItemText
								primary={
									<Typography
										component="div"
										sx={{
											display: {
												xs: 'none',
												sm: 'block',
											},
											
										}}>
										{route.title}
									</Typography>
								}
							/>
						</ListItemButton>
					</List>
				))}
			</Collapse>
		</List>
	);
};

export default Navigation;
