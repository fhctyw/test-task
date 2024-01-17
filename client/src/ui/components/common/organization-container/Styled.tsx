import styled from 'styled-components';

export const CommonContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    margin: '20px auto',
    maxWidth: '1200px'
});

export const CommonHeader = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
});

export const CommonTitle = styled.h2({
    margin: 0,
    color: 'white',
    fontSize: '32px',
    lineHeight: '37px',
    fontWeight: '500',
});

export const ButtonContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
});
  
export const TextButton = styled.button({
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid #38444b',
    borderRadius: '20px',
    padding: '8px 24px 8px 24px',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px'
});
  
export const ArrowButton = styled.button({
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid #38444b',
    borderRadius: '50%',
    padding: '0',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    '&:disabled': {
        svg: {
            path: {
                stroke: '#38444b'
            }
        }
    }
});

export const LeftArrow = styled.svg.attrs({
    children: (
      <path d="M15 18l-6-6 6-6" fill="none" stroke="white" strokeWidth="2" />
    ),
})`
    width: 24px;
    height: 24px;
`;
  
export const RightArrow = styled(LeftArrow).attrs({
    children: (
      <path d="M9 6l6 6-6 6" fill="none" stroke="white" strokeWidth="2" />
    ),
})`

`;  

export const CarouselContainer = styled.div({
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto',
    gap: '24px',
});