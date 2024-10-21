// Municipio.js
import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { MdInfoOutline } from "react-icons/md";
import styles from './Municipio.module.css'; 

export default function Municipio({ onMunicipioChange }) {
  const [value, setValue] = React.useState([]);
  const [municipios, setMunicipios] = React.useState([]);

  React.useEffect(() => {
    const fetchMunicipios = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/31/municipios');
        const data = await response.json();
        const municipiosFormatados = data.map(municipio => ({ title: municipio.nome }));
        const municipiosComTodos = [{ title: 'Todos' }, ...municipiosFormatados];
        setMunicipios(municipiosComTodos);
        setValue([municipiosComTodos[0]]);
        onMunicipioChange([municipiosComTodos[0].title]); // Notifica o pai sobre o valor inicial
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchMunicipios();
  }, [onMunicipioChange]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onMunicipioChange(newValue.map(option => option.title)); // Atualiza o pai com os títulos dos municípios selecionados
  };

  return (
    <div className={styles.autocompleteContainer}>
      <div className={styles.labelContainer}>
        <label>Municipio</label>
        <MdInfoOutline size={20} className={styles.infoIcon} />
      </div>
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={handleChange}
        options={municipios}
        getOptionLabel={(option) => option.title}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              key={option.title}
              label={option.title}
              {...getTagProps({ index })}
              style={{ margin: 2 }}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Municipio"
            placeholder="Municipio"
            className={styles.customTextfield}
          />
        )}
        style={{ width: 500 }}
      />
    </div>
  );
}

