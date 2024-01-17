import styled from "styled-components";

type PackageItemContainerProps = {
    color: string;
}

export const PackageItemContainer = styled.div<PackageItemContainerProps>(({color}) => ({
    border: `1px solid ${color}`,
    borderRadius: '10px',
    maxWidth: 'calc(25% - 72px)',
    minWidth: 'calc(25% - 72px)',
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    gap: '20px',

    padding: '24px',
    color: 'white',
    overflow: 'auto',

    "@media (max-width: 809px)": {
        maxWidth: '50%',
        minWidth: '50%',
    }
}));

export const PackageTextContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left'
});

export const PackageTitle = styled.h2({
    fontSize: '24px',
    lineHeight: '28px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
});

export const PackageDescription = styled.p({
    fontSize: '12px',
    color: '#ababab',
    lineHeight: '16px',
    fontWeight: '400',
});
  
export const PackagePrice = styled.p({
    fontWeight: '400',
    fontSize: '36px',
    lineHeight: '44px'
});


export const PackageGetButton = styled.button<PackageItemContainerProps>(({color}) => ({
    backgroundColor: color,
    color: 'white',
    fontSize: '14px',
    lineHeight: '16px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
}));
  
export const PackageCategories = styled.div({
    display: 'flex',
    gap: '4px'
});

export const PackageCategoriesInner = styled.div({
    borderRadius: '5px',
    background: '#FFFFFF1A',
    color: '#FFFFFF80',
    padding: '4px 8px 4px 8px'
});