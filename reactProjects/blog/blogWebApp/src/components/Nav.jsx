
const Nav = () => {
  return (
    <div className="flex gap-2 text-black mt-12 p-10">
      <label className="m-2">
        Search For Keywords
      <input type="text"  className="rounded-3xl border-0 mx-2"/>
      </label>
        <h3 className="p-2 px-6 rounded-3xl">My topics:</h3>
        <ul className="flex gap-4 font-bold">
            <li className="p-2 px-6 rounded-3xl bg-gray-200">Tech</li>
            <li className="p-2 px-6 rounded-3xl bg-gray-200">Tech jobs</li>
            <li className="p-2 px-6 rounded-3xl bg-gray-200">social lifestyle</li>
        </ul>
    </div>
  )
}

export default Nav