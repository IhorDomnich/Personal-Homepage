import { StyledSpinner, Wrapper } from "./styled";

export const Loading = () => (
    <Wrapper>
        Please wait, projects are&nbps;being&nbps;loaded...
        <StyledSpinner />
    </Wrapper>
);