import styles from './index.module.css'
import CSS from "csstype";
function Noticia({img, data, titulo, noticia}: {img: string, data: string, titulo: string, noticia: string}){
    
    const stylesCapa: CSS.Properties={
        backgroundImage: `url("${img}")`,
        backgroundColor: "#cccccc",
        // height: "100%",
        // width: "135px",
        aspectRatio: "2 / 3",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        borderRadius: "5px"
            }
    return(
        <div className={styles.card}>
            <div className={styles.content_card}>
                <div style={stylesCapa}className={styles.img_card}>
                </div>

                <div className={styles.content_text_card}>
                    <div className={styles.text_top}>
                        <p className={styles.title}>{titulo}</p>
                        <p className={styles.data}>{data}</p>
                    </div>
                    <div className={styles.text_bottom}>
                        <p>{noticia}</p>
                        <button>Ver mais</button>
                    </div>
                </div>

            </div>

        </div>
 
)
}

export default Noticia