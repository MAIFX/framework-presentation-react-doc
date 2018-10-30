import React from "react";
import BlocAttention from "maif-framework-presentation-react/lib/components/form/BlocAttention";
// url

function BlocAttentionExample() {
  return (
    <div className="col-form-container">
      <form className="maif-form">
        <BlocAttention title="ATTENTION :">Message possible sur plusieurs lignes</BlocAttention>
      </form>
    </div>
  );
}

export default BlocAttentionExample;
