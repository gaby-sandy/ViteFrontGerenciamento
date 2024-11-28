import * as React from 'react';
import { styled } from '@mui/system';
import { buttonClasses } from '@mui/base/Button';
import { Tabs } from '@mui/base/Tabs';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { useNavigate } from 'react-router-dom';

export default function KeyboardNavigation() {
  const navigate = useNavigate();

  const handleTabChange = (
    event: React.SyntheticEvent | null,
    value: number | string | null
  ) => {
    if (value === null) return;

    switch (value) {
      case 1:
        navigate('/');
        break;
      case 2:
        navigate('/priorizacao');
        break;
      case 3:
        navigate('/implantacao');
        break;
      case 4:
        navigate('/monitoramento');
        break;
      case 5:
        navigate('/inteligencia-de-dados');
        break;
      default:
        break;
    }
  };

  return (
    <div className="tabs-container">
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
          <Tab value={5}>Inteligência de dados</Tab>
        </TabsList>
      </Tabs>
      <hr className="tabs-divider" />
    </div>
  );
}

const Tab = styled(BaseTab)`
  font-family: "Montserrat", sans-serif;
  color: black;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: #eaeaea;
  padding: 14px 20px;
  margin: 0 3px;
  border: none;
  border-radius: 7px 7px 0 0;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #eaeaea;
  }

  &:focus {
    color: black;
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: black;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(BaseTabsList)`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Alinha à esquerda */
  gap: 0px;
  padding: 0;
  margin-left: -200px; /* Move as abas para a direita */
  margin-right: 40px;
  flex-wrap: nowrap;

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    min-width: 100%;
    justify-content: center;
    gap: 5px;
    margin-left: 10px; /* Ajusta a margem para telas menores */
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 3px;
    margin-left: 5px; /* Menor margem em telas muito pequenas */
  }
`;
