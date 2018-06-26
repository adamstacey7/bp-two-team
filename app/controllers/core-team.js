import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteMember(member) {
      this._deleteMember(member);
    }
  },
  _deleteMember(member) {
    member.deleteRecord();
    member.save();
  }
});
