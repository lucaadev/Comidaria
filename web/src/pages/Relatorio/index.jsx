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
				<h2 className='titleRelatorio mt-2 d-flex justify-content-start'>
					Locais:
				</h2>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h1 className='textRelatorio'>Café:</h1>
					<h1 className='titleRelatorio'>{totalPessoasCafe} pessoas</h1>
				</div>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h1 className='textRelatorio'>Pub:</h1>
					<h1 className='titleRelatorio'>{totalPessoasPub} pessoas</h1>
				</div>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h1 className='textRelatorio'>Jardim:</h1>
					<h1 className='titleRelatorio'>{totalPessoasJardim} pessoas</h1>
				</div>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h1 className='textRelatorio'> Total:</h1>
					<div>
						<h1 className='titleRelatorio'>
							{totalPessoasCafe + totalPessoasPub + totalPessoasJardim} pessoas
						</h1>
					</div>
				</div>
			</div>
			<div className='mt-5'>
				<h2 className='titleRelatorio mt-2 d-flex justify-content-start'>
					Etapas:
				</h2>
				<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center'>
					<h2 className='textRelatorio'>Etapa 1:</h2>
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
					<h2 className='textRelatorio'>Etapa 2:</h2>
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
					<h2 className='textRelatorio'>Etapa 3:</h2>
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
					<h2 className='textRelatorio'>Etapa 4:</h2>
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
					<h2 className='textRelatorio'>Etapa 5:</h2>
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
					<h2 className='textRelatorio'>Etapa 6:</h2>
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
					<h2 className='textRelatorio'>Etapa 7:</h2>
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
					<h2 className='textRelatorio'>Etapa 8:</h2>
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
