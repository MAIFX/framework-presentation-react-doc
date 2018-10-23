import React from "react";
import BlocRetourAccueil from "maif-framework-presentation-react/lib/components/form/BlocRetourAccueil";

function BlocRetourAccueilExample() {
  return (
    <div className="container">
      <div class="row">
        <div class="col-md-8 col-sm-10 col-center">
          <div class="col-form-container">
            <form class="maif-form">
              <BlocRetourAccueil href="#">Message possible sur plusieurs lignes.</BlocRetourAccueil>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlocRetourAccueilExample;
