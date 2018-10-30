import React from "react";
import BlocRetourAccueil from "maif-framework-presentation-react/lib/components/form/BlocRetourAccueil";

function BlocRetourAccueilExample() {
  return (
    <div className="col-form-container">
      <form className="maif-form">
        <BlocRetourAccueil href="#">Message possible sur plusieurs lignes.</BlocRetourAccueil>
      </form>
    </div>
  );
}

export default BlocRetourAccueilExample;
