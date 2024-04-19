import { useMemo } from "react";

const useColumns = (array: any[], depArray?: any) => {

    const columns = useMemo( //TS helps with the autocomplete while writing columns
        () => array, [depArray || []]);
    return columns;
}

export default useColumns;