import { defineMcp } from "@lovable.dev/mcp-js";
import getProductTool from "./tools/get-product";
import getOfferTool from "./tools/get-offer";
import searchFaqTool from "./tools/search-faq";

export default defineMcp({
  name: "decorize-elegance-landing",
  title: "Decorize Elegance Landing",
  version: "0.1.0",
  instructions:
    "Ferramentas públicas da landing page da Decorize. Use `get_product` para materiais e ambientes, `get_offer` para preços, pagamento e garantia, e `search_faq` para dúvidas frequentes.",
  tools: [getProductTool, getOfferTool, searchFaqTool],
});