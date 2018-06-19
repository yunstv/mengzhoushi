import home from './home';
import user from './user';
import editor from './editor';
import game from './game';

export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index'),
  },
  ...home,
  ...user,
  ...editor,
  ...game,
];
