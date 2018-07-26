import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  application: service(),
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
    },
    filterTeam(param, type) {
      let filteredResults;
      if (param !== '' && type !== '')
        filteredResults = this.get('store')
          .query('member', { [type]: param })
          .then(results => ({ query: param, results }));
      else
        filteredResults = this.get('store')
          .findAll('member')
          .then(results => ({ query: param, results }));
      return filteredResults;
    }
  },
  confirmation: false,
  confirmationMessage: '',
  _deleteMember(member) {
    member.experiences.forEach(experience => {
      experience.deleteRecord();
      experience.save();
    });
    member.educations.forEach(education => {
      education.deleteRecord();
      education.save();
    });
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
