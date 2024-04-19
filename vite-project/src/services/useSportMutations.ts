import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { useState } from 'react'
import SportService from './sport.service'

type ActionType = 'addPlayer' | 'updatePlayer' | 'deletePlayer'

interface MutationAction {
    actionType: ActionType
    [key: string]: any
}

const usePlayerMutations = (): {
    updatePlayer: UseMutationResult<any, unknown, MutationAction, unknown>
    isUpdating: Record<string, boolean>
    setIsUpdating: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
} => {
    const [isUpdating, setIsUpdating] = useState<Record<string, boolean>>({})

    const executeMutation = async ({ actionType, ...payload }: MutationAction) => {
        const sportService = SportService()
        const action: { [key in ActionType]?: Function } = {
            addPlayer: sportService.addPlayer,
            updatePlayer: sportService.editPlayer,
            deletePlayer: sportService.deletePlayer
        }

        const serviceMethod = action[actionType]
        if (!serviceMethod) {
            throw new Error(`Unknown action type: ${actionType}`)
        }
        return serviceMethod(payload)
    }

    const updatePlayer = useMutation<any, unknown, MutationAction>({
        mutationFn: executeMutation,
        onMutate: ({ actionType }) => {
            setIsUpdating({ ...isUpdating, [actionType]: true })
        },
        onSuccess: () => {
            console.log('Mutation successful')
        },
        onError: (error) => {
            console.error('Error during mutation:', error)
        },
        onSettled: ({ actionType }) => {
            setIsUpdating({ ...isUpdating, [actionType]: false })
        },
    })

    return { updatePlayer, isUpdating, setIsUpdating }
}

export default usePlayerMutations