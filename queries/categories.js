import { replaceMongoIdInArray } from "@/lib/convertData";
import { Category } from "@/model/category-model";


export async function getCategories(params) {
    const categories = await Category.find({}).lean();

    return replaceMongoIdInArray(categories);
}