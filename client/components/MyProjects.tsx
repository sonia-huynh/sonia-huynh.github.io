import bookBoundProject from '../../Public/images/BookboundDemo.jpg'
import login from '../../Public/images/bookboundSignIn.jpg'
import search from '../../Public/images/bookBoundSearch.jpg'
import books from '../../Public/images/bookBoundBooks.jpg'
import review from '../../Public/images/bookBoundReviews.jpg'
import reviewPage from '../../Public/images/bookBoundReviewPage.jpg'
import LucasMansion from '../../Public/images/LucasMansion.jpg'
import toDo from '../../Public/images/todo.jpg'
import said from '../../Public/images/ThatsWhatTheySaid.jpg'
import beanvid from '../../Public/images/dreambeanmemeteam.mp4'
import right from '../../Public/images/nextRight.png'
import left from '../../Public/images/nextLeft.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MyProjects() {
  const bookBoundPics = [
    bookBoundProject,
    login,
    search,
    review,
    books,
    reviewPage,
  ]

  const [imgIndex, setImgIndex] = useState(0)

  function handleRightClick() {
    setImgIndex((prevIndex) => {
      if (prevIndex === bookBoundPics.length - 1) {
        return 0
      } else {
        return prevIndex + 1
      }
    })
  }

  function handleLeftClick() {
    setImgIndex((prevIndex) => {
      if (prevIndex === 0) {
        return bookBoundPics.length - 1
      } else {
        return prevIndex - 1
      }
    })
  }

  return (
    <>
      <div className="homediv">
        <div className="box">
          <h1 className="underline">BookBound</h1>
          <div className="imgBox">
            <button className="butt" onClick={handleLeftClick}>
              <img src={left} alt="left button" id="arrowL" />
            </button>
            <img
              className="imgcard"
              src={bookBoundPics[imgIndex]}
              alt="book bound pics"
            />
            <button className="butt" onClick={handleRightClick}>
              <img src={right} alt="right button" id="arrowR" />
            </button>
          </div>
          <p>
            Check out my repo:{' '}
            <a href="https://github.com/sonia-huynh/BookBound">BookBound</a>
          </p>
          <p>
            My current project I&apos;m working on is creating a personal book
            review and rating app. One of my hobbies is reading and I also love
            to write down my reviews for books, however, I wanted to have it all
            saved in a personal journal type way without the social aspect of
            sharing my reivews to others, which is why I am currently building
            this project. It&apos;s currently a work in progress, so the picture
            shown above is a part of my wireframe of how I want it to look.{' '}
            <Link to="/my-projects/BookBoundBlog/Menu">Read more... </Link>
          </p>

          <p>
            <strong>Tech Stack:</strong>
            React, Typescript, Tailwind, SQLite (with knex), Node.js,
            Superagent, Express, and GoogleBooks api.
          </p>
        </div>
        <br />
        <div className="box">
          <h1 className="underline">Lucas&apos; Mansion</h1>
          <img className="imgcard" src={LucasMansion} alt="Lucas's mansion" />
          <p>
            <a href="https://lucas-mansion.pushed.nz/">Play the game!</a>
          </p>
          <p className="note">
            <i id="note">
              <strong>Note:</strong> This can only be played on a desktop.
            </i>
          </p>
          <p>
            Check out the repo:{' '}
            <a href="https://github.com/harakeke-2024/Lucas-Mansion">
              Lucas&apos; Mansion Repo
            </a>
          </p>

          <p>
            For my final show case project at the end of my bootcamp my team and
            I decided to build something fun and memorable, so we built a
            digital point and click escape room all from scratch!
          </p>
          <p>
            This project heavily focused on frontend but we also learnt lots of
            new software such as using Canva (to source assets), Audacity (to
            edit audio) and Photopea (to edit our images) to create this
            project. We also implemented some backend such as a leaderboard
            feature so that your play time can be saved.
          </p>
          <p>
            My role in this project was Product lead as I came up with the idea
            to build an escape room, so I was tasked with ensuring my team and I
            focused on building our MVP before moving on to our stretch goals. I
            was also the tie breaker when it came to certain decisions on
            features and I made sure to hear all my team mates out before making
            the choice.
          </p>
        </div>

        <br />

        <div className="box">
          <h1 className="underline">Todo full-stack</h1>
          <img className="imgcard" src={toDo} alt="todo fullstack" />
          <p>
            Check out my todo repo:{' '}
            <a href="https://github.com/sonia-huynh/ToDo-fullstack">Todos</a>
          </p>

          <p>
            I have also deployed this if you would like to add a todo to my
            list! Add a Todo
          </p>
          <p>
            To practice my full stack abilities I built a todo app implementing
            both frontend tech such as React, Typescript, custom hooks, useQuery
            for client-side development and backend tech such as Node.js for
            server-side JavaScript, frameworks like Express.js for building web
            servers, databases like SQLite (with Knex.js) for storing data .
          </p>
        </div>
        <br />
        <div className="box">
          <h1 className="underline">That&apos;s What They Said!</h1>
          <img className="imgcard" src={said} alt="that's what they said" />
          <p>
            Check out the repo:{' '}
            <a href="https://github.com/harakeke-2024/That-s-What-They-Said-">
              That&apos;s What they Said
            </a>
          </p>

          <p>
            Armed with the ability of a fullstack, for my final Friday group
            project my team and I decided to build another trivia game from
            scratch. The theme of this trivia game was called That&apos;s what
            they said! and it is based around the answers that our bootcamp
            facilitators had given us to the trivia questions we made up.
          </p>
          <p>
            You may be thinking, another trivia game?! But this time, we
            incorporated more features, we implemented an Auth0 feature which is
            where the user must first login or sign up with an account before
            they get taken to the trivia questions.
          </p>
          <p>
            The trivia questions were also all made by my team and I where we
            built the database using SQlite (with Knex.js) and inputted the
            questions and answers which you then see on the screen.
          </p>
          <p>
            Lastly we also implemented a backend leaderboard feature which saves
            the number of correct questions you have as points and then puts
            your name and score in our leaderboard.
          </p>
        </div>

        <br />

        <div className="box">
          <h1 className="underline">DreamBeanMemeTeam</h1>

          <video src={beanvid} className="imgcard" controls />
          <p>
            Check out my jelly bean repo:{' '}
            <a href="https://github.com/sonia-huynh/DreamBeanMemeTeam">
              DreamBeanMemeTeam
            </a>
          </p>

          <p>
            This Friday Group Project&apos;s focus was to use an external api to
            build something, so we created a fun guessing game using the Jelly
            Belly Api where we randomised the names of the jelly beans given to
            you and you have to click on the correct jelly bean that matches the
            name.
          </p>
        </div>
      </div>
    </>
  )
}
