import React from "react";
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";

export class AboutForm extends React.PureComponent {
  render() {
    return (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>About</IonCardTitle>
        </IonCardHeader>
      </IonCard>
    );
  }
}
