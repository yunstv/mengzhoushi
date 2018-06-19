export default [
  {
    path: '/editor',
    name: 'editor',
    components: {
      default: () => import('@/views/editor'),
    },
    children: [
      {
        path: 'quill-editor',
        name: 'quill-editor',
        components: {
          editor: () => import('@/views/editor/quill-editor'),
        },
      },
      {
        path: 'markdown',
        name: 'markdown',
        components: {
          editor: () => import('@/views/editor/markdown'),
        },
      },
    ],
  },
];
