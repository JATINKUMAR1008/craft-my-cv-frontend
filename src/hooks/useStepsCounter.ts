import { StepCounterContext } from "@/contexts/steps.counter"
import { useContext } from "react"

export const useStepCounter = () =>{
    const context = useContext(StepCounterContext)
    if(!context){
        throw new Error("Component must be wrapped with provider")
    }
    return context
}