const links = ["Company", "About Us", "Team"];
const linkUrls = [
    "/company", // URL for "Company"
    "/about-us", // URL for "About Us"
    "/team", // URL for "Team"
];
const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <footer className="px-8 py-28"> {/* Added background for visibility */}
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={linkUrls[index]} // Set href to the corresponding URL
                            className="font-light  modern-hover "
                        >
                            {link}
                        </a>
                    ))}
                </div>
                <p className="mt-6 text-sm text-gray-500">
                    Copyright &copy; {currentYear} Escucha-Tec
                </p>
            </div>
        </footer>
    );
}

export default Footer;
