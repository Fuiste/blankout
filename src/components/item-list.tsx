import { PureComponent } from "react";
import { Item } from "../redux/state";
import { IonCard, IonCardHeader, IonCardSubtitle } from "@ionic/react";

export type Props = {
  items: Item[];
};

export class ItemList extends PureComponent<Props> {
  render() {
    return <div>{this.renderItems()}</div>;
  }

  renderItems = () =>
    this.props.items.map(i => (
      <IonCard>
        <IonCardHeader>{i.name}</IonCardHeader>
        <IonCardSubtitle>{i.count}</IonCardSubtitle>
      </IonCard>
    ));
}
