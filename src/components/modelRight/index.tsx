import Container from "../container"
import styles from './index.module.css'

function ModelRight({title, children}: {title: string, children: React.ReactNode}){
    return(
        <Container title={title} svg="" mdHeight="" padding="10px" radius="">
            <div className={styles.container}>
                {children}
            </div>
        </Container>
    )
}

export default ModelRight