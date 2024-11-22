import { Link } from "react-router-dom";
import './cadastro.css'

function Cadastro() {
    return (
        <div className="cadastro-container">
            <h2>Cadastro</h2>
            <form className="form-container">
                <input placeholder="nome" type="text" />
                <input placeholder="email" type="email" />
                <input placeholder="senha" type="password" />
                <button>Cadastrar</button>
            </form>
            <Link to="/login" className="link-cadastro">já tem uma conta? faça o login</Link>
        </div>
    )
}


export default Cadastro;