interface userProps {
    name: string;
    location: string;
    link: string;
}

const ImageUser: React.FC <userProps> = ({ name, location, link }) => {
    return (
        <div className="flex flex-col bottom-0">
            <span>{location}</span>
            <span className="duration-150 ease-in-out">{name} / <a className="hover:text-gray-300 duration-200 ease-in-out" href={link} target="_blank" rel="noreferrer">Unsplash</a></span>
        </div>
    );
}
export default ImageUser;