import React from 'react'
import FastfoodIcon from '@material-ui/icons/Fastfood';

function Header(props) {
    const {search, onInputChange, onSearchClick}=props
    return (
        <div className="jumbotron">
            <h1 className="display-1 brand-icon" ><FastfoodIcon /> Food Recipe</h1>
            <div className="input-group w-50 mx-auto">
                <input type="text"  style={{width:"30%"}} value={search} onChange={onInputChange} className="form-control" placeholder="Search Your Recipe..."/>
                <div className="input-group-append">
                    <button className="btn btn-dark" onClick={onSearchClick}>Search Recipe</button>
                </div>
            </div>
        </div>
    )
}

export default Header
