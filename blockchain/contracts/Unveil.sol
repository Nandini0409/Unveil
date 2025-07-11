// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Unveil {
  struct Post {
    string cidHash;
    address user;
    uint votes;
    uint timestamp;
  }

  mapping(uint => Post) public posts;
  mapping(uint => mapping(address => bool)) public hasVoted;
  mapping(uint => bool) public doesExist;
  uint public postCount;

  event PostUploaded(uint indexed postId, address indexed user, string cid);
  event VoteCast(uint indexed postId, address indexed voter);

  function uploadPost(string memory _cid) public{
    posts[postCount] = Post(_cid, msg.sender, 0, block.timestamp);
    doesExist[postCount] = true;
    emit PostUploaded(postCount, msg.sender, _cid);
    postCount++;
  }

  function getPosts()  public view returns(Post[] memory){
    Post[] memory postArray = new Post[](postCount);
    for(uint i; i<postCount; i++){
      postArray[i] = posts[i];
    }
    return postArray;
  }

  function vote(uint postId) public{
    require(doesExist[postId], "The post doesn't exist.");
    require(!hasVoted[postId][msg.sender], "You have already voted!");
    posts[postId].votes++;
    hasVoted[postId][msg.sender] = true;
    emit VoteCast(postId, msg.sender);
  } 
}