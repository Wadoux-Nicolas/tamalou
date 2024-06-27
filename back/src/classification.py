from transformers import pipeline

classifier = None


def classification(msg):
    global classifier
    if classifier is None:
        classifier = pipeline(
            "zero-shot-classification", model="mtheo/camembert-base-xnli"
        )

    candidate_labels = [
        "normal",
        "diarrhé",
#         "alerte", # removed cause it was trigger too often
        "sueur",
        "fievreux",
        "saignement",
        "vomissements",
        "fatigue",
        "depression",
        "douleur",
        "en_attente_de_soins",
    ]

    result = classifier(msg, candidate_labels)

    top_label = result["labels"][0]
    top_score = result["scores"][0]

    return {"label": top_label, "score": top_score}
