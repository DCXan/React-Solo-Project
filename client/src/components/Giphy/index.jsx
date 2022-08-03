
import { GiphyFetch } from '@giphy/js-fetch-api'
import { useState } from 'react'
import TextList from './TextList'
import Error from './Error'
import './styles.css'

// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
const giphy = new GiphyFetch('rg0OnlMBteTeIrU3h05TvsCipADw1hhE')

// configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
// const fetchGifs = (offset: number) => giphy.trending({ offset, limit: 10 })

// Render the React Component and pass it your fetchGifs as a prop
// ReactDOM.render(<Grid width={800} columns={3} fetchGifs={fetchGifs} />, target)

function Giphy() {

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
        const result = await giphy.search(text, { sort: 'relevant', lang: 'en', limit: 15, type: 'gifs' })
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
            <h1>Animated Text Generator</h1>
            <h3>Type text into the form and hit submit</h3>
            <input className='input-field' value={text} onChange={handleInput} />
            <button className='submit-btn' onClick={handleSubmit}>giph Me!</button>
            <Error isError={error} text='Search field cannot be empty.'/>
            {<TextList gifs={results}  />}
      </div>
      );

      
}

export default Giphy