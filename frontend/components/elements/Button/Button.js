import styled from 'styled-components';

const button = {
  width: '0.25em',
  borderOpacity: 0.6,
  colorText: '#FFFFFF',
  bgColor: 'rgba(0, 0, 0, 0.2)',
  hoverColor: '#0B0A0A',
  hoverBgColor: '#FFFFFF',
  disabledBgColor: 'rgba(0, 0, 0, 0.2)',
  disabledColor: 'rgba(255,255,255, 0.7)',
  borderColor: '255, 255, 255',
};

const StyledButton = styled('button')`
  position: relative;
  margin: 1rem;
  border: none;
  padding: 0.6em 1.4em;
  background-color: ${button.bgColor};
  color: ${button.colorText};
  box-shadow:
    -${button.width} 0 0 rgba(${button.borderColor}, ${button.borderOpacity}),
    ${button.width} 0 0 rgba(${button.borderColor}, ${button.borderOpacity}),
    0 ${button.width}  0 rgba(${button.borderColor}, ${button.borderOpacity}),
    0 -${button.width} 0 rgba(${button.borderColor}, ${button.borderOpacity});
  font-size: 1rem;
  transition: 0.1s ease-in-out;
  transition-property: color, background-color;
  font-family: 'Miners', serif;

  &:hover {
    background-color: ${button.hoverBgColor};
    color: ${button.hoverColor};
  }

  &:disabled {
    background-color: ${button.disabledBgColor};
    color: ${button.disabledColor};
  }
`;

export default StyledButton;
