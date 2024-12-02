import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="https://linkedin.com/in/cauã-rodrigues-b350bb263" target="_blank">
                    <FaLinkedin size={30} />
                </a>
            </li>
            <li>
                <a href="https://github.com/Cauardbs" target="_blank">
                    <FaGithub size={30} />
                </a>
            </li>
            <li>
                <a href="https://instagram.com/caua.rdbs" target="_blank">
                <FaInstagram size={30}/>
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/logo.png" alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por Cauã Rodrigues.
        </p>
       </section>
    </footer>)
}

export default Rodape