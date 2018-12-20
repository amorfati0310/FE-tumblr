import React, { Component } from 'react';
import Avatar from '../Avatar';
import Popover from '../Popover';
import './PostCard.scss';

const handleOptionsButtonClicked = (e) => {
  e.preventDefault();
};
class PostCardList extends Component {
  // {
  //   userId, avatarImg, cardImg, cardImgAlt, title, content, tags,
  // },
  render() {
    return (
      <div className="postCard__container">
        <Avatar />
        <div className="postCard">
          <div className="postCard__header">
            <span className="userId">{this.props.userId}</span>
          </div>
          <div className="postCard__content">
            <div className="postCard__title-container">
              <h2 className="postCard__heading">{this.props.title}</h2>
            </div>
            {this.props.cardImg && (
            <div className="postCard__image-container">
              <img src={this.props.cardImg} alt={this.props.cardImgAlt} />
            </div>
            )}
            <div className="postCard__bodyText">
              <p>{this.props.content}</p>
            </div>
            {this.props.tags && (<div className="postCard__tags">{this.props.tags}</div>)}
          </div>
          <div className="postCard__footer">
            <div className="notes__container" />
            <ul className="postCard__buttons">
              <li className="postCard__button">
                <a href="">
                  <i className="postCard__icon-share" />
                </a>
              </li>
              <li className="postCard__button">
                <a href="">
                  <i className="postCard__icon-reply" />
                </a>
              </li>
              <li className="postCard__button">
                <a href="">
                  <i className="postCard__icon-reblog" />
                </a>
              </li>
              <li className="postCard__button">
                <a href="">
                  <i className="postCard__icon-options" onClick={handleOptionsButtonClicked}>
                    <Popover />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


export default PostCardList;
