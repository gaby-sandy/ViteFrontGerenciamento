import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { MdInfoOutline } from "react-icons/md";
import styles from './Areas.module.css'; 

// Definindo o tipo para as opções de áreas protegidas
interface ProtectedArea {
  title: string;
}

// Definindo o tipo para as props do componente
interface FixedTagsProps {
  onProtectedAreaChange: (selectedAreas: string[]) => void;
}

export default function FixedTags({ onProtectedAreaChange }: FixedTagsProps) {
  // Tipando o estado com o tipo ProtectedArea[]
  const [value, setValue] = React.useState<ProtectedArea[]>([protectedAreas[0]]);

  // Tipando o evento e o newValue
  const handleChange = (event: React.SyntheticEvent, newValue: ProtectedArea[]) => {
    setValue(newValue);
    onProtectedAreaChange(newValue.map(option => option.title)); // Passa as áreas selecionadas ao App.tsx
  };

  return (
    <div className={styles.autocompleteContainer}>
      <div className={styles.labelContainer}>
        <label>Áreas protegidas</label>
        <MdInfoOutline size={20} className={styles.infoIcon} /> 
      </div>
      <Autocomplete
        multiple
        id="protected-areas-tags"
        value={value}
        onChange={handleChange}
        options={protectedAreas}
        getOptionLabel={(option) => option.title}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip  label={option.title} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Áreas protegidas"
            placeholder="Selecione as áreas protegidas"
            className={styles.customTextfield} 
          />
        )}
        style={{ width: 500 }} 
      />
    </div>
  );
}

// Lista de opções com tipagem explícita
const protectedAreas: ProtectedArea[] = [
  { title: 'Todos' },
  { title: 'Área de Preservação Permanente (APP)' },
  { title: 'Área de Uso Restrito (AUR)' },
  { title: 'Reserva Legal (RL)' },
];