import { ButtonLink } from "../../../ButtonLink";
import { githubUsername } from "../../githubUserName";
import { Header, Paragraph, Wrapper } from "./styled";
import { ReactComponent as WarningIcon } from "./warning.svg";

export const ErrorBox = () => (
    <Wrapper>
        <WarningIcon />
        <Header>Ooops! Somthing went&nbsp;wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github&nbps;projects.<br />
            You can check them directly&nbps;on&nbps;Github.
        </Paragraph>
        <ButtonLink href={`https://github.com/IhorDomnich/${githubUsername}`} target="_blank">Go to Github</ButtonLink>
    </Wrapper>
);