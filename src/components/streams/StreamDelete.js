import React from 'react';
import Modal from '../Modal'
import history from '../../history'
import { Link } from 'react-router-dom'
import { fetchStream, deleteStream } from '../../actions'
import { connect } from 'react-redux'

class StreamDelete extends React.Component {

  componentDidMount() {
    console.log(this.props.match.params.id)
    this.props.fetchStream(this.props.match.params.id)
  }

  onDelete = () => {
    this.props.deleteStream(this.props.stream.id)
  }

  renderActions() {
    return (
      <>
        <button onClick={this.onDelete} className="ui button negative">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
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

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)