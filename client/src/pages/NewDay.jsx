import { GrArticle } from "react-icons/gr";
import { CgUser } from "react-icons/cg";
import { CiClock2 } from "react-icons/ci";

export const Day = () => {
  return (
    <div className="flex flex-col px-10 py-10 gap-10">
      {/* Today and story count */}

      <div className="flex flex-col justify-center gap-1">
        <h1 className="text-xl font-bold">Today</h1>
        <div className="flex flex-row gap-2 items-center text-neutral-600">
          <GrArticle size={15}></GrArticle>
          <p className="text-xs">4 stories</p>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-5xl font-extrabold">Kinesisk skib i Kattegat</h1>
        <div className="flex text-neutral-600 text-sm gap-4">
          <div className="flex gap-1 items-center">
            <CgUser></CgUser>
            <p>Marie Boe</p>
            <CgUser></CgUser>
            <p>Thomas Nørmark</p>
            <CgUser></CgUser>
            <p>Oliver Fruergaard</p>
          </div>
          <div className="flex gap-1 items-center">
            <CiClock2></CiClock2>
            <p>14:05</p>
            <p className="text-xs">(Updated 15:02)</p>
          </div>
        </div>
      </div>
      <div className="flex max-w-[70%] gap-24">
        <div className="flex flex-col max-w-3xl gap-7">
          <h2>
            Udenrigsministeriet har slået alarm, og danske myndigheder er i
            Kattegat, hvor et kinesisk skib er stoppet og mistænkt for at have
            lavet sabotage på ledninger i Østersøen. Friberg og Ishøy har snor i
            Forsvarsministeren.
          </h2>
          <div className="flex flex-col gap-2">
            <div>
              <p className="font-extrabold">Kilder</p>
              <ul>
                <li className="text-xs">
                  Flemming Splidsboel, FAK: 12 34 56 78
                </li>
                <li className="text-xs">
                  Flemming Splidsboel, FAK: 12 34 56 78
                </li>
                <li className="text-xs">
                  Flemming Splidsboel, FAK: 12 34 56 78
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
