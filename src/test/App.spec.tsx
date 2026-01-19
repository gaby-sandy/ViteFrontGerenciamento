import App from "../pages/Gerenciamento";
import {render,screen. fireEvent} from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";


describe('Gerenciamento page',()=>{
    it('should apply filters and render page',()=>{
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        )
    })
});
jest.mock('../data/dados.json', ()=>(
    [
        {
            
        }
    ]
))