// https://github.com/leosuncin/nest-auth-example/blob/master/src/auth/auth.controller.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { mockTicketService } from '../ticket/ticket.service.mock';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockTicketService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

//   describe('login', () => {
//     it('should log in as John doe', async () => {
//       await expect(
//         controller.login({
          
//         }),
//       ).resolves.toHaveProperty('access_token');
//     });
//   });

 
});
