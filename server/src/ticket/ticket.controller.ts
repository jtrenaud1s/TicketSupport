import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Prisma, Ticket } from '@prisma/client';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  create(@Body() createTicketDto: Prisma.TicketCreateInput) {
    return this.ticketService.create(createTicketDto);
  }

  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketService.findOne({ id: +id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTicketDto: Prisma.TicketUpdateInput,
  ) {
    return this.ticketService.update({
      where: { id: +id },
      data: updateTicketDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketService.remove({ id: +id });
  }

  @Get('search/:searchString')
  async search(
    @Param('searchString') searchString: string,
  ): Promise<Ticket[]> {
    return this.ticketService.findMany({
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
}
