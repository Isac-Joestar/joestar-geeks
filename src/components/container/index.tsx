import TopCards from '../topCards'
import styles from './index.module.css'
import CSS from "csstype";

function Container({children, title, svg, mdHeight, padding, radius }:
    {children: React.ReactNode, title: string, svg: string, mdHeight: string,
     padding: string, radius: string}){
    const stylesContainer: CSS.Properties={
        height: `${mdHeight}`,
        borderRadius: `${radius}`,
    }
    return(
        <div style={stylesContainer} className={styles.container}>
            <TopCards title={title} svg={svg} padding={padding}/>
            {children}
        </div>
    )
}

export default Container