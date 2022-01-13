import { AppError } from "../shared/errors/AppError";
import { User } from "../module/users/entities/User";
import { UsersRepositoryFake } from "../module/users/repositories/fakes/UsersRepositoryFake";
import { CreateUserUseCases } from "../module/users/useCases/createUser/CreateUsersUseCases";
import { CreateUserDto } from "../module/users/entities/dto/CreateUserDto";

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
  // criamos um usuario normalmente
  // depois fazemos nosso expect lançar o erro esperado pelo AppError
  it("Should not be able to create a new user if email already exists", async () => {
    const user: CreateUserDto = {
      name: "validname",
      email: "validmail@mail.com",
      password: "validpass",
    }
    const newUser = await createUsersUseCases.execute(user)
    await expect(
      createUsersUseCases.execute({
        name: "validname",
        email: user.email,
        password: "validpass"
      })
    ).rejects.toEqual(new AppError(`Usuário com o email ${user.email} já está cadastrado`, 409))
  })
});
