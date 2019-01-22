import React from 'react';
import { withLastLocation } from 'react-router-last-location';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { Content } from './styles';

const capitalizeLastWord = (message) => {
  let capitalized = message.split('/');
  capitalized = capitalized[capitalized.length - 1];
  capitalized = capitalized[0].toUpperCase() + capitalized.substr(1);
  return capitalized;
};

const Breadcrumbs = (props) => {
  const { lastLocation } = props;
  const { location } = props;

  console.log(lastLocation);

  const currentPage = capitalizeLastWord(location.pathname);

  let previousPage = '';
  if (lastLocation !== null && lastLocation.pathname !== '/') {
    previousPage = capitalizeLastWord(lastLocation.pathname);
  }

  return (
    <Content>
      <Breadcrumb>
        <Breadcrumb.Item className="home" href="#">
          <i className="fas fa-home" />
        </Breadcrumb.Item>
        {lastLocation !== null && lastLocation.pathname !== '/' ? (
          <Breadcrumb.Item>
            <Link to={lastLocation.pathname}>{previousPage}</Link>
          </Breadcrumb.Item>
        ) : (
          ''
        )}
        <Breadcrumb.Item active>{currentPage}</Breadcrumb.Item>
      </Breadcrumb>
    </Content>
  );
};

Breadcrumbs.propTypes = {
  lastLocation: PropTypes.oneOf([
    null,
    PropTypes.shape({
      pathname: PropTypes.string,
    }),
  ]),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(withLastLocation(Breadcrumbs));
