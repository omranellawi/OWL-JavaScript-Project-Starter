import { Component, useState, tags } from "@odoo/owl";

const MY_COMPONENT_TEMPLATE = tags.xml/*xml*/ `
<span t-name="Omran Allawy" class="" t-on-click="update">
  Hello <t t-esc="state.text"/>
</span>
`;

export class MyComponent extends Component {
  static template = MY_COMPONENT_TEMPLATE;
  state = useState({ text: "All" });
  update() {
    this.state.text = this.state.text === "Owl" ? "World" : "Owl";
  }
}
