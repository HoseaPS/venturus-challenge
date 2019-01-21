import React, { Fragment, Component } from 'react';

import { Content, Dropdown } from './styles';

class Header extends Component {
  state = {
    displayMenu: false,
  };

  esqFunction = (event) => {
    const { hideDropdownMenu } = this;
    if (event.keyCode === 27) {
      hideDropdownMenu();
      console.log('tirou');
    }
  };

  showDropdownMenu = (event) => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
      document.addEventListener('keydown', this.esqFunction);
    });
  };

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
      document.removeEventListener('keydown', this.escFunction);
    });
  };

  render() {
    return (
      <Fragment>
        <Content>
          <div className="logo-wrapper">
            <div className="logo-image">
              <div className="logo-icon">
                <i className="fas fa-question" />
              </div>
            </div>
            <div className="logo-writing">
              <span>Venturus Sports</span>
            </div>
          </div>

          <div className="user" onClick={this.showDropdownMenu}>
            <div className="user-icon">JB</div>
            <span>Jason Bourne</span>
            <i className="fas fa-angle-down" />

            {this.state.displayMenu ? (
              <Dropdown>
                <li>
                  <a href="#Create Page">Friends List</a>
                </li>
                <li>
                  <a href="#Manage Pages">Saved Items</a>
                </li>
                <li>
                  <a href="#Create Ads">Notifications</a>
                </li>
                <li>
                  <a href="#Manage Ads">User Preferences</a>
                </li>
                <li>
                  <a href="#Activity Logs">Log out</a>
                </li>
              </Dropdown>
            ) : null}
          </div>
        </Content>
      </Fragment>
    );
  }
}

export default Header;
