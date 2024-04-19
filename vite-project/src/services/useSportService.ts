import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
    UseQueryResult,
} from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import SportService from './sport.service';
import useSportMutations from './useSportMutations';

interface IUseSport {
    allPlayers: UseQueryResult<any[]>;

    isUpdating: any
    setIsUpdating: any
    updatePlayer: any
}

const useSportService = (): IUseSport => {
    const { isUpdating, setIsUpdating, updatePlayer } = useSportMutations();
    const sportService = SportService();

    const allPlayers = useQuery<any>({
        queryKey: ['all-players'],
        queryFn: async () => {
            return new Promise((resolve) => {
                sportService.getPlayers((res: AxiosResponse) => {
                    resolve(res.data);
                });
            });
        },
        staleTime: 1000 * 60, // 1 minutes
        enabled: true,
        refetchOnWindowFocus: false,
        refetchInterval: 1000 * 60 * 3, // 24 hours
    });

    return {
        allPlayers,
        isUpdating,
        setIsUpdating,
        updatePlayer,
    };
};

export default useSportService;
