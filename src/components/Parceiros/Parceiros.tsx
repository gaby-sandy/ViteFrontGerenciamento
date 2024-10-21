// Parceiros.js

import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { MdInfoOutline } from "react-icons/md";
import styles from './Parceiros.module.css';

// Definir a interface para as opções de parceiros
interface ParceiroOption {
  title: string;
}

// Definir as opções disponíveis
const ParceirosOptions: ParceiroOption[] = [
  { title: 'Todos' },
  { title: 'Agência Nacional de Água (ANA)' },
  { title: 'Companhia de Saneamento de Minas' },
  { title: 'EMATER' },
  { title: 'Ibama' },
];

// Definir as propriedades esperadas para o componente
interface ParceirosProps {
  onParceirosChange?: (selectedParceiros: string[]) => void; // Função opcional para manipular mudança
}

const Parceiros: React.FC<ParceirosProps> = ({ onParceirosChange }) => {
  const [value, setValue] = React.useState<ParceiroOption[]>([ParceirosOptions[0]]);

  const handleChange = (event: React.SyntheticEvent, newValue: ParceiroOption[] | null) => {
    setValue(newValue || []);
    if (onParceirosChange) {
      // Chama a função de callback com o array de títulos
      onParceirosChange(Array.isArray(newValue) ? newValue.map(item => item.title) : []);
    }
  };

  return (
    <div className={styles.autocompleteContainer}>
      <div className={styles.labelContainer}>
        <label>Parceiros</label>
        <MdInfoOutline size={20} className={styles.infoIcon} />
      </div>
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={handleChange}
        options={ParceirosOptions}
        getOptionLabel={(option) => option.title}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => {
            const { key, ...tagProps } = getTagProps({ index });
            return (
              <Chip
                key={key}
                label={option.title}
                {...tagProps}
              />
            );
          })
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Parceiros"
            placeholder="Parceiros"
            className={styles.customTextfield}
          />
        )}
        style={{ width: 500 }}
      />
    </div>
  );
}

export default Parceiros;
