import { useRef } from "react";
import clsx from "clsx";
import { useState } from "react";
import useLazyLoad from "../useLazyLoad";
import Card from "./Card";
import { LoadingPosts } from "./LoadingPosts";
import posts from "../data.json";

const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 3;

const Second = () => {
  const images = posts["data"];
  const [searchTerm, setSearchTerm] = useState("");
  const triggerRef = useRef(null);
  const onGrabData = (currentPage) => {
    // This would be where you'll call your API
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = images.slice(
          ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
          NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
        );
        console.log(data);
        resolve(data);
      }, 3000);
    });
  };
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
  return (
    <>
      <br />
      <br />
      <div className="container p-4">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div>
        {data
          .filter((val) => {
            if (searchTerm == " ") {
              return val;
            } else if (
              val.owner.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((image) => {
            return <Card owner={image["owner"]} imageUrl={image["imageUrl"]} />;
          })}
      </div>
      <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
        <LoadingPosts />
      </div>
    </>
  );
};
export default Second;