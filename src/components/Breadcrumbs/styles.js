import styled from 'styled-components';

export const Content = styled.div`
  background-color: #f5f5f5;
  ol {
    max-width: 1350px;
    margin: 0 auto;
    padding: 8px 0;
  }
  .breadcrumb > li + li:before {
    content: '\f105';
    font-family: FontAwesome;
    font-size: 24px;
    font-weight: 600;
    color: #999999;
    margin: 0 10px;
  }
  .breadcrumb > .active {
    font-size: 16px;
    color: #000;
  }
  li a {
    color: #32bca1;
    font-size: 16px;
  }
`;
