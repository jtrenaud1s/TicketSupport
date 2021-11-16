import { Ticket, User } from '.prisma/client';
import { FindManyUsersParams } from 'src/user/user.service';

const now = new Date(Date.now());

export const multipleUsers: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@email.com',
    password: 'fakehash',
    createdDate: now,
    updatedDate: now,
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@email.com',
    password: 'fakehash',
    createdDate: now,
    updatedDate: now,
  },
  {
    id: 3,
    firstName: 'Jane3',
    lastName: 'Doe',
    email: 'janedoe3@email.com',
    password: 'fakehash',
    createdDate: now,
    updatedDate: now,
  },
  {
    id: 4,
    firstName: 'Jane4',
    lastName: 'Doe',
    email: 'janedoe4@email.com',
    password: 'fakehash',
    createdDate: now,
    updatedDate: now,
  },
  {
    id: 5,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe5@email.com',
    password: 'fakehash',
    createdDate: now,
    updatedDate: now,
  },
  {
    id: 6,
    firstName: 'Jane',
    lastName: 'Soe',
    email: 'janesoe@email.com',
    password: 'fakehash',
    createdDate: now,
    updatedDate: now,
  },
];

export const singleUser: User = multipleUsers[0];

export const manyUsers: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@email.com',
    password: 'fakehash',
    createdDate: now,
    updatedDate: now,
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@email.com',
    password: 'fakehash',
    createdDate: now,
    updatedDate: now,
  },
  {
    id: 3,
    firstName: 'Jane3',
    lastName: 'Doe',
    email: 'janedoe3@email.com',
    password: 'fakehash',
    createdDate: now,
    updatedDate: now,
  },
  {
    id: 4,
    firstName: 'Jane4',
    lastName: 'Doe',
    email: 'janedoe4@email.com',
    password: 'fakehash',
    createdDate: now,
    updatedDate: now,
  },
  {
    id: 5,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe5@email.com',
    password: 'fakehash',
    createdDate: now,
    updatedDate: now,
  },
];

export const updatedUser: User = {
  id: 1,
  firstName: 'John',
  lastName: 'Does',
  email: 'johndoe@email.com',
  password: 'fakehash',
  createdDate: now,
  updatedDate: new Date(Date.now()),
};

export const multipleTickets: Ticket[] = [
  {
    id: 1,
    subject: 'Test 1',
    creatorId: 1,
    createdDate: now,
    updatedDate: now,
    content: 'test123',
  },
  {
    id: 2,
    subject: 'Test 2',
    creatorId: 1,
    createdDate: now,
    updatedDate: now,
    content: 'test123',
  },
  {
    id: 3,
    subject: 'Not Test 3',
    creatorId: 1,
    createdDate: now,
    updatedDate: now,
    content: 'test123',
  },
];

export const singleTicket: Ticket = multipleTickets[0];

export const updatedTicket: Ticket = singleTicket;

export const manyTickets: Ticket[] = multipleTickets;

export const mockPrismaService = {
  user: {
    create: jest.fn().mockResolvedValue(singleUser),
    findUnique: jest.fn().mockResolvedValue(singleUser),
    findMany: jest.fn(),
    update: jest.fn().mockResolvedValue(updatedUser),
    delete: jest.fn().mockResolvedValue(singleUser),
  },
  ticket: {
    create: jest.fn().mockResolvedValue(singleTicket),
    findUnique: jest.fn().mockResolvedValue(singleTicket),
    findMany: jest.fn().mockResolvedValue(manyTickets),
    update: jest.fn().mockResolvedValue(updatedTicket),
    delete: jest.fn().mockResolvedValue(singleTicket),
  },
};
