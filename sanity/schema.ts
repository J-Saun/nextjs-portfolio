import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/arrayType/blockContent";
import category from "./schemas/documentType/category";
import post from "./schemas/documentType/post";
import author from "./schemas/documentType/author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent],
};
