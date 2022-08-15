const initialState: CounterType =
    {
        minValue: 0,
        counterValue: 0,
        maxValue: 1,
        message: ''
    }

export const counterReducer = (state: CounterType = initialState, action: ActionsType): CounterType => {
    switch (action.type) {
        case 'INCREMENT-VALUE': {
            return {...state, counterValue: state.counterValue + 1}
        }
        case 'RESET-VALUE':{
            return {...state, counterValue:state.minValue}
        }
        default:
            return state


    }
}

export const incCounterAC = () => ({type: 'INCREMENT-VALUE'} as const)
export const resetCounterAC = () => ({type: 'RESET-VALUE'} as const)

type CounterType = {
    minValue: number
    maxValue: number
    counterValue: number
    message: string
}

type incrementACType = ReturnType<typeof incCounterAC>
type resetCounterACType = ReturnType<typeof resetCounterAC>

type ActionsType =
    | incrementACType
    | resetCounterACType
