import axios from 'axios';

export default {
    //Access the api call
    getGoogleSearch: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },

    getBook: function(id) {
        return axios.get('/api/books/' + id);
    },
    //
    addBook: function(Saved) {
        return axios.post('/api/books', Saved);
    },
    //Deletes the book with the specified id.
    deleteBook: function(id) {
        return axios.delete._id('/api/books/' + id);
    },
    //Gets all books
    getBooks: function() {
        return axios.get('*');
    }
}