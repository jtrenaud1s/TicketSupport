import {
  manyUsers,
  multipleUsers,
  singleUser,
  updatedUser,
} from '../prisma/prisma.mock';

export const mockUserService = {
  create: jest.fn().mockResolvedValue(singleUser),
  findOne: jest.fn().mockResolvedValue(singleUser),
  findAll: jest.fn().mockResolvedValue(multipleUsers),
  findMany: jest.fn().mockResolvedValue(manyUsers),
  update: jest.fn().mockResolvedValue(updatedUser),
  remove: jest.fn().mockResolvedValue(singleUser),
  search: jest.fn().mockResolvedValue(manyUsers),
};
