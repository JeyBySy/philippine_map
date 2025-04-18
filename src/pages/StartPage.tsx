import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import React from "react"
import Footer from "../components/Footer"
import Button from "../components/Button"

const StartPage: React.FC = () => {
  return (
    <>
      <div className="lg:container m-2 flex flex-col items-center justify-center border-4 border-dashed py-20 relative">
        <div className="w-full">
          <motion.h1 className="lg:text-6xl text-3xl font-bold text-center text-white py-5 px-2">
            _MapaManiaPH_
          </motion.h1>
          <p className="lg:text-sm text-[10px] mx-4 text-center text-gray-300 mb-6">
            Challenge your knowledge of the Philippine map!
          </p>
        </div>
        <div className="lg:w-1/3 w-full px-2 flex flex-col gap-4  mx-auto">
          <Link to={"/quickstart"}>
            <Button btnName="🇵🇭 Quick Start" btnColor="sky" event={() => { }} />
          </Link>

          <Link to={"/exploremap"}>
            <Button
              btnName="🌍 Explore Map"
              btnColor="emerald"
              event={() => { }}
            />
          </Link>

          <Link to={"/challenge"}>
            <Button
              btnName="⏱️ Challenge Mode"
              btnColor="red"
              event={() => { }}
            />
          </Link>

          {/* Not yet sure to include feature lol */}
          <div className="relative cursor-not-allowed pointer-events-auto">
            <div className="absolute z-10 w-full h-full flex items-center justify-center text-lg backdrop-blur-[2px]">
              🔒
            </div>
            <Link to={"/multiplayer"}>
              <Button
                btnName="🔥 Multiplayer"
                btnColor="gray"
                event={() => { }}
              />
              {/* bg-amber-600 hover:bg-amber-700 */}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default StartPage
