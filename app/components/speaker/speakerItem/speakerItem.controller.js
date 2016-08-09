class SpeakerItemController {
  constructor() {}

  like(speaker) {
    Materialize.toast(`Diste Like a ${speaker.name}`, 4000, 'rounded');
  }
}

export default SpeakerItemController;
