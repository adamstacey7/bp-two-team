import Component from '@ember/component';

export default Component.extend({
  showConfirmation: false,
  actions: {
    deleteMember(member) {
      this.get('deleteMember')(member);
    },
    showConfirmationMessage() {
      this.toggleProperty('showConfirmation');
      console.log(this.showConfirmation);
    }
  }
});
