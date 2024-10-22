// Termo.js

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import { MdInfoOutline } from "react-icons/md"; 
import styles from './Termo.module.css'; 

interface RangeSliderProps {
  onFilterChange: (value: number[]) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ onFilterChange }) => {
  const [value, setValue] = React.useState<number[]>([20, 80]);

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue(newValue);
      onFilterChange(newValue);
    }
  };

  const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [...value];
    newValue[index] = event.target.value === '' ? 0 : Number(event.target.value.replace('%', ''));
    setValue(newValue);
    onFilterChange(newValue);
  };

  const handleBlur = () => {
    if (value[0] < 0) {
      setValue([0, value[1]]);
    } else if (value[1] > 100) {
      setValue([value[0], 100]);
    }
    onFilterChange(value);
  };

  return (
    <div className={styles.container}> 
      <Box sx={{ width: 400 }}>
        <div className={styles.sliderLabel}>
          <span>Termo de compromisso em atraso</span>
          <MdInfoOutline className={styles.infoIcon} />
        </div>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            value={`${value[0]}%`}
            onChange={handleInputChange(0)}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'text', 
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
            valueLabelFormat={(value) => `${value}%`}
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
            value={`${value[1]}%`}
            onChange={handleInputChange(1)}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'text', 
              'aria-labelledby': 'input-slider',
            }}
            className={styles.textField}
          />
        </Box>
      </Box>
    </div>
  );
};

export default RangeSlider;
