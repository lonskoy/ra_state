import { Portfolio } from './components/Portfolio';
import {Toolbar} from './components/Toolbar'
import './App.css'

const filters = ["All", "Websites", "Flayers", "Business Cards"];
export const selected = "All";

export const App = () => {
    return (
        <div className='conteiner'>
            <Toolbar filters={{filters, selected}}/>
            <Portfolio />
        </div>
 
    );
} 