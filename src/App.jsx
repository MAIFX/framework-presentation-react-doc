import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StepBarExample from "./components/form/StepBar";
import BlocAttentionExample from "./components/form/BlocAttention";
import Conversation1Example from "./components/conversationnel/Conversation1";

function Nav() {
  return (
    <div className="container">
      <div className="page-heading">
        <div className="heading type2">Composants MAIF</div>
      </div>
      <div className="col-bg-container maif-form">
        <div className="form-group-label">
          <label className="label-title">Formulaire</label>
          <div className="row">
            <div className="col-sm-4">
              <Link to="/components/form/stepbar" className="btn btn-block">
                StepBar
              </Link>
            </div>
            <div className="col-sm-4">
              <Link to="/components/form/blocAttention" className="btn btn-block">
                Bloc attention
              </Link>
            </div>
          </div>
        </div>
        <div className="form-group-label">
          <label className="label-title">Conversationnel</label>
          <div className="row">
            <div className="col-sm-4">
              <Link to="/components/conversationnel/conversation1" className="btn btn-block">
                Conversation 1
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Route exact path="" component={Nav} />
        <Route path="/components/form/stepbar" component={StepBarExample} />
        <Route path="/components/form/blocAttention" component={BlocAttentionExample} />
        <Route path="/components/conversationnel/conversation1" component={Conversation1Example} />
      </div>
    </Router>
  );
}

export default App;
