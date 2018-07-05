import React, { Component } from 'react';
import {
  BrowserRouter,
  Route, Switch,
} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import history from './history';

import NavBar   from './NavBar';
// routes (pages)
import Home     from './Home';
import Contact  from './Contact';
import About    from './About';
import NotFound from './NotFound';

// css
import './App.css';
import './pageAnimations.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter forceRefresh={ ! history }>
        <div className="App">
          <NavBar />
          <main>
            <Route
              render={ ({ location }) => {
                const { pathname } = location;
                return (
                  <TransitionGroup>
                    <CSSTransition
                      key={ pathname }
                      classNames="page"
                      appear
                      timeout={{ enter: 200, exit: 200 }}
                    >
                      <section className="page-main-inner">
                        <Route
                          location={ location }
                          render={ () => {
                            return (
                              <Switch>
                                <Route path="/" exact component={ Home } />
                                <Route path="/contact" component={ Contact } />
                                <Route path="/about" component={ About } />
                                <Route component={ NotFound } />
                              </Switch>
                            )
                          }}
                        />
                      </section>
                    </CSSTransition>
                  </TransitionGroup>
                )
              }}
            />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
