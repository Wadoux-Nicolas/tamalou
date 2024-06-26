def create_chain():
    import os

    provider = os.environ.get("PROVIDER", "ollama")
    model = os.environ.get("MODEL", "llama3")

    from src.llm import get_llm

    llm = get_llm(provider, model)

    prompt_template = """Rédiger un résumé concis des éléments suivants :


"{text}"


RÉSUMÉ CONCIS:"""
    from langchain_core.prompts import PromptTemplate

    prompt_template = PromptTemplate(template=prompt_template, input_variables=["text"])

    from langchain.chains.summarize import load_summarize_chain

    chain = load_summarize_chain(llm, chain_type="stuff", prompt=prompt_template)

    return chain
