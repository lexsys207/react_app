import React, { Component } from "react";
import { View } from "react-native";

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto / auto 1fr auto",
          height: "100%"
        }}
      >
        <View
          style={{
            padding: "2rem",
            gridColumn: "1 / 4",
            background: "#8ff0c0"
          }}
        />
        <View style={{ gridColumn: "1 / 2", background: "#699680" }} />
        <View style={{ gridColumn: "2 / 3", background: "#17804c" }} />
        <View style={{ gridColumn: "3 / 4", background: "#699680" }} />
        <View style={{ gridColumn: "1 / 4", background: "#204733" }} />
      </View>
    );
  }
}
