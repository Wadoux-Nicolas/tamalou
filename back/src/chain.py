def create_chain():
    import os

    model = os.environ.get("MODEL", "llama3")

    from src.llm import get_llm

    llm = get_llm(model)

    # Medical file of the patient, it must be generated using real data
    # It is used to add context when generating a summary of the SMS conversation
    patient_medical_file = """
Maurice Dupont, suite à un accident d'alpinisme, a été hospitalisé en urgence
à l'hôpital de Chamonix. Il a été opéré en urgence pour une fracture du fémur.
L'opération s'est bien passée, aucune conséquence n'est à déplorer. Il est
actuellement en phase de convalescence chez lui.
"""

    text = "{text}"

    prompt_template = f"""Rédige un résumé en une phrase de la conversation suivante comme si tu étais le patient.

Voici le dossier médical du patient pour te donner du context :

"{patient_medical_file}"

La conversation :

"{text}"

RÉSUMÉ CONCIS:"""
    from langchain_core.prompts import PromptTemplate

    prompt_template = PromptTemplate(template=prompt_template, input_variables=["text"])

    from langchain.chains.summarize import load_summarize_chain

    chain = load_summarize_chain(llm, chain_type="stuff", prompt=prompt_template)

    return chain
