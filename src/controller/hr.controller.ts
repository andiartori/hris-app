import { Leave } from "../models/models";
import { HRService } from "../service/hr.service";
import {Request, Response} from "express"

export class HRController {
	private hrService : HRService;

	constructor() {
        this.hrService = new HRService();
    }

	async approveLeave(req: Request, res: Response) {
		const { leaveId, status } = req.body;
        const leave: Leave = {
            id: leaveId,
            status: status,
        };
        const result = await this.hrService.approveLeave(leave);
        if (result) {
            res.status(200).send({
                message: "Leave status has been updated successfully",
                status: res.statusCode,
            });
        } else {
            res.status(404).send({
                message: "Leave not found",
                status: res.statusCode,
            });
        }
	}

	async getClockIns (req : Request, res : Response) {
		const result = await this.hrService.getClockin()
		if(result) {
			res.status(200).send({
                message: "Clock-ins retrieved successfully",
                status: res.statusCode,
            });
		} else {
			res.status(404).send({
                message: "Clock-ins not found",
                status: res.statusCode,
            });
		}
	}
}

// export class HRService {
// 	private prisma: PrismaClient;

// 	constructor() {
// 		this.prisma = new PrismaClient();
// 	}

// 	async approveLeave(data: Leave) {
// 		const leave: Leave = {
// 			id: data.id,
// 			status: data.status,
// 		};
// 		return await this.prisma.leave.update({
// 			where: { id: leave.id },
// 			data: { status: leave.status },
// 		});
// 	}

// 	async getClockIn() {
// 		return await this.prisma.clockIn.findMany();
// 	}
// }
