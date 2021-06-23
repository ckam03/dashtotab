interface TogglerProps {
    name: string;
    toggle: any;
    isOn: any;
    toggleID: any;
    
  }
  
  const Toggler: React.FC<TogglerProps> = ({ name,toggle,isOn,toggleID }) => {
    return (
      <>
        <label
          className={`bg-gray-500 cursor-pointer rounded-xl h-6 w-12 flex items-center px-0.5 ${
            isOn ? "bg-green-500" : "bg-gray-400"
          }`}
        >
          <input type="checkbox" className="hidden" name={name} checked={isOn} onChange={toggle} />
          <div className={`rounded-full bg-gray-200 w-5 h-5 ease-in-out duration-300 ${ isOn ? "transform translate-x-6" : ""}`}></div>
        </label>
      </>
    );
  };
  
  export default Toggler;
  