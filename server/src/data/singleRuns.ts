export const singleRuns: Record<
  string,
  { id: string; inputs: Record<string, any>; outputs: Record<string, any> }
> = {
  // Root: RetrievalGraph
  "1f0529c8-196c-6c5b-84a2-604f11dc8e42": {
    id: "1f0529c8-196c-6c5b-84a2-604f11dc8e42",
    inputs: {
      messages: [
        {
          role: "user",
          content:
            "What are the key differences between LangChain and LangGraph?",
        },
      ],
    },
    outputs: {
      response:
        "LangChain is a framework for building applications with LLMs using chains of components, while LangGraph extends this with stateful, multi-actor workflows using a graph-based architecture. LangGraph provides better support for cycles, persistence, and human-in-the-loop patterns.",
    },
  },

  // create_research_plan
  "98c13342-b8c3-4e3c-99f5-3c64755e5241": {
    id: "98c13342-b8c3-4e3c-99f5-3c64755e5241",
    inputs: {
      question:
        "What are the key differences between LangChain and LangGraph?",
    },
    outputs: {
      research_plan: {
        queries: [
          "LangChain vs LangGraph architecture differences",
          "LangGraph stateful workflows",
          "LangChain components and chains",
        ],
        steps: [
          "Search for architectural differences",
          "Compare workflow models",
          "Summarize key distinctions",
        ],
      },
    },
  },

  // RunnableSequence under create_research_plan
  "7630f733-f001-4b1e-bb55-d68ff32c1564": {
    id: "7630f733-f001-4b1e-bb55-d68ff32c1564",
    inputs: {
      question:
        "What are the key differences between LangChain and LangGraph?",
    },
    outputs: {
      queries: [
        "LangChain vs LangGraph architecture differences",
        "LangGraph stateful workflows",
        "LangChain components and chains",
      ],
    },
  },

  // ChatOpenAI under create_research_plan
  "4b2b3d6e-a758-4ee9-97d6-21b3e2578565": {
    id: "4b2b3d6e-a758-4ee9-97d6-21b3e2578565",
    inputs: {
      messages: [
        {
          role: "system",
          content:
            "You are a research planner. Generate search queries for the given question.",
        },
        {
          role: "user",
          content:
            "Generate 3 search queries to research: What are the key differences between LangChain and LangGraph?",
        },
      ],
      model: "gpt-4o-mini",
      temperature: 0,
    },
    outputs: {
      generations: [
        {
          text: '{"queries": ["LangChain vs LangGraph architecture differences", "LangGraph stateful workflows", "LangChain components and chains"]}',
          message: {
            role: "assistant",
            tool_calls: [
              {
                function: {
                  name: "generate_queries",
                  arguments:
                    '{"queries": ["LangChain vs LangGraph architecture differences", "LangGraph stateful workflows", "LangChain components and chains"]}',
                },
              },
            ],
          },
        },
      ],
      llm_output: { token_usage: { prompt_tokens: 520, completion_tokens: 100, total_tokens: 620 } },
    },
  },

  // JsonOutputKeyToolsParser under create_research_plan
  "fbded32d-555c-455a-b5c2-64b19e3d6b99": {
    id: "fbded32d-555c-455a-b5c2-64b19e3d6b99",
    inputs: {
      text: '{"queries": ["LangChain vs LangGraph architecture differences", "LangGraph stateful workflows", "LangChain components and chains"]}',
    },
    outputs: {
      parsed: [
        "LangChain vs LangGraph architecture differences",
        "LangGraph stateful workflows",
        "LangChain components and chains",
      ],
    },
  },

  // conduct_research (round 1)
  "c7ea4440-c26e-4c1c-80c4-00f6a12f3601": {
    id: "c7ea4440-c26e-4c1c-80c4-00f6a12f3601",
    inputs: {
      research_plan: {
        queries: [
          "LangChain vs LangGraph architecture differences",
          "LangGraph stateful workflows",
          "LangChain components and chains",
        ],
        iteration: 1,
      },
    },
    outputs: {
      documents: [
        "LangChain provides a standard interface for chains...",
        "LangGraph introduces a graph-based approach to workflows...",
      ],
      iteration_complete: true,
    },
  },

  // ResearcherGraph (round 1)
  "727b4355-c507-4f58-8d5d-317257f79704": {
    id: "727b4355-c507-4f58-8d5d-317257f79704",
    inputs: {
      queries: [
        "LangChain vs LangGraph architecture differences",
        "LangGraph stateful workflows",
        "LangChain components and chains",
      ],
    },
    outputs: {
      retrieved_documents: 9,
      unique_sources: 6,
    },
  },

  // generate_queries (round 1)
  "5a897072-eb91-4394-85e6-ec6ae23ac002": {
    id: "5a897072-eb91-4394-85e6-ec6ae23ac002",
    inputs: {
      question:
        "What are the key differences between LangChain and LangGraph?",
      iteration: 1,
    },
    outputs: {
      queries: [
        "LangChain vs LangGraph architecture differences",
        "LangGraph stateful workflows",
        "LangChain components and chains",
      ],
    },
  },

  // RunnableSequence (round 1)
  "6c615019-545d-4142-b42c-36a911a776a4": {
    id: "6c615019-545d-4142-b42c-36a911a776a4",
    inputs: {
      question:
        "What are the key differences between LangChain and LangGraph?",
    },
    outputs: {
      queries: [
        "LangChain vs LangGraph architecture",
        "LangGraph graph workflows vs LangChain chains",
        "LangChain LangGraph comparison features",
      ],
    },
  },

  // ChatOpenAI (round 1)
  "df9c550e-a013-4838-b746-f39827c088cd": {
    id: "df9c550e-a013-4838-b746-f39827c088cd",
    inputs: {
      messages: [
        {
          role: "system",
          content: "Generate search queries for research.",
        },
        {
          role: "user",
          content: "Generate queries for: LangChain vs LangGraph",
        },
      ],
      model: "gpt-4o-mini",
      temperature: 0,
    },
    outputs: {
      generations: [
        {
          text: '{"queries": ["LangChain vs LangGraph architecture", "LangGraph graph workflows vs LangChain chains", "LangChain LangGraph comparison features"]}',
        },
      ],
      llm_output: { token_usage: { prompt_tokens: 32, completion_tokens: 26, total_tokens: 58 } },
    },
  },

  // JsonOutputKeyToolsParser (round 1)
  "c90696e6-9cbb-45b4-a6b2-7a2822ac3c04": {
    id: "c90696e6-9cbb-45b4-a6b2-7a2822ac3c04",
    inputs: {
      text: '{"queries": ["LangChain vs LangGraph architecture", "LangGraph graph workflows vs LangChain chains", "LangChain LangGraph comparison features"]}',
    },
    outputs: {
      parsed: [
        "LangChain vs LangGraph architecture",
        "LangGraph graph workflows vs LangChain chains",
        "LangChain LangGraph comparison features",
      ],
    },
  },

  // retrieve_in_parallel (round 1)
  "51aa4b72-4fed-4a94-a1bb-f6078441c5c3": {
    id: "51aa4b72-4fed-4a94-a1bb-f6078441c5c3",
    inputs: {
      queries: [
        "LangChain vs LangGraph architecture",
        "LangGraph graph workflows vs LangChain chains",
        "LangChain LangGraph comparison features",
      ],
    },
    outputs: { dispatched: 3 },
  },

  // retrieve_documents (round 1, batch 1)
  "36b00134-a469-42e6-b183-71b36d76e21c": {
    id: "36b00134-a469-42e6-b183-71b36d76e21c",
    inputs: { query: "LangChain vs LangGraph architecture" },
    outputs: {
      documents: [
        { page_content: "LangChain uses a chain-based abstraction...", metadata: { source: "docs.langchain.com" } },
        { page_content: "LangGraph builds on LangChain primitives...", metadata: { source: "langchain-ai.github.io" } },
      ],
    },
  },

  // retrieve_documents (round 1, batch 2)
  "5f0f5c5d-1903-4ce0-b7d8-0d41e86d74dc": {
    id: "5f0f5c5d-1903-4ce0-b7d8-0d41e86d74dc",
    inputs: { query: "LangGraph graph workflows vs LangChain chains" },
    outputs: {
      documents: [
        { page_content: "Graph-based workflows allow for cycles and conditional branching...", metadata: { source: "blog.langchain.dev" } },
      ],
    },
  },

  // retrieve_documents (round 1, batch 3)
  "3fc6296c-f0bc-419d-bb11-13c46a2bd88b": {
    id: "3fc6296c-f0bc-419d-bb11-13c46a2bd88b",
    inputs: { query: "LangChain LangGraph comparison features" },
    outputs: {
      documents: [
        { page_content: "Key differences include state management, cycle support...", metadata: { source: "python.langchain.com" } },
      ],
    },
  },

  // VectorStoreRetriever (round 1, 3 instances)
  "7df53eb3-c1a3-4a44-92cb-72329e6fb7af": {
    id: "7df53eb3-c1a3-4a44-92cb-72329e6fb7af",
    inputs: { query: "LangChain vs LangGraph architecture", k: 4 },
    outputs: {
      documents: [
        { page_content: "LangChain uses a chain-based abstraction...", metadata: { source: "docs.langchain.com" } },
      ],
    },
  },
  "1a4dd3b3-69a1-4d7e-9dbc-ca0dc879d29b": {
    id: "1a4dd3b3-69a1-4d7e-9dbc-ca0dc879d29b",
    inputs: { query: "LangGraph graph workflows vs LangChain chains", k: 4 },
    outputs: {
      documents: [
        { page_content: "Graph-based workflows allow for cycles...", metadata: { source: "blog.langchain.dev" } },
      ],
    },
  },
  "b9ae5860-0e6b-4963-9471-e742d8078cba": {
    id: "b9ae5860-0e6b-4963-9471-e742d8078cba",
    inputs: { query: "LangChain LangGraph comparison features", k: 4 },
    outputs: {
      documents: [
        { page_content: "Key differences include state management...", metadata: { source: "python.langchain.com" } },
      ],
    },
  },

  // check_finished (round 1)
  "b894b073-fa10-49b8-91cd-cf791d83914e": {
    id: "b894b073-fa10-49b8-91cd-cf791d83914e",
    inputs: { documents_count: 9, iteration: 1, max_iterations: 3 },
    outputs: { should_continue: true, reason: "More iterations available" },
  },

  // conduct_research (round 2)
  "fa55083d-c97e-4d33-b92c-56867aa1552e": {
    id: "fa55083d-c97e-4d33-b92c-56867aa1552e",
    inputs: { research_plan: { queries: ["LangGraph persistence", "LangChain LCEL", "LangGraph human-in-the-loop"], iteration: 2 } },
    outputs: { documents: ["LangGraph supports persistence via checkpointers...", "LCEL provides a declarative way to compose chains..."], iteration_complete: true },
  },

  // ResearcherGraph (round 2)
  "84e51c40-3835-4ce8-ace7-c3ec6d35ace5": {
    id: "84e51c40-3835-4ce8-ace7-c3ec6d35ace5",
    inputs: { queries: ["LangGraph persistence", "LangChain LCEL", "LangGraph human-in-the-loop"] },
    outputs: { retrieved_documents: 9, unique_sources: 5 },
  },

  // generate_queries (round 2)
  "85eee97c-4065-40d9-aa5d-d059801f8abd": {
    id: "85eee97c-4065-40d9-aa5d-d059801f8abd",
    inputs: { question: "What are the key differences between LangChain and LangGraph?", iteration: 2 },
    outputs: { queries: ["LangGraph persistence", "LangChain LCEL", "LangGraph human-in-the-loop"] },
  },

  // RunnableSequence (round 2)
  "b17e5382-eca8-46a1-9070-aadfc5167e99": {
    id: "b17e5382-eca8-46a1-9070-aadfc5167e99",
    inputs: { question: "What are the key differences between LangChain and LangGraph?" },
    outputs: { queries: ["LangGraph persistence", "LangChain LCEL", "LangGraph human-in-the-loop"] },
  },

  // ChatOpenAI (round 2)
  "6cfae462-f262-430a-af79-c045a7a4ba55": {
    id: "6cfae462-f262-430a-af79-c045a7a4ba55",
    inputs: {
      messages: [{ role: "system", content: "Generate search queries for research." }, { role: "user", content: "Generate queries for round 2: LangChain vs LangGraph" }],
      model: "gpt-4o-mini",
      temperature: 0,
    },
    outputs: {
      generations: [{ text: '{"queries": ["LangGraph persistence", "LangChain LCEL", "LangGraph human-in-the-loop"]}' }],
      llm_output: { token_usage: { prompt_tokens: 22, completion_tokens: 26, total_tokens: 48 } },
    },
  },

  // JsonOutputKeyToolsParser (round 2)
  "79e69532-058f-400e-932e-e1e494e86333": {
    id: "79e69532-058f-400e-932e-e1e494e86333",
    inputs: { text: '{"queries": ["LangGraph persistence", "LangChain LCEL", "LangGraph human-in-the-loop"]}' },
    outputs: { parsed: ["LangGraph persistence", "LangChain LCEL", "LangGraph human-in-the-loop"] },
  },

  // retrieve_in_parallel (round 2)
  "df4fca4f-2a05-4c07-9de4-0e6d062eee2b": {
    id: "df4fca4f-2a05-4c07-9de4-0e6d062eee2b",
    inputs: { queries: ["LangGraph persistence", "LangChain LCEL", "LangGraph human-in-the-loop"] },
    outputs: { dispatched: 3 },
  },

  // retrieve_documents (round 2, 3 batches)
  "543445b7-a2fd-423e-95a1-8a3f65c76023": {
    id: "543445b7-a2fd-423e-95a1-8a3f65c76023",
    inputs: { query: "LangGraph persistence" },
    outputs: { documents: [{ page_content: "LangGraph supports state persistence via checkpointers...", metadata: { source: "langchain-ai.github.io" } }] },
  },
  "53bdb3d7-e088-4ac8-bc87-fb1717e11d13": {
    id: "53bdb3d7-e088-4ac8-bc87-fb1717e11d13",
    inputs: { query: "LangChain LCEL" },
    outputs: { documents: [{ page_content: "LCEL (LangChain Expression Language) provides a declarative way...", metadata: { source: "docs.langchain.com" } }] },
  },
  "675c478f-9bf2-4bb0-8461-0010dbc24b23": {
    id: "675c478f-9bf2-4bb0-8461-0010dbc24b23",
    inputs: { query: "LangGraph human-in-the-loop" },
    outputs: { documents: [{ page_content: "LangGraph supports human-in-the-loop via interrupt_before and interrupt_after...", metadata: { source: "blog.langchain.dev" } }] },
  },

  // VectorStoreRetriever (round 2, 3 instances)
  "a08ad7b8-ab96-4aef-8d49-82fd2eaeed41": {
    id: "a08ad7b8-ab96-4aef-8d49-82fd2eaeed41",
    inputs: { query: "LangGraph persistence", k: 4 },
    outputs: { documents: [{ page_content: "LangGraph supports state persistence...", metadata: { source: "langchain-ai.github.io" } }] },
  },
  "26f18b5e-53dd-4a25-98cd-97edfa911b03": {
    id: "26f18b5e-53dd-4a25-98cd-97edfa911b03",
    inputs: { query: "LangChain LCEL", k: 4 },
    outputs: { documents: [{ page_content: "LCEL provides a declarative way...", metadata: { source: "docs.langchain.com" } }] },
  },
  "0fb18c73-27f2-4ed7-9654-1832afff4bd7": {
    id: "0fb18c73-27f2-4ed7-9654-1832afff4bd7",
    inputs: { query: "LangGraph human-in-the-loop", k: 4 },
    outputs: { documents: [{ page_content: "LangGraph supports human-in-the-loop...", metadata: { source: "blog.langchain.dev" } }] },
  },

  // check_finished (round 2)
  "d1a78cdd-734f-4121-ba66-4082efcc31ec": {
    id: "d1a78cdd-734f-4121-ba66-4082efcc31ec",
    inputs: { documents_count: 18, iteration: 2, max_iterations: 3 },
    outputs: { should_continue: true, reason: "More iterations available" },
  },

  // conduct_research (round 3)
  "eba1cfd6-3f9c-4193-a40a-ec10f90b656c": {
    id: "eba1cfd6-3f9c-4193-a40a-ec10f90b656c",
    inputs: { research_plan: { queries: ["LangGraph vs LangChain when to use", "LangGraph agent patterns", "LangChain sequential chain limitations"], iteration: 3 } },
    outputs: { documents: ["Use LangGraph when you need cycles...", "LangChain is better for simple sequential pipelines..."], iteration_complete: true },
  },

  // ResearcherGraph (round 3)
  "9520bed9-ca16-473a-a7d8-49e9d7593b57": {
    id: "9520bed9-ca16-473a-a7d8-49e9d7593b57",
    inputs: { queries: ["LangGraph vs LangChain when to use", "LangGraph agent patterns", "LangChain sequential chain limitations"] },
    outputs: { retrieved_documents: 9, unique_sources: 4 },
  },

  // generate_queries (round 3)
  "ccf1e20d-f154-4f8b-9fbf-838c83802b30": {
    id: "ccf1e20d-f154-4f8b-9fbf-838c83802b30",
    inputs: { question: "What are the key differences between LangChain and LangGraph?", iteration: 3 },
    outputs: { queries: ["LangGraph vs LangChain when to use", "LangGraph agent patterns", "LangChain sequential chain limitations"] },
  },

  // RunnableSequence (round 3)
  "22b880ab-824b-4cd4-9290-98b6ce5d7d41": {
    id: "22b880ab-824b-4cd4-9290-98b6ce5d7d41",
    inputs: { question: "What are the key differences between LangChain and LangGraph?" },
    outputs: { queries: ["LangGraph vs LangChain when to use", "LangGraph agent patterns", "LangChain sequential chain limitations"] },
  },

  // ChatOpenAI (round 3)
  "9f755152-7deb-4649-bf54-7b3a5238e76f": {
    id: "9f755152-7deb-4649-bf54-7b3a5238e76f",
    inputs: {
      messages: [{ role: "system", content: "Generate search queries for research." }, { role: "user", content: "Generate queries for round 3: LangChain vs LangGraph" }],
      model: "gpt-4o-mini",
      temperature: 0,
    },
    outputs: {
      generations: [{ text: '{"queries": ["LangGraph vs LangChain when to use", "LangGraph agent patterns", "LangChain sequential chain limitations"]}' }],
      llm_output: { token_usage: { prompt_tokens: 22, completion_tokens: 26, total_tokens: 48 } },
    },
  },

  // JsonOutputKeyToolsParser (round 3)
  "12fdfb3e-6f35-4bd8-8e65-45ce0256e738": {
    id: "12fdfb3e-6f35-4bd8-8e65-45ce0256e738",
    inputs: { text: '{"queries": ["LangGraph vs LangChain when to use", "LangGraph agent patterns", "LangChain sequential chain limitations"]}' },
    outputs: { parsed: ["LangGraph vs LangChain when to use", "LangGraph agent patterns", "LangChain sequential chain limitations"] },
  },

  // retrieve_in_parallel (round 3)
  "c1bb6993-e41b-4e9c-b083-32b4ae283324": {
    id: "c1bb6993-e41b-4e9c-b083-32b4ae283324",
    inputs: { queries: ["LangGraph vs LangChain when to use", "LangGraph agent patterns", "LangChain sequential chain limitations"] },
    outputs: { dispatched: 3 },
  },

  // retrieve_documents (round 3, 3 batches)
  "ddddb6fb-fa9b-4381-9fb3-542b6e801436": {
    id: "ddddb6fb-fa9b-4381-9fb3-542b6e801436",
    inputs: { query: "LangGraph vs LangChain when to use" },
    outputs: { documents: [{ page_content: "Use LangGraph when you need cycles, persistence, or human-in-the-loop...", metadata: { source: "langchain-ai.github.io" } }] },
  },
  "f65e76ac-2ba7-4c59-bcdc-9486187551a8": {
    id: "f65e76ac-2ba7-4c59-bcdc-9486187551a8",
    inputs: { query: "LangGraph agent patterns" },
    outputs: { documents: [{ page_content: "LangGraph supports ReAct agents, plan-and-execute...", metadata: { source: "blog.langchain.dev" } }] },
  },
  "9bf2b23a-d8c9-46da-8591-a3765938b6b7": {
    id: "9bf2b23a-d8c9-46da-8591-a3765938b6b7",
    inputs: { query: "LangChain sequential chain limitations" },
    outputs: { documents: [{ page_content: "Sequential chains in LangChain don't support cycles...", metadata: { source: "python.langchain.com" } }] },
  },

  // VectorStoreRetriever (round 3, 3 instances)
  "ad1b5663-b675-424a-9d77-23b37612f825": {
    id: "ad1b5663-b675-424a-9d77-23b37612f825",
    inputs: { query: "LangGraph vs LangChain when to use", k: 4 },
    outputs: { documents: [{ page_content: "Use LangGraph when you need cycles...", metadata: { source: "langchain-ai.github.io" } }] },
  },
  "c312ae04-99b5-4f49-8dbd-6c145a7dc733": {
    id: "c312ae04-99b5-4f49-8dbd-6c145a7dc733",
    inputs: { query: "LangGraph agent patterns", k: 4 },
    outputs: { documents: [{ page_content: "LangGraph supports ReAct agents...", metadata: { source: "blog.langchain.dev" } }] },
  },
  "00f2d91c-ba29-45f8-8306-2af607c92d82": {
    id: "00f2d91c-ba29-45f8-8306-2af607c92d82",
    inputs: { query: "LangChain sequential chain limitations", k: 4 },
    outputs: { documents: [{ page_content: "Sequential chains don't support cycles...", metadata: { source: "python.langchain.com" } }] },
  },

  // check_finished (round 3)
  "3c2af8ac-575c-46c8-b697-2f23eb170ed3": {
    id: "3c2af8ac-575c-46c8-b697-2f23eb170ed3",
    inputs: { documents_count: 27, iteration: 3, max_iterations: 3 },
    outputs: { should_continue: false, reason: "Max iterations reached" },
  },

  // respond
  "04407860-4ca3-436b-b584-92552390badf": {
    id: "04407860-4ca3-436b-b584-92552390badf",
    inputs: {
      documents: [
        "LangChain uses a chain-based abstraction...",
        "LangGraph builds on LangChain primitives...",
        "Graph-based workflows allow for cycles...",
        "Key differences include state management...",
        "LangGraph supports persistence via checkpointers...",
        "LCEL provides a declarative way...",
        "Use LangGraph when you need cycles...",
      ],
      question:
        "What are the key differences between LangChain and LangGraph?",
    },
    outputs: {
      response:
        "LangChain is a framework for building applications with LLMs using chains of components, while LangGraph extends this with stateful, multi-actor workflows using a graph-based architecture. LangGraph provides better support for cycles, persistence, and human-in-the-loop patterns.",
    },
  },

  // ChatOpenAI under respond
  "429e5a2b-a48f-4f99-8ca9-ca225da387f7": {
    id: "429e5a2b-a48f-4f99-8ca9-ca225da387f7",
    inputs: {
      messages: [
        {
          role: "system",
          content:
            "You are a helpful research assistant. Use the provided documents to answer the user's question.",
        },
        {
          role: "user",
          content:
            "Based on the research documents, answer: What are the key differences between LangChain and LangGraph?",
        },
      ],
      model: "gpt-4o",
      temperature: 0,
    },
    outputs: {
      generations: [
        {
          text: "LangChain is a framework for building applications with LLMs using chains of components, while LangGraph extends this with stateful, multi-actor workflows using a graph-based architecture. LangGraph provides better support for cycles, persistence, and human-in-the-loop patterns.",
        },
      ],
      llm_output: { token_usage: { prompt_tokens: 10500, completion_tokens: 2495, total_tokens: 12995 } },
    },
  },
};
