const { default: styled } = require('styled-components');

const ListStyled = styled('ul')(() => ({
  margin: '0 auto',
  width: 500,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
}));

export default ListStyled;
