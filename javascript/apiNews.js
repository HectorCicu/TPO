/**  ada1a15a59df4c32f1bb7437f62eb490  key para mediStack */
// ba009d8efc304dbba6fe6a60b6b152d5 mediaStack diarios argentina
let keyNewsOrg = 'ba009d8efc304dbba6fe6a60b6b152d5'
let pais = 'us'

/**
 https://api.mediastack.com/newsRun 
	? access_key = ada1a15a59df4c32f1bb7437f62eb490
	& country = ar
 * 
 */
document.addEventListener("DOMContentLoaded", async () => {
 
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=${keyNewsOrg}` // noticias de Argentina
     //"https://newsapi.org/v2/top-headlines/sources?country=ar&apiKey=ba009d8efc304dbba6fe6a60b6b152d5" // noticias de Argentina
      //"https://newsapi.org/v2/everything?q=keyword&apiKey=ba009d8efc304dbba6fe6a60b6b152d5"
    );
    const result = await response.json();
    console.log(result);
  } catch (error){
    console.error(error);
  }
});


/**let noticias = {
    "apiKey":"f3798e116eb342b2bae58e7f0cbd9c11",
    fetchNoticias:function(categoria){
        fetch(
            "https://newsapi.org/v2/everything?q=deportes&languaje=es&apiKey=f3798e116eb342b2bae58e7f0cbd9c11"
        )
        .then((response)=>response.json())
        .then((data)=>this.displayNoticias(data));
    }, */
/**let noticias = {
    "apiKey":"f3798e116eb342b2bae58e7f0cbd9c11",
    fetchNoticias:function(categoria){
        fetch(
            "https://newsapi.org/v2/everything?q="
            +categoria+
            "&languaje=es&apiKey="+this.apiKey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayNoticias(data));
    }, */
/**let noticias = {
    "apiKey":"f3798e116eb342b2bae58e7f0cbd9c11",
    fetchNoticias:function(categoria){
        fetch(
            "https://newsapi.org/v2/everything?q="
            +categoria+
            "&languaje=es&apiKey="+this.apiKey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayNoticias(data));
    }, */

    /**
             <span class="cat" onclick="buscar('Tecnología')">Tecnología</span>
                <span class="cat" onclick="buscar('programación')">Programación</span>
                <span class="cat" onclick="buscar('deportes')">Deportes</span>
                <span class="cat" onclick="buscar('economía')">Economía</span>
                <span class="cat" onclick="buscar('educación')">Educación</span>
     */