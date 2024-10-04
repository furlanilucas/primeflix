import { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom'
import './filme-info.css';
import api from '../../services/api';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer';

function Filme(){
  const { id } = useParams();
  const navigate= useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: "4430d178a9d64fe91b44206de364a329",
          language: "pt-BR",
        }
      })
      .then((response)=>{
        setFilme(response.data);
        setLoading(false);
      })
      .catch(()=>{
        console.log("FILME NAO ENCONTRADO")
        navigate('/' , {replace: true});
        return;
      })
    }

    loadFilme();


    return () => {
      console.log("COMPONENTE FOI DESMONTADO")
    }
  }, [navigate, id])

function salvarFilme(){
  const minhalista = localStorage.getItem('@primeflix')

  let filmesSalvos = JSON.parse(minhalista) || [];
  const hasFilme = filmesSalvos.some((filmesSalvos)=> filmesSalvos.id === filme.id)

  if(hasFilme){
    toast.warn('Esse filme ja está na lista');
    return;
  }
filmesSalvos.push(filme);
localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
toast.success("Filme salvo com sucesso");

}

function voltar(){
  navigate(-1); 
}



  if(loading){
    return(
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }
  
  return(
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avalição: {filme.vote_average} / 10</strong>

      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a target= "blank" rel="external" href={`http://youtube.com/results?search_query=${filme.title} trailer`}>
            Trailer
          </a>
        </button>
        <button onClick={voltar}>Voltar</button>
      </div>
<Footer/>
    </div>
  )
}

export default Filme;