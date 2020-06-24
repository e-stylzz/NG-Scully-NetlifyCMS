import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'NG-Scully-NetlifyCMS',
  outDir: './dist/static',
  routes: {
    '/jobs/:slug': {
      type: 'contentFolder',
      title: {
        folder: './jobs',
      },
    },
    // '/jobs/:slug': {
    //   type: 'contentFolder',
    //   slug: {
    //     folder: './jobs',
    //   },
    // },
  },
};
