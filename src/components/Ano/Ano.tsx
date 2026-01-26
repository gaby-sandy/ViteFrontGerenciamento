import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { MdInfoOutline } from "react-icons/md";
import styles from './Ano.module.css'; 
import { useState } from 'react';
import { SyntheticEvent } from 'react';

// Adicionar a fonte Open Sans
const openSansFontLink = document.createElement('link');
openSansFontLink.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap';
openSansFontLink.rel = 'stylesheet';
document.head.appendChild(openSansFontLink);

interface YearOption {
  title: string;
}

interface AnoProps {
  onYearChange: (years: string[]) => void;
}

export default function Ano({ onYearChange }: AnoProps) {
  const [value, setValue] = useState<YearOption[]>([Anos[0]]); 

  const handleChange = (event: SyntheticEvent, newValue: YearOption[]) => {
    setValue(newValue);
    onYearChange(newValue.map(option => option.title));
  };

  return (
    <div className={styles.autocompleteContainer}>
      <div className={styles.labelContainer}>
        <label>Ano</label>
        <MdInfoOutline size={20} className={styles.infoIcon} />
      </div>
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={handleChange}
        options={Anos}
        getOptionLabel={(option) => option.title}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => {
            const { key, ...tagProps } = getTagProps({ index });
            return (
              <Chip
                key={index}
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
            label="Ano"
            placeholder="Ano"
            className={styles.customTextfield} 
          />
        )}
        style={{ width: 500 }} 
      />
    </div>
  );
}

const Anos: YearOption[] = [
  { title: 'Todos' },
  { title: '2016' },
  { title: '2017' },
  { title: '2018' },
  { title: '2019' },
  { title: '2020' },
  { title: '2021' },
  { title: '2022' },
  { title: '2023' },
  { title: '2024' },
];
