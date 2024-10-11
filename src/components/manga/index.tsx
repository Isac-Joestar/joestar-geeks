import styles from './index.module.css'
import CSS from "csstype";



function Manga({img, title, cap, star, avaliacao, state, proporcao, wid}: {img: string, title: string, cap: string, star: string, avaliacao: string, state: boolean, proporcao: number, wid: string}){
    const contentImgStyles: CSS.Properties = {
        position: "relative",
        width: "100%",
        // height: `${proporcao == 1 ? "200px" :  "140px"}`,
        aspectRatio: "2 / 3",
        backgroundColor: "black",
        overflow: "hidden",
        borderRadius: "7px",
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    const stylesManga: CSS.Properties={
        width: `${wid}`,
        height: "min-content",
       
        backgroundColor: "var(--tertiary-01)",
        borderRadius: "7px",

        display: "flex",
        flexDirection: "column",
        alignItems:" flex-start",
        justifyContent: "flex-start",
        padding: `${state ? "2px 2px 3px 2px" : "none"}`,
    
        cursor: "pointer",
    }
    return(
        <div style={stylesManga} className={styles.container_manga}>
            <div  style={contentImgStyles}>
                {state && <div className={styles.n_cap}>{cap}</div>}
            </div>
            {state &&
                <div className={styles.content_txt}>
                    <p className={styles.title}>
                        {title}
                    </p>
                    <div className={styles.avaliação}>
                        <div>
                            <img src="./img/icons/Star.svg" alt="" />
                        </div>
                        <p>{star}</p>
                    </div>
                </div>

            }
        </div>
    )
}

export default Manga