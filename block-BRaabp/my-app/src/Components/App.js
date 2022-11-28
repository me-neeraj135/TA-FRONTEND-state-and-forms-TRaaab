/** @format */
import React from "react";
import "../Style/App.css";

import data from "../Data/font.json";
import InputBar from "./InputBar";
import Cards from "./Cards";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: `Whereas disregard and contempt for human rights have resulted`,
      fontSize: 16,
      fontMode: "sentence",
      customValue: ``,
    };
  }
  handleChange = event => {
    // console.log(event.target.value, `eee`);
    this.setState({
      customValue: event.target.value,
      inputValue: event.target.value,
      fontMode: `custom`,
    });
  };

  handleRange = event => {
    console.log(event.target.value, `ff`);

    this.setState(prevState => {
      return {
        fontSize: event.target.value,
      };
    });
  };

  typeHandler = event => {
    // console.log(event.target.value, `mmm`);
    switch (event.target.value) {
      case `sentence`:
        this.setState({
          fontMode: event.target.value,
          inputValue: `  Whereas disregard and contempt for human rights have resulted`,
        });
        break;
      case "paragraph":
        this.setState({
          fontMode: event.target.value,
          inputValue: `No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.`,
        });
        break;

      case `custom`:
        this.setState({
          fontMode: event.target.value,
          inputValue: ``,
        });
        break;
      default:
        this.setState({
          fontMode: event.target.value,
          inputValue: `Whereas disregard and contempt for human rights have resulted`,
        });
        break;
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header  ">
          <nav className="container">
            <div>
              <svg
                _ngcontent-rws-c91=""
                xmlns="http://www.w3.org/2000/svg"
                title="Google Fonts"
                fill="currentColor"
                className="logo"
                width="200"
                height="28"
              >
                <path
                  _ngcontent-rws-c91=""
                  d="M83.41 12.21v7.06h-2.12V2.81h9.61v2.02h-7.5v5.4h6.76v1.98h-6.75ZM91.6 13.64c0-1.73.54-3.17 1.63-4.3 1.1-1.13 2.49-1.7 4.16-1.7s3.05.57 4.14 1.7c1.1 1.13 1.66 2.57 1.66 4.3 0 1.75-.55 3.18-1.66 4.3-1.09 1.13-2.47 1.7-4.14 1.7-1.67 0-3.06-.57-4.16-1.7-1.09-1.13-1.63-2.57-1.63-4.3Zm2.11 0c0 1.21.35 2.19 1.06 2.94.71.75 1.58 1.13 2.62 1.13s1.92-.38 2.62-1.13c.71-.75 1.06-1.73 1.06-2.94 0-1.2-.35-2.17-1.06-2.92-.72-.77-1.59-1.15-2.62-1.15s-1.9.38-2.62 1.15c-.71.75-1.06 1.72-1.06 2.92ZM104.89 8h2.02v1.56h.09c.32-.55.82-1.01 1.48-1.38.66-.37 1.36-.55 2.08-.55 1.38 0 2.44.39 3.19 1.18.74.79 1.12 1.91 1.12 3.37v7.08h-2.12v-6.95c-.05-1.84-.97-2.76-2.78-2.76-.84 0-1.55.34-2.12 1.02-.57.68-.85 1.5-.85 2.45v6.23h-2.12V8h.01ZM121.24 19.46c-.92 0-1.68-.28-2.29-.85-.61-.57-.92-1.36-.93-2.37v-6.3h-1.98V8h1.98V4.55h2.12V8h2.76v1.93h-2.76v5.61c0 .75.15 1.26.44 1.53.29.27.62.4.99.4.17 0 .33-.02.49-.06.16-.04.31-.09.45-.15l.67 1.89c-.56.21-1.2.31-1.94.31ZM133.78 16.15c0 .98-.43 1.81-1.29 2.48-.86.67-1.94 1.01-3.24 1.01-1.13 0-2.13-.3-2.99-.89a4.901 4.901 0 0 1-1.84-2.33l1.89-.81c.28.67.68 1.2 1.21 1.58.53.38 1.11.56 1.74.56.67 0 1.24-.15 1.69-.44.45-.29.68-.64.68-1.04 0-.72-.55-1.25-1.66-1.59l-1.93-.48c-2.19-.55-3.29-1.61-3.29-3.17 0-1.03.42-1.85 1.25-2.47.83-.62 1.9-.93 3.21-.93 1 0 1.9.24 2.7.71.81.48 1.37 1.11 1.69 1.91l-1.89.78c-.21-.47-.56-.85-1.05-1.12-.48-.27-1.02-.4-1.62-.4-.55 0-1.05.14-1.48.41-.44.28-.66.61-.66 1.01 0 .64.61 1.1 1.82 1.38l1.7.44c2.24.57 3.36 1.69 3.36 3.4ZM9.45 19.64C4.32 19.64 0 15.46 0 10.32 0 5.18 4.32 1 9.45 1c2.84 0 4.86 1.11 6.39 2.57l-1.8 1.8c-1.09-1.02-2.57-1.82-4.59-1.82-3.75 0-6.68 3.02-6.68 6.77 0 3.75 2.93 6.77 6.68 6.77 2.43 0 3.82-.98 4.71-1.86.73-.73 1.2-1.77 1.39-3.2h-6.1V9.48h8.57c.09.45.14 1 .14 1.59 0 1.91-.52 4.27-2.2 5.95-1.64 1.71-3.73 2.62-6.51 2.62ZM31.41 13.64c0 3.45-2.66 6-5.91 6s-5.91-2.55-5.91-6c0-3.48 2.66-6 5.91-6s5.91 2.52 5.91 6Zm-2.59 0c0-2.16-1.54-3.64-3.32-3.64-1.78 0-3.32 1.48-3.32 3.64 0 2.14 1.54 3.64 3.32 3.64 1.78 0 3.32-1.51 3.32-3.64ZM44.67 13.64c0 3.45-2.66 6-5.91 6-3.26 0-5.91-2.55-5.91-6 0-3.48 2.66-6 5.91-6s5.91 2.52 5.91 6Zm-2.59 0c0-2.16-1.54-3.64-3.33-3.64-1.78 0-3.32 1.48-3.32 3.64 0 2.14 1.54 3.64 3.32 3.64 1.79-.01 3.33-1.51 3.33-3.64ZM57.59 8v10.77c0 4.43-2.61 6.25-5.7 6.25-2.91 0-4.66-1.95-5.32-3.55l2.3-.95c.41.98 1.41 2.14 3.02 2.14 1.98 0 3.21-1.23 3.21-3.52v-.86H55c-.59.73-1.73 1.36-3.16 1.36-3 0-5.75-2.61-5.75-5.98 0-3.39 2.75-6.02 5.75-6.02 1.43 0 2.57.64 3.16 1.34h.09V8h2.5Zm-2.31 5.66c0-2.11-1.41-3.66-3.2-3.66-1.82 0-3.34 1.55-3.34 3.66 0 2.09 1.52 3.61 3.34 3.61 1.79 0 3.2-1.52 3.2-3.61ZM62.21 1.64v17.64h-2.64V1.64h2.64ZM72.58 15.61l2.05 1.36c-.66.98-2.25 2.66-5 2.66-3.41 0-5.87-2.64-5.87-6 0-3.57 2.48-6 5.58-6 3.11 0 4.64 2.48 5.14 3.82l.27.68-8.02 3.32c.61 1.2 1.57 1.82 2.91 1.82s2.26-.66 2.94-1.66Zm-6.3-2.15 5.36-2.23c-.3-.75-1.18-1.27-2.23-1.27-1.33 0-3.19 1.18-3.13 3.5Z"
                ></path>
              </svg>
            </div>
          </nav>
        </header>
        <section className="container inputBarContainer">
          <InputBar
            change={this.handleChange}
            state={this.state}
            fontType={this.typeHandler}
            range={this.handleRange}
          />
        </section>
        <section className="container  cardContainer">
          <ul>
            {data.families.map((elm, i) => {
              return (
                <Cards key={i} family={elm} index={i} inputText={this.state} />
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
