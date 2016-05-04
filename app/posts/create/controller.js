import Ember from 'ember';

export default Ember.Controller.extend({
  save(data) {
    this.store.createRecord(`post`, data).save().then(() => {
      this.transitionToRoute(`posts.index`);
    });
  },
});
