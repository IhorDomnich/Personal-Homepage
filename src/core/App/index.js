import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PersonalHomepage } from '../../features/PersonalHomepage';
import { GlabalStyle } from './GlobalStyle';
import { themeDark, themeLight } from "./theme";
import { Normalize } from "slyled-normalize";
import { selectIsDarkTheme } from '../../common/theameSlice';

export const App = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
            <Normalize />
            <GlabalStyle />
            <PersonalHomepage />
        </ThemeProvider>
    );
}

export default App;