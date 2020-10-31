import getJoke from '../data/jokeData';

const viewTheJoke = () => {
  $('#app').html('<button type="button" id="giveMeAJoke" class="btn btn-primary btn-lg">Get a Joke</button>');

  $('#giveMeAJoke').on('click', () => {
    $('#jokeArea').html('');
    getJoke.getAJoke().then((response) => {
      console.warn(response);
      $('#jokeArea').html(`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Random Joke!</h5>
          <p class="card-text">${response.data.setup}</p>
          <a href="#" id="punchline" class="btn btn-primary">Click for Punchline</a>
          <div id="punchlineArea"></div>
        </div>
      </div>`);
      $('#punchline').on('click', () => {
        $('#punchlineArea').append(`<p class="card-text">${response.data.punchline}</p>`);
      });
    });
  });
};

export default { viewTheJoke };
