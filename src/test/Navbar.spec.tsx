import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

import {render} from "@testing-library/react"
describe("Navbar",()=> {
    it('should render correctly', ()=> {
        const container = render(
           <MemoryRouter initialEntries={['/']}> <Navbar/></MemoryRouter>
        );
        console.log(container)
    })
})
