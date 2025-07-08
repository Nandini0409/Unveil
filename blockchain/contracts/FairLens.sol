// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract FairLens {
  struct Image {
    string cid;
    address user;
    uint upvote;
    uint downvote;
    uint timestamp;
  }

  Image[] public images;

  function uploadImage(string memory _cid) public{
    Image memory image = Image(_cid, msg.sender, 0, 0, block.timestamp);
    images.push(image);
  }

  function getImage(uint index) public view returns(string memory cid, address user, uint upvote, uint downvote, uint timestamp){
    Image memory image = images[index];
    return(image.cid, image.user, image.upvote, image.downvote, image.timestamp);
  }

  function getAllImages() public view returns(Image[] memory){
    return images;
  }
}