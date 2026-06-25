// components/Amenitiess.tsx

import {
  FaDumbbell,
  FaBasketballBall,
  FaRunning,
  FaBicycle,
  FaSwimmingPool,
  FaChild,
  FaPaw,
  FaCircle
} from "react-icons/fa";

import { GiTennisRacket, GiSteam } from "react-icons/gi";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { PiCubeFocusBold } from "react-icons/pi";

const amenities = [
  { icon: <FaDumbbell />, title: "Gym" },
  { icon: <FaBasketballBall />, title: "Basketball Court" },
  { icon: <MdOutlineSportsGymnastics />, title: "Outdoor Gym" },
  { icon: <FaRunning />, title: "Jogging Track" },
  { icon: <FaCircle />, title: "Billiards Table" },
  { icon: <GiSteam />, title: "Steam Rooms" },

  { icon: <GiTennisRacket />, title: "Tennis Court" },
  { icon: <FaBicycle />, title: "Skating Rink" },
  { icon: <FaSwimmingPool />, title: "Swimming Pools" },
  { icon: <PiCubeFocusBold />, title: "Creche" },
  { icon: <FaChild />, title: "Kids' Play Area" },
  { icon: <FaPaw />, title: "Pet Park" },
];

export function Amenitiess() {
  return (
    <section className="bg-[#f5f5f5] py-10" id="amenities">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-xl md:text-3xl font-semibold mb-6">
          Amenities
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md h-[150px] flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-[12px] md:text-[16px] font-medium leading-6 px-2">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}