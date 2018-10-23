import React from "react";
import BlocRetourAccueil from "maif-framework-presentation-react/lib/components/form/BlocRetourAccueil";

function BlocRetourAccueilExample() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-10 col-center">
          <div className="col-form-container">
            <form className="maif-form">
              <BlocRetourAccueil href="#">Message possible sur plusieurs lignes.</BlocRetourAccueil>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlocRetourAccueilExample;
