import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { MdInfoOutline } from "react-icons/md";
import styles from './Regional.module.css';
import { useState } from 'react'; 

// Tipagem para as opções de Regional
interface RegionalOption {
  title: string;
}

const RegionalOptions: RegionalOption[] = [
  { title: 'Todos' },
  { title: 'Alto Paranaíba Central' },
  { title: 'Central' },
  { title: 'Centro-Oeste de Minas' },
  { title: 'Jequitinhonha/Mucuri' },
  { title: 'Noroeste de Minas' },
  { title: 'Norte de Minas' },
  { title: 'Rio Doce' },
];

// Tipagem para as props do componente
interface RegionalProps {
  onRegionalChange: (selected: string[]) => void;
}

export default function Regional({ onRegionalChange }: RegionalProps) {
  // Tipagem para o estado
  const [value, setValue] = useState<RegionalOption[]>([RegionalOptions[0]]);

  const handleChange = (event: React.SyntheticEvent, newValue: RegionalOption[]) => {
    setValue(newValue);
    onRegionalChange(newValue.map(option => option.title)); // Passa apenas os títulos selecionados
  };

  return (
    <div className={styles.autocompleteContainer}>
      <div className={styles.labelContainer}>
        <label>Regional</label>
        <MdInfoOutline size={20} className={styles.infoIcon} />
      </div>
      <Autocomplete
        multiple
        id="regional-autocomplete"
        value={value}
        onChange={handleChange}
        options={RegionalOptions}
        getOptionLabel={(option) => option.title}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => {
            const { key, ...tagProps } = getTagProps({ index });
            return (
              <Chip
                key={key}
                label={option.title}
                {...tagProps}
                disabled={false}
              />
            );
          })
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Regional"
            placeholder="Regional"
            className={styles.customTextfield} 
          />
        )}
        style={{ width: 500 }} 
      />
    </div>
  );
}
