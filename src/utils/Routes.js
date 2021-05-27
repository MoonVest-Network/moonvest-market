import { Route } from "react-router-dom";
import MoonVest from '../MoonVest';
import ItemDetail from '../ItemDetail';
import UserList from '../UserList';

const Routes = (props) => {
    return(
        <>
            <Route exact path="/" component={MoonVest}/>
            <Route path="/item-detail" component={ItemDetail}/>
            <Route path="/users" component={UserList}/>
        </>
    );
}

export default Routes;