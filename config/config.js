import prodConfig from '../config/prod/config';
import stageConfig from '../config/stage/config';
import devConfig from '../config/prod/config';

let config;
if (process.env.NODE_ENV === 'production') {
  config = prodConfig;
} else if (process.env.NODE_ENV === 'stagging') {
  config = stageConfig;
} else if (process.env.NODE_ENV === 'development') {
  config = devConfig;
}

export default config;
