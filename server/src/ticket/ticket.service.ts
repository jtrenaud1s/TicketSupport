import { Prisma, Ticket } from '.prisma/client';
import { Injectable } from '@nestjs/common';
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

// create the ticket service
@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  // get one ticket
  public async ticket(
    userWhereUniqueInput: Prisma.TicketWhereUniqueInput,
  ): Promise<Ticket | null> {
    return this.prisma.ticket.findUnique({ where: userWhereUniqueInput });
  }

  // get multiple tickets
  public async tickets(params: FindManyTicketsParams): Promise<Ticket[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.ticket.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  public async createTicket(data: Prisma.TicketCreateInput): Promise<Ticket> {
    return this.prisma.ticket.create({
      data,
    });
  }

  public async updateTicket(params: UpdateTicketParams): Promise<Ticket> {
    const { where, data } = params;
    return this.prisma.ticket.update({
      data,
      where,
    });
  }

  public async deleteTicket(where: Prisma.TicketWhereUniqueInput): Promise<Ticket> {
    return this.prisma.ticket.delete({
      where,
    });
  }

  
}
