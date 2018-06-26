import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteMember(member) {
      member.deleteRecord();
      member.save();
    }
  }
});
