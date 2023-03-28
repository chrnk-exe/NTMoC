import React, {type FC, useState} from 'react';
import {Box, Switch, FormGroup, FormControlLabel} from '@mui/material';
import AnswerItem from './AnswerItem';

interface Props {
    answer: APIResponse

}

const AnswerBlock: FC<Props> = ({answer}) => {
	const [showDetails, setShowDetails] = useState<boolean>(true);



	return (
		<Box>
			{answer.length !== 0 &&
				<Box m={0.5}>
					<FormGroup>
						<FormControlLabel
							control={<Switch checked={showDetails} onChange={e => setShowDetails(e.target.checked)}/>}
							label='Показать детали'/>
					</FormGroup>
				</Box>
			}

			<Box
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'flex-start'}
				alignItems={'flex-start'}>
				{answer.map((item, index) => (
					<AnswerItem key={index} {...item} showDetails={showDetails}/>
				))}
			</Box>
		</Box>
	);
};

export default AnswerBlock;
