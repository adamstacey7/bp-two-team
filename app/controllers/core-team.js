import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteMember(member) {
      this._deleteMember(member);
    },
    setConfirmationDetails(member) {
      this._setConfirmationDetails(member);
      this._toggleConfirmation();
    },
    toggleConfirmation() {
      this._toggleConfirmation();
    }
  },
  confirmation: false,
  confirmationMessage: '',
  _deleteMember(member) {
    member.deleteRecord();
    member.save();
  },
  selectedMember: null,
  _setConfirmationDetails(member) {
    this.set(
      'confirmationMessage',
      `Are you sure you want to delete member ${member.firstName} ${
        member.lastName
      }?`
    );
    this.set('selectedMember', [member]);
  },
  _toggleConfirmation() {
    this.toggleProperty('confirmation');
  }
});
