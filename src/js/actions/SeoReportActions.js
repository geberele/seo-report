/**
 * SeoReportActions.
 */
var SeoReportDispatcher = require('../dispatcher/SeoReportDispatcher');
var SeoReportConstants = require('../constants/SeoReportConstants');

class SeoReportActions {

  /**
   * Action import a Seo Report.
   *
   * @param  {string} url
   */
  importSeoReport(url) {
    SeoReportDispatcher.dispatch({
      actionType: SeoReportConstants.SEO_REPORT_IMPORT,
      url: url
    });
  }

}

export default SeoReportActions;
