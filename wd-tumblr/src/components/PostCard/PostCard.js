import React, { Component } from 'react';
import Avatar from '../Avatar';
import './PostCard.scss';
import { getLocalStorage, saveLocalStorage } from '../../helper';
import PostCardHeader from './PostCardHeader';
import PostCardContent from './PostCardContet';
import PostCardFooter from './PostCardFooter';

class PostCard extends Component {
  state={
    isOpen: false,
    popupState: false,
  }

  handleReplyButtonClicked = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ popupState: !prevState.popupState }));
  }

  handleOptionsButtonClicked = (e) => {
    e.preventDefault();

    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  handleDeletePost=() => {
    const STORAGE_KEY = 'POST_KEY';
    const filterdCardList = this.deleteCardById(STORAGE_KEY, this.props.uniqueId);
    saveLocalStorage(STORAGE_KEY, filterdCardList);
    this.setState({ postCards: filterdCardList });
    this.props.handleSetPostCards();
  }

  deleteCardById=(key, id) => getLocalStorage(key).filter(v => v.uniqueId !== id)

  render() {
    const {
      userId, avatarImg, cardImg, cardImgAlt, title, content, tags,
      postCardId,
      uniqueId,
    } = this.props;
    const { isOpen, popupState } = this.state;
    return (
      <div className="postCard__container">
        <Avatar
          avatarImg={avatarImg}
        />
        <div className="postCard" data-id={uniqueId}>
          <PostCardHeader userId={userId} />
          <PostCardContent
            title={title}
            cardImg={cardImg}
            cardImgAlt={cardImgAlt}
            content={content}
            tags={tags}
          />
          <PostCardFooter
            userId={userId}
            postCardId={uniqueId}
            handleOptionBtnClick={this.handleOptionsButtonClicked}
            isOpen={isOpen}
            handleReplyButtonClicked={this.handleReplyButtonClicked}
            popupState={popupState}
            deletePost={this.handleDeletePost}
          />
        </div>
      </div>
    );
  }
}

export default PostCard;
