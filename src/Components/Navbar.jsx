import React from "react";
import "./Navbar.css";
// import searchlogo from "./Asset/";

const Navbar = () => {
  return (
    <div className="outer-div">
      <div className="inner-left">
        <div className="leftfirst">
          <img src="https://www.greenhouse.io/assets/svg/logo.svg" alt="" />
        </div>
        <div className="leftsecond">
          <h5>Products&Solution</h5>
        </div>
        <div className="leftthird">
          <h5>Resources</h5>
        </div>
        <div className="leftfourth">
          <h5>About us</h5>
        </div>
        <div className="leftfifth">
          <h5>Community</h5>
        </div>
      </div>
      <div className="inner-right">
        <div className="rightfirst"> </div>
        <div className="rightsecond">
          <button className="nav-btn-1"><h5>Sigin</h5></button>
          <button className="nav-btn-2"><h5>Request a demo</h5></button>
          <img className="search-logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdCAMAAADwr5rxAAAAYFBMVEX///8AAADi4uLn5+fDw8P7+/vd3d1JSUlQUFD4+Ph0dHSoqKikpKSenp4pKSnS0tJfX1/t7e1ZWVm6urp/f38wMDCurq5lZWUgICCHh4eUlJSOjo4KCgo7OzsVFRXLy8t+DcqVAAABKElEQVRoge2WyXKDMBBENWK1sB2EMZjEDv//lx7ASQjiRDU5pPqdYA6vmhktGEMIIYQQQgj5dxzik2vr4m0Pd+Tkxe0Il59kxhmcvxykXRz5tBkfL2j5+9eLrbD6oS3zZnT6HqHk0UJuTC2So+xu1pYXZ5EUI080+rJ2EXEYe6+rJSiKXBOI/SgSB8UWNVcdoV0rYhrv1mJ+LJfRVlZFbu2DttCIFEExk7uH2FORbFnzK7WNXMMJ6lBR53ATBNXPkQPIbh6LnenvuOhTVPezNVOVSwuzm1h1n83Ui6ieLiigvh+Flavd4/v+K3F6X87u1aJCpze2G2Pf8kYnkKPTK95aOzU/yeDpfzGlD48IEGN60AUVkgzp+73s+iPidpQTQgghhBBC/pwnQwsIQd8Sf4UAAAAASUVORK5CYII="
            alt="Search"
          />
        </div>
        <div className="rightthird"></div>
      </div>
    </div>
  );
};

export default Navbar;
