import styled from 'styled-components';

export const Form = styled.form`
  input[type='text'],
  input[type='email'] {
    display: block;
    width: 550px;
    border-radius: 10px;
    border: 2px solid #cfcfcf;
    height: 45px;
    margin-top: 5px;
    box-sizing: border-box;
    padding-left: 10px;
    font-family: 'Roboto';
    font-size: 18px;

    &:hover,
    &:focus {
      border-color: #32bca1;
    }
  }

  div.form-buttons button {
    cursor: pointer;

    &:first-child {
      background-color: #32bca1;
      border: none;
      width: 90px;
      height: 40px;
      font-size: 16px;
      color: #fff;
      border-radius: 10px;
      margin-left: 50px;
    }
    &:last-child {
      color: #707173;
      background-color: #e3e3e3;
      border: none;
      width: 110px;
      height: 40px;
      font-size: 16px;
      border-radius: 10px;
      margin-left: 10px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;

  > div {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 35px;
      font-weight: 500;
      text-indent: 2px;
      font-size: 18px;

      &.city {
        position: relative;

        span {
          position: absolute;
          right: 65px;
          top: 5px;
          font-size: 14px;
          color: #9c9b9a;
          font-weight: 400;
        }
      }
    }

    div.radio-input {
      label {
        padding-left: 40px;
        position: relative;
        font-weight: 400;
        display: inline-flex;
        height: 40px;
        align-items: center;
        margin-right: 60px;
      }
      span:not(.checkmark) {
        display: block;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 10px;
      }
      input[type='radio'] {
        position: absolute;
        height: 1px;
        width: 1px;
        opacity: 0;
        z-index: -9;
        bottom: 0;

        &:checked ~ .checkmark {
          background-color: #fff;
          border-color: #32bca1;
          &:after {
            border-radius: 50%;
            background: #000;
            content: '';
            height: 15px;
            width: 15px;
            display: block;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            position: absolute;
          }
        }
        &:hover ~ .checkmark {
          border-color: #32bca1;
        }
      }
      .checkmark {
        position: absolute;
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
        left: 0;
        height: 30px;
        width: 30px;
        background-color: #fff;
        border: 2px solid #cfcfcf;
        border-radius: 50%;
      }
    }

    div.checkbox-input {
      label {
        padding-left: 40px;
        position: relative;
        font-weight: 400;
        display: inline-flex;
        height: 40px;
        align-items: center;
        margin-right: 15px;
      }
      span:not(.checkmark) {
        display: block;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 10px;
      }
      input[type='checkbox'] {
        position: absolute;
        height: 1px;
        left: -99999px;
        width: 1px;
        opacity: 0;

        &:checked ~ .checkmark {
          background-color: #fff;
          border-color: #32bca1;
          &:after {
            left: 0;
            top: -5px;
            bottom: 0;
            right: 0;
            width: 8px;
            height: 14px;
            border: solid #000;
            border-width: 0 4px 4px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            content: '';
            display: block;
            position: absolute;
            margin: auto;
          }
        }
        &:hover ~ .checkmark {
          border-color: #32bca1;
        }
      }
      .checkmark {
        position: absolute;
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
        left: 0;
        height: 30px;
        width: 30px;
        background-color: #fff;
        border: 2px solid #cfcfcf;
        border-radius: 5px;
      }
    }
  }
`;

export const ContentTop = styled.div`
  position: relative;
  padding-bottom: 60px;
  margin-bottom: 60px;
  margin-top: 40px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    width: 1250px;
    height: 2px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #b9b9b9;
  }

  .registration {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    span {
      font-size: 46px;
      font-weight: 300;
      &:first-child {
        flex: 1;
      }
      &:last-child {
        flex: 3;
        background: #f1f1f1;
        height: 3px;
      }
    }
  }
  .help-messages {
    display: flex;
  }
  .help-message-wrapper {
    flex: 1;

    > span {
      color: #32bca1;
      font-size: 28px;
      font-weight: 400;
      display: block;
      margin-bottom: 30px;
    }

    .help-message-content {
      display: flex;
      align-items: center;

      span {
        font-size: 18px;
      }

      i {
        font-size: 74px;
        color: #32bca1;
        margin-right: 20px;
      }
    }

    &:nth-child(2) {
      margin: 0 50px;
    }
  }
`;
