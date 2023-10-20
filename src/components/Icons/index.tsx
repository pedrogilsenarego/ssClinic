import { IconBaseProps } from "react-icons";
import {
  AiFillCaretDown,
  AiFillDelete,
  AiFillLock,
  AiFillSound,
  AiOutlineAim,
  AiOutlineCalendar,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import {
  BiErrorCircle,
  BiPlayCircle,
  BiSolidCameraMovie,
  BiTimeFive,
} from "react-icons/bi";
import {
  BsCheck,
  BsDroplet,
  BsGraphUp,
  BsInfoCircle,
  BsLightbulbFill,
  BsLightbulbOffFill,
  BsSnow,
} from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import {
  LiaEyeSlash,
  LiaEyeSolid,
  LiaPlaySolid,
  LiaStopSolid,
} from "react-icons/lia";
import { LuBookOpen } from "react-icons/lu";
import { MdOutlineDialpad, MdOutlineEdit } from "react-icons/md";
import {
  PiFan,
  PiLightbulbThin,
  PiThermometerHotDuotone,
} from "react-icons/pi";
import { RxLoop } from "react-icons/rx";
import { TfiControlPause } from "react-icons/tfi";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { VscMenu, VscSettings } from "react-icons/vsc";

export const Icons = {
  Droplet: (props: IconBaseProps) => <BsDroplet {...props} />,
  Dial: (props: IconBaseProps) => <MdOutlineDialpad {...props} />,
  Delete: (props: IconBaseProps) => <AiFillDelete {...props} />,
  Fan: (props: IconBaseProps) => <PiFan {...props} />,
  Lock: (props: IconBaseProps) => <AiFillLock {...props} />,
  Loop: (props: IconBaseProps) => <RxLoop {...props} />,
  EyeInvisible: (props: IconBaseProps) => <LiaEyeSlash {...props} />,
  EyeVisible: (props: IconBaseProps) => <LiaEyeSolid {...props} />,
  LightBulbOn: (props: IconBaseProps) => <BsLightbulbFill {...props} />,
  LightBulbOff: (props: IconBaseProps) => <BsLightbulbOffFill {...props} />,
  Graph: (props: IconBaseProps) => <BsGraphUp {...props} />,
  Menu: (props: IconBaseProps) => <VscMenu {...props} />,
  List: (props: IconBaseProps) => <AiOutlineUnorderedList {...props} />,
  Info: (props: IconBaseProps) => <BsInfoCircle {...props} />,
  Movie: (props: IconBaseProps) => <BiSolidCameraMovie {...props} />,
  Home: (props: IconBaseProps) => <GoHome {...props} />,
  Settings: (props: IconBaseProps) => (
    <VscSettings {...props} style={{ transform: "rotate(90deg)" }} />
  ),
  Events: (props: IconBaseProps) => <HiOutlineSquare3Stack3D {...props} />,
  Error: (props: IconBaseProps) => <BiErrorCircle {...props} />,
  Sound: (props: IconBaseProps) => <AiFillSound {...props} />,
  Play: (props: IconBaseProps) => <BiPlayCircle {...props} />,
  PlayOutiline: (props: IconBaseProps) => <LiaPlaySolid {...props} />,
  Pause: (props: IconBaseProps) => <TfiControlPause {...props} />,
  Stop: (props: IconBaseProps) => <LiaStopSolid {...props} />,
  SnowFlake: (props: IconBaseProps) => <BsSnow {...props} />,
  Gears: (props: IconBaseProps) => <FiSettings {...props} />,
  Book: (props: IconBaseProps) => <LuBookOpen {...props} />,

  Calendar: (props: IconBaseProps) => <AiOutlineCalendar {...props} />,
  Time: (props: IconBaseProps) => <BiTimeFive {...props} />,
  Thermometer: (props: IconBaseProps) => <PiThermometerHotDuotone {...props} />,
  Aim: (props: IconBaseProps) => <AiOutlineAim {...props} />,
  Edit: (props: IconBaseProps) => <MdOutlineEdit {...props} />,
  User: (props: IconBaseProps) => <FaRegUser {...props} />,
  RightArrow: (props: IconBaseProps) => <TiArrowRight {...props} />,
  Radiation: (props: IconBaseProps) => <PiLightbulbThin {...props} />,
  LeftArrow: (props: IconBaseProps) => <TiArrowLeft {...props} />,
  DownArrow: (props: IconBaseProps) => <AiFillCaretDown {...props} />,
  Checked: (props: IconBaseProps) => <BsCheck {...props} />,
};
