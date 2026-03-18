import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [figData, setFigData] = useState([]);

    const [idx, setIdx] = useState(1);

    const fetchImages = async () => {
        const response = await axios.get(
            `https://picsum.photos/v2/list?page=${idx}&limit=10`,
        );
        setFigData(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        fetchImages();
    }, [idx]);

    let printImgData = <h3 className="absolute top-1/2 left-1/2">Loading...</h3>;

    if (figData.length > 0) {
        printImgData = figData.map((e, index) => {
            return (
                <a href={e.url} target="_blank">
                    <div
                        key={index}
                        className="flex flex-col gap-2 justify-center items-center"
                    >
                        <div className="h-40 w-44 overflow-hidden rounded-2xl">
                            <img
                                className="h-full w-full object-center"
                                src={e.download_url}
                                alt=""
                            />
                        </div>
                        <div className="border px-4 py-1 rounded-3xl bg-gray-200 text-black font-bold">
                            {e.author}
                        </div>
                    </div>
                </a>
            );
        });
    }

    return (
        <div className="h-screen overflow-auto p-10 bg-gray-900 text-white">
            {/* <div
                className="bg-yellow-500 text-black px-4 py-2 rounded-2xl w-40 cursor-pointer"
                onClick={() => {
                    fetchImages();
                }}
            >
                Fetch Images
            </div> */}
            {/* {idx} */}

            <div className="flex flex-wrap gap-10 h-[85%]">
              {printImgData}
            </div>

            <div className="flex justify-center mt-10 gap-10">
                <button
                    onClick={() => {
                      if(idx > 1){
                          setFigData([]);
                          setIdx(idx-1)
                        }
                    }}
                    className="bg-green-400 text-black px-4 py-1 rounded-4xl"
                >
                    prev
                </button>
                Page {idx}
                <button
                    onClick={() => {
                        setFigData([]);
                        setIdx(idx + 1);
                    }}
                    className="bg-green-400 text-black px-4 py-1 rounded-4xl"
                >
                    next
                </button>
            </div>
        </div>
    );
};

export default App;
