import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let prisma: PrismaService;

  const multipleUsers = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@email.com',
      password: 'fakehash',
      createdDate: Date.now(),
      updatedDate: Date.now(),
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@email.com',
      password: 'fakehash',
      createdDate: Date.now(),
      updatedDate: Date.now(),
    },
  ];

  const singleUser = multipleUsers[0];

  const mockPrismaService = {
    user: {
      create: jest.fn().mockResolvedValue(singleUser),
      findOne: jest.fn().mockResolvedValue(singleUser),
      findMany: jest.fn().mockResolvedValue(multipleUsers),
      findAll: jest.fn().mockResolvedValue(multipleUsers),
      update: jest.fn().mockResolvedValue(singleUser),
      remove: jest.fn().mockResolvedValue(singleUser),
    },
  };

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
      expect(
        prisma.user.create({
          data: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@email.com',
            password: 'fakehash',
          },
        }),
      ).resolves.toEqual(singleUser);
    });
  });
});
