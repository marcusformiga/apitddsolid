import { UsersRepositoryFake } from "../module/users/repositories/fakes/UsersRepositoryFake"
import { DeleteUsersUseCases } from "../module/users/useCases/DeleteUsers/DeleteUsersUseCases"
import { AppError } from "../shared/errors/AppError"

let deleteUsersUseCases: DeleteUsersUseCases
let usersRepositoryFake: UsersRepositoryFake

describe("DeleteUsersUseCases", () => {
  beforeEach(() => {
    deleteUsersUseCases = new DeleteUsersUseCases(usersRepositoryFake)
    usersRepositoryFake = new UsersRepositoryFake()
  })
  it("should be able to delete an user", async () => {
    expect(async () => {
      const newUser = await usersRepositoryFake.create({
        id: "12validid",
        email: "validemail",
        name: "validname",
        password: "validpassword",
      })
      const repoSpy = jest.spyOn(usersRepositoryFake, "remove")
      await deleteUsersUseCases.execute("12validid")

      expect(repoSpy).toHaveBeenCalledTimes(1)
    })
  })
  it("should not to be able to delete a no existent user", async () => {
    expect(async () => {
      await deleteUsersUseCases.execute("invalidid")
    }).rejects.toBeInstanceOf(AppError)
  })
})
