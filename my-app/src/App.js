import React, { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     //LEEMOS EL API DE ESTA WEB, QUE NOS DA UN JSON
     //SI PEGAS LA URL EN EL NAVEGADOR VAS A VER EL JSON 
     fetch('https://jsonplaceholder.typicode.com/posts?_limit=10') 
        .then((response) => response.json())//CUANDO LOS DATOS SE HAYAN RECIBIDO, PASAMOS DE TEXTO A OBJETO JAVASCRITP "DATA"
        .then((data) => {//CUANDO EN DATA YA SE HAYAN CARGADO LOS DATOS JSON
           console.log(data);
           setPosts(data);//ACTUALIZAMOS
        })
        .catch((err) => {//SI EN LA COMUNICACIÓN OCURRE ALGÚN FALLO, CAPTURAMOS LA EXCEPCIÓN AQUÍ
           console.log(err.message);//IMPRIMIENDO UN MENSAJE DE LOG (TAMBIÉN PODRÍAMOS HACER UN ALERT PARA INFORMAR AL USUARIO QUE ALGO FUE MAL)
        });
  }, []);



return (
  <div className="posts-container">
     {posts.map((post) => { //AQUÍ CUANDO POST SE ACTUALICE, SE RECCORE Y 
        return (//SE MUESTRAN DIVS CON CADA ATRIBUTO DEL JSON
           <div className="post-card" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
              <div className="button">
              <div className="delete-btn">Delete</div>
              </div>
           </div>
        );
     })}
  </div>
  );
};

//si lo entiendes bien, puedes ver cómo estas APIS GRATIS, también te devuelven datos en json
//que puedes consumir de la misma manera (con fetch, sólo sustitutyendo la url)
//y luego mostrarlos en return, accediendo a cada campo que trae el json

//te recomiendo que pruebes estas dos apis: una más sencilla
// esta te da frases aleatorias de chuck norris 
//https://api.chucknorris.io/jokes/random
// y te da un json como este
/**
 * {"categories":["food"],"created_at":"2020-01-05 13:42:19.576875",
 * "icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png",
 * "id":"6n17og8kt4e2bae8a4v7zq","updated_at":"2020-01-05 13:42:19.576875",
 * "url":"https://api.chucknorris.io/jokes/6n17og8kt4e2bae8a4v7zq",
 * "value":"Chuck Norris once sued Burger King after they refused to put razor wire in his Whopper Jr, insisting that that actually is \"his\" way."}
donde value es la frase aleatoria de chuck 
*/

//2 esta, para alumnos más avanzados, porque tiene un json más complejo
//url de itunes https://itunes.apple.com/search/?media=music&term=SHAKIRA
//este ejemplo puede ser más rico, porque además de tener más campos, 
//puedes poner un input, para crear un evento y que el usuario elija el nombre
//del cantante que quiere buscar (y concatenarlo a la URL en el parámetro &term=) de forma dinámica

//suerte y pregunta


export default App;
