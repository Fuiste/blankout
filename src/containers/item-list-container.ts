import { State } from "../redux/state";
import { ItemList } from "../components/item-list";
import { connect } from "react-redux";

export function mapStateToProps({ items }: State) {
  return {
    items,
  };
}

export const ItemListContainer = connect(mapStateToProps)(ItemList);
