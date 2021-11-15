import { Test, TestingModule } from '@nestjs/testing';
import {
  singleUser,
  multipleUsers,
  updatedUser,
  manyUsers,
} from '../prisma/prisma.mock';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { mockUserService } from './user.service.mock';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  //create
  describe('create', () => {
    it('should create a new User', async () => {
      await expect(
        controller.create({
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@email.com',
          password: 'fakehash',
        }),
      ).resolves.toEqual(singleUser);
    });
  });

  // findOne
  describe('findOne by ID', () => {
    it('should find a User by ID', async () => {
      await expect(controller.findOne('1')).resolves.toEqual(singleUser);
    });
  });

  // describe('findMany', () => {
  //   it('should find all Users with the last name "Doe"', async () => {
  //     mockPrismacontroller.User.findMany.mockImplementation(() => manyUsers);
  //     expect(
  //       controller.findMany({
  //         where: {
  //           content: {
  //             contains: 'test',
  //           },
  //         },
  //       }),
  //     ).resolves.toEqual(manyUsers);
  //   });
  // });
  //findAll

  describe('findAll', () => {
    it('should find all Users', async () => {
      await expect(controller.findAll()).resolves.toEqual(multipleUsers);
    });
  });

  describe('update', () => {
    it('should update john does User to say test123456', async () => {
      await expect(
        controller.update('1', { lastName: 'Does' }),
      ).resolves.toEqual(updatedUser);
    });
  });

  describe('delete', () => {
    it('should remove john does User', async () => {
      await expect(controller.remove('1')).resolves.toEqual(singleUser);
    });
  });

  describe('search', () => {
    it('should find all Users that contain "test', async () => {
      await expect(controller.search('Doe')).resolves.toEqual(manyUsers);
    });
  });
});
