
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorFetch from './components/ErrorFetch'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App (){
  const [location, setLocation] = useState()
  const [locationInput, setLocationInput] = useState()
  const [hasError, setHasError] = useState(false)
    useEffect(() => {
      
      let URL
      if(locationInput){
        URL = `https://rickandmortyapi.com/api/location/${locationInput}`
      }else{
        const randomIdLocation = Math.floor(Math.random() * 126) + 1
        URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
      }

      

   

      axios.get(URL)
      .then( res => {
        setLocation(res.data)
        setHasError(false)
      })
      .catch(err => {
        setHasError(true)
        console.log(err)
      })
    }, [locationInput])

    const handleSubmit =  e => {
      e.preventDefault()
      setLocationInput(e.target.inputSearch.value)
    }

  return (
    <div className="App">

      <div className='header__item'>
          <div className='header__avatar'>
            <img className='header__avatar-item' src="/images/RickLogo.png" alt="" />
          </div>
      <form className='header__form' onSubmit={handleSubmit}>
        <input className='header__form-input' id='inputSearch' type="text" />
        <button className='header__form-btn'>Search</button>
      </form>
      
      </div>
     
      {
        hasError ?
        <ErrorFetch />
        :
      <>
      <LocationInfo location = {location} />
      <div className='resident__container'>

        {
          location?.residents.map(url => (
            <ResidentCard key={url} url = {url}/>
          ))
        }
      </div>
      </>
      }

      <footer className='footer'>
        <div className='footer__btn'><p>1</p></div>
        <div className='footer__btn'><p>2</p></div>
        <div className='footer__btn'><p>3</p></div>
        <div className='footer__btn'><p>4</p></div>
        <div className='footer__btn'><p>5</p></div>
        <div className='footer__btn'><p>6</p></div>
        <div className='footer__btn'><p>7</p></div>
        <div className='footer__btn'><p>8</p></div>
      </footer>
    </div>
  )
}

export default App
