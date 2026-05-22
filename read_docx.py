import docx

def read_docx(file_path):
    doc = docx.Document(file_path)
    full_text = []
    for para in doc.paragraphs:
        if para.text.strip():
            full_text.append(para.text.strip())
    return '\n'.join(full_text)

with open("blueprint_text.txt", "w") as f:
    f.write(read_docx('GetBPlus_Website_Blueprint_v1.docx'))
