// Conformidade.js
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styled from './Conformidade.module.css';
import { MdInfoOutline } from "react-icons/md";

// Definindo a tipagem das props
interface ConformidadeProps {
  onConformidadeChange: (value: string) => void;
}

export default function Conformidade({ onConformidadeChange }: ConformidadeProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onConformidadeChange(event.target.value);
  };

  return (
    <div className={styled.container}>
      <FormControl>
        <div className={styled.labelWithIcon}>
          <FormLabel className={styled.programLabel} id="demo-row-radio-buttons-group-label">
            Conformidade
          </FormLabel>
          <MdInfoOutline className={styled.infoIcon} />
        </div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel value="TODOS" control={<Radio style={{ color: '#597B2F' }} />} label="TODOS" />
          <FormControlLabel value="Sim" control={<Radio style={{ color: '#597B2F' }} />} label="Sim" />
          <FormControlLabel value="Não" control={<Radio style={{ color: '#597B2F' }} />} label="Não" />
          <FormControlLabel value="Não se aplica" control={<Radio style={{ color: '#597B2F' }} />} label="Não se aplica" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
