import Component from '@ember/component';

export default Component.extend({
  classNames: ['team-filter'],
  value: '',
  type: '',
  options: null,

  init() {
    this._super(...arguments);
    this.get('filter')('', '').then(allResults => {
      this.set('results', allResults.results);
    });
    this.set('options', [
      { value: '', name: '--Please select an option--' },
      { value: 'firstName', name: 'First Name' },
      { value: 'lastName', name: 'Last Name' },
      { value: 'role', name: 'Role' }
    ]);
  },

  actions: {
    handleFilterEntry() {
      this._handleFilterEntry();
    },
    handlePropertyChange(value) {
      this.set('type', value);
      this._handleFilterEntry();
    }
  },
  _handleFilterEntry() {
    const filterInputValue = this.get('value');
    const filterAction = this.get('filter');
    const filterType = this.get('type');
    filterAction(filterInputValue, filterType).then(filterResults => {
      if (filterResults.query === this.get('value')) {
        this.set('results', filterResults.results);
      }
    });
  }
});
