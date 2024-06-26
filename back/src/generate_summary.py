from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

model_name = "csebuetnlp/mT5_multilingual_XLSum"
tokenizer = None
model = None


def generate_summary(article_text: str) -> str:
    global tokenizer, model
    if model is None:
        model = AutoModelForSeq2SeqLM.from_pretrained(model_name)
    if tokenizer is None:
        tokenizer = AutoTokenizer.from_pretrained(model_name)

    input_ids = tokenizer(
        [article_text],
        return_tensors="pt",
        padding="max_length",
        truncation=True,
        max_length=512,
    )["input_ids"]

    output_ids = model.generate(
        input_ids=input_ids, max_length=84, no_repeat_ngram_size=2, num_beams=4
    )[0]

    summary = tokenizer.decode(
        output_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False
    )

    return summary
