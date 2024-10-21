
import { BarChart } from '@mui/x-charts/BarChart';
import { MdInfo } from 'react-icons/md';
import styles from './Bar1.module.css'; 
import data from '../../../data/dados.json'; // arquivo JSON

// Definir as cores do gráfico
const colors: any[] = ["#597B2F", "#BD3D3A", '#63ABFD', '#A155B9', '#E697FF'];

// Definir a estrutura dos dados do arquivo JSON
interface DataItem {
  programa: string;
}

export default function BasicBars() {
  // Contagem de cada programa
  const programCount = data.reduce<Record<string, number>>((acc, item: DataItem) => {
    acc[item.programa] = (acc[item.programa] || 0) + 1;
    return acc;
  }, {});

  // Etiquetas e dados do gráfico
  const programLabels = ['PSRA', 'PRADA', 'Fomento', 'Doação', 'Outros'];
  const programData = programLabels.map(label => programCount[label] || 0);

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>Total de programa</h3>
        <MdInfo className={styles.icon} />
      </div>
      <div className={styles.chartWrapper}>
        <BarChart
          xAxis={[
            {
              scaleType: 'band',
              data: programLabels,
              tickPadding: 10, 
            }
          ]}
          series={[
            {
              data: programData,
              barWidth: 20,
              itemStyle: {
                color: (params:any) => colors[params.dataIndex], 
              },
            }
          ]}
          width={440}
          height={280}
          spacing={30}
        />
      </div>
    </div>
  );
}
