import { Test, TestingModule } from '@nestjs/testing';
import { mockTicketService } from './ticket.service.mock';
import {
  manyTickets,
  mockPrismaService,
  multipleTickets,
  singleTicket,
  updatedTicket,
} from '../prisma/prisma.mock';
import { PrismaService } from '../prisma/prisma.service';
import { TicketService } from './ticket.service';

describe('TicketService', () => {
  let service: TicketService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TicketService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<TicketService>(TicketService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Ticket', async () => {
      await expect(
        service.create({
          subject: 'Test 1',
          content: 'test123',
          creator: {
            connect: { id: 1 },
          },
        }),
      ).resolves.toEqual(singleTicket);
    });
  });

  describe('findOne by ID', () => {
    it('should find a Ticket by ID', async () => {
      await expect(service.findOne({ id: 1 })).resolves.toEqual(singleTicket);
    });
  });

  describe('findMany', () => {
    it('should find all Tickets with the last name "Doe"', async () => {
      mockPrismaService.ticket.findMany.mockImplementation(() => manyTickets);
      expect(
        service.findMany({
          where: {
            content: {
              contains: 'test',
            },
          },
        }),
      ).resolves.toEqual(manyTickets);
    });
  });

  describe('findAll', () => {
    it('should find all Tickets', async () => {
      mockPrismaService.ticket.findMany.mockImplementation(
        () => multipleTickets,
      );
      await expect(service.findMany({})).resolves.toEqual(multipleTickets);
    });
  });

  describe('update', () => {
    it('should update john does ticket to say test123456', async () => {
      await expect(
        service.update({
          data: {
            content: 'test123456',
          },
          where: { id: 1 },
        }),
      ).resolves.toEqual(updatedTicket);
    });
  });

  describe('delete', () => {
    it('should remove john does ticket', async () => {
      await expect(service.remove({ id: 1 })).resolves.toEqual(singleTicket);
    });
  });
});
