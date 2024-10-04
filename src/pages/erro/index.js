import {Link} from 'react-router-dom';
import './erro.css'
import Footer from '../../components/Footer';
function Erro() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Pagina não Encontrada</h2>
            <Link to="/">Veja todos os filmes</Link>
            <Footer/>
        </div>
    )
}
export default Erro;