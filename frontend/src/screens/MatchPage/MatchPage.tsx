import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './MatchPage.css'
import Logo from '../../assets/devconnect-logo2.png'
import Search from '../../assets/busqueda.png'
import Dislike from '../../assets/cruz.png'
import Like from '../../assets/like.png'


export const MatchPage = () => {
  const [people, setPeople] = useState([
    //Datos de las tarjetas hardcodeado por ahora pero hay que conectar al back
    {
      name: 'John Doe',
      age: 27,
      profession: 'Frontend Developer',
      bio: 'React and JavaScript enthusiast, loves hiking and open-source development.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Jane Smith',
      age: 32,
      profession: 'Backend Developer',
      bio: 'Passionate about Python and Node.js, coffee lover.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      name: 'Jamal Jordan',
      age: 30,
      profession: 'Backend Developer',
      bio: 'Passionate about Python and Node.js, coffee lover.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      name: 'Cynthia Williams',
      age: 43,
      profession: 'Backend Developer',
      bio: 'Passionate about Python and Node.js, coffee lover.',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      name: 'Eric Johnson',
      age: 35,
      profession: 'Backend Developer',
      bio: 'Passionate about Python and Node.js, coffee lover.',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ])

  const [currentIndex, setCurrentIndex] = useState(people.length - 1)

  const swiped = (direction, nameToDelete) => {
    console.log(`Removing ${nameToDelete} in direction ${direction}`)
    const newIndex = currentIndex - 1
    setCurrentIndex(newIndex >= 0 ? newIndex : 0)
  }

  const outOfFrame = name => {
    console.log(`${name} left the screen!`)
  }

  const swipe = dir => {
    if (currentIndex >= 0) {
      swiped(dir, people[currentIndex].name)
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="tinderCards__container">
      <div className="tinderCards__chat">
        <div className="chat_logo_container">
          <img src={Logo} alt="" className="chat_logo" />
          {/* Input para el buscador */}
          <div className="search-container">
            <input type="text" placeholder="Buscar chats..." className="search-input" />
            <button className="search-btn"><img src={Search} alt="search" className='search-icon'/></button>
          </div>
        </div>
        <hr />
        {/* Chat */}
        <div className="chat">
          <h1 className="chat__title">NUEVOS MATCHES</h1>
          <div className="chat_new">
            {people.slice(0, 4).map((person, index) => (
              <div className="profile_circle" key={index}>
                <img className="profile_img" src={person.image} alt={`${person.name}`} />
                <span className="profile_name">{person.name}</span>
              </div>
            ))}
          </div>
          <hr className="chat_divider"/>
          <h2 className="chat__subtitle">MENSAJES</h2>
          <div className="chat_message">
            {people.slice(0, 5).map((person, index) => (
              <div className="message_row" key={index}>
                <div className="profile_circle">
                  <img className="profile_img" src={person.image} alt={`${person.name}`} />
                </div>
                <div className="message_info">
                  <span className="message_name">{person.name}</span>
                  <p className="message_text">Hola, ¿cómo estás?</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="chat__separator" />
      {/* Card */}
      <div className="tinderCards__cardContainer">
        {currentIndex >= 0 && (
          <TinderCard
            className="swipe"
            key={people[currentIndex].name}
            preventSwipe={['up', 'down']}
            onSwipe={dir => swiped(dir, people[currentIndex].name)}
            onCardLeftScreen={() => outOfFrame(people[currentIndex].name)}
          >
            <div className="card">
              <div className="card-image" style={{ backgroundImage: `url(${people[currentIndex].image})` }}>
                <div className="card-name-container">
                  <h2 className="card-name">{people[currentIndex].name},</h2>
                  <h3 className="card-age">{people[currentIndex].age}</h3>
                </div>
              </div>
              <div className="card-info">
                <h3>{people[currentIndex].profession}</h3>
                <p>{people[currentIndex].bio}</p>
              </div>
              <div className="card-buttons">
                <button className="dislike-btn" onClick={() => swipe('left')}>
                  <img src={Dislike} alt="LikeButton" className='like'/>
                </button>
                <button className="like-btn" onClick={() => swipe('right')}>
                  <img src={Like} alt="DislikeButton" className='dislike'/>
                </button>
              </div>
            </div>
          </TinderCard>
        )}
      </div>
    </div>
  )
}
