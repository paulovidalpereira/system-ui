import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen text-sm text-gray-500">
        <div class="app__nav bg-white shadow-sm border-b px-4 h-12 flex flex-row items-center">
          <a class="#" href="">
            <b>SYSTEM UI</b>
          </a>
          <nav class="ml-4">
            <div>
              <a
                href="#"
                class="block flex align-items justify-items-center border h-8 w-8 overflow-hidden bg-gray-100 border-gray-300"
              >
                <svg
                  class="h-3 w-3 m-auto fill-current text-gray-500"
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
          <div class="nav-user ml-auto">User Menu</div>
        </div>
        <div class="app__header bg-red px-4 h-12 flex items-center select-none">
          <div class="app__title">Teste</div>
        </div>
        <div class="app__wrapper p-2 flex-grow flex">
          <div class="app__sidebar w-60 m-2">
            <div class="panel bg-white rounded-sm p-4">teste</div>
          </div>
          <div class="app__container m-2 flex-auto flex flex-col">
            <div class="panel mb-4 bg-white rounded-sm p-4 flex-grow">
              <h1 class="mb-4 text-bold border-b">Buttons</h1>
              <a href="#" class="btn">
                <svg
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Teste</span>
              </a>

              <button type="button" class="btn">
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  stroke="currentColor"
                >
                  <path d="M24 19v-7h-1v-1c0-1.657-1.343-3-3-3h-13v4h-6v-7h-1v14h1v-2h22v2h1zm-23-3h22v-3h-22v3zm7-4h14v-1c0-1.105-.895-2-2-2h-12v3zm-4-5c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0 1c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
                </svg>
                <span>Teste</span>
              </button>
            </div>

            <div class="panel mb-4 bg-white rounded-sm p-4 flex-grow">
              <h1 class="mb-4 text-bold border-b">Form</h1>
              <div>
                <label>Campo</label>
                <input type="text" name="teste" id="teste" class="form-input" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
