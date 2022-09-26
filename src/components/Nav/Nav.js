import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../service/firebase-config";
import LogoY from "../../img/VmovieLogoYS.svg";

const Nav = ({ status, setStatus, setSearchKey, setUserId, scrollToTop }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    checkLoginStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkLoginStatus = () => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    });
  };

  const searchMovies = (e) => {
    e.preventDefault();
  };
  const handleSearchKeyScrollToTop = () => {
    scrollToTop();
    preventEmpty();
    setSearchKey(input);
    document.getElementById("Input").value = "";
  };

  const preventEmpty = () => {
    if (document.getElementById("Input").value !== "") {
      navigate("/Vmovie/search");
    } else {
      alert("Search keyword can not be empty!");
    }
  };

  const logout = async () => {
    await signOut(auth);
    alert("Logout successed.");
  };

  const provider = new GoogleAuthProvider();
  const loginWithGoogle = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const loginUser = result.user;
        checkUserExist(loginUser.displayName, loginUser.email, loginUser.uid);
        setUserId(loginUser.uid);
        navigate("/Vmovie/homepage");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const createUser = async (name, email, uid) => {
    await setDoc(doc(db, "users", uid), {
      name: name,
      email: email,
      wishlist: [],
    });
  };
  const checkUserExist = async (name, email, uuid) => {
    const docRef = doc(db, "users", uuid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("User exists, did not created.");
    } else {
      createUser(name, email, uuid);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Vmovie/">
          <img
            src={LogoY}
            alt="Vmovie"
            width="120"
            height="40"
            onClick={() => {
              scrollToTop();
            }}
          />
        </Link>
        <button
          className="navbar-toggler navbar-expand-sm"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "#f4c10f" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-0 mb-lg-0 fs-5">
            <li className="nav-item mx-3">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Vmovie/homepage"
                style={{ color: "white" }}
                onClick={() => {
                  scrollToTop();
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                className="nav-link"
                to="/Vmovie/topRated"
                style={{ color: "white" }}
                onClick={() => {
                  scrollToTop();
                }}
              >
                Top rated movies
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                className="nav-link"
                to="/myList"
                style={{ color: "white" }}
              >
                Wishlist
              </Link>
            </li>
            {status === true ? (
              <li className="nav-item mx-3">
                <Link
                  className="nav-link"
                  to="/Vmovie/homepage"
                  style={{ color: "white" }}
                  onClick={() => logout()}
                >
                  Logout
                </Link>
              </li>
            ) : (
              <ul
                className="navbar-nav me-auto mb-0 mb-lg-0 fs-5 ccc"
                style={{ padding: "0.5rem 0 0.5rem 0" }}
              >
                <li
                  className="nav-item mx-3 pointer"
                  onClick={() => {
                    loginWithGoogle();
                  }}
                >
                  Google Login
                </li>
              </ul>
            )}
          </ul>
          <form className="d-flex m-2" onSubmit={searchMovies}>
            <input
              className="form-control me-2 pop"
              type="text"
              placeholder="Search"
              id="Input"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              className="btn btn-outline-light"
              type="submit"
              onClick={() => {
                handleSearchKeyScrollToTop();
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
