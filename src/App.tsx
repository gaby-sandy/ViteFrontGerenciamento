import React from 'react';
import { MdFilterAlt } from "react-icons/md";
import Navbar from "./components/Navbar/Navbar";
import Boxmonitoramento from './components/Monitoramento/Monitoramento';
import Ano from './components/Ano/Ano';
import Regional from './components/Regional/Regional';
import Municipio from './components/Municipio/Municipio';
import Areas from './components/Areas-protegidas/Areas';
import Parceiros from './components/Parceiros/Parceiros';
import Programa from './components/Programa/Programa';
import Plantio from './components/Plantio/Plantio';
import Monitor from './components/Monitor/Monitoramento';
import Indicadores from './components/Indicadores/Indicadores';
import Conformidade from './components/Conformidade/Conformidade';
import Termo from './components/Termo/Termo';
import Area from './components/Area/Area';
import Modulo from './components/Modulos/Modulos';
import Buttom from './components/Buttom/Buttomclear/Buttom';
import GraficoTermo from './components/Charts/Pie/Pie';
import GraficoTipoRecomposição from './components/Charts/Pie 2/Pie2';
import GraficoTotalPrograma from './components/Charts/Bar1/Bar1';
import AreaProtegida from './components/Charts/Bar2/Bar2';
import { FaDatabase } from "react-icons/fa6";
import Buttomexport from './components/Buttom/Buttomexport/Buttom';

import Datagrid from './components/Datagrid/Datagrid';
import Footer from './components/Footer/index';
import jsonData from './data/dados.json';

interface JsonDataItem {
  data_projeto: string;
  regional: string;
  municipio: string;
  area_protegida: string;
  parceiros: string;
  programa: string;
  plantio_identificado: string;
  monitoramento: string;
  indicadores_regeneracao: string;
  conformidade: string;
  termo_compromisso_atraso: string;
  area_ha: string | number;
  modulos_fiscais: number;
  id: number;
  proprietario: string;
}

