from langchain_core.language_models import BaseLanguageModel


def get_llm(model: str) -> BaseLanguageModel:
    from langchain_community.llms import Ollama

    llm = Ollama(model=model)

    return llm
