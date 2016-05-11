import Ember from 'ember';

export default Ember.Controller.extend({
  savePost(formValues) {
    const post = this.store.createRecord(`post`, formValues);

    post.save().then(() => {
      this.transitionToRoute(`dashboard.posts.index`);
    });
  },
});
