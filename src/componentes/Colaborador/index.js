import { IoIosCloseCircle } from "react-icons/io";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import './Colaborador.css'

const Colaborador = ({ aoFavoritar, colaborador, corDeFundo, aoDeletar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id)
    }


    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }

    return (<div className="colaborador">
        <IoIosCloseCircle 
            size={25} 
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)} 
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {colaborador.favorito 
                ? <MdFavorite size={25} {...propsfavorito} color="#ff0000"/> 
                : <MdFavoriteBorder size={25} {...propsfavorito}/>}
            </div>
        </div>
    </div>)
}

export default Colaborador