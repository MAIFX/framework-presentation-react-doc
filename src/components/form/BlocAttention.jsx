import React from "react";
import BlocAttention from "maif-framework-presentation-react/lib/components/form/BlocAttention";
// url

function BlocAttentionExample() {
  return (
    <div className="row">
      <div className="col-md-8 col-sm-10 col-center">
        <div className="col-form-container">
          <form className="maif-form">
            <BlocAttention title="ATTENTION :">Message possible sur plusieurs lignes</BlocAttention>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BlocAttentionExample;
