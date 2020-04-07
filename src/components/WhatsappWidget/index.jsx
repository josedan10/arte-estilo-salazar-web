import React, { useState } from 'react'
import styled from 'styled-components';


export default () => {
    let [isOpened, setIsOpened] = useState(false);

    return (
        <StyledWidget onClick={e => setIsOpened(!isOpened)} className="whatsapp-widget bouncing">
            <div className={`msg-input ${isOpened ? 'opened' : ''}`}>
                <textarea id="whatsappMsg" onClick={e => e.stopPropagation()} type="text" autoFocus/>
                <a onClick={e => {
                    e.stopPropagation();
                    e.preventDefault();
                    let msg = document.getElementById("whatsappMsg");
                    window.open(`https://api.whatsapp.com/send?phone=584242473176&text=${msg.value}`);
                }}
                    href="#"
                    target="_blank"
                >Enviar</a>
            </div>
            <img className={`${isOpened ? "open" : "close"}`} src={`/images/${isOpened ? 'close' : 'whatsapp'}-icon.svg`} alt="whatsapp chat icon" />
        </StyledWidget>    
    )
}

const StyledWidget = styled.div`
    position: fixed;
    z-index: 100;
    bottom: 3rem;
    right: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 80px;
    width: 80px;
    padding: 14px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 16px rgba(0,0,0, 0.16);

    &:hover {
        cursor: pointer;
    }

    &.bouncing {
        animation-name: bounceCustom;
        animation-fill-mode: forwards;
        animation-duration: 4s;
        animation-delay: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in;
    }

    img {
        width: 100%;
    }

    .msg-input {
        position: absolute;
        height: 0;
        width: 0;
        right: 90px;
        bottom: 50%;
        max-width: 420px;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        transition: all .5s ease;

        background: linear-gradient(to right, #fff,  #efefff);
        box-shadow: 0 0 10px rgba(0,0,0, .16);

        &.opened {
            height: 160px;
            width: 80vw;
            max-width: 420px;
            padding: 20px;
            transition: all .5s ease;

            textarea {
                opacity: 1;
                transition: opacity .5s ease .5s;
            }
        }

        textarea {
            opacity: 0;
            border: 1px solid ${props => props.theme.primaryColor};
            border-radius: 6px;
            padding: 5px 10px;
            outline: none;
            width: 100%;
            height: 70px;
            resize: none;
            transition: all .5s ease;
            font-size: 16px;
        }

        a {
            display: block;
            color: ${props => props.theme.secondaryColor};
            background: ${props => props.theme.primaryColor};
            text-decoration: none;
            padding: 5px 15px;
            border-radius: 6px;
        }
    }
`;