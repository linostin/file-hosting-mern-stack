import styled, { css } from "styled-components/macro";

export const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 2rem;
`;

export const Checkbox = styled.span`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span``;

// Hide the browser's default checkbox
export const CheckboxInput = styled.input`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: 0;
  cursor: inherit;
`;

// Create a custom checkbox
export const CheckboxControl = styled.span`
  display: inline-flex;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 0.25em;
  border: 0.1em solid currentColor;
  cursor: inherit;
`;
