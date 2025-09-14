import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function others() {
  //create some user data

  //   const insertUsers = await prisma.user.createMany({
  //     data: [
  //       {
  //         name: "ash ababu",
  //         email: "babu@gmail.com",
  //       },
  //       {
  //         name: "ash ",
  //         email: "bab1=u1@gmail.com",
  //       },
  //       {
  //         name: "ash ababu3",
  //         email: "babu@gmail.com",
  //       },
  //       {
  //         name: "ash ababu",
  //         email: "babu3@gmail.com",
  //       },
  //       {
  //         name: "ashraful ababu",
  //         email: "babu4@gmail.com",
  //       },
  //       {
  //         name: "ash babu",
  //         email: "babu5@gmail.com",
  //       },
  //     ],
  //   });
  //   console.log(insertUsers);

  const allUSers = await prisma.user.findMany({
    where: {
      name: {
        contains: "ASH",
        mode: "insensitive",
      },
    },
    orderBy: {
      name: "asc",
    },
  });
  console.log(allUSers);
}
others();
