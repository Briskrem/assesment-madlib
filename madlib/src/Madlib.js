import {useState} from 'react'
import {MadForm} from './MadForm'
import './MadLib.css'

export const Madlib = () => {
//////////////////////////////////////////////////////////////////////////
    const initial = {
        noun: 'noun',
        noun2: 'noun2',
        adjective: 'adjective',
        color: 'color'
    }
    
    const [story, setStory] = useState(initial)
    const [clicked,  setClicked] = useState(false)

    const buildStory = (data) => {
        setStory(story => ({
            ...story,
            [story.noun] : data.noun,
            [story.noun2] : data.noun2,
            [story.adjective] : data.adjective,
            [story.color] : data.color,
        })) 
        setClicked(true)
    }

////////////////////////////////////////////////////////////////////////////
    const subject = ['The', 'This', 'A']
    const verbs = ['loves', 'helped', 'attacked', 'stopped', 'smacked', 'covered', 'took']
    const conjunctions = ['and', 'with' ]
    const bigArray = [subject, verbs, conjunctions]
    let choosenWords = [];


    function generate(){
        const rand = arr => Math.floor(Math.random() * arr.length)
        for(let i = 0; i < bigArray.length; i++){
            let r = rand(bigArray[i])
            let j = 0;
            let stopped = false   
            while(j < 10){
                if(j == r){
                    choosenWords.push(bigArray[i][j])
                    stopped = true
                    j = 10
                }
                j++
            }
        }
        console.log(choosenWords, 'COMPLETED LIST')
    }
    generate()

    

    return (
        <div className='MadLib'>
        happy
        {clicked? 
            <p>{choosenWords[0]} {story.color} {story.noun} {choosenWords[1]} {choosenWords[0]} {story.adjective} {story.noun2}</p> 
            : ''}
        
        <MadForm buildStory={buildStory} />
        </div>
    )
}