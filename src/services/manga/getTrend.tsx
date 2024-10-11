// const MySQL: any = {};

// type IMangaDatabaseRow = {
//     id: string;
//     name: string;
//     views: number;
//     description: string;
//     chapters:{
//         id: string;
//         name: string;
//     }[]
// };
// type IManga = {
//     chapters: string[]
// } & Omit<IMangaDatabaseRow,"chapters">

// const getTrendService = async () => {
//     const rows = (await MySQL.fetch.await("SELECT * FROM `mangas` ORDER BY views")) as IMangaDatabaseRow[];
//     if(rows.length < 1) return [];
    /*
    Faltaria fazer

    validação de tipo (SIMPLES)
    deixar o banco de dados separado do serviço (COMPLEXIDADE MAIOR)
    */
//     return rows.map(({
//         chapters: rawChapters,
//         ...row
//     })=>{
//         return{
//             chapters: rawChapters.map(({ id })=>id),
//             ...row,
//         } as IManga 
//     })
// }

// export{
//     getTrendService
// }