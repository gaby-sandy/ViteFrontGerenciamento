import { persist, createJSONStorage } from 'zustand/middleware';
import {DashboardState, JsonDataItem} from '@/types';
import { create, } from 'zustand';
import jsonData from '../src/data/dados.json'

const initialFilters= {
    
    electedYears: [] as string[],
    selectedRegionals: [] as string[],
    selectedMunicipios: [] as string[],
    selectedProtectedAreas: [] as string[],
    selectedParceiros: [] as string[],

    selectedPrograma: 'TODOS',
    selectedPlantio: 'TODOS',
    selectedMonitoramento: 'TODOS',
    selectedIndicadores: 'TODOS',
    selectedConformidade: 'TODOS',

    termDelayRange: [0, 100],        
    areaRange: [0, Number.MAX_SAFE_INTEGER], 
    modulesRange: [0, 5000],

    searchTerm: '',

};


export const useDashboardState = create<DashboardState>()(
    persist(
      (set, get) => ({
        data: jsonData as JsonDataItem[],
        ...initialFilters,
  
        setSelectedYears:        (v: string[]) => set({ selectedYears: v }),
        setSelectedRegionals:    (v: string[]) => set({ selectedRegionals: v }),
        setSelectedMunicipios:   (v: string[]) => set({ selectedMunicipios: v }),
        setSelectedProtectedAreas:(v: string[]) => set({ selectedProtectedAreas: v }),
        setSelectedParceiros:    (v: string[]) => set({ selectedParceiros: v }),
  
        setSelectedPrograma:     (v: string) => set({ selectedPrograma: v }),
        setSelectedPlantio:      (v: string) => set({ selectedPlantio: v }),
        setSelectedMonitoramento:(v: string) => set({ selectedMonitoramento: v }),
        setSelectedIndicadores:  (v: string) => set({ selectedIndicadores: v }),
        setSelectedConformidade: (v: string) => set({ selectedConformidade: v }),
  
        setTermDelayRange: (v: [number, number]) => set({ termDelayRange: v }),
        setAreaRange:      (v: [number, number]) => set({ areaRange: v }),
        setModulesRange:   (v: [number, number]) => set({ modulesRange: v }),
  
        setSearchTerm: (v: string) => set({ searchTerm: v }),
  
        clearFilters: () => set({ ...initialFilters }),
      }),
      {
        name: 'dashboard-state',
        storage: createJSONStorage(() => localStorage),
        
      }
    )
  );
  