import React, { useState } from "react"
import "./AddProduct.css"
import upload_image from "../../assets/upload_area.svg"
const AddProduct = () => {



  const [image, setImage] = useState(false);

  const imageHandler = (e) => {
    console.log(e);
    setImage(e.target.files[0])
  }

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "UpComing_Event",
    old_price: "",
    new_price: "",
    details: "",
    date: "",
    location: ""
  })

  const changeHandler = (e) => {

    setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
  }

  const AddProduct = async () => {
    console.log(productDetails);

    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:3000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    }).then((resp) => resp.json()).then((data) => { responseData = data });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);

      await fetch("http://localhost:3000/addProduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      }).then((resp) => resp.json()).then((data) => {
        data.success ? alert("Product Added") : alert("Failed")
      })
    }

  }

  return (
    <>
      <div className="add-product-container pt-5 pb-2 ps-3 pe-3">
        <div className="container addProductMain pt-3 ps-3 pe-3  pb-3">

          <div className="row">
            <div className="col-12 text-center fw-bold"><h2 className="fw-bold pt-3 pb-2"> Add Events</h2></div>
          </div>

          <div className="row mt-3 ">
            <div className="col-12">
              <label htmlFor="name" >Event Titel</label><br />
              <input type="text" placeholder="Type here" name="name" id="name" value={productDetails.name}
                onChange={changeHandler}></input>
            </div>
          </div>

          <div className="row mt-3 " >
            <div className="col-12 col-sm-6" style={{ width: "50%" }}>
              <label htmlFor="details" >Event Details</label><br />
              <textarea type="text" placeholder="Type here" name="details" id="details" value={productDetails.details}
                onChange={changeHandler}></textarea>
            </div>
            <div className="col-12 col-sm-6">
              <label htmlFor="details" >Event Date</label><br />
              <input type="date" placeholder="Type here" name="date" id="date" value={productDetails.date}
                onChange={changeHandler}></input>
            </div>
          </div>

          <div className="row mt-3 d-flex justify-content-between">
            <div className="col-6">
              <label htmlFor="old_price">Price</label>
              <input text="Number" placeholder="Type here" name="old_price" value={productDetails.old_price} onChange={changeHandler}></input>
            </div>
            <div className="col-6">
              <label htmlFor="old_price">Offer Price</label>
              <input text="Number" placeholder="Type here" name="new_price" value={productDetails.new_price} onChange={changeHandler}></input>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 col-sm-6 col-md-6">
              <label htmlFor="category">Event Category</label>
              <select name="category" value={productDetails.category} onChange={changeHandler}>
                <option value="UpComing_Event">UpComing-Event</option>
                <option value="NextMonth_Event">NextMonth-Event</option>
              </select>
            </div>
            <div className="col-12 col-sm-6">
              <label htmlFor="location" >Event Location</label><br />
              <input type="text" placeholder="Type here" name="location" id="location" value={productDetails.location}
                onChange={changeHandler}></input>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-6 col-md-4">
              <label htmlFor="file-input">
                <img src={image ? URL.createObjectURL(image) : upload_image} className="addproduct-thumnail-img img-fluid overflow-hidden" height="150px" width="150px" />
              </label>

              <input type="file" name="image" id="file-input" onChange={imageHandler} hidden />

            </div>
          </div>

          <div className="row mt-3">
            <div className="col-2">
              <button type="submit" className="btn addbtn" onClick={() => AddProduct()}>ADD</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default AddProduct