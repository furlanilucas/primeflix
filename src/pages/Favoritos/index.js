import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favoritos(){
  const [filmes, setFilmes] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{

    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);

  }, []);

  function excluirFilme(id){
    let filtroFilmes = filmes.filter((item)=>{
      return(item.id !== id);
    });
    setFilmes(filtroFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
    toast.success("Filme excluido com sucesso")

  }

  function voltar(){
    navigate(-1); // Volta para a página anterior
  }

  return(
    <div className="meus-filmes">
      <h1>Meus filmes</h1>
      {filmes.length === 0 && <span>Você não possui nenhum filme salvo</span>}
      
      <ul>
        {filmes.map((item) => {
          return(
            <li key={item.id}>
              <span>{item.title}</span>

              <div>
                <Link className="ver-detalhes"to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button className="excluir-button"onClick={()=> excluirFilme(item.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>

      <button className="voltar-button" onClick={voltar}>Voltar</button> {/* Botão de voltar */}
    </div>
  );
}

export default Favoritos;
