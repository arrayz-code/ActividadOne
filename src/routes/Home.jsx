
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaGithub } from 'react-icons/fa';
  
import "./pagines.css"




function Home() {
  return (
    <div className="App">


      <section>
        <div className="spa-info">
          <h1>Bienvenido a Spa Global Group</h1>


        </div>
        <div className="spa-image">
          <img src="./src/assets/spa.jpg" alt="Spa" />
          <p>
            En nuestro spa, ofrecemos una variedad de tratamientos y servicios

            de belleza para que te sientas relajado y rejuvenecido. Nuestro equipo de

            expertos está comprometido en brindarte una experiencia excepcional y personalizada.
          </p>
        </div>
        <h2 id='testimonios'>Testimonios</h2>
        <div className="image-container">
          <div className="image-wrapper">
            <img src="./src/assets/jordan.avif" alt="Imagen 1" id='clientes' />
            <p><strong>Michael B. Jordan</strong></p>
            <p>Mi experiencia en el spa fue simplemente maravillosa. Desde el momento en que entré, fui recibido con una cálida bienvenida y un ambiente relajante que me hizo olvidar todas mis preocupaciones. Los masajes y tratamientos faciales fueron increíbles, cada uno diseñado para brindarme el máximo bienestar y relajación.</p>
          </div>
          <div className="image-wrapper">
            <img src="./src/assets/dua.jpeg" alt="Imagen 2" id='clientes' />
            <p><strong>Dua Lipa</strong></p>
            <p>El spa fue como un oasis de serenidad en medio del ajetreo y el bullicio de la vida diaria. Desde el momento en que entré, me envolvió una atmósfera de calma y tranquilidad. Los aromas suaves, la música relajante y la decoración elegante crearon un ambiente acogedor y sofisticado.</p>
          </div>
          <div className="image-wrapper">
            <img src="./src/assets/dicaprio.jpg" alt="Imagen 3" id='clientes' />
            <p><strong>Leonardo Di Caprio</strong></p>
            <p>Mi visita al spa superó todas mis expectativas. Desde el momento en que llegué, me sentí como un verdadero VIP. El personal amable y atento me guió a través de una experiencia personalizada que se adaptó perfectamente a mis necesidades. </p>
          </div>
        </div>
      </section>
      <h2>SUPER-PROMOS</h2>
      <section className="promotions-section">
        <div className="promotion">
          <img src="./src/assets/imagen1.jpg" alt="Promoción 1" className="promotion-image" />
          <div className="promotion-details">
            <h3>Promoción Group</h3>
            <p>Renovación Total: Disfruta de una experiencia de relajación completa con nuestro paquete de renovación total. Incluye un masaje relajante de cuerpo completo, un facial revitalizante y un tratamiento de spa de manos y pies. ¡Déjate consentir y renueva tu cuerpo y mente</p>
            <p className="promotion-price">$50</p>
          </div>
        </div>

        <div className="promotion">
          <img src="./src/assets/imagen2.webp" alt="Promoción 2" className="promotion-image" />
          <div className="promotion-details">
            <h3>Promoción Relaxing</h3>
            <p>Spa de Meditación: Sumérgete en un oasis de tranquilidad con nuestro paquete de spa de meditación. Experimenta una sesión de meditación guiada para calmar tu mente y liberar el estrés acumulado. Acompañado de un masaje relajante y una infusión de hierbas, esta promoción te ayudará a encontrar la armonía interior</p>
            <p className="promotion-price">$75</p>
          </div>
        </div>

        <div className="promotion">
          <img src="./src/assets/imagen3.webp" alt="Promoción 3" className="promotion-image" />
          <div className="promotion-details">
            <h3>Promo Enjoy</h3>
            <p>Escape en Pareja: Comparte momentos inolvidables con tu ser querido en nuestro exclusivo paquete de escape en pareja. Disfruta de un masaje en pareja en una sala privada, seguido de un baño de aromaterapia relajante y una copa de champán. ¡Crea recuerdos especiales y vive una experiencia romántica</p>
            <p className="promotion-price">$100</p>
          </div>
        </div>
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

export default Home;


