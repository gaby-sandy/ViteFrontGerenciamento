import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { MdInfoOutline } from "react-icons/md";
import styles from './Areas.module.css';
import { useState } from 'react';

interface ProtectedArea {
  title: string;
}

interface FixedTagsProps {
  onProtectedAreaChange: (selectedAreas: string[]) => void;
}

export default function FixedTags({ onProtectedAreaChange }: FixedTagsProps) {
  const [value, setValue] = useState<ProtectedArea[]>([protectedAreas[0]]);

  const handleChange = (event: React.SyntheticEvent, newValue: ProtectedArea[]) => {
    setValue(newValue);
    onProtectedAreaChange(newValue.map(option => option.title));
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

const protectedAreas: ProtectedArea[] = [
  { title: 'Todos' },
  { title: 'Área de Preservação Permanente (APP)' },
  { title: 'Área de Uso Restrito (AUR)' },
  { title: 'Reserva Legal (RL)' },
];