import React from 'react'

const ArticleItem = (props) => {//props= {contentArticle: {...}}
  return (
    <div className="bg-black text-white p-4 my-4">
      <h1>{props.contentArticle.title}</h1>
      <p>{props.contentArticle.content}</p>
      <div>
        <button className="m-4 py-3 px-5 bg-gray-400 rounded-lg">
          {props.contentArticle.views} views
        </button>
        <button className="m-4 py-3 px-5 bg-blue-600 rounded-lg">
          {props.contentArticle.like} like
        </button>
        <button className="m-4 py-3 px-5 bg-red-600 rounded-lg">
          {props.contentArticle.dislike} dislike
        </button>
      </div>
    </div>
  );
}

export default ArticleItem