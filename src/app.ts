import express from "express";
import employeeRouter from "./router/employee.routes";
import hrRouter from "./router/hr.routes";

const app = express();
const port = 8000;

app.use(express.json());
app.use("/api/employee", employeeRouter);
app.use("/api/hr", hrRouter);

app.listen(port, () => {
	console.log("listening on port :", port);
});

