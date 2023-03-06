import ihorDomnichProfile from "./profile.jpg";
import { Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper } from "./styled";
import { email } from "../email";
 
export const MainInformation = () => (
    <Wrapper>
        <Avatar src={ihorDomnichProfile} alt="Ihor Domnich" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Ihor Domnich</Name>
            <Summary>
                Larem sadfasfhaf djfmsdfmnb dhfmhsdfjhsjdhf skjdfhjksdhfkjdsgh kjsdghsjkdghjsdkgh
            </Summary>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
                Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);

