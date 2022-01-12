import { AppError } from "../shared/errors/AppError";
import { User } from "../module/users/entities/User";
import { UsersRepositoryFake } from "../module/users/repositories/fakes/UsersRepositoryFake";
import { CreateUserUseCases } from "../module/users/useCases/createUser/CreateUsersUseCases";

let createUsersUseCases: CreateUserUseCases;
let createUsersRepositoryFake: UsersRepositoryFake;
// triplo a pattern (arrange, action, assert)
describe("CreateUsers", () => {
  beforeAll(() => {
    createUsersRepositoryFake = new UsersRepositoryFake();
    createUsersUseCases = new CreateUserUseCases(createUsersRepositoryFake);
  });
  it("should be able to create a new user", async () => {
    // arrange
    const user: User = {
      name: "testname",
      email: "testemail@mail.com",
      password: "testpassword",
      is_admin: false,
    };
    const repoSpy = jest.spyOn(createUsersRepositoryFake, "create")
    const newUser = await createUsersUseCases.execute(user);
    expect(repoSpy).toHaveBeenCalledTimes(1)
    expect(newUser).toHaveProperty("id");
    expect(newUser).toBeDefined();
    expect(newUser).toBeTruthy()
  });
  it("should not to be able to create 2 users with same email", async () => {
    expect(async () => {
      await createUsersUseCases.execute({
        name: "testname",
        email: "testemail@mail.com",
        password: "1234",
      });
      await createUsersUseCases.execute({
        name: "testname",
        email: "testemail@mail.com",
        password: "1234",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
