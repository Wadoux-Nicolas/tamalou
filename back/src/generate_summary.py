import torch
from transformers import RobertaTokenizerFast, EncoderDecoderModel

device = "cuda" if torch.cuda.is_available() else "cpu"
ckpt = "mrm8488/camembert2camembert_shared-finetuned-french-summarization"
tokenizer = RobertaTokenizerFast.from_pretrained(ckpt)
model = EncoderDecoderModel.from_pretrained(ckpt).to(device)


def generate_summary(text):
    inputs = tokenizer(
        [text],
        padding="max_length",
        truncation=True,
        max_length=130,
        return_tensors="pt",
    )
    input_ids = inputs.input_ids.to(device)
    attention_mask = inputs.attention_mask.to(device)
    output = model.generate(input_ids, attention_mask=attention_mask)
    return tokenizer.decode(output[0], skip_special_tokens=True)
