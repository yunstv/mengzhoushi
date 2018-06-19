export default [
  {
    path: '/game',
    name: 'game',
    components: {
      default: () => import('@/views/game'),
    },
    children: [
      {
        path: 'color-filter',
        name: 'color-filter',
        components: {
          game: () => import('@/views/game/color-filter'),
        },
      },
      {
        path: 'xiaoxiaole',
        name: 'xiaoxiaole',
        components: {
          game: () => import('@/views/game/xiaoxiaole'),
        },
      },
      {
        path: 'chaojimali-fyb',
        name: 'chaojimaliSSS',
        components: {
          game: () => import('@/views/game/chaojimaliSSS'),
        },
      },
      {
        path: 'chaojimali-jjb',
        name: 'chaojimali',
        components: {
          game: () => import('@/views/game/chaojimali'),
        },
      },
      {
        path: 'tuixiangzi',
        name: 'tuixiangzi',
        components: {
          game: () => import('@/views/game/tuixiangzi'),
        },
      },
      {
        path: 'ganji-qi',
        name: 'ganji-qi',
        components: {
          game: () => import('@/views/game/ganji-qi'),
        },
      },
      {
        path: 'duimutou',
        name: 'duimutou',
        components: {
          game: () => import('@/views/game/duimutou'),
        },
      },
      {
        path: 'tanqiu',
        name: 'tanqiu',
        components: {
          game: () => import('@/views/game/tanqiu'),
        },
      },
      {
        path: 'tetris',
        name: 'tetris',
        components: {
          game: () => import('@/views/game/tetris'),
        },
      },
      {
        path: 'fruit-ninja',
        name: 'fruit-ninja',
        components: {
          game: () => import('@/views/game/fruit-ninja'),
        },
      },
      {
        path: 'xiangqi',
        name: 'xiangqi',
        components: {
          game: () => import('@/views/game/xiangqi'),
        },
      },
      {
        path: 'flappy',
        name: 'flappy',
        components: {
          game: () => import('@/views/game/flappy'),
        },
      },
      {
        path: 'wuziqi',
        name: 'wuziqi',
        components: {
          game: () => import('@/views/game/wuziqi'),
        },
      },
      {
        path: 'tankedazhan',
        name: 'tankedazhan',
        components: {
          game: () => import('@/views/game/tankedazhan'),
        },
      },
    ],
  },
];
