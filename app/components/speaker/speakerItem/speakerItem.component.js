import controller from './speakerItem.controller';

const SpeakerItemComponent = {
  bindings: {
    data: '<'
  },
  controller,
  template : `
    <li class="collection-item avatar" style="border-bottom: 1px solid #cccccc;">
      <img class="circle" width="96px" ng-src="{{$ctrl.data.photo}}" alt="{{$ctrl.data.name}}" />
      <span class="badge" style="cursor:pointer;" ng-click="$ctrl.like($ctrl.data)">
        <i class="material-icons small">thumb_up</i>
      </span>
      <span class="title">{{$ctrl.data.name}}</span>
      <p><a ng-href="#/speakers/{{$ctrl.data.id}}">{{$ctrl.data.talk}}</a></p>
    </li>
  `
}

export default SpeakerItemComponent;
