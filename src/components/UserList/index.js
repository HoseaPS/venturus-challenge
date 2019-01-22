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

import {
  TableList, Search, Content, TrWrapper,
} from './styles';

import { Grid } from '../../styles/components';

import Loading from '../Loading';

class UserList extends Component {
  static propTypes = {
    getUserListRequest: PropTypes.func.isRequired,
    removeUser: PropTypes.func.isRequired,
    clearBase: PropTypes.func.isRequired,
    userList: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          albums: PropTypes.number,
          photos: PropTypes.number,
          posts: PropTypes.number,
          user: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            username: PropTypes.string,
            email: PropTypes.string,
            address: PropTypes.shape({
              city: PropTypes.string,
            }),
          }),
        }),
      ),
      error: PropTypes.oneOf([null, PropTypes.string]),
      newUsers: PropTypes.arrayOf(PropTypes.object),
      loading: PropTypes.bool,
      photos: PropTypes.number,
    }).isRequired,
  };

  state = {
    query: '',
  };

  componentDidMount() {
    const { getUserListRequest } = this.props;
    getUserListRequest();
  }

  componentWillUnmount() {
    const { clearBase } = this.props;
    clearBase();
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() });
  };

  randomDays = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const randomDay = daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)];
    return randomDay;
  };

  randomRideType = () => {
    const typesOfRide = ['Always', 'Sometimes', 'Never'];
    const randomRide = typesOfRide[Math.floor(Math.random() * typesOfRide.length)];
    return randomRide;
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

    let showingUsers;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingUsers = userList.data.filter(
        user => match.test(user.user.name) || match.test(user.user.username),
      );
    } else {
      showingUsers = userList.data;
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
              {userList.loading && (
                <TrWrapper className="tr-wrapper">
                  <td colSpan="9">
                    <Loading />
                  </td>
                </TrWrapper>
              )}
              {!!userList.error && (
                <TrWrapper className="tr-wrapper">
                  <td colSpan="9">
                    <span style={{ color: 'red' }}>{userList.error}</span>
                  </td>
                </TrWrapper>
              )}
              {showingUsers.map((user) => {
                let stringDays;
                if (user.weekDay !== undefined && user.weekDay.constructor !== String) {
                  stringDays = user.weekDay.join(', ');
                } else {
                  stringDays = user.weekDay;
                }
                return (
                  <tr key={user.user.id}>
                    <td>{user.user.username}</td>
                    <td>{user.user.name}</td>
                    <td className="green-color">{user.user.email}</td>
                    <td className="green-color">
                      {!user.user.address ? '' : user.user.address.city}
                    </td>
                    <td>{user.rideType === undefined ? this.randomRideType() : user.rideType}</td>
                    <td>{user.weekDay === undefined ? (userList.newUsers.length <= 0 ? this.randomDays() : '') : stringDays}</td>
                    <td className="green-color">{user.posts}</td>
                    <td className="green-color">{user.albums}</td>
                    <td>{user.photos}</td>
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
