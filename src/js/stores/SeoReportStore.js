/**
 * SeoReportStore.
 */
var SeoReportDispatcher = require('../dispatcher/SeoReportDispatcher');
var SeoReportConstants = require('../constants/SeoReportConstants');
var Store = require('./Store');

var $ = require('jquery');

class SeoReportStore extends Store {

  /**
   * Implements constructor().
   */
  constructor() {
    super();
    this.seoReportItems = {};
  }
  /**
   * Get the Seo Report items.
   *
   * @returns {object}
   */
  getSeoReport() {
    return this.seoReportItems;
  }

  /**
   * Set the Seo Report items.
   *
   * @param {object} seoReport
   */
  setSeoReport(seoReportItems) {
    this.seoReportItems = seoReportItems;
  }

  /**
   * Register actions to handle all updates.
   */
  registerActions() {
    let that = this;
    SeoReportDispatcher.register(function(action) {
      switch (action.actionType) {
        case SeoReportConstants.SEO_REPORT_IMPORT:
          let url = action.url;
          // Ajax request via jquery.
          $.get(url, function (result) {
            that.setSeoReport(result);
            super.emitChange();
          });

          break;

        default:
        // No operations.
      }
    });
  }

}

export default SeoReportStore;
