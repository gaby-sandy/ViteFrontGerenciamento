// programa.js

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styled from './Programa.module.css';
import { MdInfoOutline } from "react-icons/md";

// Definir as propriedades esperadas para o componente
interface ProgramaProps {
  onProgramaChange: (value: string) => void; // Função de callback que recebe o valor selecionado
}

const Programa: React.FC<ProgramaProps> = ({ onProgramaChange }) => {
  // Função para manipular a mudança do valor selecionado
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onProgramaChange(event.target.value);
  };

  return (
    <div className={styled.container}>
      <FormControl>
        <div className={styled.labelWithIcon}>
          <FormLabel className={styled.programLabel} id="demo-row-radio-buttons-group-label">
            Programa
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
          <FormControlLabel value="PSRA" control={<Radio style={{ color: '#597B2F' }} />} label="PSRA" />
          <FormControlLabel value="PRADA" control={<Radio style={{ color: '#597B2F' }} />} label="PRADA" />
          <FormControlLabel value="Parceiros" control={<Radio style={{ color: '#597B2F' }} />} label="Parceiros" />
          <FormControlLabel value="Doação" control={<Radio style={{ color: '#597B2F' }} />} label="Doação de mudas" />
          <FormControlLabel value="Outros" control={<Radio style={{ color: '#597B2F' }} />} label="Outros" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Programa;
