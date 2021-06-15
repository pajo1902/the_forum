import styled from 'styled-components';

export const StyledNav = styled.div`
    width: 100%;
    min-width: 420px;
    padding: 10px 0;
    // margin-bottom: 40px;

    @media(max-width: 700px) {
        flex-direction: column;
        img {
          display: none;
        }

        .userInfo li p {
            display: none;
        }
    }

    ul {
        width: 100%;
        display: flex;
        background: ${({ theme }) => theme.colors.mainDarkColor};
        align-items: center;
    }

    .nav {
        align-items: center;
        width: 50%;
        display: flex;
        // justify-content: flex-start;

        li {
            margin-right: 10px;
        }

        img {
            width: 100px;
            margin-right: 20px;
        }
    }

    .userInfo {
        align-items: center;
        width: 50%;
        display: flex;
        justify-content: flex-end;

        li {
            display: flex;
            p {
                margin-right: 10px;
            }
        }
    }
`