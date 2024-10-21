import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import styles from './Buttom.module.css';
import dados from '../../../data/dados.json'; // Importe seu JSON

// Defina a interface para o tipo dos dados
interface Dados {
  [key: string]: any; // Ajuste isso conforme a estrutura do seu JSON
};

export default function ExportButton() {
  const handleExport = () => {
    // Cria uma nova planilha
    const ws = XLSX.utils.json_to_sheet(dados as Dados[]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Dados');

    // Converte a planilha para um Blob e salva o arquivo
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    const buf = new ArrayBuffer(wbout.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < wbout.length; i++) {
      view[i] = wbout.charCodeAt(i) & 0xff;
    }
    const blob = new Blob([buf], { type: 'application/octet-stream' });
    saveAs(blob, 'dados.xlsx');
  };

  return (
    <div className={styles.container}>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" className={styles.customButton} onClick={handleExport}>
          Exportar EXCEL
        </Button>
      </Stack>
    </div>
  );
}