import { Link } from 'react-router-dom';
// layout
import Container from './Container';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className= {styles.navbar}>
            <Container>
                <ul className = {styles.list}>
                    <h1 className = {styles.logo}><Link to='/'>AUTOMA</Link></h1>
                    <li  className = {styles.item}>
                        <Link to="/solicitacoes">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18">
                                <path id="Icon_awesome-plane-departure" data-name="Icon awesome-plane-departure" d="M23.4,17.849H.6a.6.6,0,0,0-.6.6v1.2a.6.6,0,0,0,.6.6H23.4a.6.6,0,0,0,.6-.6v-1.2A.6.6,0,0,0,23.4,17.849Zm-20.379-4a1.237,1.237,0,0,0,.912.4l4.9-.007a2.461,2.461,0,0,0,1.111-.267L20.85,8.438a6.375,6.375,0,0,0,2.513-2.187c.687-1.068.761-1.841.49-2.387s-.928-.948-2.184-1.029a6.3,6.3,0,0,0-3.235.73L14.74,5.441l-8.2-3.077a.667.667,0,0,0-.675-.042L3.4,3.573A.685.685,0,0,0,3.2,4.643L9.062,8.322l-3.87,1.964L2.479,8.918a.668.668,0,0,0-.6,0l-1.5.764a.685.685,0,0,0-.209,1.053Z" transform="translate(0 -2.249)" fill="#025e73"/>
                            </svg>
                        </Link>
                    </li>
                    <li  className = {styles.item}>
                        <Link to="/">
                            <svg id="Icone_Mapa" data-name="Icone Mapa" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <path id="Caminho_366" data-name="Caminho 366" d="M0,0H32V32H0Z" fill="none"/>
                                <path id="Caminho_367" data-name="Caminho 367" d="M18.721,5.641,11.974,3.27a2.685,2.685,0,0,0-1.754-.014L4.835,5.072A2.727,2.727,0,0,0,3,7.646V23.7a2.691,2.691,0,0,0,3.67,2.52l3.954-1.544a1.3,1.3,0,0,1,.931-.014L18.3,27.03a2.685,2.685,0,0,0,1.754.014l5.384-1.815a2.714,2.714,0,0,0,1.835-2.574V6.6a2.691,2.691,0,0,0-3.67-2.52L19.652,5.627a1.373,1.373,0,0,1-.931.014Zm.472,18.843-8.1-2.858V5.817l8.1,2.858Z" transform="translate(0.862 0.85)" fill="#025e73"/>
                            </svg>
                        </Link>
                    </li>
                    <li className = {styles.item}>
                        <Link to="/notificacoes">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.47" height="24" viewBox="0 0 18.47 24">
                                <path id="Caminho_305" data-name="Caminho 305" d="M13.65,26.5a2.456,2.456,0,0,0,2.435-2.462h-4.87A2.448,2.448,0,0,0,13.65,26.5Zm7.3-7.385V12.962c0-3.778-2-6.942-5.479-7.778V4.346a1.826,1.826,0,1,0-3.652,0v.837C8.33,6.02,6.345,9.171,6.345,12.962v6.154L4.774,20.7a1.233,1.233,0,0,0,.852,2.1H21.661a1.236,1.236,0,0,0,.864-2.1Z" transform="translate(-4.414 -2.5)" fill="#025e73"/>
                            </svg>
                        </Link>
                    </li>
                </ul>
                <ul className = {styles.list}>
                    <li>
                        <Link to="/digitaltwin">
                            <button className = {styles.button}>Digital Twin</button>
                        </Link>
                    </li>
                    <li className = {styles.item}>
                        <Link to="/perfil">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <g id="Grupo_625" data-name="Grupo 625" transform="translate(-1391 -24)">
                                    <circle id="Elipse_20" data-name="Elipse 20" cx="15" cy="15" r="15" transform="translate(1392 25)" fill="#025e73"/>
                                    <path id="Caminho_304" data-name="Caminho 304" d="M18,2A16,16,0,1,0,34,18,16.006,16.006,0,0,0,18,2Zm0,4.8a4.8,4.8,0,1,1-4.8,4.8A4.794,4.794,0,0,1,18,6.8Zm0,22.72a11.521,11.521,0,0,1-9.6-5.152c.048-3.184,6.4-4.928,9.6-4.928,3.184,0,9.552,1.744,9.6,4.928A11.521,11.521,0,0,1,18,29.52Z" transform="translate(1389 22)" fill="#d6d6d6"/>
                                </g>
                            </svg>

                        </Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar
