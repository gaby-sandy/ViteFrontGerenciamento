
import { PieChart } from '@mui/x-charts/PieChart';
import { MdInfo } from "react-icons/md"; 
import styles from './pie.module.css';
import jsonData from '../../../data/dados.json'; // Importando JSON

// Tipos para os dados JSON
interface DataItem {
  conformidade_final: string;
}

// Função para contar conformidade e não conformidade
const countConformidade = (data: DataItem[]) => {
  return data.reduce<{ conformidade: number; naoConformidade: number }>((acc, item) => {
    if (item.conformidade_final === 'Conformidade') {
      acc.conformidade += 1;
    } else if (item.conformidade_final === 'Não Conformidade') {
      acc.naoConformidade += 1;
    }
    return acc;
  }, { conformidade: 0, naoConformidade: 0 });
};

// Dados contados
const counts = countConformidade(jsonData as DataItem[]);

const data = [
  { id: 0, value: counts.conformidade },
  { id: 1, value: counts.naoConformidade },
];

const totalValue = data.reduce((acc, item) => acc + item.value, 0);

export default function PieActiveArc() {
  return (
    <div className={styles.pieChartContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.pieChartTitle}>Distribuição de Conformidade</h2>
        <MdInfo className={styles.infoIcon} />
      </div>
      <div className={styles.chartWrapper}>
        <PieChart
          colors={['#597B2F', '#BD3D3A']}
          series={[
            {
              data: data.map(item => ({
                ...item,
                label: `${((item.value / totalValue) * 100).toFixed(2)}%`,
              })),
              highlightScope: { fade: 'global', highlight: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
              innerRadius: 52,
            },
          ]}
          height={220}
        />
      </div>
      <div className={styles.labelsContainer}>
        {data.map((item, index) => (
          <div key={item.id} className={styles.label}>
            <span
              className={styles.labelColor}
              style={{ backgroundColor: index === 0 ? '#597B2F' : '#BD3D3A' }}
            />
            {index === 0 ? 'Conformidade' : 'Não conformidade'}
          </div>
        ))}
      </div>
    </div>
  );
}
