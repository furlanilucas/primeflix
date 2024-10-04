import { useEffect, useState } from 'react'
import api from '../../services/api';
import {Link} from 'react-router-dom'
import Footer from '../../components/Footer';
import './home.css';


function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: '4430d178a9d64fe91b44206de364a329',
                    language: 'pt-BR',
                    page: 1,
                }
            })
            setFilmes(response.data.results.slice(0, 20));
            setLoading(false);
        }
        loadFilmes();
    }, [])

    if(loading){
    return(
        <div className="loading">
        <h2> Carregando Filmes</h2>
        </div>
    )
    }

    return (
        <>
            <div className='container'>
                <div className='lista-filmes'> 
                    {filmes.map((filme) => {
                        return (
                            <article key={filme.id}>
                                <strong>{filme.title}</strong>
                                <img src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        );
                    })}
                </div>
            </div>
            <Footer /> 
        </>
    );
}

export default Home;