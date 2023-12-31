import React from 'react';

const TotalEtapas = ({ mesasCafe, mesasPub, mesasJardim, etapaIndex }) => {
	const totalEtapas =
		Object.values(mesasCafe).reduce((acc, mesa) => {
			return acc + Number(mesa.etapas[etapaIndex]);
		}, 0) +
		Object.values(mesasPub).reduce((acc, mesa) => {
			return acc + Number(mesa.etapas[etapaIndex]);
		}, 0) +
		Object.values(mesasJardim).reduce((acc, mesa) => {
			return acc + Number(mesa.etapas[etapaIndex]);
		}, 0);

				const totalPessoasCafe = Object.values(mesasCafe).reduce(
					(acc, mesa) => {
						return acc + Number(mesa.quantidaDePessoas);
					},
					0
				);

				const totalPessoasPub = Object.values(mesasPub).reduce((acc, mesa) => {
					return acc + Number(mesa.quantidaDePessoas);
				}, 0);

				const totalPessoasJardim = Object.values(mesasJardim).reduce(
					(acc, mesa) => {
						return acc + Number(mesa.quantidaDePessoas);
					},
					0
				);

				const total = totalPessoasCafe + totalPessoasPub + totalPessoasJardim;

				const etapasRestantes = total - totalEtapas;


	return (
		<div className='titleRelatorio'>
			<h1
				className={`${
					etapasRestantes < 0 ? 'text-danger' : 'text-success'
				}`}
			>{etapasRestantes} etapas</h1>
		</div>
	);
};

export default TotalEtapas;
