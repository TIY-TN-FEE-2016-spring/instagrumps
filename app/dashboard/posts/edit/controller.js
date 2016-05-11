import Ember from 'ember';

export default Ember.Controller.extend({
  savePost(post, formValues) {
    post.setProperties(formValues);

    post.save().then(() => {
      this.transitionToRoute(`dashboard.posts.index`);
    });
  },
});
