import { Injectable } from '@nestjs/common';
import { Prisma, Ticket } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

// Define query parameters that are made available to search for multiple tickets
interface FindManyTicketsParams {
  skip?: number;
  take?: number;
  cursor?: Prisma.TicketWhereUniqueInput;
  where?: Prisma.TicketWhereInput;
  orderBy?: Prisma.TicketOrderByWithRelationInput;
}

// Define parameters for inputs for updating tickets
interface UpdateTicketParams {
  where: Prisma.TicketWhereUniqueInput;
  data: Prisma.TicketUpdateInput;
}

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TicketCreateInput): Promise<Ticket> {
    return this.prisma.ticket.create({
      data,
    });
  }

  async findAll(): Promise<Ticket[]> {
    return this.findMany(undefined);
  }

  async findOne(ticketWhereUniqueInput: Prisma.TicketWhereUniqueInput): Promise<Ticket | null> {
    return this.prisma.ticket.findUnique({ where: ticketWhereUniqueInput });
  }

  async findMany(params: FindManyTicketsParams): Promise<Ticket[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.ticket.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async update(params: UpdateTicketParams): Promise<Ticket> {
    const { where, data } = params;
    return this.prisma.ticket.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.TicketWhereUniqueInput): Promise<Ticket> {
    return this.prisma.ticket.delete({
      where,
    });
  }

  
}
