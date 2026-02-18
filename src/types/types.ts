export interface JsonDataItem {
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

export interface DashboardState{

data: JsonDataItem[];

  selectedYears: string[];
  selectedRegionals: string[];
  selectedMunicipios: string[];
  selectedProtectedAreas: string[];
  selectedParceiros: string[];
  selectedPrograma: string;        
  selectedPlantio: string;         
  selectedMonitoramento: string;   
  selectedIndicadores: string;     
  selectedConformidade: string;    

  termDelayRange: number[]; 
  areaRange: number[];      
  modulesRange: number[];   

  searchTerm: string;

  setSelectedYears: (v: string[]) => void;
  setSelectedRegionals: (v: string[]) => void;
  setSelectedMunicipios: (v: string[]) => void;
  setSelectedProtectedAreas: (v: string[]) => void;
  setSelectedParceiros: (v: string[]) => void;

  setSelectedPrograma: (v: string) => void;
  setSelectedPlantio: (v: string) => void;
  setSelectedMonitoramento: (v: string) => void;
  setSelectedIndicadores: (v: string) => void;
  setSelectedConformidade: (v: string) => void;

  setTermDelayRange: (v: number[]) => void;
  setAreaRange: (v: number[]) => void;
  setModulesRange: (v: number[]) => void;

  setSearchTerm: (v: string) => void;

  clearFilters: () => void;

  getFilteredData: () => JsonDataItem[];

} 