import React, { useState } from "react";

export const Todolist = () => {
	const [TasksList, setTasksList] = useState([]);
	const [newTask, setnewTask] = useState("");

	const pressEnter = (e) => {
		if (e.key === "Enter" && newTask !== "") {
			setTasksList((prevTask) => [...prevTask, newTask]);
			setnewTask("");
		}
	};

	const Deleteitem = (elementdelete) => {
		setTasksList(TasksList.filter((task, ind) => ind !== elementdelete));
	};

	return (
		<div className="container d-flex">
			<div className="leftcontainer">
				<h1 className="display-2 text-white text-center px-5 py-5">
					TodoList
				</h1>
				<div className="otherside">
					<input
						className="col col-10"
						type="text"
						placeholder="Add a new task"
						maxLength="50"
						value={newTask}
						onChange={(e) => setnewTask(e.target.value)}
						onKeyDown={(e) => pressEnter(e)}
					/>
					<button
						className="button1 col col-2"
						onClick={(e) =>
							newTask !== ""
								? setTasksList((prevTask) => [
										...prevTask,
										newTask,
								  ])
								: alert("Debes añadir una tarea")
						}>
						<i className="fa-solid fa-pencil" />
					</button>
				</div>
			</div>
			<div className="rightcontainer">
				{TasksList.map((task, ind) => (
					<div className="row px-2 m-1">
						<div key={ind} className="listTask col col-11 my-1">
							{task}
						</div>
						<button
							className="button2 col col-1 my-1"
							onClick={() => Deleteitem(ind)}>
							<i className="fa-solid fa-trash" />
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
