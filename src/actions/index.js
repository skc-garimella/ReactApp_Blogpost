
import React from 'react';
import axios from 'axios';


const BLOG_URL = 'http://reduxblog.herokuapp.com/api/posts';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchPosts() {
  const url = `${BLOG_URL}?Key=fgfdgdgdfs232df`;
  const request = axios.get(url);

  return ({
    type : FETCH_POSTS,
    payload : request
  });
}

export function createPost(props){
  const url = `${BLOG_URL}/?Key=fgfdgdgdfs232df`;
  const request = axios.post(url, props);

  return{
    type : CREATE_POST,
    payload : request
  };
}

export function getPost(id) {
  const url = `${BLOG_URL}/${id}?Key=fgfdgdgdfs232df`;
  const request = axios.get(url);
  return {
    type : GET_POST,
    payload : request
  };
}

export function deletePost(id) {
  const url = `${BLOG_URL}/${id}?Key=fgfdgdgdfs232df`;
  const request = axios.delete(url);
  return {
    type : DELETE_POST,
    payload : request
  };
}
