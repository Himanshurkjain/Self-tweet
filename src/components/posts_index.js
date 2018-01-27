import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchPosts } from "../actions/index";


class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        //Link is very much like an anchor tag but it prevents some of the default behaviour of the anchor html tag like creating an http request

        _.map(this.props.posts, post => {
            return (
              <li className="list-group-item" key={post.id}>
                  {post.title}
              </li>
            );
        })
    }

    render() {
        return(
            <div>
                <div className="text-xs-right">
                           <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}


//another way of connecting to actionCreator
export default connect(mapStateToProps, {fetchPosts: fetchPosts}) (PostsIndex);
