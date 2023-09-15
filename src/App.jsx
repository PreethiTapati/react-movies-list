import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

function App() {
    const [searchText, setSearchText] = useState('');

    return (
        <div>
            
            <Header text = ' 📽️ Cine W▶️rld'/>
            <SearchBar value={searchText} setValue={setSearchText} />
            <MovieList value={searchText} />
        </div>
    );
}

export default App;

