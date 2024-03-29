import "./Accessories.css";
import { useState, useEffect } from "react";
import { BigMoreBtn } from "../../Components";
// // My utils function
import { shelvesDataloop } from "../../Utils";
// Redux toolkit
import { fetchProducts } from "../../rtk/slices/products-slice";
import { useSelector, useDispatch } from "react-redux";
import { hideAccessoriesMoreBtn, selectAccessoriesBtn } from "../../rtk/slices/bigMoreBtn-slice";

export default function Accessories() {
  // fetch Data from Redux
  const dispatch = useDispatch();
  const category = "accessories"
  useEffect(() => {
    // Check if specific data for this category page exist (object key ex: home, phone..) in Redux data, if not exist fetch
    if (!(category in data.entities)) {
      dispatch(fetchProducts(category));
    }
  }, []);
  const data = useSelector((data) => data.products);

  // show/hide Big more Button & add Extra Component
  const moreBtnState = useSelector(selectAccessoriesBtn);

  // shelves data
  const [shelvesObj, setShelvesObj] = useState({
    tools: {
      href: "https://www.google.com/",
      title: "Tools",
      dataName: "tools",
      extraPath: "",
    },
  });

  // shelves data that appear after click 'More' button
  const [extraShelvesObj, setExtraShelvesObj] = useState({
    apple: {
      href: "https://www.google.com/",
      title: "Apple",
      dataName: "apple",
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
        <BigMoreBtn onClick={() => dispatch(hideAccessoriesMoreBtn())} />
      )}
    </>
  );
}
