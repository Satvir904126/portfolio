import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activationTab: 0 };
  }

  toggleProject() {
    if (this.state.activationTab === 0) {
      return <h4>React Projectsss</h4>;
    } else if (this.state.activationTab === 1) {
      return <h4>PHP Projectsss</h4>;
    } else if (this.state.activationTab === 2) {
      return <h4>JS Projectsss</h4>;
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activationTab={this.state.activationTab}
          onChange={(tabId) => this.setState({ activationTab: tabId })}
        >
          <Tab>React</Tab>
          <Tab>PHP</Tab>
          <Tab>JS</Tab>
        </Tabs>

        <section>{this.toggleProject()}</section>
      </div>
    );
  }
}
