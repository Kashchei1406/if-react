import React from "react";
import icons from "../../assets/images/icons.svg";

function ModalWindow() {
  return (
    <div id="modalAmount" className="modal-window">
      <ul>
        <li>
          Adults
          <div className="toggle">
            <svg data-name="adult-minus">
              <use href={`${icons}#btn-minus`} />
            </svg>
            <span className="adults-count">0</span>
            <svg data-name="adult-plus">
              <use href={`${icons}#btn-plus`} />
            </svg>
          </div>
        </li>
        <li>
          Children
          <div className="toggle">
            <svg data-name="children-minus">
              <use href={`${icons}#btn-minus`} />
            </svg>
            <span className="children-count">0</span>
            <svg data-name="children-plus">
              <use href={`${icons}#btn-plus`} />
            </svg>
          </div>
        </li>
        <li>
          Room
          <div className="toggle">
            <svg data-name="room-minus">
              <use href={`${icons}#btn-minus`} />
            </svg>
            <span className="rooms-count">0</span>
            <svg data-name="room-plus">
              <use href={`${icons}#btn-plus`} />
            </svg>
          </div>
        </li>
        <li id="li-baby-age">
          What is the age of the child you are travelling with?
          <select name="baby-age" id="baby-age" data-index="0">
            <option value="0">0 years old</option>
            <option value="1">1 years old</option>
            <option value="2">2 years old</option>
            <option value="3">3 years old</option>
            <option value="4">4 years old</option>
            <option value="5">5 years old</option>
            <option value="6">6 years old</option>
            <option value="7">7 years old</option>
            <option value="8">8 years old</option>
            <option value="9">9 years old</option>
            <option value="10">10 years old</option>
            <option value="11">11 years old</option>
            <option value="12">12 years old</option>
            <option value="13">13 years old</option>
            <option value="14">14 years old</option>
            <option value="15">15 years old</option>
            <option value="16">16 years old</option>
            <option value="17">17 years old</option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default ModalWindow;
