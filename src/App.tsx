import React, { Component } from "react";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ItemListContainer } from "./containers/item-list-container";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IonApp>
          <IonContent>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Welcome to Blankout</IonCardSubtitle>
                <IonCardTitle>It's a game</IonCardTitle>
              </IonCardHeader>
            </IonCard>
            <ItemListContainer />
          </IonContent>
        </IonApp>
      </Provider>
    );
  }
}

export default App;
