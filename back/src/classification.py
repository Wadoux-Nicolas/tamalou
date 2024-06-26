from transformers import pipeline
classifier = pipeline("zero-shot-classification",
                      model="facebook/bart-large-mnli")


def classification(msg): 
    
    candidate_labels = ['normal', 'diarrhé', 'alerte', 'sueur', 'fievreux', 'saignement', 'vomissements', 'fatigue', 'depression', 'douleur', 'en_attente_de_soins']
    
    result = classifier(msg, candidate_labels)

    top_label = result['labels'][0]
    top_score = result['scores'][0]
    
    return {
        "sequence" : msg,
        "labels": [top_label],
        "scores": [top_score]
    }

