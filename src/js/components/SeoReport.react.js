var React = require('react');

/**
 * SeoReport class.
 */
class SeoReport extends React.Component {

  static propTypes = {
    seoReportItems: React.PropTypes.array
  };
  static defaultProps = {
    seoReportItems: null
  };

  render() {
    var createRow = function (value, index) {
      return <tr key={'row_' + index}>
        <td key={'tag_' + index}>{value.tag}</td>
        <td key={'content_' + index}>{value.content}</td>
        <td key={'length_' + index}>{value.length}</td>
      </tr>;
    };

    let items;
    if (this.props.seoReportItems) {
      items = this.props.seoReportItems.map(createRow);
    }

    return <table className="table table-condensed">
      <thead>
        <tr>
          <td>Tag</td>
          <td>Content</td>
          <td>Length</td>
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </table>;
  }

}

export default SeoReport;
