import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket as TicketModel } from '@prisma/client';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get('ticket/:id')
  async getTicketById(@Param('id') id: string): Promise<TicketModel> {
    return this.ticketService.ticket({ id: Number(id) });
  }

  @Get('ticket')
  async getTickets(): Promise<TicketModel[]> {
    return this.ticketService.tickets({});
  }

  @Get('filtered-tickets/:searchString')
  async getFilteredPosts(
    @Param('searchString') searchString: string,
  ): Promise<TicketModel[]> {
    return this.ticketService.tickets({
      where: {
        OR: [
          {
            subject: { contains: searchString },
          },
          {
            content: { contains: searchString },
          },
        ],
      },
    });
  }

  @Post('ticket/new')
  async createDraft(
    @Body() ticketData: { subject: string; content?: string; authorId: number },
  ): Promise<TicketModel> {
    const { subject, content, authorId } = ticketData;
    return this.ticketService.createTicket({
      subject,
      content,
      creator: {
        connect: { id: authorId },
      },
    });
  }

  // @Put('ticket/:id/status/:state')
  // async publishPost(@Param('id') id: string, state: string): Promise<TicketModel> {
  //   return this.ticketService.updateTicket({
  //     where: { id: Number(id) },
  //     data: { state: state },
  //   });
  // }

  @Delete('ticket/:id')
  async deleteTicket(@Param('id') id: string): Promise<TicketModel> {
    return this.ticketService.deleteTicket({ id: Number(id) });
  }
}
