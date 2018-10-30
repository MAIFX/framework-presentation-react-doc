import React from "react";

import Conversationnel from "maif-framework-presentation-react/lib/components/conversationnel";
import Conversation from "maif-framework-presentation-react/lib/components/conversationnel/conversation";
import Reinit from "maif-framework-presentation-react/lib/components/conversationnel/conversation/Reinit";
import Message from "maif-framework-presentation-react/lib/components/conversationnel/conversation/message/Message";
import Text from "maif-framework-presentation-react/lib/components/conversationnel/conversation/message/Text";
import Modify from "maif-framework-presentation-react/lib/components/conversationnel/conversation/message/Modify";
import Wait from "maif-framework-presentation-react/lib/components/conversationnel/conversation/message/Wait";
import LinkInformation from "maif-framework-presentation-react/lib/components/conversationnel/conversation/message/LinkInformation";
import LinkAction from "maif-framework-presentation-react/lib/components/conversationnel/conversation/message/LinkAction";
import ResultatRechercheObjet from "maif-framework-presentation-react/lib/components/form/ResultatRechercheObjet";
import DevisFormule from "maif-framework-presentation-react/lib/components/conversationnel/conversation/message/DevisFormule";
import Progress from "maif-framework-presentation-react/lib/components/conversationnel/conversation/message/Progress";

function Conversation1Example() {
  return (
    <Conversationnel>
      <Conversation>
        <Reinit href="/" />
        <Message maif={true}>
          <Text>
            <span>Message MAIF</span>
          </Text>
        </Message>
        <Message url="test">
          <Text>
            <span>Message utilisateur</span>
          </Text>
          <Modify url="test">modifier</Modify>
        </Message>
        <Message maif={true}>
          <Wait />
        </Message>
        <Message maif={true}>
          <Text>
            <span>Message d'information (Popin)</span>
            <LinkInformation href="#modal-1" data-toggle="modal">
              d'action sur plusieurs lignes possible
            </LinkInformation>
          </Text>
          <Modify url="test">modifier</Modify>
        </Message>
        <Message maif={true}>
          <Text>
            <span>Message d'action (Popin)</span>
            <LinkAction picto="pdf">
              <span>Texte d'action sur plusieurs lignes possible</span>
            </LinkAction>
          </Text>
        </Message>
        <Message maif={true}>
          <Text>
            <p>Tarif calculé selon les éléments suivants :</p>
            <ResultatRechercheObjet picto="bateau-moteur" reduit={true}>
              <ul className="list-unstyled">
                <li>
                  Marque : <strong>CATANA</strong>
                </li>
                <li>
                  Modèle : <strong>CATANA 42</strong>
                </li>
                <li>
                  Type : <strong>Voilier</strong>
                </li>
                <li>
                  Année : <strong>2009</strong>
                </li>
                <li>
                  Utilisation : <strong>Moins de 20 jours/an</strong>
                </li>
              </ul>
            </ResultatRechercheObjet>
          </Text>
        </Message>
        <Message maif={true}>
          <Text>
            <span>Je vous propose :</span>
            <DevisFormule tarif="18" title="CONTRAT XXXXX " vir="00" href="lien" unite="semaine" />
          </Text>
        </Message>
        <Message maif={true}>
          <Text>
            <span>Je vous propose :</span>
            <DevisFormule>petites et moyennes associations</DevisFormule>
          </Text>
        </Message>
        <Message maif={true}>
          <Text>
            <span>Veuillez patienter, je calcule votre tarif express</span>
            <Progress />
          </Text>
        </Message>
      </Conversation>
    </Conversationnel>
  );
}

export default Conversation1Example;
