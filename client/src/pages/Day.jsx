import { GrArticle } from "react-icons/gr";
import { CgUser } from "react-icons/cg";
import { CiClock2 } from "react-icons/ci";

export const Day = () => {
  return (
    <div className="flex flex-col px-10 py-10">
      {/* Today */}
      <div className="flex flex-col gap-1 mb-5">
        <h1 className="text-xl font-extrabold">Today</h1>
        <div className="flex flex-row text-neutral-600 gap-1 items-center">
          <GrArticle size={15}></GrArticle>
          <p className="text-xs">4 stories</p>
        </div>
      </div>

      {/* Headline og Byline  */}
      <div className="mb-5 max-w-3xl flex flex-col gap-2">
        <h1 className="text-5xl font-extrabold">
          Kinesisk skib stoppet af danske myndigheder i Kattegat
        </h1>
        <div className="flex flex-row text-sm gap-3 text-neutral-600">
          <div className="flex flex-row gap-1 items-center">
            <CgUser></CgUser>
            <p>Oliver Fruergaard</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <CgUser></CgUser>
            <p>Byline</p>
          </div>
        </div>
      </div>

      {/* Beskrivelse */}
      <p className="max-w-4xl mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor
        molestiae, laudantium pariatur non velit. Nemo excepturi delectus
        cumque, dicta voluptate aperiam eius, a fugiat autem impedit temporibus
        ex nostrum.
      </p>

      {/* Kilder */}
      <div>
        <h1 className="font-extrabold">Kilder</h1>
        <ul className="text-sm text-neutral-600">
          <li>Flemming Splidsboel, telefon: 12345678</li>
        </ul>
      </div>
    </div>
  );
};
