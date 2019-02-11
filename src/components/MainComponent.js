import React, { Component } from 'react';
//import logo from './logo.svg';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import {Switch,Redirect,Route} from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish:null,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }
  onDishSelect(dishID){
    this.setState({selectedDish:dishID});
}
  render() {

    const HomePage=()=>{
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
      );
    }
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes} />}/>
        <Route exact path='/contactus' component={Contact} />
        <Redirect to='/home' />
         </Switch>
        {/* <Menu dishes={this.state.dishes} onClick={(dishID)=>(this.onDishSelect(dishID))} />
        <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]} /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;