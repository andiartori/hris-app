import {Router} from "express";
import { EmployeeController } from "../controller/employee.controller";

const employeeController = new EmployeeController();
const router = Router();

router.post("/clock-in" , employeeController.clockIn.bind(employeeController));
router.post("/clock-out" , employeeController.clockOut.bind(employeeController));
router.post("/request-leave" , employeeController.requestLeave.bind(employeeController));


export default router;


//kalau pakai export default, maka segala sesuatu yang ada di router yang akan ter-export. penamaan saat dipanggil juga akan bebas