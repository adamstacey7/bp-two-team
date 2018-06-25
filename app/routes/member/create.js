import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  application: service(),
  init() {
    this._super(...arguments);
    this.get('application').setHeaderTitle('Create Member');
  },
  actions: {
    submitTwo(formData) {
      const member = this.get('store').createRecord('member', {
        firstName: formData.firstName,
        lastName: formData.lastName
      });

      member.save().then(savedMember => {
        const experience = this.get('store')
          .createRecord('experience', {
            details: formData.details,
            industry: formData.industry,
            member: savedMember
          });

        const education = this.get('store')
          .createRecord('education', {
            title: formData.title,
            grade: formData.grade,
            member: savedMember
          });

        const p = RSVP.Promise.all([
          experience.save(),
          education.save()
        ]);

        p.then(() => 
          this.transitionTo(`/member/${member.get('id')}`)
        );
      });
    }
  }
});
