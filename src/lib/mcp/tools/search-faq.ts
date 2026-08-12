import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { faqs } from "../catalog";

export default defineTool({
  name: "search_faq",
  title: "Buscar nas dúvidas frequentes",
  description:
    "Busca nas dúvidas frequentes públicas da Decorize. Sem termo de busca, retorna todas as perguntas.",
  inputSchema: {
    query: z.string().trim().optional().describe("Termo de busca opcional (ex.: entrega, garantia)."),
  },
  outputSchema: { results: z.unknown() },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.toLowerCase() ?? "";
    const results = q
      ? faqs.filter(
          (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q),
        )
      : faqs;
    return {
      content: [{ type: "text" as const, text: JSON.stringify(results, null, 2) }],
      structuredContent: { results },
    };
  },
});