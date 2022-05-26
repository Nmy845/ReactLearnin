import Main from '../pages/main-page/main/main';
import { AppRoute } from '../../const';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Guitar from '../pages/guitar-page/guitar/guitar-page';
import NotFound from '../pages/not-found/not-found';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main/>
        </Route>
        <Route path={AppRoute.Guitar} exact>
          <Guitar/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
