import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteMember(member) {
      this.get('deleteMember')(member);
    }
  }
});
