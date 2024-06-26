from langchain_core.language_models import BaseLanguageModel


def _get_ollama(model: str) -> BaseLanguageModel:
    from langchain_community.llms import Ollama

    llm = Ollama(model=model)

    return llm


def _get_openai() -> BaseLanguageModel:
    import os
    from langchain_openai import ChatOpenAI

    api_key = os.environ["OPENAI_API_KEY"]
    llm = ChatOpenAI(api_key=api_key)

    return llm


def get_llm(provider: str, model: str) -> BaseLanguageModel:
    assert provider in ["ollama", "openai"], "Provider is invalid"

    if provider == "ollama":
        return _get_ollama(model=model)
    elif provider == "openai":
        return _get_openai()
