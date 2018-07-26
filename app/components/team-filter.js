import Component from '@ember/component';

export default Component.extend({
  classNames: ['team-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then(results => this.set('results', results));
  },

  actions: {
    handleFilterEntry() {
      const filterInputValue = this.get('value');
      const filterAction = this.get('filter');
      filterAction(filterInputValue).then(filterResults =>
        this.set('results', filterResults)
      );
    }
  }
});
