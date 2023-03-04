import React, {useState} from 'react';
import {Box} from '@mui/material';
import DiscreteLogarithmInput from '../../Inputs/DiscreteLorarithmInput';
import {useGelfondShanksMutation} from '../../../store/services/api';
import AnswerItem from '../../AnswerItem';


export default function GelfondShanks() {
	const [a, setA] = useState(16);
	const [m, setM] = useState(29);
	const [g, setG] = useState(4);
	const [getAnswer] = useGelfondShanksMutation();
	const [answer, setAnswer] = useState<APIResponseItem[]>([]);

	return (
		<Box display={"flex"} justifyContent="center" alignItems="center" mt={2}>
			<DiscreteLogarithmInput
				FreeVar={a} setFreeVar={setA} Module={m} setModule={setM} degreeBasis={g} setDegreeBases={setG}/>
			<Box
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"flex-start"}
				alignItems={"flex-start"}>
				{answer.map((item, index) => (
					<AnswerItem key={index} {...item} />
				))}
			</Box>
		</Box>);
};
