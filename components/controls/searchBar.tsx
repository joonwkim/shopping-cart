'use client'
type InputProps = {
    value: string
    placeholder: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleCancelBtnClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

import { useState } from "react"

const SearchBar = (props: InputProps) => {
    return (
        <div className="input-group ms-3 mb-2 me-5">
            <span className="input-group-text bg-white border border-end-0" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </span>
            <input type="text" className="form-control border border-start-0 border-end-0"
                placeholder={props.placeholder}
                aria-label="searchbar" aria-describedby="basic-addon1" value={props.value}
                onChange={props.handleChange} onKeyDown={e => props.onKeyDown(e)}
            />
            {props.value.length > 0 ? (<><span className="input-group-text bg-white border" id="basic-addon2" onClick={props.handleCancelBtnClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </span></>) : (<div></div>)
            }
        </div>
    )
}

export default SearchBar