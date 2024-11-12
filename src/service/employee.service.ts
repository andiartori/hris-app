import { PrismaClient } from "@prisma/client";
import { Employee } from "../models/models";
import { ClockIn } from "../models/models";
import { Leave } from "../models/models";
import { LeaveType } from "../models/models";

export class EmployeeService {
	private prisma = new PrismaClient();

	constructor() {
		this.prisma = new PrismaClient();
	}

	async clockIn(data: Employee) {
		const employee: Employee = {
			id: data.id,
		};

		return await this.prisma.clockIn.create({
			data: {
				employeeId: employee.id,
				clockInTime: new Date(),
			},
		});
	}

	async clockOut(data: ClockIn) {
		const clockIn: ClockIn = {
			id: data.id,
		};
		return await this.prisma.clockIn.update({
			where: { id: clockIn.id },
			data: { clockOutTime: new Date() },
		});
	}

	async requestLeave(data: Leave) {
		const leave: Leave = {
			employeeId: data.employeeId,
			leaveType: data.leaveType,
			startDate: data.startDate,
			endDate: data.endDate,
		};
		return await this.prisma.leave.create({
			data: {
				employeeId: leave.employeeId as number,
				leaveType: leave.leaveType as LeaveType,
				startDate: leave.startDate as Date,
				endDate: leave.endDate as Date,
			},
		});
	}
}
