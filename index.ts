import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.user.create({
    data: {
      name: "ash",
      email: "ash@gmail.com",
      profilePhoto: "https://example.com/photo.jpg", 
    },
  });

  console.log(result);
}

main();
