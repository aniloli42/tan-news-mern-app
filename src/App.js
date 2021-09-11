import "./App.css"
import Header from "./components/Header"
import { Route, Switch } from "react-router-dom"
import Footer from "./components/Footer"
import Posts from "./components/Posts"
import Sidebar from "./components/Sidebar"
import Error from "./components/Error"

function App() {
  return (
    <>
      <Header title="TAN NEWS" />
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/business">
            <Posts key="business" category="business" />
          </Route>
          <Route exact path="/health">
            <Posts key="health" category="health" />
          </Route>
          <Route exact path="/science">
            <Posts key="science" category="science" />
          </Route>
          <Route exact path="/entertainment">
            <Posts key="entertainment" category="entertainment" />
          </Route>
          <Route exact path="/technology">
            <Posts key="technology" category="technology" />
          </Route>
          <Route exact path="/sports">
            <Posts key="sports" category="sports" />
          </Route>
          <Route exact component={Error} />
        </Switch>
        <Sidebar />
      </div>
      <Footer />
    </>
  )
}

export default App
