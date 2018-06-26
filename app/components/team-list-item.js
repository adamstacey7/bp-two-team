import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteMember(member) {
      console.log(this.get('deleteMember'));
      this.get('deleteMember')(member);
    }
  }
});
