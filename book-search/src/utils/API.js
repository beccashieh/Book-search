import axios from 'axios';

export default {
    getBook: function() {
        return axios.get('/api/books');
    },
    addBook: function() {
        return axios.post('/api/books');
    },
    deleteBook: function() {
        return axios.delete._id('/api/books/:id');
    },
    getBooks: function() {
        return axios.get('*');
    }
}