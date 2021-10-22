import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="app">
        <div className="app__nav">
          <a className="#" href="">
            <b>SYSTEM UI</b>
          </a>
          <nav>
            <div>
              <a href="#" className="">
                <svg
                  viewBox="0 0 24 24"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  stroke="currentColor"
                >
                  <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                </svg>
              </a>
            </div>
          </nav>
          <div className="nav-user">User Menu</div>
        </div>
        <div className="app__header">
          <div className="app__title">Teste</div>
        </div>
        <div className="app__wrapper">
          <div className="app__sidebar">
            <div className="panel bg-white">teste</div>
          </div>
          <div className="app__container">
            <div className="panel">
              <h1 className="">Buttons</h1>

              <a href="#" className="btn">
                Teste
              </a>

              <button type="button" className="btn">
                <span>Teste</span>
              </button>
            </div>
            <div className="panel">
              <h1 className="">Form</h1>
              <div>
                <label>Campo</label>
                <input
                  type="text"
                  name="teste"
                  id="teste"
                  className="form-input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
