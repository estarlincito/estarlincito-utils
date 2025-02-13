import apiFetch from './api-fetch.js';
import clipMaster from './clip-master.js';
import handleError from './handle-error.js';
import isDev from './is-dev.js';
import pagination from './pagination.js';
import generateMetadata from './metadata.js';
import removeKeys from './remove-keys.js';
import formZed from './form-zed.js';
//import resmsg from './resmsg.js';
//import loadDynamic from './dynamic.js';
//import Styled from './styled.js';
const utils = {
    apiFetch,
    clipMaster,
    formZed,
    generateMetadata,
    handleError,
    pagination,
    isDev,
    removeKeys,
    //Styled,
    //resmsg,
    //loadDynamic,
};
export default utils;
