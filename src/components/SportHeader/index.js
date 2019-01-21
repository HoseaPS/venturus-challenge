import React from 'react';

import { Content, Wrapper } from './styles';
import { Grid } from '../../styles/components';

const SportHeader = () => (
  <Wrapper>
    <Grid>
      <Content>
        <div className="sport-header-wrapper">
          <div className="sport-header-item">
            <i className="fas fa-puzzle-piece" />
            <div className="sport-header-writing">
              <span>Sport type</span>
              <span>Cycling</span>
            </div>
          </div>
          <div className="sport-header-item">
            <i className="fas fa-trophy" />
            <div className="sport-header-writing">
              <span>Mode</span>
              <span>Advanced</span>
            </div>
          </div>
          <div className="sport-header-item">
            <i className="fas fa-map-signs" />
            <div className="sport-header-writing">
              <span>Route</span>
              <span>30 miles</span>
            </div>
          </div>
        </div>
      </Content>
    </Grid>
  </Wrapper>
);

export default SportHeader;
