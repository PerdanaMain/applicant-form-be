const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

const createUser = async (data) => {
  return await prisma.user.create({
    data: {
      email: data.email,
      password: data.password,
      roleId: data.roleId,
    },
  });
};

module.exports = {
  getUserByEmail,
  createUser,
};
