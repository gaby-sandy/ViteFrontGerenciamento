import * as React from 'react';
import axios from 'axios';
import { useAutocomplete, UseAutocompleteProps } from '@mui/base/useAutocomplete';
import { Popper } from '@mui/base/Popper';
import { styled } from '@mui/system';
import { unstable_useForkRef as useForkRef } from '@mui/utils';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FilterAltIcon from '@mui/icons-material/FilterAlt'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Autocomplete = React.forwardRef(function Autocomplete(
  props: UseAutocompleteProps<(typeof search)[number], false, false, false>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {
    disableClearable = false,
    disabled = false,
    readOnly = false,
    ...other
  } = props;

  const {
    getRootProps,
    getInputProps,
    getPopupIndicatorProps,
    getClearProps,
    getListboxProps,
    getOptionProps,
    dirty,
    id,
    popupOpen,
    focused,
    anchorEl,
    setAnchorEl,
    groupedOptions,
  } = useAutocomplete({
    ...props,
    componentName: 'BaseAutocompleteIntroduction',
  });

  const [showRegionalMenu, setShowRegionalMenu] = React.useState(false);
  const [showProcessMenu, setShowProcessMenu] = React.useState(false);
  const [showMunicipiosMenu, setShowMunicipiosMenu] = React.useState(false);
  const [municipios, setMunicipios] = React.useState<{ label: string }[]>([]);

  const [showCarSearch, setShowCarSearch] = React.useState(false);
  const [showCodigoSearch, setShowCodigoSearch] = React.useState(false);

  const handleOutsideClick = (event: MouseEvent) => {
    if (anchorEl && !anchorEl.contains(event.target as Node)) {
      setShowRegionalMenu(false);
      setShowProcessMenu(false);
      setShowMunicipiosMenu(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [anchorEl]);

  React.useEffect(() => {
    const fetchMunicipios = async () => {
      try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/31/municipios');
        const municipioData = response.data.map((municipio: any) => ({
          label: municipio.nome,
        }));
        setMunicipios(municipioData);
      } catch (error) {
        console.error('Erro ao buscar municípios:', error);
      }
    };
    fetchMunicipios();
  }, []);

  const handleOptionClick = (option: string) => {
    setShowRegionalMenu(option === 'Pesquisa por regional');
    setShowProcessMenu(option === 'Pesquisa por Fase de processo');
    setShowMunicipiosMenu(option === 'Pesquisa por municipio');
    setShowCarSearch(option === 'Pesquisa por CAR');
    setShowCodigoSearch(option === 'Pesquisa por codigo de solicitação');
  };

  const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;
  const rootRef = useForkRef(ref, setAnchorEl);

  return (
    <React.Fragment>
      <p style={{ fontFamily: " 'Open Sans', sans-serif", fontWeight: 600, marginLeft: '25px', marginTop: '25px' }}>Selecione:</p>
      <StyledAutocompleteRoot
        {...getRootProps(other)}
        ref={rootRef}
        className={focused ? 'focused' : undefined}
      >
        <StyledInput id={id} disabled={disabled} readOnly={readOnly} {...getInputProps()} />
        
        {hasClearIcon && (
          <StyledClearIndicator {...getClearProps()}>
            <ClearIcon />
          </StyledClearIndicator>
        )}
        <StyledPopupIndicator {...getPopupIndicatorProps()} className={popupOpen ? 'popupOpen' : undefined}>
          <KeyboardArrowDownIcon sx={{ color: "#ADAEA8", fontSize:"30px" }} />
        </StyledPopupIndicator>
      </StyledAutocompleteRoot>

      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1800px', marginTop: '-50px', color: '#ADAEA8' }}>
        <p style={{ fontFamily: " 'Montserrat', sans-serif", marginRight: '6px' }}>Quantidade:</p>
        <FilterAltIcon /> 
      </div>

      {anchorEl && (
        <Popper open={popupOpen} anchorEl={anchorEl} slots={{ root: StyledPopper }}>
          <StyledListbox {...getListboxProps()}>
            {(groupedOptions as typeof search).map((option, index) => {
              const optionProps = getOptionProps({ option, index });
              return (
                <StyledOption 
                  {...optionProps} 
                  onClick={() => handleOptionClick(option.label)} 
                  key={index}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  {option.label}
                  {['Pesquisa por regional', 'Pesquisa por Fase de processo', 'Pesquisa por municipio'].includes(option.label) && <ArrowRightIcon />}
                </StyledOption>
              );
            })}

            {groupedOptions.length === 0 && (
              <StyledNoOptions>No results</StyledNoOptions>
            )}
          </StyledListbox>
        </Popper>
      )}

      {showRegionalMenu && (
        <Popper 
          open={showRegionalMenu} 
          anchorEl={anchorEl} 
          placement="left-start" 
          modifiers={[{ name: 'offset', options: { offset: [40, -641] } }]}
        >
          <StyledListbox>
            {regionals.map((regional, index) => (
              <StyledOption key={index}>{regional.label}</StyledOption>
            ))}
          </StyledListbox>
        </Popper>
      )}

      {showProcessMenu && (
        <Popper 
          open={showProcessMenu} 
          anchorEl={anchorEl} 
          placement="left-start" 
          modifiers={[{ name: 'offset', options: { offset: [95, -650] } }]}
        >
          <StyledListbox>
            {process.map((fase, index) => (
              <StyledOption key={index}>{fase.label}</StyledOption>
            ))}
          </StyledListbox>
        </Popper>
      )}

      {showMunicipiosMenu && (
        <Popper 
          open={showMunicipiosMenu} 
          anchorEl={anchorEl} 
          placement="left-start" 
          modifiers={[{ name: 'offset', options: { offset: [40, -641] } }]}
        >
          <StyledListbox>
            {municipios.map((municipio, index) => (
              <StyledOption key={index}>{municipio.label}</StyledOption>
            ))}
          </StyledListbox>
        </Popper>
      )}

       
       {showCarSearch && (
        <Box component="form" sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
          <TextField id="outlined-car" size="small" type="search" label="CAR" variant="outlined" sx={{backgroundColor: 'white'}}/>
          <Button variant="contained" size="small" sx={{ ml: 1 }}>Pesquisar</Button>
        </Box>
      )}

        {showCodigoSearch && (
        <Box component="form" sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
          <TextField id="outlined-codigo" size="small" type="search" label="Código de Solicitação" variant="outlined" sx={{backgroundColor: 'white'}}/>
          <Button variant="contained" size="small" sx={{ ml: 1 }}>Pesquisar</Button>
        </Box>
      )}
    </React.Fragment>
  );
});

export default function AutocompleteIntroduction() {
  return <Autocomplete options={search} />;
}

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledAutocompleteRoot = styled('div')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  border-radius: 5px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'};
  display: flex;
  gap: 5px;
  padding-right: 5px;
  overflow: hidden;
  width: 320px;
  margin-left: 112px; 
  margin-top: -44px;
  height: 39px;
  margin-bottom: 8px;
 

  &.focused {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
  }

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledInput = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 300;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;
  flex: 1 0 auto;
  
`,
);

// Aqui definimos StyledClearIndicator como um botão
const StyledClearIndicator = styled('button')(
  ({ theme }) => `
  display: flex;
  align-items: left;
  cursor: pointer;
  padding: 8px;
  border: none; // Removendo a borda do botão para manter o estilo

  &:hover {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
  }
`,
);

// Definindo StyledPopupIndicator
const StyledPopupIndicator = styled('div')(
  ({ theme }) => `
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;

  &:hover {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
  }
`,
);

// ComponentPageTabs has z-index: 1000
const StyledPopper = styled('div')`
  
  z-index: 1001;
  width: 320px;
`;

const StyledListbox = styled('ul')(
  ({ theme }) => `
font-family: "Montserrat", sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 320px;
  border-radius: 12px;
  overflow: auto;
  outline: 0;
  max-height: 500px;
  z-index: 1;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[300]};
`,
);

const StyledOption = styled('li')(
  ({ theme }) => `
  list-style: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
  }
  
  &[aria-selected=true] {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
  }
`,
);

const StyledNoOptions = styled('div')(
  ({ theme }) => `
  padding: 8px;
  padding-left:10px
  color: ${theme.palette.mode === 'dark' ? grey[600] : grey[600]};
`,
);


const search = [
  { label: 'Pesquisa por regional' },
  { label: 'Pesquisa por municipio' },
  { label: 'Pesquisa por codigo de solicitação' },
  { label: 'Pesquisa por CAR' },
  { label: 'Pesquisa por Fase de processo' },
];

const regionals = [
  { label: 'Centro Oeste de Minas' },
  { label: 'Jequitinonha/Mucuri' },
  { label: 'Zona da Mata' },
  { label: 'Noroeste de Minas' },
  { label: 'Norte de Minas' },
  { label: 'Rio Doce' },
  { label: 'Sul de Minas' },
  { label: 'Triângulo Mineiro' },
];


const process = [
  { label: 'Deferido' },
  { label: 'Indeferido' },
  { label: 'Precisa de informações complementares' },
  { label: 'Sem status ' },

];
