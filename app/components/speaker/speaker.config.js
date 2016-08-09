
export default function config($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('speakers', {
    url: '/',
    component: 'speakerList',
    resolve: {
      speakers: (SpeakerService) => SpeakerService.getAll()
    }
  })
  .state('speaker', {
    url: '/speakers/:id',
    component: 'speakerDetail',
    resolve: {
      speaker: (SpeakerService, $stateParams) => SpeakerService.get($stateParams.id)
    }
  })
  $urlRouterProvider.otherwise('/')
}
