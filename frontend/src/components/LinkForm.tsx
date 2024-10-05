import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { serverUrl } from "../helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface ILinkFormProps {}

const LinkForm: React.FunctionComponent<ILinkFormProps> = () => {
  const [fullURL, setFull] = useState<string>("");
  const [shortUrl, setShortURL] = useState<string>("");
  // const [close, setClose] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const validateURL = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  const copyURL = async (url: string) => {
    try {
      await navigator.clipboard.writeText(`${serverUrl}/${url}`);
      toast.success("URL copied!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const shortClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!validateURL(fullURL)) {
      toast.error("Invalid URL");
      return;
    }
    setLoading(true);
    setShortURL("");
    try {
      toast.loading("Shortning the URL...");
      const response = await axios.post(`${serverUrl}`, {
        fullUrl: fullURL,
      });
      console.log(response.data);
      setShortURL(response.data.shortUrl);
      toast.dismiss();
    } catch (error) {
      toast.error("Failed to shorten URL");
    } finally {
      setLoading(false);
    }
  };

  // const closeLink = () => {
  //   setClose((prev) => !prev);
  // };

  return (
    <div className=" mt-16 pt-10 md:p-10 md:m-10 flex flex-col justify-center ">
      <ToastContainer />
      <h1 className=" text-white text-center md:m-6 text-4xl md:text-6xl font-semibold">
        <span className="text-[#a783e1]">Your Short Link</span> is here!
      </h1>
      <form className="w-full flex flex-col md:flex-row items-center mt-6">
        <input
          type="url"
          name=""
          id=""
          className="p-4 m-3 w-full rounded-lg text-white  bg-transparent focus:outline-none border border-[#fff]"
          placeholder="Enter your URL"
          onChange={(e) => setFull(e.target.value)}
        />
        <button
          className="p-4 mt-5 md:mt-0 px-8 m-2 bg-transparent border  shadow-md w-full md:w-36 text-center  shadow-[#a783e1] text-white border-[#a783e1] rounded-lg hover:bg-[#a783e1] hover:shadow-none duration-700"
          onClick={shortClick}
        >
          {shortUrl ? "Shortend" : "Shorten"}
        </button>
      </form>
      {loading ? (
        <h1 className="mx-auto text-4xl font-bold">Loading...</h1>
      ) : shortUrl ? (
        <div className="relative gradient p-2 md:p-10 md:py-14 m-10 rounded-md justify-between items-center bg-[#7976aa] md:w-full max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="p-2 text-white md:text-2xl text-left font-bold">{`${serverUrl}/${shortUrl}`}</h1>

            <img
              width="30"
              height="30"
              src="https://img.icons8.com/pastel-glyph/30/FFFFFF/copy--v1.png"
              alt="copy--v1"
              className="hover:cursor-pointer shadow-[#a589bd] shadow-lg mr-5"
              onClick={() => copyURL(shortUrl)}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LinkForm;