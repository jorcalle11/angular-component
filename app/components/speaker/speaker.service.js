class SpeakerService {
  constructor($http) {
    this.$http = $http;
    this.url = `http://localhost:3000/db/`;
  }

  getAll() {
    return this.$http.get(`${this.url}speakers.json`).then((response) => response.data );
  }

  get(id) {
    return this.$http.get(`${this.url}${id}.json`).then((response) => response.data );
  }

}

SpeakerService.$inject = ['$http'];

export default SpeakerService;
