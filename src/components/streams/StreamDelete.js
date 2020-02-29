import React from 'react';
import Modal from '../Modal'
import history from '../../history'
import { fetchStream } from '../../actions'
import { connect } from 'react-redux'

class StreamDelete extends React.Component {

  componentDidMount() {
    console.log(this.props.match.params.id)
    this.props.fetchStream(this.props.match.params.id)
  }

  renderActions() {
    return (
      <>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </>
    )
  }

  renderContent() {
    if(!this.props.stream) {
      return 'Are you sure you want to delete this stream?'
    }
    return `Are you sure you want to delte this stream with title: ${this.props.stream.title}`
  }

  render() {
    
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream })(StreamDelete)