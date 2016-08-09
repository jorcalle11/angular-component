
const SpeakerListComponent = {
  bindings: {
    speakers: '<'
  },
  template: `
    <section class="container">
      <ul class="collection">
        <speaker-item ng-repeat="speaker in $ctrl.speakers" data="speaker">
      </ul>
    </section>
  `
}

export default SpeakerListComponent;
