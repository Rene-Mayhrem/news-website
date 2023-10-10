import React from "react";
import "./TagComponent.css";
import { Color } from "../../../../../../model/Color";

export default function TagComponent({tag} = this.props) {

  return (
    <div
      className="tag-component"
      style={{ background: new Color().generateRandomBrightColor() }}
    >
      <p>{tag}</p>
    </div>
  );
}
