import { createTheme, responsiveFontSizes } from '@mui/material';

export default responsiveFontSizes(
	createTheme({
		palette: {
			primary: {
				main: '#339353',
			},
			secondary: {
				main: '#fff'
			}
		},
	}),
);