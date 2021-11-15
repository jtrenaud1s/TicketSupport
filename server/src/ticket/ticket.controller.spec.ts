import { Test, TestingModule } from '@nestjs/testing';
import {
  singleTicket,
  multipleTickets,
  updatedTicket,
  manyTickets,
} from '../prisma/prisma.mock';
import { mockTicketService } from './ticket.service.mock';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

describe('TicketController', () => {
  let controller: TicketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketController],
      providers: [
        {
          provide: TicketService,
          useValue: mockTicketService,
        },
      ],
    }).compile();

    controller = module.get<TicketController>(TicketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  //create
  describe('create', () => {
    it('should create a new Ticket', async () => {
      await expect(
        controller.create({
          subject: 'Test 1',
          content: 'test123',
          creator: {
            connect: { id: 1 },
          },
        }),
      ).resolves.toEqual(singleTicket);
    });
  });

  // findOne
  describe('findOne by ID', () => {
    it('should find a Ticket by ID', async () => {
      await expect(controller.findOne('1')).resolves.toEqual(singleTicket);
    });
  });

  // describe('findMany', () => {
  //   it('should find all Tickets with the last name "Doe"', async () => {
  //     mockPrismacontroller.ticket.findMany.mockImplementation(() => manyTickets);
  //     expect(
  //       controller.findMany({
  //         where: {
  //           content: {
  //             contains: 'test',
  //           },
  //         },
  //       }),
  //     ).resolves.toEqual(manyTickets);
  //   });
  // });
  //findAll

  describe('findAll', () => {
    it('should find all Tickets', async () => {
      await expect(controller.findAll()).resolves.toEqual(multipleTickets);
    });
  });

  describe('update', () => {
    it('should update john does ticket to say test123456', async () => {
      await expect(
        controller.update('1', { content: 'test123456' }),
      ).resolves.toEqual(updatedTicket);
    });
  });

  describe('delete', () => {
    it('should remove john does ticket', async () => {
      await expect(controller.remove('1')).resolves.toEqual(singleTicket);
    });
  });

  describe('search', () => {
    it('should find all Tickets that contain "test', async () => {
      await expect(controller.search('test')).resolves.toEqual(manyTickets);
    });
  });
});
