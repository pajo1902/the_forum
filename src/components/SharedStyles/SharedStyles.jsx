import styled from 'styled-components';

export const StyledCenterContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const StyledButton = styled.button`
    border: 2px solid white;
    border-radius: 5px;
    padding: 5px;
    
    &:hover{
        cursor: pointer;
        background: ${({ theme }) => theme.colors.fourthColor};
        border-color: ${({ theme }) => theme.colors.fourthColor};
    }

    :focus {
        outline: none;
    }
`

export const StyledForm = styled.div`
    width: 30%;
    border: 2px solid white;
    min-width: 380px;
    margin-top: 20px;
    padding: 10px;
    font-size: 1.1em;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.mainDarkColor};

    @media(max-width: 700px) {
        width: 100%;
    }

    li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 5px;
    }

    label {
        color: white;
        margin-right: 5px;
    }

    input {
        border: 2px solid white;
        color: white;
        border-radius: 5px;
        padding: 5px;
        background: ${({ theme }) => theme.colors.mainDarkColor};

        ::placeholder {
            opacity: 0.5;
            color: white;
        }

        :focus {
            outline: none;
        }
    }

    select {
        border: 2px solid white;
        border-radius: 5px;
        padding: 5px;
        outline: none;
    }

    ul > li > label {
        flex: 1 0 120px;
        padding: 5px;
        max-width: 220px;
    }
`;

export const StyledListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    width: 100%;
    grid-gap: 10px;
    margin-top: 20px;
`

export const StyledItem = styled.div`
    height: 150px; 
    background: green;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 10px;

    p, h3 {
        text-overflow: ellipsis;
        overflow: hidden; 
        width: 250px; 
        white-space: nowrap;
    }
`;