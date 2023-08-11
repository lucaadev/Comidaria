import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateTable } from '../../store/modules/restaurante/actions';

export default function Index({ quantidaDePessoas, etapas, local }) {
  const dispatch = useDispatch();

  const { mesasCafe, mesasPub, mesasJardim, mesa } = useSelector(
		(state) => state.restaurante
	);

	const mesas = {
		mesasCafe: mesasCafe,
		mesasPub: mesasPub,
		mesasJardim: mesasJardim,
	}[local];

	const [enviadasValues, setEnviadasValues] = useState(
		mesas[mesa?.numero]?.etapas || []
	);

	const handleEnviadasChange = (index, event) => {
		const updatedValues = [...enviadasValues];
		updatedValues[index] = event.target.value;
		setEnviadasValues(updatedValues);
	};

	const handleInputKeyPress = (index, event) => {
		if (event.key === 'Enter') {
			event.target.blur();
		}
	};

  const setMesaInMesas = (component, state) => {
		dispatch(updateTable({ [local]: { ...mesas, [component]: state } }));
	};

    const handleInputBlur = (index) => {
      setMesaInMesas(mesa?.numero, {
        ...mesas[mesa?.numero],
				etapas: mesas[mesa?.numero]?.etapas.map((value, i) =>
					i === index ? enviadasValues[index] : value
				),
			});
		};

	return (
		<div className='container-fluid d-flex flex-wrap justify-content-center align-items-center'>
			{etapas.map((etapa, index) => (
				<div
					key={index}
					className='col-5 my-2 mx-2 d-flex flex-column justify-content-center align-items-center'
				>
					<table className='custom-table'>
						<thead>
							<tr>
								<th colSpan='3' className='table-header'>
									Etapa {etapa}
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
                  <label className='custom-label'>Enviadas:</label>
									<input
										type='number'
                    className='custom-input'
										value={ enviadasValues[index]}
										onChange={(e) => handleEnviadasChange(index, e)}
										onBlur={() => handleInputBlur(index)}
                    onKeyDown={(e) => handleInputKeyPress(index, e)}
									/>
								</td>
								<td
                  className={`${
                    Number(enviadasValues[index]) > quantidaDePessoas
                      ? 'text-danger'
                      : 'text-success'
                  } custom-input`}
                >{`Faltam: ${quantidaDePessoas - Number(enviadasValues[index])}`}</td>
							</tr>
						</tbody>
					</table>
				</div>
			))}
		</div>
	);
}
