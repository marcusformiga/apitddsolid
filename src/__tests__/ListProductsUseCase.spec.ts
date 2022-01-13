import { Product } from "../module/users/entities/Product";
import { ProductsRepositoryFake } from "../module/users/repositories/fakes/ProductsRepositoryFake";
import { ListProductsUseCases } from "../module/users/useCases/listProducts/ListAllProductsUseCase"
let listProductRepositoryFake: ProductsRepositoryFake
let listProductsUseCases: ListProductsUseCases
describe("ListAllProducts", () => {
  beforeAll(() => {
    listProductRepositoryFake = new ProductsRepositoryFake()
    listProductsUseCases = new ListProductsUseCases(listProductRepositoryFake)
  })
  it("Should be able to list all products", async () => {
    const prod: Product = {
      description: "validdescription",
      name: "validname",
      price: 1,
      quantity: 1,

    }
    const productCreated = await listProductRepositoryFake.create(prod)
    const list = await listProductsUseCases.execute()
    expect(list).toBeTruthy()
    expect(list).toHaveLength(1)
  })
})