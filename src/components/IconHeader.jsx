function IconHeader() {
    return (
        <ul className="flex max-[1003px]:hidden flex-row-reverse ml-auto w-full font-bold ">
            <button  className="cursor-pointer bg-white rounded-full mr-6 w-10 h-10">
            <li className="text-lg text-black ml-auto ">℃</li>
            </button >
            <button  className="cursor-pointer bg-white rounded-full mr-6 w-10 h-10">
            <li className="text-lg text-black ">℉</li>
            </button >
        </ul>
    )
}

export default IconHeader
