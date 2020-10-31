import getJoke from '../data/jokeData';

const viewTheJoke = () => {
  $('#app').html('<button type="button" id="giveMeAJoke" class="btn btn-primary btn-lg">Get a Joke</button>');

  $('#giveMeAJoke').on('click', () => {
    $('#jokeArea').html('');
    getJoke.getAJoke().then((response) => {
      console.warn(response);
      $('#jokeArea').html(`<div class="card mx-auto" style="width: 18rem;">
        <div class="card-body">
          <p class="card-text">${response.data.setup}</p>
          <a href="#" id="punchline" class="btn btn-primary">Click for Punchline</a>
          <div id="punchlineArea"></div>
        </div>
      </div>`);
      $('#punchline').on('click', () => {
        $('#punchlineArea').append(`<h4 class="m-md">${response.data.punchline}</h4>`);
      });
    });
  });
};

export default { viewTheJoke };
