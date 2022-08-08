import React from 'react';

type DataFetchProps = {
    status: "loading" | "error" | "success";
}

type DataFetch = {status: string}
const DataFetch = ({ status }: DataFetchProps) => {
    if (status === "loading") {
       return <h2>Data is loading....</h2>
    }
    else if (status === "error") {
       return <h2>Error. Data could not found</h2>
    }
    return (
        <div>
            
           
            <h2>Data fetched Successfully</h2>
        </div>
    );
};

export default DataFetch;