import {useState, useEffect} from 'react';

export function UseWords(){
    const [words, setWords] = useState([]);

    useEffect(() => {
        async function fetchWords(){
            const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
            const data = await response.json()
            const wordData = data
            setWords(wordData)
            console.log(data);
        }
        fetchWords();
    }, [])
    return(
        <>
        <div className='quotes'>
                <h5>Word of Day:</h5>
                <p>{words.word}</p>
                <p>{words.definition}</p>
            </div>
        </>
    )
}
