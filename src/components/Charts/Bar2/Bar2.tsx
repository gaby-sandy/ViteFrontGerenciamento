
import { MdInfo } from 'react-icons/md';
import { BarChart } from '@mui/x-charts/BarChart';
import styles from './Bar2.module.css'; 
import dados from '../../../data/dados.json'; // Importando o arquivo de dados

// Tipos para os dados do JSON
interface DataItem {
  data_projeto: string;
  area_protegida: string;
}

export default function BasicBars() {
  // Contagem das áreas protegidas por ano e tipo
  const areaCounts: Record<string, { APP: number; AUR: number; RL: number }> = {
    '2021': { APP: 0, AUR: 0, RL: 0 },
    '2022': { APP: 0, AUR: 0, RL: 0 },
    '2023': { APP: 0, AUR: 0, RL: 0 },
    '2024': { APP: 0, AUR: 0, RL: 0 },
  };

  dados.forEach((item: DataItem) => {
    const year = item.data_projeto.split('-')[0]; // Extraindo o ano da data do projeto
    const areaType = item.area_protegida;

    if (areaCounts[year]) {
      if (areaType.includes('APP')) areaCounts[year].APP += 1;
      if (areaType.includes('AUR')) areaCounts[year].AUR += 1;
      if (areaType.includes('RL')) areaCounts[year].RL += 1;
    }
  });

  // Contagem total de propriedades
  const totalPropriedades = dados.length;

  return (
    <div>
      <div className={styles.titleContainer}>
        <h2 className={styles.chartTitle}>Área protegida por ano</h2>
        <MdInfo className={styles.infoIcon} />
      </div>
      <p className={styles.subtitle}>{totalPropriedades} Propriedades</p> {/* Exibindo o total de propriedades */}
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['2021', '2022', '2023', '2024'] }]}
        series={[
          { data: [areaCounts['2021'].APP, areaCounts['2022'].APP, areaCounts['2023'].APP, areaCounts['2024'].APP], color: '#597B2F' }, // Cor para APP
          { data: [areaCounts['2021'].AUR, areaCounts['2022'].AUR, areaCounts['2023'].AUR, areaCounts['2024'].AUR], color: '#BD3D3A' }, // Cor para AUR
          { data: [areaCounts['2021'].RL, areaCounts['2022'].RL, areaCounts['2023'].RL, areaCounts['2024'].RL], color: '#63ABFD' }, // Cor para RL
        ]}
        width={1250}
        height={270}
      />
      <div className={styles.legendContainer}>
        <div className={styles.legendItem}>
          <span className={styles.legendColor} style={{ backgroundColor: '#597B2F' }}></span>
          <span>APP</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendColor} style={{ backgroundColor: '#BD3D3A' }}></span>
          <span>AUR</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendColor} style={{ backgroundColor: '#63ABFD' }}></span>
          <span>RL</span>
        </div>
      </div>
    </div>
  );
}
