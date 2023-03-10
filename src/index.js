import { StrictMode } from "react";
import { Provider } from "react-redux";
import App from './core/App';
import * as serviceWorker from './serviceWorker';
import store from "./core/store";

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about servise workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();