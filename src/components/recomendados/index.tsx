import ModelRight from "../modelRight"
import ModelRightManga from "../modelRightManga"
function Recomendados(){
    return(
        <ModelRight title="Recomendados">
        <ModelRightManga 
            title="Dandadan" 
            img="https://i.pinimg.com/736x/bc/3f/b9/bc3fb9a42e8bb82f28f98afefd9ad0a5.jpg" 
            cap="134" 
            avaliacao="(2300 avaliações)" 
            star="☆☆☆☆☆" 
            state={false}
            proporcao={2}
        />
         <ModelRightManga 
            title="Dandadan" 
            img="https://i.pinimg.com/564x/66/a2/32/66a2329e8c478b6d1d223511ce9adb73.jpg" 
            cap="134" 
            avaliacao="(2300 avaliações)" 
            star="☆☆☆☆☆" 
            state={false}
            proporcao={2}
        />
         <ModelRightManga 
            title="Dandadan" 
            img="https://i.pinimg.com/564x/a0/b6/4e/a0b64e0a68dc3d80d89abcad459dd626.jpg" 
            cap="134" 
            avaliacao="(2300 avaliações)" 
            star="☆☆☆☆☆" 
            state={false}
            proporcao={2}
        />
</ModelRight>
    )
}
export default Recomendados