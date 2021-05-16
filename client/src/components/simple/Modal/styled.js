import { keyframes } from "@emotion/react";
import styled, { css } from "styled-components/macro";

const appear = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slide = keyframes`
from {
    transform: translateY(-150px);
  }
  to {
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Dialog = styled.div`
  width: 100%;
  max-width: 550px;
  background: white;
  position: relative;
  margin: 0 20px;
  max-height: calc(100vh - 40px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #dbdbdb;
  justify-content: space-between;
`;

export const Close = styled.div`
cursor: pointer;
`;

export const Title = styled.div``;

export const Body = styled.div`
  overflow: auto;
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;
