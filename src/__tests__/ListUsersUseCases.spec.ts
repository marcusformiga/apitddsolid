import { UsersRepositoryFake } from "../module/users/repositories/fakes/UsersRepositoryFake"
import { ListAllUsersUseCases } from "../module/users/useCases/listUsers/ListAllUsersUsecases"

let listAllUsersUseCases: ListAllUsersUseCases
let usersRepositoryFake: UsersRepositoryFake
describe("ListAllUsers", () => {
  beforeEach(() => {
    usersRepositoryFake = new UsersRepositoryFake()
    listAllUsersUseCases = new ListAllUsersUseCases(usersRepositoryFake)
  })
  it("should be able to list all users", async () => {
    const newUser = {
      name: "testname",
      email: "testmail@mail.com",
      password: "1234",
    }
    await usersRepositoryFake.create(newUser)
    const users = await listAllUsersUseCases.execute()
    expect(users).toHaveLength(1)
    expect(users).toBeTruthy()
  })
})
