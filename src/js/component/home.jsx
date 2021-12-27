import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Row, Table } from "reactstrap";

const dataTarea = [
	{ id: 1, tarea: "Lavar mascota", fecha: 12 / 12 / 2021 },
	{ id: 1, tarea: "Sacar a pasear mascota", fecha: 13 / 12 / 2021 },
	{ id: 1, tarea: "Dar de comer a mascota", fecha: 14 / 12 / 2021 },
];
/* const [data, setData] = useState(dataTarea); */
//create your first component
const Home = () => {
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
							<input className="form-control" id="" disabled />
						</div>
						<div className="mb-3">
							<label className="form-label">Tarea</label>
							<input className="form-control" id="" />
						</div>
						<div className="mb-3">
							<label className="form-label">Fecha</label>
							<input className="form-control" id="" />
						</div>
						<Button className="btn btn-success">
							Insertar Tarea
						</Button>
					</Form>
				</Row>
			</Container>
			<Container>
				<Row>
					<Table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Tarea</th>
								<th>Fecha</th>
								<th>Accion</th>
							</tr>
						</thead>
						<tbody>
							{/* {data.map((elemento) => {
								<tr key={elemento.id}>
									<td>{elemento.id}</td>
									<td>{elemento.tarea}</td>
									<td>{elemento.fecha}</td>
									<td>
										<Button className="btn btn-primary">
											Editar
										</Button>
										<Button className="btn btn-danger">
											Eliminar
										</Button>
									</td>
								</tr>;
							})} */}
						</tbody>
					</Table>
				</Row>
			</Container>
		</>
	);
};

export default Home;
