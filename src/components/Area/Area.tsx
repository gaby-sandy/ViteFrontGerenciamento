import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import { MdInfoOutline } from "react-icons/md"; 
import styles from './Area.module.css'; 

interface RangeSliderProps {
  onChange: (value: number[]) => void;
}

export default function RangeSlider({ onChange }: RangeSliderProps) {
  const [value, setValue] = React.useState<number[]>([20, 80]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const newValueArray = newValue as number[]; // Garantir que newValue seja um array de números
    setValue(newValueArray);
    onChange(newValueArray); 
  };

  const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [...value];
    newValue[index] = event.target.value === '' ? 0 : Number(event.target.value); // Tratamento de string vazia para 0
    setValue(newValue);
    onChange(newValue); 
  };

  const handleBlur = () => {
    if (value[0] < 0) {
      setValue([0, value[1]]);
    } else if (value[1] > 100) {
      setValue([value[0], 100]);
    }
  };

  return (
    <div className={styles.container}> 
      <Box sx={{ width: 400 }}>
        <div className={styles.sliderLabel}>
          <span>Área (ha)</span>
          <MdInfoOutline className={styles.infoIcon} />
        </div>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            value={value[0]}
            onChange={handleInputChange(0)}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
            className={styles.textField}
          />
          <Slider
            getAriaLabel={() => 'Range'}
            value={value}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            min={0}
            max={100}
            valueLabelFormat={(value) => `${value} ha`} 
            sx={{
              color: '#BD3D3A', 
              '& .MuiSlider-thumb': {
                backgroundColor: '#BD3D3A', 
              },
              '& .MuiSlider-track': {
                backgroundColor: '#BD3D3A', 
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#e0e0e0', 
              }
            }}
          />
          <TextField
            value={value[1]}
            onChange={handleInputChange(1)}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
            className={styles.textField}
          />
        </Box>
      </Box>
    </div>
  );
}