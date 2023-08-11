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

	return (
		<div>
			<h1>{totalEtapas} etapas</h1>
		</div>
	);
};

export default TotalEtapas;
