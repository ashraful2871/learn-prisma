import { PrismaClient } from "@prisma/client"



const prisma=new PrismaClient()
async function main ()  {
   const result=await prisma.user.create({
    data:{
        name:"Ashraful",
        email:"ash@gmail.com"
    }
   })
   console.log(result)
}

main()