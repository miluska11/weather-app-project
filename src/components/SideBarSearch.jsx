import React from "react";
export function SideBarSearch({
  open,
  handleClick,
  handleSubmit,
  handleChange,
  onButtonHover
}) {
  return (
    <div className="form-container right-0 shadow-md">
      <div
        className={`${
          !open && "hidden"
        } bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
        onClick={handleClick}
      ></div>

      <div
        className={`${
          open ? "w-1/4 max-[1003px]:w-full" : "w-0"
        } form-container-SideBar min-h-screen fixed top-0 left-0 transition-all duration-500 `}
      >
        <div className={`${!open && "hidden"} pt-3`}>
          <div className="flex justify-end mr-10">
            <button className="ml-4  text-white mb-14" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M17.4 0.612928C16.88 0.0929284 16.04 0.0929284 15.52 0.612928L8.99996 7.1196L2.47996 0.599595C1.95996 0.0795947 1.11996 0.0795947 0.599961 0.599595C0.0799609 1.11959 0.0799609 1.9596 0.599961 2.4796L7.11996 8.9996L0.599961 15.5196C0.0799609 16.0396 0.0799609 16.8796 0.599961 17.3996C1.11996 17.9196 1.95996 17.9196 2.47996 17.3996L8.99996 10.8796L15.52 17.3996C16.04 17.9196 16.88 17.9196 17.4 17.3996C17.92 16.8796 17.92 16.0396 17.4 15.5196L10.88 8.9996L17.4 2.4796C17.9066 1.97293 17.9066 1.1196 17.4 0.612928Z"
                  fill="#E7E7EB"
                />
              </svg>
            </button>
          </div>
          <div class=" px-12 mx-auto mt-8">
            <form
              class="flex"
              noValidate
              onSubmit={handleSubmit}
              className="flex justify-center w-full"
            >
              <input
                type="text"
                className="py-2 px-4 border w-1/2 border-white-400 flex-1 bg-color-summarycard text-white "
                onChange={handleChange}
                required
                placeholder="search location"
              />
              <button
                type="submit"
                className="py-2 ml-3 px-4  bg-blue-600 text-white font-semibold  hover:bg-blue-500"

              >
                <li aria-hidden="true" type="submit">
                  Search
                </li>
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center text-button-static items-center w-full mt-12">
            <button className="relative w-3/4  h-14 border border-transparent border-customColor transition duration-300"onClick={() => onButtonHover("london")} >
              <span className="mr-2">London</span>
              <span className="absolute inset-y-0 right-2 flex items-center">
                <i className="fas fa-chevron-right text-white">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 border-customColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </i>
              </span>
            </button>
            <button class="relative w-3/4  h-14 border border-transparent border-customColor transition duration-300 mt-12" onClick={() => onButtonHover("madrid")}>
              <span className="mr-2">Madrid</span>
              <span className="absolute inset-y-0 right-2 flex items-center">
                <i className="fas fa-chevron-right text-white">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 border-customColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </i>
              </span>
            </button>
            <button class="relative w-4/5 h-14 border border-transparent border-customColor text-button-static transition duration-300 mt-12" onClick={() => onButtonHover("Asia")}>
              <span className="mr-2">Asia</span>
              <span className="absolute inset-y-0 right-2 flex items-center">
                <i className="fas fa-chevron-right text-white">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 border-customColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
