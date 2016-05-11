import Ember from 'ember';

export default Ember.Controller.extend({
  delete(post) {
    if (confirm(`Are you sure you want to delete that?`)) {
      post.destroyRecord();
    }
  },
});
