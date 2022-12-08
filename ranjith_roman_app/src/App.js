import Message from './Components/Message'
import Navbar from './Navbar/navbar'
import Product from './Product/product1'
import Digital from './Digital/digital'
import Login from './Loign/login'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
let App = () => {
    return <div>
        <Router>
            <Navbar />
            <Switch>
            <Route path="/msg" component={Message} />
                <Route path="/product" component={Product} />
                <Route path="/digital" component={Digital} />
                <Route path="/formhandling" component={Login} />
            </Switch>
            {/* <Message /> */}
            {/* <Navbar /> */}
            {/* <Product/> */}
            {/* <Digital/> */}
            {/* <Login/> */}


        </Router>
    </div>
}
export default App