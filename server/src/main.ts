import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PrismaService } from './prisma/prisma.service'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  // Create the API server
  const app = await NestFactory.create(AppModule)
  app.enableCors({ credentials: true, origin: true })
  app.use(cookieParser())
  // Tells prisma to use shutdown hooks instead of exiting before the hooks can be called
  const prismaService: PrismaService = app.get(PrismaService)
  prismaService.enableShutdownHooks(app)

  // Start the API server on port 3000
  await app.listen(5000)
}
bootstrap()
