import React from 'react';
import { useSelector } from 'react-redux';

import TotalEtapas from './totalEtapas';

export default function Index() {
	const { mesasCafe, mesasPub, mesasJardim } = useSelector(
		(state) => state.restaurante
	);

		const totalPessoasCafe = Object.values(mesasCafe).reduce((acc, mesa) => {
			return acc + Number(mesa.quantidaDePessoas);
		}, 0);

		const totalPessoasPub = Object.values(mesasPub).reduce((acc, mesa) => {
			return acc + Number(mesa.quantidaDePessoas);
		}, 0);

		const totalPessoasJardim = Object.values(mesasJardim).reduce(
			(acc, mesa) => {
				return acc + Number(mesa.quantidaDePessoas);
			},
			0
		);

	return (
		<div className='container-fluid overflowRelatorio'>
			<h1 className='title  d-flex justify-content-center'>Relatorio</h1>
			<div className='mt-5'>
				<h2 className='textOptions mt-2 d-flex justify-content-start'>
					Pessoas:
				</h2>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h1>Café:</h1>
					<h1>{totalPessoasCafe} pessoas</h1>
				</div>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h1>Pub:</h1>
					<h1>{totalPessoasPub} pessoas</h1>
				</div>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h1>Jardim:</h1>
					<h1>{totalPessoasJardim} pessoas</h1>
				</div>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h1> Total:</h1>
					<div>
						<h1>
							{totalPessoasCafe + totalPessoasPub + totalPessoasJardim} pessoas
						</h1>
					</div>
				</div>
			</div>
			<div className='mt-5'>
				<h2 className='textOptions mt-2 d-flex justify-content-start'>
					Etapas:
				</h2>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h2>Etapa1</h2>
					<div>
						<TotalEtapas
							mesasCafe={mesasCafe}
							mesasPub={mesasPub}
							mesasJardim={mesasJardim}
							etapaIndex={0}
						/>
					</div>
				</div>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h2>Etapa2</h2>
					<div>
						<TotalEtapas
							mesasCafe={mesasCafe}
							mesasPub={mesasPub}
							mesasJardim={mesasJardim}
							etapaIndex={1}
						/>
					</div>
				</div>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h2>Etapa3</h2>
					<div>
						<TotalEtapas
							mesasCafe={mesasCafe}
							mesasPub={mesasPub}
							mesasJardim={mesasJardim}
							etapaIndex={2}
						/>
					</div>
				</div>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h2>Etapa4</h2>
					<div>
						<TotalEtapas
							mesasCafe={mesasCafe}
							mesasPub={mesasPub}
							mesasJardim={mesasJardim}
							etapaIndex={3}
						/>
					</div>
				</div>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h2>Etapa5</h2>
					<div>
						<TotalEtapas
							mesasCafe={mesasCafe}
							mesasPub={mesasPub}
							mesasJardim={mesasJardim}
							etapaIndex={4}
						/>
					</div>
				</div>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h2>Etapa6</h2>
					<div>
						<TotalEtapas
							mesasCafe={mesasCafe}
							mesasPub={mesasPub}
							mesasJardim={mesasJardim}
							etapaIndex={5}
						/>
					</div>
				</div>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h2>Etapa7</h2>
					<div>
						<TotalEtapas
							mesasCafe={mesasCafe}
							mesasPub={mesasPub}
							mesasJardim={mesasJardim}
							etapaIndex={6}
						/>
					</div>
				</div>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h2>Etapa8</h2>
					<div>
						<TotalEtapas
							mesasCafe={mesasCafe}
							mesasPub={mesasPub}
							mesasJardim={mesasJardim}
							etapaIndex={7}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
