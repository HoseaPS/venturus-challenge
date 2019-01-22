import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0px;

  div.user {
    display: flex;
    font-size: 18px;
    align-items: center;
    justify-content: space-between;
    position: relative;

    div.user-icon {
      border-radius: 50%;
      border: 1px solid;
      box-sizing: border-box;
      height: 35px;
      width: 35px;
      justify-content: center;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    span {
      cursor: pointer;
      margin: 0 15px;
    }

    i {
      font-size: 26px;
      pointer-events: none;
    }
  }

  div.logo-wrapper {
    display: flex;
    align-items: center;

    div.logo-writing {
      font-size: 26px;
      font-weight: 600;
      margin-left: 15px;
    }

    div.logo-image {
      background-color: #32bca1;
      width: 50px;
      height: 50px;
      border-radius: 5px;
      position: relative;

      div.logo-icon {
        position: absolute;
        display: flex;
        border: 3px solid #fff;
        width: 30px;
        height: 30px;
        right: 0;
        left: 5px;
        bottom: 0;
        top: 2px;
        margin: auto;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        color: #fff;
      }
    }
  }
`;

export const Dropdown = styled.ul`
  border: 1px solid #999;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  width: 240px;
  position: absolute;
  background: #fff;
  bottom: -315px;
  right: 0;
  padding-top: 15px;

  li {
    list-style: none;

    &:last-child {
      border-top: 1px solid #ccc;
      margin-top: 10px;

      a {
        padding: 20px 20px;
      }
    }

    &:hover {
      background-color: #f3f3f3;
      a {
        color: #32bca1;
      }
    }
    a {
      color: #000;
      text-decoration: none;
      padding: 12px 20px;
      display: block;
    }
  }
`;
