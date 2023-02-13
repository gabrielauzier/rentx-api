import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstace();

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);

const listCategoriesController = new ListCategoryController(
    listCategoryUseCase
);

export { listCategoriesController };
