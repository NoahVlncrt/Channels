import {Template} from 'meteor/templating';
import 'floatingFab.html'; 

import floatingFab './components/floatingFab.jsx';

Template.floatingFab.helpers({
  floatingFab(){
    return floatingFab
  }
})