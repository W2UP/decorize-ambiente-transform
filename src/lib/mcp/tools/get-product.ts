import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { product } from "../catalog";

export default defineTool({
  name: "get_product",
  title: "Detalhes do produto",
  description:
    "Retorna os detalhes públicos do móvel da Decorize: descrição, materiais e ambientes sugeridos.",
  inputSchema: {},
  outputSchema: { product: z.unknown() },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(product, null, 2) }],
    structuredContent: { product },
  }),
});