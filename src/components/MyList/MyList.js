import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader.jsx";
import "./MyList.css";
import { v4 as uuidv4 } from "uuid";
import loginImg from "../../img/loginImg.svg";
import emptyImg from "../../img/emptyImg.svg";
import MyListCard from "./MyListCard/MyListCard.js";
import { db } from "../../service/firebase-config";
import { doc, getDoc } from "firebase/firestore";

const MyList = ({ status, userId }) => {
  const [userWishList, setUserWishList] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const getData = async () => {
    const docRef = doc(db, "users", userId);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserWishList(docSnap.data().wishlist);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    setIsLoading(false);
    // eslint-disable-next-line
  }, [status]);

  return (
    <div className="container-fluid MyListBKG">
      <div style={{ height: "66px" }}></div>
      {isloading ? (
        <Loader />
      ) : status ? (
        userWishList.length === 0 ? (
          // Empty
          <div className="ccc">
            <img
              src={emptyImg}
              alt="Have a favorite movie first~"
              style={{ width: "300px", height: "400px" }}
            />
            <h1 className="mt-3">It's empty here.</h1>
            <h1 className="mt-3">Go back and find one!!</h1>
          </div>
        ) : (
          // Data
          <div>
            <h1 className="ms-3 z2">My Wishlist</h1>
            <div className="MyListCardPos container-fluid">
              {userWishList &&
                userWishList.map((movie) => {
                  return (
                    <MyListCard
                      key={uuidv4()}
                      title={movie.title}
                      releaseDate={movie.release_date}
                      poster_path={movie.poster_path}
                      id={movie.id}
                    />
                  );
                })}
            </div>
          </div>
        )
      ) : (
        // Login
        <div className="ccc">
          <img
            src={loginImg}
            alt="Please login first"
            style={{ width: "300px", height: "400px" }}
          />
          <h1 className="mt-3">Please login first</h1>
        </div>
      )}
    </div>
  );
};

export default MyList;
