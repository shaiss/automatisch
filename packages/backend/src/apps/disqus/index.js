import defineApp from '../../helpers/define-app.js';
import addAuthHeader from './common/add-auth-header.js';
import auth from './auth/index.js';

export default defineApp({
  name: 'Disqus',
  key: 'disqus',
  baseUrl: 'https://disqus.com',
  apiBaseUrl: 'https://disqus.com/api',
  iconUrl: '{BASE_URL}/apps/disqus/assets/favicon.svg',
  authDocUrl: 'https://automatisch.io/docs/apps/disqus/connection',
  primaryColor: '2E9FFF',
  supportsConnections: true,
  beforeRequest: [addAuthHeader],
  auth,
});
