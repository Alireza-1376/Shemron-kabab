import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux"
import store from "./redux/store"
import { BrowserRouter } from "react-router-dom"
const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
