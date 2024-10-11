import Manga from "../manga"
import styles from './index.module.css'
function ModelRightManga({title, img, cap, avaliacao, star, state, proporcao}: 
    {title: string, img: string, cap: string, avaliacao: string, star: string, state: boolean, proporcao: number}){
    return(
            <div className={styles.container}>
                <Manga 
                    title={title}
                    img={img}
                    cap={cap}
                    avaliacao={avaliacao}
                    star={avaliacao}
                    state={state}
                    proporcao={proporcao}
                    wid="15.5%"
                    />
                    <div className={styles.content_text}>
                        <p className={styles.title}>{title}</p>
                        <ul className={styles.content_caps}>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                            <li>
                                <p>225</p>
                            </li>
                        
                        </ul>
                    </div>
            </div>
       
    )
    
}

export default ModelRightManga