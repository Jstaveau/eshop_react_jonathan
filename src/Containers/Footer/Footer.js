import './Footer.css'

import React from 'react';

export default function Footer() {

  return <div>
<footer class="bg-dark text-white text-center text-lg-start mt-3">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">À propos</h5>

        <p>
          Une confiserie fondée en 1971 par des dentistes ayant quittés
          leurs métiers. Depuis, ils dominent le marché des bonbons,
          Sucrey c'est beau la vie, pour les grands et les petits !
        </p>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Information</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a class="text-white text-decoration-none">À propos de Sucrey</a>
          </li>
          <li>
            <a class="text-white text-decoration-none">Livraison</a>
          </li>
          <li>
            <a class="text-white text-decoration-none">Conditions générales</a>
          </li>
          <li>
            <a class="text-white text-decoration-none">Nos engagements</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Nos produits</h5>

        <ul class="list-unstyled text-decoration-none">
          <li>
            <a class="text-white text-decoration-none">En promotion</a>
          </li>
          <li>
            <a class="text-white text-decoration-none">Nouveaux produits</a>
          </li>
          <li>
            <a class="text-white text-decoration-none">Nos catégories</a>
          </li>
          <li>
            <a class="text-white text-decoration-none">Commandes</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</footer>

  </div>;
}
