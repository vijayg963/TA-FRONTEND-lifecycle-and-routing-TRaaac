import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import { FaRegCalendarTimes } from 'react-icons/fa';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaRegAddressCard } from 'react-icons/fa';
import { FaUnlock } from 'react-icons/fa';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      card: 'name',
    };
  }

  handleComponent = (value) => {
    this.setState({
      card: value,
    });
  };

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }));
  }

  handleRandomUser = () => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }));
  };

  render() {
    let data = this.state.data;
    return (
      <div className='App'>
        <header></header>
        <main>
          {data?.map((item, i) => {
            return (
              <div className='user' key={i}>
                <figure className='user-img'>
                  <img src={item.picture.large} alt='img1' />
                </figure>
                <div className='details'>
                  <h2 className={this.state.card === 'name' ? '' : 'hidden'}>
                    <p className='title'> My name is</p>
                    {item.name.title +
                      ' ' +
                      item.name.first +
                      ' ' +
                      item.name.last}
                  </h2>
                  <h2 className={this.state.card === 'email' ? '' : 'hidden'}>
                    <p className='title'>MY Email is</p> {item.email}
                  </h2>
                  <h2 className={this.state.card === 'age' ? '' : 'hidden'}>
                    <p className='title'>MY age is</p> {item.dob.age}
                  </h2>
                  <h2 className={this.state.card === 'street' ? '' : 'hidden'}>
                    <p className='title'>MY Street is</p>{' '}
                    {item.location.street.name}
                  </h2>
                  <h2 className={this.state.card === 'phone' ? '' : 'hidden'}>
                    <p className='title'>MY phone is</p> {item.cell}
                  </h2>
                  <h2
                    className={this.state.card === 'password' ? '' : 'hidden'}
                  >
                    <p className='title'>MY password is</p>{' '}
                    {item.login.password}
                  </h2>
                </div>
                <div className='icon'>
                  <span onMouseEnter={() => this.handleComponent('name')}>
                    <FaUser />
                  </span>
                  <span onMouseEnter={() => this.handleComponent('email')}>
                    <FaRegEnvelopeOpen />
                  </span>
                  <span onMouseEnter={() => this.handleComponent('age')}>
                    <FaRegCalendarTimes />
                  </span>
                  <span onMouseEnter={() => this.handleComponent('street')}>
                    <FaMapMarkedAlt />
                  </span>
                  <span onMouseEnter={() => this.handleComponent('phone')}>
                    <FaRegAddressCard />
                  </span>
                  <span onMouseEnter={() => this.handleComponent('password')}>
                    <FaUnlock />
                  </span>
                </div>
                <button onClick={this.handleRandomUser} className='btn'>
                  RANDOM USER
                </button>
              </div>
            );
          })}
        </main>
      </div>
    );
  }
}

export default App;
