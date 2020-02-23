'use strict';

const state={
    input:3
}

function getDogImage() {
  fetch(`https://dog.ceo/api/breeds/image/random/${state.input}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  let dispImg=responseJson.message.reduce((acc,val)=>{
    return acc += `<img src="${val}">`
  },``)
  debugger
  $('.dogPics').html(dispImg)
}

function handleNumChange() {
    $('#picsNum').change(e=> {
        e.preventDefault();
        if(e.target.value<=0||e.target.value>50){
            alert("Please request a number between 0 and 50")
            state.input=3;
        } else {
            state.input=e.target.value
            // console.log(state.input)
        }
    })
}

function watchForm() {
  $('form').submit(e => {
    e.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  handleNumChange();
  watchForm();
});