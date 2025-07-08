import { ArrowUp, File, Github, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Daniel Hurník All rights reserved.
            </p>
            <span className="flex flex-row gap-x-5 justify-start mr-52">
                <a href="https://www.linkedin.com/in/daniel-hurník-077b27231/" className="hover:text-blue-500 transition-colors" target="_blank"><Linkedin /></a>
                <a href="https://github.com/Xylofonoda" className="hover:text-blue-500 transition-colors" target="_blank"><Github /></a>
                <a
                    href="/resumedanielhurnik.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-blue-500 transition-colors"
                >
                    <File />
                </a>
            </span>
            <a
                href="#home"
                className="p-2 rounded-full text-white hover:text-blue-500 transition-colors"
            >
                <ArrowUp size={20} />
            </a>
        </footer>
    );
};

export default Footer;