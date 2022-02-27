import React, {useState} from 'react'
import './middle.scss';



const Input = () => {

  const [tweet, setTweet] = useState("");

  return (
    <React.Fragment>
    <h3>Home</h3>
      <form>
        <div className="input-group mb-1">
          <textarea className="form-control" maxLength="280" aria-label="With textarea" placeholder="What's Happening?"
          onChange = {event => {
            event.preventDefault();
            setTweet(event.target.value)}}>
          </textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary btn-sm">Tweet</button>
        </div>
      </form>
    </React.Fragment>
  )
}

const Middle = (props) => {
  const {middle} = props;
  
  return (
    <div className='col-9 col-md-6'>
      <Input />
    </div>
  )
}

export default Middle;