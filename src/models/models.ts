export enum Role {
	HR = "HR",
	Employee = "Employee",
}

export enum LeaveType {
	ANNUAL = "ANNUAL",
	SICK = "SICK",
	MATERNITY = "MATERNITY",
}

export enum LeaveStatus {
	PENDING = "PENDING",
	APPROVED = "APPROVED",
	REJECTED = "REJECTED",
}

export interface Employee {
	id: number;
	name?: string;
	email?: string;
	clockIns?: ClockIn[];
	leaves?: Leave[];
	role?: Role;
}

export interface ClockIn {
	id: number;
	employeeId?: number;
	clockInType?: Date;
	clockOutType?: Date;
	employee?: Employee;
}

export interface Leave {
	id?: number;
	employeeId?: number,
	leaveType?: LeaveType;
	startDate?: Date;
	endDate?: Date;
	status?: LeaveStatus;
	employee?: Employee;
}
