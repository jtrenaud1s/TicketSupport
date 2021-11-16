import { Test, TestingModule } from '@nestjs/testing';
import {
  manyUsers,
  mockPrismaService,
  multipleUsers,
  singleUser,
  updatedUser,
} from '../prisma/prisma.mock';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user', async () => {
      await expect(
        service.create({
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@email.com',
          password: 'fakehash',
        }),
      ).resolves.toEqual(singleUser);
    });
  });

  describe('findOne by ID', () => {
    it('should find a user by ID', async () => {
      await expect(service.findOne({ id: 1 })).resolves.toEqual(singleUser);
    });
  });

  describe('findOne by email', () => {
    it('should find a user by email', async () => {
      await expect(
        service.findOne({ email: 'johndoe@email.com' }),
      ).resolves.toEqual(singleUser);
    });
  });

  describe('findMany', () => {
    it('should find all users with the last name "Doe"', async () => {
      mockPrismaService.user.findMany.mockImplementation(() => manyUsers);
      expect(
        service.findMany({
          where: {
            lastName: 'Doe',
          },
        }),
      ).resolves.toEqual(manyUsers);
    });
  });

  describe('findAll', () => {
    it('should find all users', async () => {
      mockPrismaService.user.findMany.mockImplementation(() => multipleUsers);
      await expect(service.findMany()).resolves.toEqual(multipleUsers);
    });
  });

  describe('update', () => {
    it('should update John Doe last name to Does', async () => {
      await expect(
        service.update({
          data: {
            firstName: 'John',
            lastName: 'Does',
            email: 'johndoe@email.com',
            password: 'fakehash',
          },
          where: { id: 1 },
        }),
      ).resolves.toEqual(updatedUser);
    });
  });

  describe('delete', () => {
    it('should remove john doe', async () => {
      await expect(service.remove({ id: 1 })).resolves.toEqual(singleUser);
    });
  });
});
