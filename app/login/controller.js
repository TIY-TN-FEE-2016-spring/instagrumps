import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  login({ email, password }) {
    this.get(`session`).authenticate(`authenticator:application`, email, password)
      .then(() => {
        debugger;
      })
      .catch(() => {

      });
  },


  twitter() {
    this.get(`session`).authenticate(`authenticator:torii`, `twitter`)
      .then((x) => {
        console.log(x)
        debugger
      })
      .catch((x) => {
        console.log(x)
        debugger;
      })
  },
});
