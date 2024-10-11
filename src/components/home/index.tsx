import styles from './index.module.css'

function Home(){
    return(
        <main className={styles.main}>
            <div className={styles.content_bg}>
                <img className={styles.bg} src="./img/home/berserk_bg.jpg" alt="" />
                <div className={styles.svg}>
                    <img src="./img/home/vector.svg" alt="" />
                </div>
                <div className={styles.personagem}>
                    <img src="./img/home/berserk_person.svg" alt="" />
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.content_change}>
                    <h2>Berserk</h2>
                    <p>Gatts é um sobrevivente que vaga pelo mundo 
                        à procura de respostas. Antigo membro do ext “Bando dos Falcões”, um grupo mercenário de cavaleiros
                        e guerreiros liderado por Griffith e Caska, Gatts se adentra na história que ganha corpo e emerge sob 
                        um ponto de vista totalmente imprevisível, a medida que os acontecimentos vão se completando. É uma obra 
                        dedicada à eterna luta do Catolicismo contra Paganismo</p>
                </div>
                <div className={styles.content_btn}>
                    <button className={styles.ler_agora}>Ler agora</button>
                    <button className={styles.biblioteca}>Biblioteca</button>
                </div>
            </div>
            <div className={styles.content_sobre}>
                <div className={styles.card}>
                    <div className={styles.title}>
                        <div className={styles.ponto}></div>    
                        Sobre
                    </div>
                    <ul className={styles.infs}>
                        <li>
                            <span>Autor:</span>
                            <p>Kentaro Miura</p>
                        </li>
                        <li>
                            <span>Ano:</span>
                            <p>1999</p>
                        </li>
                        <li>
                            <span>Capítulos:</span>
                            <p>374</p>
                        </li>
                        <li>
                            <span>Volumes:</span>
                            <p>27</p>
                        </li>
                        <li>
                            <span>Status:</span>
                            <p>Lançamento</p>
                        </li>
                        <li className={styles.generos}>
                            <span>Gêneros:</span>
                            <div className={styles.content_generos}>
                                <div>Horror</div> 
                                <div>Terror</div>
                                <div>Aventura</div>
                                <div>Drama</div>
                                <div>Seinen</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Home