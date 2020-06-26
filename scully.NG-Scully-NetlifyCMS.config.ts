import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'NG-Scully-NetlifyCMS',
  outDir: './dist/static',
  routes: {
    '/jobs/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './jobs',
      },
    },
    // '/jobs/apply/:slug': {
    //   type: 'contentFolder',
    //   slug: {
    //     folder: './jobs',
    //   },
    // },
  },
  extraRoutes: [
    '/jobs/apply/test1',
    '/jobs/apply/busa-bus-dover-de',
    '/jobs/apply/map-location-houston-tx-overview-layin-down-beats-position-beat-master-requirements-no-scrum-responsibilities-keeping-it-real-status-active',
  ],
};
