import styles from './index.module.css'
import CSS from "csstype";
function TopCards({title, svg, padding}: {title: string, svg: string, padding: string}){

    const stylesTop: CSS.Properties={
        padding: `${padding}`,
    }

    return(
        <div className={styles.top} style={stylesTop}>
            <div className={styles.content_img}>
                <img src={svg} alt="" />
            </div>
            <p>{title}</p>
        </div>
    )
}

export default TopCards