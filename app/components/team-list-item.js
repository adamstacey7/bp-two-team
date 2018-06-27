import Component from '@ember/component';

export default Component.extend({
  actions: {
    showConfirmationMessage(member) {
      this.get('toggleConfirmation')(member);
    }
  }
});
