import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AirPort, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

type Pagination = {
  page?: number;
  take?: number;
  cursor?: Prisma.AirPortWhereUniqueInput;
  orderBy?: Prisma.AirPortOrderByWithRelationInput;
  searchTerm?: string;
};

export type AirPortWithPagination = Promise<{
  data: AirPort[];
  currentPage: number;
  totalPages: number;
}>;

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getHello(): string {
    return 'Hello Tilla!';
  }

  async getAirports({
    page = 1,
    take = 10,
    cursor,
    searchTerm,
    orderBy,
  }: Pagination): AirPortWithPagination {
    const searchMode: Prisma.StringFilter = { mode: 'insensitive' };
    const where: Prisma.AirPortWhereInput = searchTerm
      ? {
          OR: [
            {
              name: {
                contains: searchTerm,
                ...searchMode,
              },
            },
            {
              city: {
                contains: searchTerm,
                ...searchMode,
              },
            },
            {
              country: {
                contains: searchTerm,
                ...searchMode,
              },
            },
            {
              iata: {
                contains: searchTerm,
                ...searchMode,
              },
            },
          ],
        }
      : undefined;

    const option = {
      skip: Number(page - 1) * Number(take),
      take: Number(take),
      cursor,
      orderBy,
    };
    // const data = await this.prisma.airPort.findMany({ where, ...option });
    // const count = await this.prisma.airPort.count({ where });

    const [data, count] = await this.prisma.$transaction([
      this.prisma.airPort.findMany({ where, ...option }),
      this.prisma.airPort.count({ where }),
    ]);

    return {
      data,
      currentPage: page,
      totalPages: Math.ceil(count / take),
    };
  }

  async getAirport({ iata }): Promise<AirPort> {
    const data = await this.prisma.airPort.findFirst({
      where: {
        iata,
      },
    });
    if (!data) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return data;
  }
}
