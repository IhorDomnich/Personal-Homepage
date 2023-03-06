import { createGlobalStyle } from "styled-components";

export const GlabalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        transition: background 0.3s;
        background: ${({ theme }) => theme.color.site.background};
        color: ${({ theme }) => theme.color.site.text};
        font-size: 18px;
        letter-spacing: 0.05em;
        word-break: break-word;
        overflow-y: scroll;
        padding-bottom: 108px;

        @media(max-wight: ${({ theme }) => theme.breackpoints.mobileMax}px) {
            padding-bottom: 32px;
        }
    }
`;