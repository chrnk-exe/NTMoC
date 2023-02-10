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
import CalculatorsList from '../Calculators';

const Navigation = () => {
	const [open, setOpen] = useState<boolean[]>(Array(CalculatorsList.length).fill(false));
	const handleClick = (chosenList: number) => setOpen(prevState => prevState.map(
		(listItem, index) => index === chosenList
			? !listItem : listItem
	));
	const navigate = useNavigate();
	return (
		<List>
			{
				CalculatorsList.map((list, index) => <React.Fragment key={index}>
					<ListItemButton onClick={() => handleClick(index)}>
						<ListItemText primary={list.title} />
						{open[index] ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open[index]} timeout="auto" unmountOnExit>
						{list.Routes.map((route, index) => (
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
				</React.Fragment>)
			}
		</List>
	);
};

export default Navigation;
