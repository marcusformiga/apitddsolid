import { CreateProductDto } from "../module/users/entities/dto/CreateProductDto"
import { ProductsRepositoryFake } from "../module/users/repositories/fakes/ProductsRepositoryFake"
import { CreateProductsUseCases } from "../module/users/useCases/createProducts/CreateProductsUseCases"

let createProductsUseCases: CreateProductsUseCases
let createProductRepositoryFake: ProductsRepositoryFake
describe("CreateProductsUseCases", () => {
  beforeEach(() => {
    createProductRepositoryFake = new ProductsRepositoryFake()
    createProductsUseCases = new CreateProductsUseCases(
      createProductRepositoryFake,
    )
  })
  it("should be able to create a new product", async () => {
    const newProduct: CreateProductDto = {
      name: "validname",
      description: "validdescription",
      price: 20,
      quantity: 2,
    }
    await createProductsUseCases.execute(newProduct)
  })
})
