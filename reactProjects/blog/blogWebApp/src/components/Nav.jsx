const Nav = () => {
  return (
    <div>
      <div className="flex justify-between gap-6 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <h1 className="font-extrabold  text-3xl">Blog</h1>

        <div className="flex justify-between text-2xl items-center font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>

          <img src="" alt="" />

         
        </div>
      </div>
      <div className="flex gap-2 text-black mt-12 p-10">
        <label className="m-2 font-bold text-lg">
          Search For Keywords
          <input type="text" className="rounded-3xl border-0 mx-2 border-2" />
        </label>
        <h3 className="p-2 px-6 rounded-3xl">My topics:</h3>
        <ul className="flex gap-4 font-bold">
          <li className="p-2 px-6 rounded-3xl bg-gray-200">Tech</li>
          <li className="p-2 px-6 rounded-3xl bg-gray-200">Tech jobs</li>
          <li className="p-2 px-6 rounded-3xl bg-gray-200">social lifestyle</li>
          <li className="p-2 px-6 rounded-3xl bg-gray-200">Christainity</li>
          <li className="p-2 px-6 rounded-3xl bg-gray-200">Faith</li>
        </ul>
      </div>

      <div className="flex items-center">
      <p className="font-bold text-2xl">
            Write
          </p>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
      </div>
    </div>
  );
};

export default Nav;
