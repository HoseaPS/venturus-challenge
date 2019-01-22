import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import serializeForm from 'form-serialize';
import { withRouter } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as NewUserActions } from '../../store/ducks/userList';

import Breadcrumbs from '../Breadcrumbs';

import { Form, Content, ContentTop } from './styles';

import { Grid } from '../../styles/components';

class NewUser extends Component {
  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  handleAddUser = (event) => {
    event.preventDefault();

    const values = serializeForm(event.target, { hash: true });

    const { addUserRequest, history } = this.props;

    addUserRequest(values);

    history.push('/users');

    this.resetForm(event);
  };

  resetForm = (event) => {
    event.target.reset();
  };

  render() {
    return (
      <Fragment>
        <Breadcrumbs />
        <Grid>
          <ContentTop>
            <div className="registration">
              <span>Registration</span>
              <span className="line" />
            </div>
            <div className="help-messages">
              <div className="help-message-wrapper">
                <span>Need help?</span>
                <div className="help-message-content">
                  <i className="far fa-life-ring" />
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt.
                  </span>
                </div>
              </div>
              <div className="help-message-wrapper">
                <span>Why register?</span>
                <div className="help-message-content">
                  <i className="fa fa-heartbeat" />
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt.
                  </span>
                </div>
              </div>
              <div className="help-message-wrapper">
                <span>What people are saying...</span>
                <div className="help-message-content">
                  <i className="fa fa-smile" />
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt.
                  </span>
                </div>
              </div>
            </div>
          </ContentTop>
          <Form onSubmit={this.handleAddUser}>
            <Content>
              <div>
                <label>
                  Username
                  <input name="user[id]" type="hidden" value={Math.random()} />
                  <input name="user[username]" type="text" required />
                </label>
                <label>
                  Name
                  <input name="user[name]" type="text" required />
                </label>
                <label>
                  E-mail
                  <input name="user[email]" type="email" required />
                </label>
              </div>
              <div>
                <label className="city">
                  City
                  <span>optional</span>
                  <input name="user[address][city]" type="text" />
                </label>
                <div className="radio-input">
                  <span>Ride in group?</span>
                  <label>
                    <input type="radio" name="rideType" value="Always" required />
                    <span className="checkmark" />
                    Always
                  </label>
                  <label>
                    <input type="radio" name="rideType" value="Sometimes" />
                    <span className="checkmark" />
                    Sometimes
                  </label>
                  <label>
                    <input type="radio" name="rideType" value="Never" />
                    <span className="checkmark" />
                    Never
                  </label>
                </div>
                <div className="checkbox-input">
                  <span>Days of the week</span>
                  <label>
                    <input type="checkbox" name="weekDay" value="Sun" />
                    <span className="checkmark" />
                    Sun
                  </label>
                  <label>
                    <input type="checkbox" name="weekDay" value="Mon" />
                    <span className="checkmark" />
                    Mon
                  </label>
                  <label>
                    <input type="checkbox" name="weekDay" value="Tue" />
                    <span className="checkmark" />
                    Tue
                  </label>
                  <label>
                    <input type="checkbox" name="weekDay" value="Wed" />
                    <span className="checkmark" />
                    Wed
                  </label>
                  <label>
                    <input type="checkbox" name="weekDay" value="Thu" />
                    <span className="checkmark" />
                    Thu
                  </label>
                  <label>
                    <input type="checkbox" name="weekDay" value="Fri" />
                    <span className="checkmark" />
                    Fri
                  </label>
                  <label>
                    <input type="checkbox" name="weekDay" value="Sat" />
                    <span className="checkmark" />
                    Sat
                  </label>
                </div>
              </div>
            </Content>
            <div className="form-buttons">
              <button type="submit">Save</button>
              <button type="reset">Discard</button>
            </div>
          </Form>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  newUser: state.newUser,
});

const mapDispatchToProps = dispatch => bindActionCreators(NewUserActions, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(NewUser),
);
