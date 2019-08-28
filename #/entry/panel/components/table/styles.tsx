import { css } from 'emotion';

export const ThStyles = css`
  border-bottom: 1px solid rgb(205, 205, 205);
  border-left: 1px solid rgb(205, 205, 205);
  border-top: 1px solid rgb(205, 205, 205);
  padding: 4px 4px;
  height: 18px;
  text-align: left;
  background-color: #f3f3f3;
  font-size: 12px;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  position: sticky;
  top: 0;

  &:last-of-type {
    border-right: 1px solid rgb(205, 205, 205);
  }
`;

export const TdStyles = css`
  border-left: 1px solid #e1e1e1;
  padding: 4px 4px;
  text-align: left;
  font-size: 12px;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;

  &:last-of-type {
    border-right: 1px solid #e1e1e1;
  }
`;

export const TBodyRowStyles = css`
  &:nth-of-type(odd) {
    background-color: rgb(245, 245, 245);
    &:hover {
      background-color: rgb(238, 243, 250);
    }
  }
  &:nth-of-type(even) {
    background-color: rgb(255, 255, 255);
    &:hover {
      background-color: rgb(241, 246, 253);
    }
  }
`;
