
import { PieChart } from '@mui/x-charts/PieChart';
import { MdInfo } from "react-icons/md"; 
import styles from './Pie2.module.css';
import jsonData from '../../../data/dados.json'; // JSON

// Definindo a interface para os itens do JSON
interface DataItem {
  tipo_recomposicao: 'Plantio de mudas' | 'Agrofloresta' | 'Semeadura';
}

// Função para contar o número de itens de cada tipo de recomposição
const countTypes = (data: DataItem[]) => {
  const counts = { 'Plantio de mudas': 0, 'Agrofloresta': 0, 'Semeadura': 0 };

  data.forEach(item => {
    if (counts[item.tipo_recomposicao] !== undefined) {
      counts[item.tipo_recomposicao]++;
    }
  });

  return counts;
};

// Contando tipos de recomposição no JSON
const typeCounts = countTypes(jsonData as DataItem[]);

const data = [
  { id: 0, value: typeCounts['Plantio de mudas'], label: 'Plantio de mudas' },
  { id: 1, value: typeCounts['Agrofloresta'], label: 'Agrofloresta' },
  { id: 2, value: typeCounts['Semeadura'], label: 'Semeadura' },
];

const totalValue = data.reduce((acc, item) => acc + item.value, 0);

export default function PieActiveArc() {
  return (
    <div className={styles.pieChartContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.pieChartTitle}>Tipos de recomposição</h2>
        <MdInfo className={styles.infoIcon} />
      </div>
      <p className={styles.totalProperties}>TOTAL DE PROPRIEDADES: {totalValue}</p>
      <div className={styles.chartWrapper}>
        <PieChart
          colors={['#597B2F', '#BD3D3A', '#63ABFD']} 
          series={[
            {
              data: data.map(item => ({
                ...item,
                label: `${((item.value / totalValue) * 100).toFixed(2)}%`,
              })),
              highlightScope: { fade: 'global', highlight: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
          ]}
          height={180}
        />
      </div>
      <div className={styles.labelsContainer}>
        {data.map((item, index) => {
          return (
            <div key={item.id} className={styles.label}>
              <span 
                className={styles.labelColor} 
                style={{ backgroundColor: ['#597B2F', '#BD3D3A', '#63ABFD'][index] }}
              />
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
