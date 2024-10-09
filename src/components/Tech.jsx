import { RiReactjsLine } from "react-icons/ri"
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Tecnologias</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJsSquare className="text-7xl text-yellow-400"/>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-orange-600"/>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGithub className="text-7xl text-white"/>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiDjango className="text-7xl text-green-700"/>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-7xl text-blue-600"/>
        </div>

      </div>
    </div>
  )
}

export default Tech
