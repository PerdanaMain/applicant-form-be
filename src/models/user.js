const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUserById = async (userId) => {
  return await prisma.user.findUnique({
    where: {
      userId,
    },
    include: {
      Role: true,
    },
  });
};

const getUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      Role: true,
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

const updateRefreshToken = async (userId, refreshToken) => {
  return await prisma.user.update({
    where: {
      userId,
    },
    data: {
      refreshToken,
    },
  });
};

const getUserByRefreshToken = async (refreshToken) => {
  return await prisma.user.findFirst({
    where: {
      refreshToken,
    },
  });
};

module.exports = {
  getUserByEmail,
  createUser,
  updateRefreshToken,
  getUserByRefreshToken,
  getUserById,
};
