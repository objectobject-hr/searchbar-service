import React from 'react';
import PropTypes from 'prop-types';

class SearchDrop extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    const backdropStyle = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className="sb-dropdown backdrop" style={{backdropStyle}}>
        <div className="sb-search-results modal" style={{modalStyle}}>
          {this.props.children}
          
          <div className="footer">
            {/* <button onClick={this.props.onClose}>
              Close
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

SearchDrop.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default SearchDrop;