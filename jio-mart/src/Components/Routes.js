import React from 'react';

import { Switch, Route } from 'react-router-dom';
import {
  SearchResultPage,
  ProductLayout,
  LandingPage,
  Checkout,
  LoginPage,
  SingleProduct,
  CatBarStandAlone
} from './index';
import ScrollToTop from './ScrollToTop';

function Routes({ popUpState }) {

  return (
    <div className='contentContainer'>
      <ScrollToTop />
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>

        <Route path='/search/:id' component={SearchResultPage} />
        <Route exact path='/fruits-vegetables'>
          <ProductLayout mainCat='fruits-vegetables' />
        </Route>
        <Route path='/fruits-vegetables/:id' component={ProductLayout} />

        <Route exact path='/dairy-bakery'>
          <ProductLayout mainCat='dairy-bakery' />
        </Route>
        <Route path='/dairy-bakery/:id' component={ProductLayout} />
        <Route exact path='/staples'>
          <ProductLayout mainCat='staples' />
        </Route>
        <Route path='/staples/:id' component={ProductLayout} />
        <Route exact path='/snacks-branded-foods'>
          <ProductLayout mainCat='snacks-branded-foods' />
        </Route>
        <Route path='/snacks-branded-foods/:id' component={ProductLayout} />
        <Route exact path='/beverages'>
          <ProductLayout mainCat='beverages' />
        </Route>
        <Route path='/beverages/:id' component={ProductLayout} />

        <Route exact path='/personal-care'>
          <ProductLayout mainCat='personal-care' />
        </Route>
        <Route path='/personal-care/:id' component={ProductLayout} />
        <Route exact path='/home-care'>
          <ProductLayout mainCat='home-care' />
        </Route>
        <Route path='/home-care/:id' component={ProductLayout} />
        <Route exact path='/baby-care'>
          <ProductLayout mainCat='baby-care' />
        </Route>
        <Route path='/baby-care/:id' component={ProductLayout} />
        <Route exact path='/home-kitchen'>
          <ProductLayout mainCat='home-kitchen' />
        </Route>
        <Route path='/home-kitchen/:id' component={ProductLayout} />
        <Route path='/groceries/:id' component={SingleProduct} />
        <Route path='/categories' component={CatBarStandAlone} />

        <Route exact path='/login'>
          <LoginPage/>
        </Route>
        <Route exact path='/checkout/:id' component={Checkout} />
      </Switch>
    </div>
  );
}
export default Routes;


