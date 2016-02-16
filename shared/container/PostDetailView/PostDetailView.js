/* eslint no-unused-vars: 0 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class PostDetailView extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showAddPost: true,
    });
  }

  render() {
    return (
      <div>
        <Header onClick={function noop() {}}/>
        <div className="container">
          <div className="single-post post-detail">
            <h3 className="post-title">{this.props.post.title}</h3>
            <p className="author-name">By {this.props.post.name}</p>
            <p className="post-desc">{this.props.post.content}</p>
          </div>
        </div>
        <Footer />
      </div>
      );
  }
}

PostDetailView.need = [function (params) {
  return Actions.getPostRequest.bind(null, params.slug)();
}];

PostDetailView.contextTypes = {
  router: React.PropTypes.object,
};

PostDetailView.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps(store) {
  return {
    post: (store.post),
  };
}

export default connect(mapStateToProps)(PostDetailView);
