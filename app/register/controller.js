import Ember from 'ember';

export default Ember.Controller.extend({
  createUser(formValues) {
    const user = this.store.createRecord(`end-user`, formValues);

    user.save()
      .then(() => {
        this.transitionToRoute(`index`);
      })
      .catch(() => {

      });
  },
});
