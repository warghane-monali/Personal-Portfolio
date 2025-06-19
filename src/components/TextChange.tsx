import React, { useEffect, useState } from 'react'

export const TextChange:React.FC = () => {
    const texts = ["Hi, I'm Monali", "Hi, I'm Monali", "Hi, I'm Monali"]

    const [currentText, setCurrentText] = useState<string>("")
    const [endValue, setEndValue] = useState<number>(0)
    const [isForward, setIsForward] = useState<boolean>(true)
    const [index, setIndex] = useState<number>(0)

    useEffect(() =>{
        const intervalId = setInterval(() =>{
            setCurrentText(texts[index].substring(0, endValue));
            if(isForward){
                setEndValue((prev) => prev + 1);
            }else{
                setEndValue((prev) => prev - 1)
            }
            if(endValue > texts[index].length + 10){
                setIsForward(false)
            }
            if(endValue < 2.1){
                setIsForward(true)
                setIndex((prev) =>prev & texts.length)
            }
        }, 50)

        return () => clearInterval(intervalId)

    },[endValue, isForward, index, texts])

  return (
    <div className='transition ease duration-300'>{currentText}</div>
  )
}
