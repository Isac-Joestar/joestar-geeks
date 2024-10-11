import styles from './index.module.css'
import Noticias from '../noticias'
import Lancamentos from '../lancamentos'
import Destaques from '../destaques'
import Recentes from '../recentes'
import EmAlta from '../emAlta'
import Recomendados from '../recomendados'
function Section(){
    return(
        <section className={styles.section}>
            <div className={styles.noticias}>
                <Noticias/>
            </div>

            <div className={styles.contaier_bottom}>
                <div className={styles.container_left}>      
                    <Lancamentos/>
                </div>
                <div className={styles.container_right}>
                    <Destaques/>
                    <EmAlta/>
                    <Recentes/>
                    {/* <Recomendados/> */}
                </div>
            </div>
        </section>
    )
}

export default Section
