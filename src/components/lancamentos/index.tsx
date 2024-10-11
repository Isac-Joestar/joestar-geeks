import Container from "../container"
import Manga from "../manga";
import styles from './index.module.css'
import CSS from "csstype";
function Lancamentos(){
    const contentImgStyles: CSS.Properties = {
       position: "relative",
       width: "160px",
       height: "230px",
       overflow: "hidden",
       borderRadius: "7px",
    
       backgroundImage: "url(https://i.pinimg.com/564x/ce/e5/3a/cee53aaa9cca4acf2cc74739f453a86c.jpg)",
       backgroundColor: "#cccccc",
       backgroundPosition: "center",
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover"
    }

    var proporcao = {
        width: "13%",
        height: ""
    }
    return(
        <Container title="Lançamentos" svg="./img/icons/lancamentos.svg" mdHeight="100%" padding="10px 0px 15px 10px" radius="0px">
            <div className={styles.content_mangas}>
                <div className={styles.content}>
                    <Manga title="Dandadan" img="https://i.pinimg.com/564x/06/21/45/0621452d7715b1cc376a65fb6912e94c.jpg" cap="134" avaliacao="(2300 avaliações)" star="4.8" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Jujutsu Kaisen" img="https://i.pinimg.com/564x/ce/e5/3a/cee53aaa9cca4acf2cc74739f453a86c.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.7" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Berserk" img="https://i.pinimg.com/564x/8f/c3/c2/8fc3c2cb3076ba774fd3e0a6572b0746.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.8" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Vagabond" img="https://i.pinimg.com/564x/7d/70/79/7d70797f3e1a168424473a9f5eb05af8.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.9" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Vinland Saga" img="https://i.pinimg.com/564x/28/28/85/2828853bc6d66591d41f9f22b472cfc0.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.7" state={true} proporcao={1} wid={proporcao.width}/>

                    <Manga title="Dandadan" img="https://i.pinimg.com/564x/06/21/45/0621452d7715b1cc376a65fb6912e94c.jpg" cap="134" avaliacao="(2300 avaliações)" star="4.8" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Jujutsu Kaisen" img="https://i.pinimg.com/564x/ce/e5/3a/cee53aaa9cca4acf2cc74739f453a86c.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.7" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Berserk" img="https://i.pinimg.com/564x/8f/c3/c2/8fc3c2cb3076ba774fd3e0a6572b0746.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.8" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Vagabond" img="https://i.pinimg.com/564x/7d/70/79/7d70797f3e1a168424473a9f5eb05af8.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.9" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Vinland Saga" img="https://i.pinimg.com/564x/28/28/85/2828853bc6d66591d41f9f22b472cfc0.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.7" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Dandadan" img="https://i.pinimg.com/564x/06/21/45/0621452d7715b1cc376a65fb6912e94c.jpg" cap="134" avaliacao="(2300 avaliações)" star="4.8" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Jujutsu Kaisen" img="https://i.pinimg.com/564x/ce/e5/3a/cee53aaa9cca4acf2cc74739f453a86c.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.7" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Berserk" img="https://i.pinimg.com/564x/8f/c3/c2/8fc3c2cb3076ba774fd3e0a6572b0746.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.8" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Vagabond" img="https://i.pinimg.com/564x/7d/70/79/7d70797f3e1a168424473a9f5eb05af8.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.9" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Vinland Saga" img="https://i.pinimg.com/564x/28/28/85/2828853bc6d66591d41f9f22b472cfc0.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.7" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Dandadan" img="https://i.pinimg.com/564x/06/21/45/0621452d7715b1cc376a65fb6912e94c.jpg" cap="134" avaliacao="(2300 avaliações)" star="4.8" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Jujutsu Kaisen" img="https://i.pinimg.com/564x/ce/e5/3a/cee53aaa9cca4acf2cc74739f453a86c.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.7" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Berserk" img="https://i.pinimg.com/564x/8f/c3/c2/8fc3c2cb3076ba774fd3e0a6572b0746.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.8" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Vagabond" img="https://i.pinimg.com/564x/7d/70/79/7d70797f3e1a168424473a9f5eb05af8.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.9" state={true} proporcao={1} wid={proporcao.width}/>
                    <Manga title="Vinland Saga" img="https://i.pinimg.com/564x/28/28/85/2828853bc6d66591d41f9f22b472cfc0.jpg" cap="267" avaliacao="(1500 avaliações)" star="4.7" state={true} proporcao={1} wid={proporcao.width}/>

                    
                </div>
            </div>
        </Container>
    )
}

export default Lancamentos