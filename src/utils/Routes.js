import { Route } from "react-router-dom";
import MoonVest from '../MoonVest';
import Search from '../Search';
import ItemDetail from '../ItemDetail';
import UserList from '../UserList';


const Routes = (props) => {
    return(
        <>
            <Route exact path="/" component={MoonVest}/>
            <Route path="/search/:query" component={Search}/>
            <Route path="/nft/:collectionID/:tokenID" component={ItemDetail}/>
            <Route path="/users" component={UserList}/>
        </>
    );
}

export default Routes;