import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


function mapStateToProps(state) {
  return {
    links: state.config.modules.header.links
  };
}


export class Nav extends Component {

  render() {

    const {links} = this.props;

    return (
      <nav className="header__nav_top" >
        <input type="checkbox"
               className="header__nav_checkbox"
               id="header__nav_toggle"/>
        <label htmlFor="header__nav_toggle" className="header__nav_button">
          <span className="header__nav_icon"/>
        </label>
        <Link to="/">
          <img src="logo-small.svg" className="header__nav_logo" alt=""/>
        </Link>
        <ul className='header__nav_menu'>
          {links.map(link => (
            <li key={link.name}>
              <Link className="header__nav_link" to={link.url} >
                <span data-hover={link.name}>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default connect(
  mapStateToProps,
)(Nav);