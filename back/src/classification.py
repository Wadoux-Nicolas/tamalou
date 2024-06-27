from transformers import pipeline

classifier = None


def classification(msg):
    global classifier
    if classifier is None:
        print("Loading classifier")
        classifier = pipeline(
            "zero-shot-classification", model="mtheo/camembert-base-xnli"
        )
        print("Classifier loaded!")

    candidate_labels = [
        "normal",
        "diarrhé",
        "alerte",
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

    return {"labels": top_label, "scores": top_score}
