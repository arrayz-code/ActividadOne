import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./pagines.css"

function Blog() {
  return (
    <div className="App">
      <h2>Tu Blog Favorito</h2>
      <section className="blog-section">
        <Link to="https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1135-57272010000200005" className="blog-item large">
          <img src="./src/assets/blog1.webp" alt="blog 1" />
          <div className="blog-description">
            <h3>BIENESTAR Y SALUD</h3>
            <p>Encuentra el equilibrio y el bienestar en tu vida diaria. Descubre prácticas de meditación, ejercicios revitalizantes y consejos para cuidar tu mente y cuerpo. Aprende a manejar el estrés y a promover una vida saludable y armonia</p>
          </div>
        </Link>

        <Link to="https://www.telebelleza.es/blog/16_10-super-consejos-para-lucir-guapa-cada-dia.html" className="blog-item medium">
          <img src="./src/assets/blog2.webp" alt="blog 2" />
          <div className="blog-description">
            <h3>CONSEJOS DE BELLEZA</h3>
            <p>
              Descubre los secretos para lucir una piel radiante y saludable. Encuentra consejos sobre cuidado facial, maquillaje y rutinas de belleza que te ayudarán a resaltar tu belleza natural.
            </p>
          </div>
          </Link>
        <Link to="https://www.ifema.es/noticias/moda/consejos-trucos-tips-belleza-mujeres" className="blog-item small">
          <img src="./src/assets/blog3.jpeg" alt="blog 3" />
          <div className="blog-description">
            <h3>RECETAS</h3>
            <p> Deléitate con nuestras deliciosas recetas saludables y nutritivas. Encuentra inspiración para preparar platos llenos de sabor y beneficios para tu bienestar. ¡Descubre cómo puedes disfrutar de una alimentación equilibrada sin renunciar al gusto!</p>
          </div>
          </Link>
          <Link to= "https://www.arbosanafarmacia.es/blog/consejos-de-belleza-que-aunque-sepas-conviene-recordar"className="blog-item small">
          <img src="./src/assets/blog4.jpg" alt="blog 3" />
          <div className="blog-description">
            <h3>CONSEJOS</h3>
            <p> Descubre los mejores consejos de belleza y trucos profesionales para realzar tu imagen. Aprende técnicas de maquillaje, cuidado del cabello y uñas, y encuentra los productos adecuados para resaltar tu estilo único.</p>
          </div>
          </Link>
          <Link to="https://www.telebelleza.es/blog/16_10-super-consejos-para-lucir-guapa-cada-dia.html" className="blog-item medium">
          <img src="./src/assets/blog5.jpeg" alt="blog 2" />
          <div className="blog-description">
            <h3>BELLEZA INFINITA</h3>
            <p>
                Que hermosa esa la belleza. ¿Quieres mantenerte bella todo el tiempo?. ¡Clickea Aquí!
            </p>
          </div>
          </Link>
          <Link to="https://www.telebelleza.es/blog/16_10-super-consejos-para-lucir-guapa-cada-dia.html" className="blog-item medium">
          <img src="./src/assets/blog6.jpeg" alt="blog 2" />
          <div className="blog-description">
            <h3>TIPS</h3>
            <p>
              Descubre los secretos para lucir una piel radiante y saludable. Encuentra consejos sobre cuidado facial, maquillaje y rutinas de belleza que te ayudarán a resaltar tu belleza natural.
            </p>
          </div>
          </Link>
          <Link to="https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1135-57272010000200005" className="blog-item large">
          <img src="./src/assets/blog7.jpeg" alt="blog 1" />
          <div className="blog-description">
            <h3>LINDAS Y HERMOSAS</h3>
            <p>¿Hermosas como ellas? Ve este articulo y sacaras la belleza que tienes por dentro</p>
          </div>
        </Link>
      </section>

      <footer className="footer">
        <div className="footer-content">

          <p className="copyright">
            Copyrigth | {new Date().getFullYear()}
          </p>
          <a href="https://github.com/arrayz-code" target="_blank" rel="noopener noreferrer">
            <FaGithub className="github-icon" />
          </a>
          <p className="developer"> Desarrollador: Angel Arraiz</p>
        </div>
      </footer>


    </div>
  );
}


export default Blog