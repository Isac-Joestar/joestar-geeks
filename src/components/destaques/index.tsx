import Container from "../container"
import styles from "./index.module.css"

function Destaques(){
    return(
        <div className={styles.container}>
            <div className={styles.content_top}>
                <p className={styles.title}>Top recomendados</p>
                <img src="./img/icons/Star_02.svg" alt="" />
            </div>
            <div className={styles.content}>
                <div className={styles.content_img}>
                    <img src="https://i.pinimg.com/originals/02/6f/1d/026f1d0117d830a54b895816748f49e0.gif" alt="" />
                    <div className={styles.name}>
                        <p>One Piece</p>
                    </div>
                </div>
               
            </div>
        </div>
      
        )
      
}

export default Destaques
