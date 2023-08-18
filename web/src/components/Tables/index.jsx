import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer } from 'rsuite';

import { updateTable } from '../../store/modules/restaurante/actions';
import Phases from '../Phases';

export default function Index({ Qtdmesas, local }) {
	const dispatch = useDispatch();

	const { components, mesa, mesasCafe, mesasPub, mesasJardim } = useSelector(
		(state) => state.restaurante
	);

	const mesas = {
		mesasCafe: mesasCafe,
		mesasPub: mesasPub,
		mesasJardim: mesasJardim,
	}[local];

	const [editingPessoas, setEditingPessoas] = useState(false);
	const [pessoasValue, setPessoasValue] = useState(
		mesa?.quantidaDePessoas || 0
	);

	const setComponent = (component, state) => {
		dispatch(
			updateTable({ components: { ...components, [component]: state } })
		);
	};

	const setTable = (component, state) => {
		dispatch(updateTable({ mesa: { ...mesas, [component]: state } }));
	};

	const setMesaInMesas = (component, state) => {
		dispatch(updateTable({ [local]: { ...mesas, [component]: state } }));
	};

	const formatMesaNumber = (number) => {
		return number < 10 ? `0${number}` : number;
	};

	const handleInputChange = (event) => {
		setPessoasValue(event.target.value);
	};

	const etapas = [0, 0, 0, 0, 0, 0, 0, 0];

	const handleInputBlur = () => {
		setEditingPessoas(false);
		if (mesas[mesa?.numero]?.quantidaDePessoas !== undefined) {
			setMesaInMesas(mesa?.numero, {
				...mesa,
				quantidaDePessoas: pessoasValue,
				etapas: mesas[mesa?.numero]?.etapas || etapas,
			});
		}
	};

	useEffect(() => {
		setPessoasValue(mesa?.quantidaDePessoas || 0);
	}, [mesa]);

	return (
		<>
			<Drawer
				open={components.drawer}
				size='sm'
				onClose={() => setComponent('drawer', false)}
				className={`responsive-drawer ${components.drawer ? 'open' : ''}`}
			>
				<Drawer.Body>
					<div className='d-flex align-items-center justify-content-around'>
						<h2 className='custom-title'>{`Mesa ${
							mesas[mesa?.numero]?.numero
						}`}</h2>
						{editingPessoas ? (
							<input
								className='custom-input'
								type='number'
								value={pessoasValue}
								onChange={handleInputChange}
								onBlur={handleInputBlur}
								onKeyDown={(e) => {
									if (e.key === 'Enter') {
										e.target.blur();
									}
								}}
								placeholder='Quantas pessoas?'
							/>
						) : (
							<h5
								className='custom-title'
								onClick={() => setEditingPessoas(true)}
							>
								{`${mesas[mesa?.numero]?.quantidaDePessoas || 0} pessoas`}
							</h5>
						)}
					</div>
					<div className='row mt-3'></div>
					<Phases
						quantidaDePessoas={mesas[mesa?.numero]?.quantidaDePessoas || 0}
						etapas={[1, 2, 3, 4, 5, 6, 7, 8]}
						local={local}
					/>
				</Drawer.Body>
			</Drawer>
			<div className='container-fluid d-flex flex-wrap justify-content-center align-items-center'>
				{Qtdmesas.map((mesa, index) => (
					<div
						key={index}
						className='col-3 my-2 mx-2 d-flex flex-column justify-content-center align-items-center'
					>
						<button
							className={`${
								mesas[mesa]?.quantidaDePessoas > 0
									? 'tableNotAvailable'
									: 'tableAvailable'
							} btn btn-lg textButton`}
							onClick={() => {
								setComponent('drawer', true);
								setTable('numero', mesa);
								setMesaInMesas(mesa, {
									...mesa,
									numero: mesa,
									quantidaDePessoas: mesas[mesa]?.quantidaDePessoas || 0,
									etapas: mesas[mesa]?.etapas || etapas,
								});
							}}
						>
							{formatMesaNumber(mesa)}
						</button>
					</div>
				))}
			</div>
		</>
	);
}
