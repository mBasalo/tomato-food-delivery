import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nemo, odio sint perspiciatis corporis enim fugit dolores et eveniet quaerat?</p>

        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return (
                    <div key={index} className="explore-menu-list-item">
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>

        <hr />
    </div>
  )
}

export default ExploreMenu