function CardLanding({ icon, title, content }) {
    return (
        <div className="relative w-70 h-70 cursor-pointer m-3 p-6 flex flex-col items-start bg-white transition-transform duration-500 ease-in-out drop-shadow-lg hover:bg-[var(--primary-color)] hover:scale-105 rounded-lg  group border border-gray-200 hover:border-transparent">
            {/* Icon Section */}
            <div className="text-[var(--primary-color)] flex items-center justify-center w-16 h-16 group-hover:text-white">
                <i className={`${icon} text-6xl`} />
            </div>

            {/* Content Section */}
            <div className="p-4 group-hover:text-white"> {/* Target text color on hover */}
                <h6 className="mb-2 text-xl font-semibold">{title}</h6>
                <p className="leading-normal font-light">{content}</p>
            </div>
        </div>
    );
}

export default CardLanding;