function App() {
  const [filteredData, setFilteredData] = React.useState<JsonDataItem[]>([]);
  const [selectedYears, setSelectedYears] = React.useState<string[]>([]);
  const [selectedRegionals, setSelectedRegionals] = React.useState<string[]>([]);
  const [selectedMunicipios, setSelectedMunicipios] = React.useState<string[]>([]);
  const [selectedProtectedAreas, setSelectedProtectedAreas] = React.useState<string[]>([]);
  const [selectedPrograma, setSelectedPrograma] = React.useState<string>('TODOS');
  const [selectedPlantio, setSelectedPlantio] = React.useState<string>('TODOS');
  const [selectedMonitoramento, setSelectedMonitoramento] = React.useState<string>('TODOS');
  const [selectedIndicadores, setSelectedIndicadores] = React.useState<string>('TODOS');
  const [selectedConformidade, setSelectedConformidade] = React.useState<string>('TODOS');
  const [percentageRange, setPercentageRange] = React.useState<number[]>([0, 100]);
  const [modulesRange, setModulesRange] = React.useState<number[]>([0, 5000]);
  const [selectedParceiros, setSelectedParceiros] = React.useState<string[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const handleClearFilters = () => {
    window.location.reload();
  };

  const filterData = React.useCallback(() => {
    let newFilteredData = jsonData;

    // Filtro por anos
    if (selectedYears.length > 0 && !selectedYears.includes('Todos')) {
      newFilteredData = newFilteredData.filter(item => {
        const year = new Date(item.data_projeto).getFullYear().toString();
        return selectedYears.includes(year);
      });
    }

    // Filtro por regionais
    if (selectedRegionals.length > 0 && !selectedRegionals.includes('Todos')) {
      newFilteredData = newFilteredData.filter(item => selectedRegionals.includes(item.regional));
    }

    // Filtro por municípios
    if (selectedMunicipios.length > 0 && !selectedMunicipios.includes('Todos')) {
      newFilteredData = newFilteredData.filter(item => selectedMunicipios.includes(item.municipio));
    }

    // Filtro por áreas protegidas
    if (selectedProtectedAreas.length > 0 && !selectedProtectedAreas.includes('Todos')) {
      newFilteredData = newFilteredData.filter(item => selectedProtectedAreas.includes(item.area_protegida));
    }

    // Filtro por parceiros
    if (selectedParceiros.length > 0 && !selectedParceiros.includes('Todos')) {
      newFilteredData = newFilteredData.filter(item => selectedParceiros.includes(item.parceiros));
    }

    // Filtro por programa
    if (selectedPrograma !== 'TODOS') {
      newFilteredData = newFilteredData.filter(item => item.programa === selectedPrograma);
    }

    // Filtro por plantio identificado
    if (selectedPlantio !== 'TODOS') {
      newFilteredData = newFilteredData.filter(item => item.plantio_identificado === selectedPlantio);
    }

    // Filtro por monitoramento
    if (selectedMonitoramento !== 'TODOS') {
      newFilteredData = newFilteredData.filter(item => item.monitoramento === selectedMonitoramento);
    }

    // Filtro por indicadores
    if (selectedIndicadores !== 'TODOS') {
      newFilteredData = newFilteredData.filter(item => item.indicadores_regeneracao === selectedIndicadores);
    }

    // Filtro por conformidade
    if (selectedConformidade !== 'TODOS') {
      newFilteredData = newFilteredData.filter(item => item.conformidade === selectedConformidade);
    }

    // Filtro por intervalo de porcentagem
    newFilteredData = newFilteredData.filter(item => {
      const termoCompromissoAtraso = parseFloat(item.termo_compromisso_atraso.replace('%', ''));
      return termoCompromissoAtraso >= percentageRange[0] && termoCompromissoAtraso <= percentageRange[1];
    });

    // Filtro por área (ha)
    newFilteredData = newFilteredData.filter(item => {
      const area: any = item.area_ha;
      return area >= percentageRange[0] && area <= percentageRange[1];
    });

    // Filtro por número de módulos fiscais
    newFilteredData = newFilteredData.filter(item => {
      const numModulos = item.modulos_fiscais;
      return numModulos >= modulesRange[0] && numModulos <= modulesRange[1];
    });

    // Filtro de pesquisa
    newFilteredData = newFilteredData.filter(item => {
      const isExactIdMatch = item.id.toString() === searchTerm;
      const isExactOwnerMatch = item.proprietario.toLowerCase().includes(searchTerm.toLowerCase());
      return isExactIdMatch || isExactOwnerMatch;
    });
  

    setFilteredData(newFilteredData);
  }, [
    selectedYears, 
    selectedRegionals, 
    selectedMunicipios, 
    selectedProtectedAreas, 
    selectedPrograma, 
    selectedPlantio, 
    selectedMonitoramento, 
    selectedIndicadores, 
    selectedConformidade, 
    percentageRange, 
    modulesRange,
    searchTerm, 
    selectedParceiros
  ]);

  React.useEffect(() => {
    filterData();
  }, [
    filterData, 
    searchTerm, 
    selectedYears, 
    selectedRegionals, 
    selectedMunicipios, 
    selectedProtectedAreas, 
    selectedPrograma, 
    selectedPlantio, 
    selectedMonitoramento, 
    selectedIndicadores, 
    selectedConformidade, 
    percentageRange, 
    modulesRange, 
    selectedParceiros
  ]);

  const handleRangeChange = (newValue: number[]) => {
    setPercentageRange(newValue);
  };

  const handleModulesRangeChange = (newValue: number[]) => {
    setModulesRange(newValue);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <Navbar />

      <h5>Gerenciamento</h5>
    
      <div className="firstsection">
        <MdFilterAlt size={65} color="#666666" />
        <p style={{ marginLeft: '60px', marginTop: '-55px' }}>Aplicar filtros</p>
        <p style={{ marginTop: '90px', marginLeft: '30px' }}>Geral </p>
        <p style={{ marginTop: '-70px', marginLeft: '650px' }}>Informações de monitoramento</p>
        <Boxmonitoramento />

        <div className='filters'>
          <Ano onYearChange={setSelectedYears} />
          <Programa onProgramaChange={setSelectedPrograma} />
          <Regional onRegionalChange={setSelectedRegionals} />
          <Plantio onPlantioChange={setSelectedPlantio} />
          <Municipio onMunicipioChange={setSelectedMunicipios} />
          <Monitor onMonitoramentoChange={setSelectedMonitoramento} />
          <Areas onProtectedAreaChange={setSelectedProtectedAreas} />
          <Indicadores onIndicadoresChange={setSelectedIndicadores} />
          <Parceiros onParceirosChange={setSelectedParceiros} />
          <Conformidade onConformidadeChange={setSelectedConformidade} />
          <Termo onFilterChange={setPercentageRange} />
          <Area onChange={handleRangeChange} />
          <Modulo onChange={handleModulesRangeChange} />
          <Buttom onClick={handleClearFilters} />
          <hr />
        </div>
      </div>

      <div className='secondsection'>
        <div className='box-container'>
          <div className='box'>
            <GraficoTermo />
          </div>
          <div className='box'>
            <GraficoTipoRecomposição />
          </div>
          <div className='box'>
            <GraficoTotalPrograma />
          </div>
        </div>

        <div className='fullWidthBox'>
          <AreaProtegida />
        </div>
      </div>

      <div className="threesection">
        <div className="container">
          <div className="data-table-header">
            <FaDatabase size={70} color="#ADAEA8" />
            <h5>Tabela de dados</h5>
            <Buttomexport />
          </div>
          
          <Datagrid filteredData={filteredData} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
