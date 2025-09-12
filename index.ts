import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.user.create({
  //   data: {
  //     name: "ash",
  //     email: "ash@gmail.com",
  //     profilePhoto: "https://example.com/photo.jpg",
  //   },
  // });

  // console.log(result);

  // const userData=await prisma.user.findMany({
  //   where: {
  //    name:"ash"
  //   }
  // })
  // console.log(userData)
  const findUserById = await prisma.user.findFirstOrThrow({
    where: {
      id: 10,
    },
  });
  console.log(findUserById);
}

main();
