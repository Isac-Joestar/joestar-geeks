import axios from "axios";

function MangaReleases(){
    async function getManga() {     

        const creds = {
            grant_type: "123456eu",
            username: '<joestar>',
            password: '<123456eu>',
            client_id: '<d19749c3-c456-4ebc-8f04-4d1e4a85f1f5-de922e80>',
            client_secret: '<0cHLgSUWmoqNJ5S3DymEem9mpxp7LUjV>'
        };
        
        const resp = await axios({
            method: 'POST',
            url: `https://auth.mangadex.org/realms/mangadex/protocol/openid-connect/token`,
            data: creds
        });
        
        const { access_token, refresh_token } = resp.data;
        console.log(access_token, refresh_token);
        
     }
    return(
        <></>
    )
}


export default MangaReleases