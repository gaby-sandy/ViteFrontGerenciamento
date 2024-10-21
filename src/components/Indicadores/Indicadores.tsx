
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styled from './Indicadores.module.css';
import { MdInfoOutline } from "react-icons/md";

interface IndicadoresProps {
  onIndicadoresChange: (value: string) => void;
}

const Indicadores: React.FC<IndicadoresProps> = ({ onIndicadoresChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onIndicadoresChange(event.target.value);
  };

  return (
    <div className={styled.container}>
      <FormControl>
        <div className={styled.labelWithIcon}>
          <FormLabel className={styled.programLabel} id="demo-row-radio-buttons-group-label">
            Indicadores de regeneração
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
          <FormControlLabel value="Conforme" control={<Radio style={{ color: '#597B2F' }} />} label="Conforme" />
          <FormControlLabel value="Inconforme" control={<Radio style={{ color: '#597B2F' }} />} label="Inconforme" />
          <FormControlLabel value="Inconclusivo" control={<Radio style={{ color: '#597B2F' }} />} label="Inconclusivo" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Indicadores;
