import docx

def read_docx(file_path):
    doc = docx.Document(file_path)
    return '\n'.join([para.text for para in doc.paragraphs])

with open("full_doc.txt", "w") as f:
    f.write(read_docx('GetBPlus_Website_Blueprint_v1.docx'))
