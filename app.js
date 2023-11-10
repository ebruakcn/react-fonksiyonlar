import axios from "axios"; //Terminalde axios nodülünü indirdim ve import ettim

//asenkron çalışıcak yapıları sıralı halde yazdırmak için async parametresini yazıp Number tipinde tek parametre alıcak bu parametre user id'yi belirticek
async function getData(Number){ 
    
    //await ve axios function'u ile API'mizin users ve post adresine ulaştım ve id paremetremizi kullandım 
    try{  
            // Users bilgilerini döndürücek
            async function getUserId(Number) { 
                                   const {data:users}=
                                   await axios("https://jsonplaceholder.typicode.com/users/" + Number)
                                   console.log(users)}
            // Post bilgilerini döndürücek
            async function getPostId(Number) {
                                const {data:posts}=
                                await axios("https://jsonplaceholder.typicode.com/posts?id="+ Number)
                                console.log(posts)}

            //Sıralı şekilde yazması için await parametresini kullandım return ederek değerleri döndürdüm
            const userId=await getUserId(Number);
            const postId=await getPostId(Number);
            return userId+postId
        }
        // hata oluşursa error bilgisini döndürücek
        catch(e){ 
            console.log(e);
        }
}
export default getData; // getData fonksiyonunu export edip dışa aktardım
