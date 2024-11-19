import * as React from 'react';
import { styled } from '@mui/system';
import { buttonClasses } from '@mui/base/Button';
import { Tabs } from '@mui/base/Tabs';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { useNavigate } from 'react-router-dom';

export default function KeyboardNavigation() {

  const Navegação = useNavigate();

  const handleTabChange = (event: React.SyntheticEvent | null, value: number | string | null ) => {
    
    if (value===null) return;
    
    switch(value){
        
        case 1:
          Navegação('/aprovação');
          break;
        
        case 2:
          Navegação('/priorizacao');
          break;
        
        case 3:
          Navegação('/implantacao');
          break;
        
        case 4:
          Navegação('/monitoramento');
          break;
        
        case 5:
          Navegação('/inteligencia de dados');
          break;
        
        default:
          break;
      }
  };
  return (
    <div  style={{ position: 'relative' }}>
      <Tabs
        defaultValue={1}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
        onChange={handleTabChange}
      >
        <TabsList>
          <Tab value={1}>Aprovação</Tab>
          <Tab value={2}>Priorização</Tab>
          <Tab value={3}>Implantação</Tab>
          <Tab value={4}>Monitoramento</Tab>
          <Tab value={5}>Inteligência</Tab>
   
        </TabsList>
      </Tabs>
      <hr style={{
          position: 'absolute',
          top: '100%', 
          left: 0,
          width: '100vw', // Ocupa a tela toda
          margin: 0,
          border: 'none',
          borderTop: '0.5px solid black',
          
        }}></hr>
    </div>
  );
}


const Tab = styled(BaseTab)`
  font-family: "Montserrat", sans-serif;
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
 
  background-color: #EAEAEA;
  width: 100%;
  padding: 12px;
  margin: 1px;
  border: none;
  border-radius: 7px 7px 0 0;
  display: flex;
  justify-content: center;


  &:hover {
    background-color:  #EAEAEA;
  }

  &:focus {
    color: black;
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: black};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 700px;
  margin-left: 1300px;
  margin-top: -50px;
 
  border-radius: 10px;
  margin-bottom: 2px 7px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  
  `,
);
