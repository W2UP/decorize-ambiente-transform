import { defineTool } from "@lovable.dev/mcp-js";
import { offer } from "../catalog";

export default defineTool({
  name: "get_offer",
  title: "Oferta e preços",
  description:
    "Retorna a oferta pública: preço ancorado, preço atual, formas de pagamento, garantia e prazo de entrega.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(offer, null, 2) }],
    structuredContent: { offer },
  }),
});