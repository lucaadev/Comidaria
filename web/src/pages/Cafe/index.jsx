import React from 'react';
import { useSelector } from 'react-redux';
import PagePreviousIcon from '@rsuite/icons/PagePrevious';

import background from '../../../src/assets/table-background.png';
import Tables from '../../components/Tables';

export default function Index() {
	const { mesasCafe } = useSelector((state) => state.restaurante);

	const totalPessoas = Object.values(mesasCafe).reduce((acc, mesa) => {
		return acc + Number(mesa.quantidaDePessoas);
	}, 0);

	return (
		<>
			<div className='container-fluid d-flex flex-column align-items-center p-0'>
				<div className='container-fluid p-0'>
					<PagePreviousIcon
						className='iconStyle'
						onClick={() => window.history.back()}
					/>
					<div className='row'>
						<div className='col-12 d-flex flex-column justify-content-center align-items-center'>
							<h1 className='textButton ms-3 mt-3'>Café</h1>
							<Tables
								Qtdmesas={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
								local={'mesasCafe'}
							/>
							<h1 className='textButton mt-3'>Total: {totalPessoas} pessoas</h1>
						</div>
					</div>
				</div>
				<img src={background} alt='123' className='img-fluid backgroundStyle' />
			</div>
		</>
	);
}
