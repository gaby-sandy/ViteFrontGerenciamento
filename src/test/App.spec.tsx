import App from "../pages/Gerenciamento";
import {render,screen, fireEvent} from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";


describe('Gerenciamento page',()=>{
    it('should apply filters and render page',()=>{
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        );
        expect(screen.getByTestId('grid-count')).toHaveLength(2);
        fireEvent.click(screen.getByText('set Ano 2023'));
    });
});
jest.mock('../data/dados.json', ()=>(
    [
        {
            id: 1,
            proprietario: 'Maria',
            data_projeto: '2023-05-01',
            regional: 'Norte',
            municipio: 'BH',
            area_protegida: 'APA',
            parceiros: 'X',
            programa: 'A',
            plantio_identificado: 'SIM',
            monitoramento: 'SIM',
            indicadores_regeneracao: 'ALTO',
            conformidade: 'OK',
            termo_compromisso_atraso: '10%',
            area_ha: 50,
            modulos_fiscais: 100,

        },
        {
            id: 2,
            proprietario: 'João',
            data_projeto: '2022-02-10',
            regional: 'Sul',
            municipio: 'Contagem',
            area_protegida: 'RPPN',
            parceiros: 'Y',
            programa: 'B',
            plantio_identificado: 'NAO',
            monitoramento: 'NAO',
            indicadores_regeneracao: 'BAIXO',
            conformidade: 'PENDENTE',
            termo_compromisso_atraso: '80%',
            area_ha: 5,
            modulos_fiscais: 10,
        }
    ]
), {virtual: true});

jest.mock('../components/Ano/Ano',()=>(props:any)=>(
    <button onClick={()=> props.onYearChange(['2023'])}>Set Ano 2023</button>

));