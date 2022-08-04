
import { GiphyFetch } from '@giphy/js-fetch-api'
import { useState } from 'react'
import GifList from './GifList'
import Error from './Error'
import './styles.css'

// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
const giphy = new GiphyFetch('rg0OnlMBteTeIrU3h05TvsCipADw1hhE')

// configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
// const fetchGifs = (offset: number) => giphy.trending({ offset, limit: 10 })

// Render the React Component and pass it your fetchGifs as a prop
// ReactDOM.render(<Grid width={800} columns={3} fetchGifs={fetchGifs} />, target)

function Giphy(roomId) {

    const [text, setText] = useState('')
    const [results, setResults] = useState([])
    const [error, setError] = useState(false)

    const handleInput = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        if (text.length === 0) {
            setError(true)
            return
        }
        getGifs()
        setText('')
        setError(false)
    }

    const getGifs = async () => {
        const result = await giphy.animate(text, {limit: 15})
        console.log(result);
        setResults(result.data)
    }

    // useEffect(() => {

    //     getGifs()
    //     setText('')
    //     setError(false)
    // }, [])

    

    return (
        <div className="App">
            <div className='input-area'>
                <input className='input-field' value={text} onChange={handleInput} placeholder="Text to GIPH-ify"/>
                <button className='submit-btn' onClick={handleSubmit}>Generate GIFs</button>
                <button className='clear-btn' >Clear</button>
            </div>
            <Error isError={error} text='Search field cannot be empty.'/>
            {<GifList gifs={results} roomId={roomId}  />}
      </div>
      );

      
}

export default Giphy