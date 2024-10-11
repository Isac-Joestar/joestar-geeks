import Container from '../container'
import Noticia from '../noticia'
import TopCards from '../topCards'
import styles from './index.module.css'
import CSS from "csstype";
function Noticias(){
    const stylesCapa: CSS.Properties={
        backgroundImage: `url("")`,
        backgroundColor: "#cccccc",
        height: "100%",
        width: "140px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        borderRadius: "5px"
            }

    return(
        <Container title="Noticias" svg="./img/icons/noticias.svg" mdHeight='auto' padding="10px 0px 0px 10px" radius='0px'>
           <div className={styles.container}>
                <div className={styles.img}>
                    <img src="./img/noticias/person.png" alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.noticias}>
                        <div className={styles.content_schroll}>
                            <Noticia 
                                img='https://i.pinimg.com/236x/4e/ae/59/4eae5947825484d7cae19d3cf3609c47.jpg' 
                                titulo='Dandadan' 
                                data='31/07/2024' 
                                noticia='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus velit et interdum scelerisque. Donec rutrum sollicitudin enim sagittis feugiat. Vestibulum eu vulputate arcu. nec varius.'/>

                            <Noticia 
                                img='https://i.pinimg.com/564x/c5/57/9d/c5579d2d52a75ac12bbd6027b9aa0d42.jpg' 
                                titulo='Mob psycho 100' 
                                data='31/07/2024' 
                                noticia='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus velit et interdum scelerisque. Donec rutrum sollicitudin enim sagittis feugiat. Vestibulum eu vulputate arcu. nec varius. Sed vitae odio et ligula hendrerit.'/>
                                
                            <Noticia 
                                img='https://i.pinimg.com/564x/8c/59/11/8c59116aeb690437c5f25d599ccafb54.jpg' 
                                titulo='Jujutsu Kaisen' 
                                data='31/07/2024' 
                                noticia='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus velit et interdum scelerisque. Donec rutrum sollicitudin enim sagittis feugiat. Vestibulum eu vulputate arcu. nec varius. Sed vitae odio et ligula hendrerit.'/>
                            <Noticia 
                                img='https://i.pinimg.com/564x/02/ce/d2/02ced2f7c6618bf12bc5eaac2148a3c8.jpg' 
                                titulo='Hunter x Hunter' 
                                data='31/07/2024' 
                                noticia='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus velit et interdum scelerisque. Donec rutrum sollicitudin enim sagittis feugiat. Vestibulum eu vulputate arcu. nec varius. Sed vitae odio et ligula hendrerit.'/>
                            
                            <Noticia 
                                img='https://i.pinimg.com/236x/4e/ae/59/4eae5947825484d7cae19d3cf3609c47.jpg' 
                                titulo='Dandadan' 
                                data='31/07/2024' 
                                noticia='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus velit et interdum scelerisque. Donec rutrum sollicitudin enim sagittis feugiat. Vestibulum eu vulputate arcu. nec varius. Sed vitae odio et ligula hendrerit.'/>
                        </div>

                        </div>
                    <div className={styles.change}>
                        <div className={styles.next}>
                            <img src="./img/icons/arrow.svg" alt="" />
                        </div>
                        <div className={styles.back}>
                            <img src="./img/icons/arrow.svg" alt="" />
                        </div>
                    </div>
                </div>
           </div>
        </Container>
      
    )
}


export default Noticias