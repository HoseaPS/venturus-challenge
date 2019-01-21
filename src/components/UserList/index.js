import React, { Component, Fragment } from 'react';
import escapeRegExp from 'escape-string-regexp';
import PropTypes from 'prop-types';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserListActions } from '../../store/ducks/userList';

import Header from '../header/index';
import Breadcrumbs from '../Breadcrumbs';
import SportHeader from '../SportHeader';

import { TableList, Search, Content } from './styles';

import { Grid } from '../../styles/components';

class UserList extends Component {
  static propTypes = {
    getUserListRequest: PropTypes.func.isRequired,
    removeUser: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  componentDidMount() {
    const { getUserListRequest } = this.props;
    getUserListRequest();
 
  }

  componentDidUpdate(prevProps) {
    const {userList, getPostListRequest} = this.props;
    if (prevProps.userList.numberOfUsers !== userList.numberOfUsers) {
      getPostListRequest();
    }
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() });
  };

  confirmDelete = (user) => {
    const { removeUser } = this.props;
    confirmAlert({
      title: 'Are you sure you want to delete?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => removeUser(user),
        },
        {
          label: 'No',
        },
      ],
    });
  };

  render() {
    const { userList } = this.props;
    const { query } = this.state;

    console.log(this.props);

    let showingUsers;
    let posts;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingUsers = userList.data.filter(
        user => match.test(user.name) || match.test(user.username),
      );
    } else {
      showingUsers = userList.data;
      posts = userList.posts;
    }

    return (
      <Fragment>
        <Grid>
          <Header />
        </Grid>
        <Breadcrumbs />
        <SportHeader />
        <Content>
          <Grid>
            <span>Users</span>
            <span className="line" />
            <Search>
              <i className="fa fa-search" />
              <input
                placeholder="Filter table content"
                value={query}
                onChange={event => this.updateQuery(event.target.value)}
              />
            </Search>
          </Grid>
        </Content>
        <Grid>
          <TableList cellPadding={0} cellSpacing={0}>
            <thead>
              <th>Username</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>City</th>
              <th>Ride in group</th>
              <th>Day of the week</th>
              <th>Posts</th>
              <th>Albums</th>
              <th>Photos</th>
              <th />
            </thead>

            <tbody>
              {showingUsers
                .filter(user => user !== undefined)
                .map((user, index, array) => {
                  console.log(posts)

                  return (
                    <tr key={index}>
                      <td>{user.username}</td>
                      <td>{user.name}</td>
                      <td className="green-color">{user.email}</td>
                      <td className="green-color">{!user.address ? '' : user.address.city}</td>
                      <td>Always</td>
                      <td>Every day</td>
                      <td className="green-color">{posts[index]}</td>
                      <td className="green-color">2</td>
                      <td>39</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => {
                            this.confirmDelete(user);
                          }}
                        >
                          <i className="fa fa-trash" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </TableList>
        </Grid>
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
)(UserList);
