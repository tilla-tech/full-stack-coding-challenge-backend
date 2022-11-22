import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import * as data from './airports.json';
async function main() {
  console.log(`Start seeding ...`);
  await prisma.airPort.createMany({
    data,
  });
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
