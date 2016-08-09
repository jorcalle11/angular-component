const SpeakerDetailComponent = {
  bindings: {
    speaker: '<'
  },
  template: `
    <section class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <article class="card">
            <header class="card-image">
              <img ng-src="{{$ctrl.speaker.photo}}">
              <span class="card-title">{{$ctrl.speaker.name}}</span>
            </header>
            <main class="card-content">
              <p class="chip blue darken-1">{{$ctrl.speaker.complexity}}</p>
              <p>{{$ctrl.speaker.description}}</p>
            </main>
            <footer class="card-action">
              <a href="#/">Regresar</a>
            </footer>
          </article>
        </div>
      </div>
    </section>
  `
}

export default SpeakerDetailComponent;
