import {
  manyTickets,
  multipleTickets,
  singleTicket,
  updatedTicket,
} from '../prisma/prisma.mock';

export const mockTicketService = {
  create: jest.fn().mockResolvedValue(singleTicket),
  findOne: jest.fn().mockResolvedValue(singleTicket),
  findAll: jest.fn().mockResolvedValue(multipleTickets),
  findMany: jest.fn().mockResolvedValue(manyTickets),
  update: jest.fn().mockResolvedValue(updatedTicket),
  remove: jest.fn().mockResolvedValue(singleTicket),
  search: jest.fn().mockResolvedValue(manyTickets),
};
