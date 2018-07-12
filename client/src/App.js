import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemsList from './components/ItemsList'
import ItemsNew from './components/ItemsNew'
import ItemsShow from './components/ItemsShow'
import ItemsEdit from './components/ItemsEdit'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from './components/Navbar'
import * as actions from './actions/itemActions';
class App extends Component {

  componentDidMount() {
    const { actions } = this.props
      actions.fetchItems();
  }


  render() {
    return (
      <div className="App">
          <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" render={() => <h3>Welcome to the Shopping List App</h3>} />
              <Route exact path={`/items/new`} component={ItemsNew} />
              <Route exact path={`/items/:itemId/edit`} component={ItemsEdit}/>
              <Route exact path={`/items/:itemId`} component={ItemsShow}/>
              <Route exact path="/items" component={ItemsList} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
