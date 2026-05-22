import docx

def read_docx(file_path):
    doc = docx.Document(file_path)

    for i, table in enumerate(doc.tables):
        print(f"Table {i+1}:")
        for row in table.rows:
            row_data = []
            for cell in row.cells:
                row_data.append(cell.text.replace('\n', ' '))
            print(' | '.join(row_data))
        print("\n")

read_docx('GetBPlus_Website_Blueprint_v1.docx')
