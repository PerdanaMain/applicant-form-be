const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

async function main() {
  await roleSeeder();
  await userSeeder();
}

const userSeeder = async () => {
  await prisma.user.createMany({
    data: [
      {
        email: "admin@admin",
        password: await bcrypt.hash("admin", 10),
        roleId: 1,
      },
    ],
  });
};

const roleSeeder = async () => {
  await prisma.role.createMany({
    data: [
      {
        roleName: "Admin",
      },
      {
        roleName: "User",
      },
    ],
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
