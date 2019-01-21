import styled from 'styled-components';

export const Content = styled.div`
  div.sport-header-wrapper {
    display: flex;
    align-items: center;
    div.sport-header-item {
      display: flex;
      align-items: center;

      i {
        font-size: 50px;
        color: #32bca1;
        margin-right: 30px;
      }

      div.sport-header-writing {
        span {
          display: block;
          &:first-child {
            color: #69676d;
            font-size: 18px;
          }
          &:last-child {
            color: #333333;
            font-size: 30px;
            font-weight: 600;
          }
        }
      }
      &:nth-child(2) {
        margin: 0 60px;
      }
    }
  }
`;

export const Wrapper = styled.div`
  background-color: #baebe1;
  display: flex;
  align-items: center;
  height: 160px;
`;
