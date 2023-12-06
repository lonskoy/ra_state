import { Portfolio } from './components/Portfolio';
import {Toolbar} from './components/Toolbar'
const filters = ["All", "Websites", "Flayers", "Business Cards"];
export const selected = "All";

export const App = () => {
    return (
        <>
            <Toolbar {filters, selected} />
            <Portfolio />
        </>
    );
} 