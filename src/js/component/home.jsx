import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	Button,
	Container,
	Form,
	Modal,
	ModalBody,
	ModalFooter,
	Row,
	Table,
} from "reactstrap";

const dataTarea = [
	/* 
	{ id: 1, tarea: "Lavar mascota", fecha: "12 / 12 / 2021" },
	{ id: 2, tarea: "Sacar a pasear mascota", fecha: "13 / 12 / 2021" },
	{ id: 3, tarea: "Dar de comer a mascota", fecha: "14 / 12 / 2021" },
 */
];

//create your first component
const Home = () => {
	const [data, setData] = useState(dataTarea);
	const [modalEliminar, setModalEliminar] = useState(false);
	const [tareaSeleccionada, setTareaSeleccionada] = useState({
		id: "",
		tarea: "",
		fecha: "",
	});
	const seleccionarTarea = (elemento, caso) => {
		setTareaSeleccionada(elemento);
		caso === "Eliminar" && setModalEliminar(true);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setTareaSeleccionada((prevState) => ({
			...prevState,
			[name]: value,
		}));
		console.log(tareaSeleccionada);
	};
	const eliminar = () => {
		setData(data.filter((tarea) => tarea.id !== tareaSeleccionada));
		setModalEliminar(false);
	};

	const limpiarSetTareaSeleccionada = () => {
		setTareaSeleccionada(null);
	};

	const insertar = () => {
		const valorIsertar = tareaSeleccionada;
		valorIsertar.id = data[data.length - 1].id + 1;
		const dataNueva = data;
		dataNueva.push(valorIsertar);
		setData(dataNueva);
	};
	return (
		<>
			<Container>
				<Row>
					<h1 className="d-flex justify-content-center">TODO List</h1>
				</Row>
				<Row>
					<Form>
						<div className="mb-3">
							<label className="form-label">ID</label>
							<input
								className="form-control"
								id=""
								name=""
								value={data.length + 1}
								onChange={handleChange}
								disabled
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Tarea</label>
							<input
								className="form-control"
								id=""
								name="tarea"
								onChange={handleChange}
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Fecha</label>
							<input
								className="form-control"
								name="fecha"
								id=""
								onChange={handleChange}
							/>
						</div>
						<Button
							className="btn btn-success"
							onClick={() => insertar()}>
							Insertar Tarea
						</Button>
					</Form>
				</Row>
			</Container>
			<Container>
				<Row>
					<Table className="">
						<thead>
							<tr>
								<th>ID</th>
								<th>Tarea</th>
								<th>Fecha</th>
								<th>Accion</th>
							</tr>
						</thead>
						<tbody>
							{data.map((elemento) => {
								return (
									<tr key={elemento.id}>
										<td>{elemento.id}</td>
										<td>{elemento.tarea}</td>
										<td>{elemento.fecha}</td>
										<td>
											<Button className="btn btn-primary">
												Editar
											</Button>
											{"  "}
											<Button
												className="btn btn-danger"
												onClick={() =>
													seleccionarTarea(
														elemento,
														"Eliminar"
													)
												}>
												Eliminar
											</Button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</Row>
			</Container>
			<Modal isOpen={modalEliminar}>
				<ModalBody>
					Estás Seguro que deseas eliminar Tarea:{" "}
					{tareaSeleccionada && tareaSeleccionada.tarea}
				</ModalBody>
				<ModalFooter>
					<button
						className="btn btn-danger"
						onClick={() => eliminar()}>
						Sí
					</button>
					<button
						className="btn btn-secondary"
						onClick={() => setModalEliminar(false)}>
						No
					</button>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default Home;
