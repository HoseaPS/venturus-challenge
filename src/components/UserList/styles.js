import styled from 'styled-components';
import 'font-awesome/css/font-awesome.css';

import { Grid } from '../../styles/components';
import { Spinner } from '../Loading/styles';

export const TableList = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 60px;

  thead th {
    font-size: 16px;
    color: #000;
    font-weight: 500;
    padding: 15px;
    border-bottom: 1px solid #000;
  }

  tbody {
    td {
      border: none;
      font-size: 16px;
      padding: 15px;
      line-height: 40px;

      &:last-child {
        padding: 0;

        button {
          visibility: hidden;
          border: none;
          background: transparent;
          font-size: 20px;
          cursor: pointer;
        }
      }

      &.green-color {
        color: #32bca1;
      }
    }

    tr {
      &:nth-child(even) {
        background: #f8f8f8;
      }
      &:hover {
        background: #e3e3e3;

        button {
          visibility: visible;
        }
      }
    }
  }
`;

export const TrWrapper = styled.tr`
  text-align: center;

  &.tr-wrapper:hover {
    background: none;
  }
  td {
    padding: 50px !important;
  }

  ${Spinner} {
    height: 24px;
  }
`;

export const Search = styled.div`
  width: 350px;
  border: 3px solid #f1f1f1;
  border-radius: 5px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  color: #999999;

  i {
    margin-right: 10px;
  }

  input {
    border: none;
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  margin-top: 40px;

  ${Grid} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  span:not(.line) {
    font-size: 46px;
    font-weight: 300;
  }

  span.line {
    width: 770px;
    display: inline-block;
    background: #f1f1f1;
    height: 3px;
  }
`;
