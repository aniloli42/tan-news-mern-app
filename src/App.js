import './App.css'
import { Header, Footer, Sidebar } from './layouts'
import { Route, Switch } from 'react-router-dom'
import { GlobalProvider } from './context/globalContext'
import Category from './pages/category/Category'
import Error from './pages/error/Error'

function App() {
	return (
		<>
			<GlobalProvider>
				<Header title="TAN NEWS" />
				<div className="main-container">
					<Switch>
						<Route exact path="/">
							<Category key="general" topics="general" />
						</Route>
						<Route exact path="/business">
							<Category key="business" topics="business" />
						</Route>
						<Route exact path="/health">
							<Category key="health" topics="health" />
						</Route>
						<Route exact path="/science">
							<Category key="science" topics="science" />
						</Route>
						<Route exact path="/entertainment">
							<Category key="entertainment" topics="entertainment" />
						</Route>
						<Route exact path="/technology">
							<Category key="technology" topics="technology" />
						</Route>
						<Route exact path="/sports">
							<Category key="sports" topics="sports" />
						</Route>
						<Route exact path="*">
							<Error />
						</Route>
					</Switch>
					<Sidebar />
				</div>
				<Footer />
			</GlobalProvider>
		</>
	)
}

export default App
