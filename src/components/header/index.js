import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserListActions } from '../../store/ducks/userList';

import { Content, Dropdown } from './styles';

class Header extends Component {
  static propTypes = {
    userList: PropTypes.shape({
      newUsers: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  };

  state = {
    displayMenu: false,
  };

  infoToDropdown = () => {
    const items = [
      { item: 'Saved Items', href: '#si', id: 1 },
      { item: 'Friends List', href: '#fi', id: 2 },
      { item: 'Notifications', href: '#no', id: 3 },
      { item: 'User Preferences', href: '#up', id: 4 },
      { item: 'Log out', href: '#lo', id: 5 },
    ];

    return JSON.stringify(items);
  };

  esqFunction = (event) => {
    const { hideDropdownMenu } = this;
    if (event.keyCode === 27) {
      hideDropdownMenu();
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
    const { userList } = this.props;
    const { displayMenu } = this.state;
    console.log(this.props);
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

          <div className="user" role="button" tabIndex={0} onClick={this.showDropdownMenu}>
            <div className="user-icon">
              {userList.newUsers.length === 0
                ? 'JB'
                : userList.newUsers[0].user.name.substring(0, 2).toUpperCase()}
            </div>
            <span>
              {userList.newUsers.length === 0 ? 'Jason Bourne' : userList.newUsers[0].user.name}
            </span>
            <i className="fas fa-angle-down" />

            {displayMenu ? (
              <Dropdown>
                {JSON.parse(this.infoToDropdown()).map(item => (
                  <li key={item.id}>
                    <a href={item.href}>{item.item}</a>
                  </li>
                ))}
              </Dropdown>
            ) : null}
          </div>
        </Content>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.userList,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserListActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
