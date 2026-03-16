import Aurora from "./Aurora/Aurora"
import { useState, useEffect } from "react"
import CountUp from "./CountUp/CountUp"

const PreLoader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="w-screen h-screen fixed flex items-center justify-center bg-black z-[10000] overflow-hidden">
      <Aurora
        colorStops={["#577870", "#1F97A6", "#127B99"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div className="absolute text-white text-6xl font-bold">
        <CountUp
          from={0}
          to={100}
          duration={1}
        />
      </div>
    </div>
  )
}

export default PreLoader