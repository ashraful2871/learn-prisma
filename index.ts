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
  const userData = await prisma.user.findMany();
  // console.log(userData);
  // const findUserById = await prisma.user.findFirstOrThrow({
  //   where: {
  //     id: 10,
  //   },
  // });
  // console.log(findUserById);
  // update user data
  // const updated = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: "ashraful islam",
  //     email: "ashrafulIslam@gmail.com",
  //   },
  // });
  // console.log(updated);

  // const updateProfilePhoto = await prisma.user.updateManyAndReturn({
  //   where: {
  //     profilePhoto: null,
  //   },
  //   data: {
  //     profilePhoto: "defaultimage",
  //   },
  // });
  // console.log(updateProfilePhoto);

  const deleteUser = await prisma.user.deleteMany({
    where: {
      id: {
        lt: 5,
      },
    },
  });
  console.log(deleteUser);
}

main();
