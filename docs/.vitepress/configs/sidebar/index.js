const { getPath } = require('../utils')
const getGuideSidebar = require('./getGuideSidebar');
const getFrameSidebar = require('./getFrameSidebar');
const getWorkflowSidebar = require('./getWorkflowSidebar');
const getNetWorkSidebar = require('./getNetWorkSidebar');
const getAlgorithmSidebar = require('./getAlgorithmSidebar');

module.exports = {
  [getPath('/guide/')]: getGuideSidebar(),
  [getPath('/frame/')]: getFrameSidebar(),
  [getPath('/workflow/')]: getWorkflowSidebar(),
  [getPath('/network/')]: getNetWorkSidebar(),
  [getPath('/algorithm/')]: getAlgorithmSidebar(),
  [getPath('/other/')]: 'auto',

}


