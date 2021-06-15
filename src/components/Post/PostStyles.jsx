import styled from 'styled-components';
import { StyledItem } from '../SharedStyles/SharedStyles';

export const StyledPostItem = styled(StyledItem)`
    background: ${({ theme }) => theme.colors.thirdColor};
`

export const StyledPostDetailContainer = styled.div`
    display: flex;
    justify-content: center;
    // flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const StyledDetail = styled.div`
   background: ${({ theme }) => theme.colors.thirdColor};
   border-radius: 5px 5px 0 0;
   padding: 10px;
   width: 50%;
`

export const StyledAuthor = styled.div`
    border: 2px solid ${({ theme }) => theme.colors.mainDarkColor};
    border-radius: 5px;
    padding: 5px;
    margin-top: 20px;
    margin-bottom: 10px;
    display: inline-block;

    h3, p {
        color: ${({ theme }) => theme.colors.mainDarkColor};
    }
    
`