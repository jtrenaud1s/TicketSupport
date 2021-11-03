
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateAttachment {
    ticket: Ticket;
    fileLocation: string;
}

export class CreateDepartment {
    name: string;
}

export class UpdateDepartment {
    name: string;
}

export class CreateTicket {
    creator: User;
    subject: string;
    content: string;
    attachments: Attachment[];
}

export class UpdateTicket {
    subject?: Nullable<string>;
    content?: Nullable<string>;
    attachments: Attachment[];
}

export class CreateUser {
    email: string;
    username: string;
    password: string;
    department: Department;
}

export class UpdateUser {
    id: string;
    password?: Nullable<string>;
    department: Department;
}

export class Attachment {
    id: string;
    ticket: Ticket;
    fileLocation: string;
}

export abstract class IQuery {
    abstract attachments(): Attachment[] | Promise<Attachment[]>;

    abstract attachmentsByTicket(ticket: Ticket): Attachment[] | Promise<Attachment[]>;

    abstract attachmentsByUser(user: User): Attachment[] | Promise<Attachment[]>;

    abstract attachment(id: string): Attachment | Promise<Attachment>;

    abstract departments(): Department[] | Promise<Department[]>;

    abstract department(id: string): Nullable<Department> | Promise<Nullable<Department>>;

    abstract tickets(user: User): Ticket[] | Promise<Ticket[]>;

    abstract ticket(id: string): Nullable<Ticket> | Promise<Nullable<Ticket>>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createAttachment(input?: Nullable<CreateAttachment>): Attachment | Promise<Attachment>;

    abstract deleteAttachment(id: string): Nullable<Attachment> | Promise<Nullable<Attachment>>;

    abstract createDepartment(input?: Nullable<CreateDepartment>): Department | Promise<Department>;

    abstract updateDepartment(input?: Nullable<UpdateDepartment>): Nullable<Department> | Promise<Nullable<Department>>;

    abstract deleteDepartment(id: string): Nullable<Department> | Promise<Nullable<Department>>;

    abstract createTicket(input?: Nullable<CreateTicket>): Ticket | Promise<Ticket>;

    abstract updateTicket(input?: Nullable<UpdateTicket>): Nullable<Ticket> | Promise<Nullable<Ticket>>;

    abstract deleteTicket(id: string): Nullable<Ticket> | Promise<Nullable<Ticket>>;

    abstract createUser(input?: Nullable<CreateUser>): User | Promise<User>;

    abstract updateUser(input?: Nullable<UpdateUser>): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class Department {
    id: string;
    name: string;
    users: User[];
}

export class Ticket {
    id: string;
    creator: User;
    subject: string;
    content: string;
    attachments: Attachment[];
}

export class User {
    id: string;
    email: string;
    username: string;
    password: string;
    department: Department;
    tickets: Ticket[];
}

type Nullable<T> = T | null;
