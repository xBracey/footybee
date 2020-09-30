import { addUsers } from "../services";

const userSeed = async () => {
  const users = [
    {
      username: "Test User 1",
      password: "password",
      email: "test1@test.com",
      verified: false,
      admin: true,
    },
    {
      username: "Test User 2",
      password: "password",
      email: "test2@test.com",
      verified: false,
      admin: true,
    },
    {
      username: "Test User Delete 1",
      password: "password",
      email: "testdelete1@test.com",
      verified: false,
      admin: true,
    },
    {
      username: "Test User Delete 2",
      password: "password",
      email: "testdelete2@test.com",
      verified: false,
      admin: true,
    },
  ];

  await addUsers(users);
};

export default userSeed;
