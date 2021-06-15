import styled from 'styled-components';
import { StyledForm, StyledListContainer, StyledItem } from '../SharedStyles/SharedStyles';

export const StyledReplyForm = styled(StyledForm)`
    background: ${({ theme }) => theme.colors.thirdColor};
    border: none;
    border-radius: 0px 0 5px 5px;
    margin-bottom: 10px;
    width: 50%;
    margin-top: 0;

    h3 {
        margin-top: 20px;
    }

    input {
        background: ${({ theme }) => theme.colors.thirdColor};
    }

    textarea {
        background: ${({ theme }) => theme.colors.thirdColor};
        padding: 5px;
        border: 2px solid white;
        border-radius: 5px;
        width: 300px;
        color: white;

        :focus {
            outline: none;
        }
        
        ::placeholder {
            color: white;
            opacity: 0.5;
        }
    }
`

export const StyledReplyListContainer= styled.div`
    width: 50%;
`

export const StyledReplyItem= styled(StyledItem)`
    background: ${({ theme }) => theme.colors.fourthColor};
    margin-bottom: 10px;
    height: auto;
    width: 100%;
    display: block;

    p {
        width: auto;
    }
`