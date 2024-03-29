import "./Watches.css";
import { useState, useEffect } from "react";
import { BigMoreBtn } from "../../Components";
// // My utils function
import { shelvesDataloop } from "../../Utils";
// Redux toolkit
import { fetchProducts } from "../../rtk/slices/products-slice";
import { useSelector, useDispatch } from "react-redux";
import { hideWatchesMoreBtn, selectWatchesBtn } from "../../rtk/slices/bigMoreBtn-slice";

export default function Watches() {
  // fetch Data from Redux
  const dispatch = useDispatch();
  const category = "watches"
  useEffect(() => {
    // Check if specific data for this category page exist (object key ex: home, phone..) in Redux data, if not exist fetch
    if (!(category in data.entities)) {
      dispatch(fetchProducts(category));
    }
  }, []);
  const data = useSelector((data) => data.products);

  // show/hide Big more Button & add Extra Component
  const moreBtnState = useSelector(selectWatchesBtn);

  // shelves data
  const [shelvesObj, setShelvesObj] = useState({
    apple: {
      href: "https://www.google.com/",
      title: "Apple",
      dataName: "apple",
      extraPath: "",
    },
  });

  // shelves data that appear after click 'More' button
  const [extraShelvesObj, setExtraShelvesObj] = useState({
    samsung: {
      href: "https://www.google.com/",
      title: "Samsung",
      dataName: "samsung",
      extraPath: "",
    },
    fitbit: {
      href: "https://www.google.com/",
      title: "Fitbit",
      dataName: "fitbit",
      extraPath: "",
    },
    garmin: {
      href: "https://www.google.com/",
      title: "Garmin",
      dataName: "garmin",
      extraPath: "",
    },
    google: {
      href: "https://www.google.com/",
      title: "Google",
      dataName: "google",
      extraPath: "",
    },
  });

  return (
    <>
      {shelvesDataloop(shelvesObj, data, category)}

      {/* Hide Big more Button & add components */}
      {moreBtnState ? (
        shelvesDataloop(extraShelvesObj, data, category)
      ) : (
        <BigMoreBtn onClick={() => dispatch(hideWatchesMoreBtn())} />
      )}
    </>
  );
}
