import Image from "next/image";

interface IconProp {
  iconCode: string;
}
let icon: any;
const WeatherIcon: React.FC<IconProp> = ({ iconCode }) => {
  switch (iconCode) {
    case "01d":
      icon = (
        <Image src="/../public/sunny.png" height={100} width={100} alt="icon" />
      );
      break;
    case "01n":
      icon = (
        <Image src="/../public/moon.png" height={100} width={100} alt="icon" />
      );
      break;
    case "02d":
      icon = (
        <Image
          src="/../public/cloudyday.png"
          height={100}
          width={100}
          alt="icon"
        />
      );
      break;
    case "02n":
      icon = (
        <Image
          src="/../public/cloudynight.png"
          height={100}
          width={100}
          alt="icon"
        />
      );
      break;
    case "03d":
      icon = (
        <Image
          src="/../public/clouds.png"
          height={100}
          width={100}
          alt="icon"
        />
      );
      break;
    case "03n":
      icon = (
        <Image
          src="/../public/clouds.png"
          height={100}
          width={100}
          alt="icon"
        />
      );
      break;
    case "04d":
      icon = (
        <Image
          src="/../public/clouds.png"
          alt="icon"
          height={100}
          width={100}
        />
      );
      break;
      case "04n":
      icon = (
        <Image
          src="/../public/clouds.png"
          alt="icon"
          height={100}
          width={100}
        />
      );
      break;
      case "09d":
      icon = (
        <Image
          src="/../public/rainyday.png"
          alt="icon"
          height={100}
          width={100}
        />
      );
      break;
      case "09n":
      icon = (
        <Image
          src="/../public/rainyday.png"
          alt="icon"
          height={100}
          width={100}
        />
      );
      break;
      case "10d":
      icon = (
        <Image
          src="/../public/cloudrain.png"
          alt="icon"
          height={100}
          width={100}
        />
      );
      break;
      case "10n":
      icon = (
        <Image
          src="/../public/cloudrain.png"
          alt="icon"
          height={100}
          width={100}
        />
      );
      break;
      case "11d":
      icon = (
        <Image
          src="/../public/thunderstorm.png"
          alt="icon"
          height={100}
          width={100}
        />
      );
      break;
      case "11n":
      icon = (
        <Image
          src="/../public/thunderstorm.png"
          alt="icon"
          height={100}
          width={100}
        />
      );
      break;
      case "13d":
      icon = (
        <Image
          src="/../public/snowynight.png"
          alt="icon"
          height={100}
          width={100}
        />
      );
      break;
      case "13n":
      icon = (
        <Image
          src="/../public/snowynight.png"
          alt="icon"
          height={100}
          width={100}
        />
      );
      break;
    case "50d":
      icon = (
        <Image
          src="/../public/windynight.png"
          alt="icon"
          height={100}
          width={100}
        />
      );
      break;
    case "50n":
      icon = (
        <Image
          src="/../public/windynight.png"
          alt="icon"
          height={100}
          width={100}
        />
      );
      break;
  }
  return <div className="text-green-50 fill-current">{icon}</div>;
};

export default WeatherIcon;
