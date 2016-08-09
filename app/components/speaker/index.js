import angular from 'angular';
import SpeakerService from './speaker.service';
import SpeakerConfig from './speaker.config';
import SpeakerListComponent from './speakerList/speakerList.component';
import SpeakerItemComponent from './speakerItem/speakerItem.component';
import SpeakerDetailComponent from './speakerDetail/speakerDetail.component';

const speakers = angular
  .module('app.speakers',[])
  .config(SpeakerConfig)
  .service('SpeakerService',SpeakerService)
  .component('speakerList', SpeakerListComponent)
  .component('speakerItem', SpeakerItemComponent)
  .component('speakerDetail', SpeakerDetailComponent)
  .name;

export default speakers;
